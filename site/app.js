const SUPABASE_URL = "https://zhjasralevblmvqthqln.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoamFzcmFsZXZibG12cXRocWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NDM1MjQsImV4cCI6MjEwNTMxOTUyNH0.OcrncbhHVr1VLxrh5Y4wh1PhsfATdMWzyG9KCbutrwc";
const SHEET_ID = "1aNXv7zzY3G4YqqRhInpfIN9ei4skCf2iGYCG9oYyQ1o";

const STAT_NAMES = ["ATK","MATK","ATK%","MATK%","HP","HP%","CR","CDMG","DEF","MRES"];
const ALL_STATS = STAT_NAMES.concat(["ELE%"]);
const PERCENT_STATS = new Set(["ATK%","MATK%","HP%","CR","CDMG","DEF","MRES","ELE%"]);
const SLOT_OPTIONS = {
  Weapon:{physical:["ATK","ATK%","CDMG"],magic:["MATK","MATK%","CDMG"]},
  Body:{physical:["DEF","HP","HP%"],magic:["MRES","HP","HP%"]},
  Head:{physical:["DEF","HP","HP%"],magic:["MRES","HP","HP%"]},
  Accessory:{physical:["CDMG","HP","HP%"],magic:["CDMG","HP","HP%"]},
  Gloves:{physical:["ATK","ATK%","CR"],magic:["MATK","MATK%","CR"]}
};
const SUB_OPTIONS = ["ATK","MATK","ATK%","MATK%","HP","HP%","CR","CDMG","DEF","MRES"];
const DEFAULT_GEAR = {
  Weapon:{tier:"EX UR",main1:"ATK",main2:"CDMG",subs:["ATK%","ATK%","ATK%"],ref:["B","B","S"]},
  Body:{tier:"UR4",main1:"DEF",main2:"HP%",subs:["CDMG","CDMG","CDMG"],ref:["B","B","S"]},
  Head:{tier:"UR4",main1:"DEF",main2:"DEF",subs:["CDMG","CDMG","CDMG"],ref:["B","B","S"]},
  Accessory:{tier:"UR4",main1:"CDMG",main2:"CDMG",subs:["CDMG","CDMG","CDMG"],ref:["B","B","S"]},
  Gloves:{tier:"UR4",main1:"ATK%",main2:"ATK",subs:["CDMG","CDMG","CDMG"],ref:["B","B","S"]}
};
const REFINE_FACTOR = {C:2.4,B:2.8,A:3.2,S:3.52};
const MAX_LEVEL = {3:40,4:60,5:80};

const $ = function(s){return document.querySelector(s);};
const fmt = function(n){return Math.round(Number(n)||0).toLocaleString();};
const pct = function(n){return (((Number(n)||0)*100).toFixed(2))+"%";};
const clone = function(x){return JSON.parse(JSON.stringify(x));};
const slug = function(s){return String(s||"").normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");};

let characters=[];
let costumes=[];
let costumeVariables=[];
let costumePotentials=[];
let costumeBursts=[];
let engravingSteps={};
let awakeningValues={};
let potentialValues={};
let gearCatalog=[];
let gearTables={main:{},sub:{},refine:{}};
let gearState=clone(DEFAULT_GEAR);
let catalogSource="";

async function sb(table,query){
  const res=await fetch(SUPABASE_URL+"/rest/v1/"+table+"?"+query,{
    headers:{apikey:SUPABASE_KEY,Authorization:"Bearer "+SUPABASE_KEY}
  });
  if(!res.ok)throw new Error(table+" "+res.status);
  return res.json();
}
async function sbPaged(table,query){
  const rows=[];
  const size=1000;
  for(let start=0;;start+=size){
    const sep=query.includes("?")?"&":"&";
    const url=SUPABASE_URL+"/rest/v1/"+table+"?"+query+sep+"limit="+size+"&offset="+start;
    const res=await fetch(url,{
      headers:{
        apikey:SUPABASE_KEY,
        Authorization:"Bearer "+SUPABASE_KEY
      }
    });
    if(!res.ok)throw new Error(table+" "+res.status);
    const page=await res.json();
    rows.push.apply(rows,page);
    if(page.length<size)break;
  }
  const seen=new Set();
  return rows.filter(function(row){
    const key=row.variant_id||JSON.stringify(row);
    if(seen.has(key))return false;
    seen.add(key);
    return true;
  });
}
function toLegacyChar(r){
  return {
    __id:r.id,Name:r.name,RARITY:r.rarity,ELE:r.element,RES:r.resistance,
    ATK0:Number(r.atk0)||0,ATK:Number(r.atk_max)||0,MATK0:Number(r.matk0)||0,MATK:Number(r.matk_max)||0,
    HP0:Number(r.hp0)||0,HP:Number(r.hp_max)||0,CR:Number(r.crit_rate)||0,CDMG:Number(r.crit_dmg)||0,
    DEF:Number(r.defense)||0,MRES:Number(r.magic_resist)||0,TARGET:r.target,
    EXSLOT:r.exclusive_slot,EXNAME:r.exclusive_name,EXSTAT:r.exclusive_stat,
    "EX R":r.exclusive_r,"EX SR":r.exclusive_sr,"EX UR":r.exclusive_ur,
    ENG_LIFE:r.engraving_life_stat,ENG_STR:r.engraving_strength_stat,ENG_PSV:r.engraving_perseverance_stat,
    AWA1:r.awakening_1_stat,AWA2:r.awakening_2_stat
  };
}
async function loadSupabase(){
  // Critical catalog data must load. Optional progression tables may be empty or
  // temporarily unavailable without forcing the whole app back to Google Sheets.
  const critical=await Promise.all([
    sb("characters","select=*&order=name.asc"),
    sb("costumes","select=*&order=character_id.asc,name.asc"),
    sb("gear_tiers","select=*")
  ]);
  const optional=await Promise.all([
    sb("costume_skill_variables","select=*&order=costume_id.asc,variable_index.asc").catch(function(){return [];}),
    sb("costume_potentials","select=*").catch(function(){return [];}),
    sb("costume_bursts","select=*&order=costume_id.asc,stage.asc").catch(function(){return [];}),
    sb("engraving_steps","select=*&order=stat.asc,step.asc").catch(function(){return [];}),
    sb("awakening_values","select=*").catch(function(){return [];}),
    sb("potential_values","select=*").catch(function(){return [];}),
    sbPaged("gear_catalog","select=variant_id,weapon_id,name_en,character_id,category,tier,slot,extra_ability,first_ability,second_ability&order=variant_id.asc").catch(function(err){console.error("gear_catalog load failed",err);return [];})
  ]);
  characters=critical[0].map(toLegacyChar);
  costumes=critical[1];
  costumeVariables=optional[0];
  costumePotentials=optional[1];
  costumeBursts=optional[2];
  gearTables={main:{},sub:{},refine:{}};
  critical[2].forEach(function(r){
    if(!gearTables[r.section][r.tier])gearTables[r.section][r.tier]={};
    gearTables[r.section][r.tier][r.stat]=Number(r.value)||0;
  });
  engravingSteps={};
  optional[3].forEach(function(r){
    if(!engravingSteps[r.stat])engravingSteps[r.stat]={};
    engravingSteps[r.stat][r.step]=Number(r.value)||0;
  });
  awakeningValues={};
  optional[4].forEach(function(r){awakeningValues[r.stat]=Number(r.value)||0;});
  potentialValues={};
  optional[5].forEach(function(r){
    potentialValues[[r.rarity,r.kind,r.stat].join("|")]=Number(r.value)||0;
  });
  gearCatalog=optional[6]||[];
  if(!characters.length||!costumes.length||!Object.keys(gearTables.main).length){
    throw new Error("Supabase critical catalog empty");
  }
  catalogSource="Supabase";
}
function gvizRaw(sheet){
  return new Promise(function(resolve,reject){
    const cb="__gviz_"+Math.random().toString(36).slice(2);
    const script=document.createElement("script");
    const tqx="out:json;responseHandler:"+cb;
    script.src="https://docs.google.com/spreadsheets/d/"+SHEET_ID+"/gviz/tq?sheet="+encodeURIComponent(sheet)+"&headers=0&tqx="+encodeURIComponent(tqx);
    const timer=setTimeout(function(){cleanup();reject(new Error("timeout"));},9000);
    function cleanup(){clearTimeout(timer);delete window[cb];script.remove();}
    window[cb]=function(res){
      cleanup();
      if(res.status==="error")return reject(new Error("sheet query failed"));
      resolve(res.table.rows.map(function(r){return r.c.map(function(c){return c&&c.v!=null?c.v:"";});}));
    };
    script.onerror=function(){cleanup();reject(new Error("network"));};
    document.head.appendChild(script);
  });
}
function parseBase(rows){
  const idx=rows.findIndex(function(r){return String(r[0]).trim()==="Name";});
  if(idx<0)throw new Error("base header missing");
  const h=rows[idx].map(function(x){return String(x).trim();});
  return rows.slice(idx+1).filter(function(r){return r[0];}).map(function(r){
    const o={};h.forEach(function(k,i){o[k]=r[i];});o.__id=slug(o.Name);return o;
  });
}
function parseGear(rows){
  let section=null,header=null;
  rows.forEach(function(r){
    const first=String(r[0]||"").trim();
    if(first==="Main Stats"){section="main";header=null;return;}
    if(first==="Sub Stats"){section="sub";header=null;return;}
    if(first==="Refinements"){section="refine";header=null;return;}
    if(first==="Tier"){header=r.map(function(x){return String(x).trim();});return;}
    if(section&&header&&first&&first!=="NULL"){
      const obj={};
      header.slice(1).forEach(function(stat,i){if(stat)obj[stat]=Number(r[i+1])||0;});
      gearTables[section][first]=obj;
    }
  });
}
async function loadSheetFallback(){
  gearTables={main:{},sub:{},refine:{}};
  const data=await Promise.all([
    gvizRaw("Base Stats"),
    gvizRaw("Gear Stats"),
    gvizRaw("Skills").catch(function(){return [];})
  ]);
  characters=parseBase(data[0]);
  parseGear(data[1]);

  // Keep the calculator usable even if Supabase cannot be reached from the browser.
  // The hidden Skills sheet contains all ordinary costume rows and their displayed
  // skill metadata. Basic Attack remains a universal synthetic calculation mode.
  costumes=[];
  (data[2]||[]).forEach(function(r){
    const label=String(r[1]||"").trim();
    if(!label||label.indexOf(" // ")<0)return;
    const parts=label.split(" // ");
    const characterName=parts.shift();
    const costumeName=parts.join(" // ");
    if(!costumeName||costumeName==="Basic Attack")return;
    const characterId=slug(characterName);
    if(!characters.some(function(c){return c.__id===characterId;}))return;
    const id=characterId+"--"+slug(costumeName);
    if(costumes.some(function(x){return x.id===id;}))return;
    costumes.push({
      id:id,
      character_id:characterId,
      name:costumeName,
      skill_name:String(r[3]||costumeName),
      target:String(r[6]||""),
      skill_description:String(r[7]||""),
      base_sp:Number(r[8])||0,
      base_cooldown:Number(r[9])||0,
      total_damage_label:String(r[10]||""),
      is_basic_attack:false,
      source:"google_sheet_fallback"
    });
  });
  costumeVariables=[];costumePotentials=[];costumeBursts=[];gearCatalog=[];
  catalogSource=costumes.length?"Google Sheet fallback · costume catalog loaded":"Google Sheet fallback";
}
async function loadData(){
  try{await loadSupabase();}
  catch(err){
    try{await loadSheetFallback();}
    catch(err2){
      characters=[{__id:"tyr",Name:"Tyr",RARITY:5,ELE:"Wind",RES:"Water",ATK0:36,ATK:396,MATK0:0,MATK:0,HP0:75,HP:1575,CR:.1,CDMG:.5,DEF:0,MRES:0,TARGET:"Very Front",EXSLOT:"Weapon",EXNAME:"Brionac",EXSTAT:"CDMG","EX R":null,"EX SR":.63,"EX UR":.9,ENG_LIFE:"HP",ENG_STR:"ATK",ENG_PSV:"DEF",AWA1:"ATK%",AWA2:"ELE%"}];
      catalogSource="Emergency fallback";
    }
  }
  setup();
}

function setup(){
  const options=characters.map(function(c){return "<option value=\""+c.__id+"\">"+c.Name+"</option>";}).join("");
  $("#character").innerHTML=options;
  const start=characters.some(function(c){return c.Name==="Tyr";})?"tyr":characters[0].__id;
  $("#character").value=start;
  fillProgressionSelects();
  buildGearUI();
  wire();
  updateLevelOptions();
  updateCostumeOptions();
  render();
  const actualCostumeCount=costumes.filter(function(x){return !x.is_basic_attack;}).length;
  const gearCount=new Set(gearCatalog.map(function(x){return x.weapon_id;})).size;
  $("#dataStatus").textContent=catalogSource+" · "+characters.length+" characters · "+actualCostumeCount+" costumes + Basic Attack"+(gearCount?" · "+gearCount+" gears":" · gear catalog unavailable");
  updateCatalogCount();
}
function fillProgressionSelects(){
  ["engraveLife","engraveStrength","engravePerseverance"].forEach(function(id){
    const el=$("#"+id);if(!el)return;
    el.innerHTML="";
    for(let i=0;i<=10;i++){const o=document.createElement("option");o.value=i;o.textContent=i===10?"10 · MAX":String(i);el.appendChild(o);}
    el.value="10";
  });
}
function attackType(c){return Number(c.ATK)>0?"physical":"magic";}
function getChar(){return characters.find(function(c){return c.__id===$("#character").value;})||characters[0];}
function isBasicAttack(){return $("#costume")&&$("#costume").value==="__basic__";}
function getCostume(){
  if(isBasicAttack()){
    const c=getChar();
    return {id:"__basic__",character_id:c.__id,name:"Basic Attack",skill_name:"Basic Attack",target:c.TARGET||"Very Front",is_basic_attack:true};
  }
  return costumes.find(function(c){return c.id===$("#costume").value;})||null;
}
function updateCatalogCount(){
  const c=getChar();
  const n=costumes.filter(function(x){return x.character_id===c.__id&&!x.is_basic_attack;}).length;
  if($("#catalogCount"))$("#catalogCount").textContent=n+" costume"+(n===1?"":"s")+" + Basic";
}
function tierOptions(){return Object.keys(gearTables.main).filter(function(x){return x&&x!=="NULL";}).map(function(x){return "<option>"+x+"</option>";}).join("");}
function selectOptions(items,current){return items.map(function(x){return "<option "+(x===current?"selected":"")+">"+x+"</option>";}).join("");}

function normalizeGearStat(stat){
  return stat==="MDEF"?"MRES":stat;
}
function abilityTokens(text){
  const out=[];
  const re=/\{([^}]+)\}/g;
  let m;
  while((m=re.exec(String(text||"")))){
    const stat=normalizeGearStat(m[1]);
    if(ALL_STATS.includes(stat)&&!out.includes(stat))out.push(stat);
  }
  return out;
}
function compactName(v){return slug(v).replace(/-/g,"");}
function catalogMatchesCharacter(row,c){
  if(row.category!=="Exclusive")return true;
  const owner=compactName(row.character_id||"");
  if(owner&&owner===compactName(c.__id))return true;
  if(owner&&owner===compactName(c.Name))return true;
  if(row.name_en&&c.EXNAME&&compactName(row.name_en)===compactName(c.EXNAME))return true;
  return false;
}
function catalogRowsForSlot(slot){
  const c=getChar();
  const rows=gearCatalog.filter(function(r){
    return r.slot===slot && !!gearTables.main[r.tier] && catalogMatchesCharacter(r,c);
  });
  const priority={Exclusive:0,Monster:1,UR:2,SR:3,R:4,N:5};
  rows.sort(function(a,b){
    const pa=priority[a.category]??9,pb=priority[b.category]??9;
    if(pa!==pb)return pa-pb;
    if(a.name_en!==b.name_en)return String(a.name_en||"").localeCompare(String(b.name_en||""));
    return String(b.tier).localeCompare(String(a.tier));
  });
  return rows;
}
function gearCatalogOptions(slot,current){
  const rows=catalogRowsForSlot(slot);
  return '<option value="">Manual / Custom</option>'+rows.map(function(r){
    const label=(r.name_en||r.weapon_id)+" · "+r.tier+(r.category==="Exclusive"?" · EX":r.category==="Monster"?" · Fiend":"");
    return '<option value="'+r.variant_id+'" '+(current===r.variant_id?"selected":"")+'>'+label+"</option>";
  }).join("");
}
function getCatalogGear(id){return gearCatalog.find(function(r){return r.variant_id===id;})||null;}
function applyCatalogGear(slot,id){
  const g=gearState[slot];
  g.catalogId=id||"";
  const item=getCatalogGear(id);
  if(!item)return;
  g.tier=item.tier;
  const a=abilityTokens(item.first_ability),b=abilityTokens(item.second_ability);
  if(a.length)g.main1=a[0];
  if(b.length)g.main2=b[0];
}
function buildGearUI(){
  const grid=$("#gearGrid");
  grid.innerHTML='<div class="gearLabels"><div>Gear</div><div>Tier</div><div>Refinement</div><div>Exclusive</div><div>Basic 1</div><div>Basic 2</div><div>Substat 1</div><div>Substat 2</div><div>Substat 3</div><div>Gear Slot</div></div>';
  Object.keys(DEFAULT_GEAR).forEach(function(slot){
    const g=gearState[slot],col=document.createElement("article");
    col.className="gearCard";col.dataset.slot=slot;
    let refs="";
    [0,1,2].forEach(function(i){refs+='<select data-ref="'+i+'">'+selectOptions(["C","B","A","S"],g.ref[i])+"</select>";});
    let subs="";
    [0,1,2].forEach(function(i){
      subs+='<div class="gearCell gearStatCell gearSub"><select data-sub="'+i+'">'+selectOptions(SUB_OPTIONS,g.subs[i])+'</select><b class="gearStatValue" data-value="sub'+i+'">—</b></div>';
    });
    col.innerHTML=
      '<div class="gearCell gearName"><select data-gear aria-label="'+slot+' gear">'+gearCatalogOptions(slot,g.catalogId||"")+"</select></div>"+
      '<div class="gearCell gearTier"><select data-k="tier">'+tierOptions()+"</select></div>"+
      '<div class="gearCell"><div class="refineGroup">'+refs+"</div></div>"+
      '<div class="gearCell"><div class="exclusiveValue"><span>-</span><b>-</b></div></div>'+
      '<div class="gearCell gearStatCell gearBasic"><select data-k="main1"></select><b class="gearStatValue" data-value="main1">—</b></div>'+
      '<div class="gearCell gearStatCell gearBasic"><select data-k="main2"></select><b class="gearStatValue" data-value="main2">—</b></div>'+
      subs+
      '<div class="gearCell gearSlotName"><span>'+slot+'</span><small class="exMark"></small></div><div class="gearPreview"></div>';
    grid.appendChild(col);
    const tier=col.querySelector('[data-k="tier"]');
    if(Array.from(tier.options).some(function(o){return o.value===g.tier;}))tier.value=g.tier;
  });
  refreshMainOptions();
}
function refreshMainOptions(){
  const c=getChar(),type=attackType(c);
  document.querySelectorAll(".gearCard").forEach(function(card){
    const slot=card.dataset.slot,g=gearState[slot],item=getCatalogGear(g.catalogId);
    const manual=SLOT_OPTIONS[slot][type];
    const optionMap={
      main1:item?abilityTokens(item.first_ability):manual,
      main2:item?abilityTokens(item.second_ability):manual
    };
    ["main1","main2"].forEach(function(k){
      const el=card.querySelector('[data-k="'+k+'"]');
      let opts=optionMap[k];
      if(!opts.length)opts=manual;
      let desired=g[k];
      if(!opts.includes(desired)&&!item){
        desired=type==="magic"?desired.replace("ATK","MATK"):desired.replace("MATK","ATK");
      }
      if(!opts.includes(desired))desired=opts[0];
      g[k]=desired;el.innerHTML=selectOptions(opts,desired);
    });
    const gearSelect=card.querySelector("[data-gear]");
    if(gearSelect){
      gearSelect.innerHTML=gearCatalogOptions(slot,g.catalogId||"");
      gearSelect.value=g.catalogId||"";
    }
  });
}
function updateLevelOptions(){
  const c=getChar(),max=MAX_LEVEL[Number(c.RARITY)]||80,el=$("#level"),prev=el.value;
  const opts=[20,40,60,80].filter(function(x){return x<=max;});
  el.innerHTML=opts.map(function(x){return '<option value="'+x+'">'+x+"</option>";}).join("")+'<option value="MAX">MAX</option>';
  el.value=prev&&Array.from(el.options).some(function(o){return o.value===prev;})?prev:"MAX";
}
function updateCostumeOptions(){
  const c=getChar(),el=$("#costume"),prev=el.value;
  const rows=costumes.filter(function(x){return x.character_id===c.__id&&!x.is_basic_attack;});
  el.innerHTML='<option value="__basic__">Basic Attack</option>'+rows.map(function(x){return '<option value="'+x.id+'">'+x.name+"</option>";}).join("");
  if(prev==="__basic__")el.value="__basic__";
  else if(prev&&rows.some(function(x){return x.id===prev;}))el.value=prev;
  else{
    const preferred=rows.find(function(x){return c.Name==="Tyr"&&x.name==="Innocent Bunny";});
    el.value=preferred?preferred.id:"__basic__";
  }
  updateCatalogCount();
  syncCalculationMode();
  updateBurstOptions();
}
function syncCalculationMode(){
  const basic=isBasicAttack();
  $("#dupe").disabled=basic;
  if(basic){
    $("#dupe").value="0";
    $("#skillMult").value="100";
    $("#hits").value="1";
  }
}
function updateBurstOptions(){
  const costume=getCostume(),el=$("#burst");
  const rows=(!costume||costume.is_basic_attack)?[]:costumeBursts.filter(function(x){return x.costume_id===costume.id;});
  el.innerHTML='<option value="0">None</option>'+rows.map(function(x){return '<option value="'+x.stage+'">Burst '+x.stage+"</option>";}).join("");
  el.disabled=!rows.length;
  if(!rows.length)el.value="0";
}
function resetBuild(){
  gearState=clone(DEFAULT_GEAR);buildGearUI();
  const defaults={collectionAtk:80,collectionHp:80,externalAtk:0,externalCr:0,externalCdmg:0,externalEle:0,skillMult:100,hits:1,chains:0,chainBuff:0,enemyRes:0,dmgMult:1,enemyHp:30000,enemyAtk:1000};
  Object.keys(defaults).forEach(function(id){const el=$("#"+id);if(el)el.value=defaults[id];});
  ["engraveLife","engraveStrength","engravePerseverance"].forEach(function(id){if($("#"+id))$("#"+id).value="10";});
  ["awakening","potPermanent","potMinor1","potMinor2","potMajor1","potMajor2"].forEach(function(id){if($("#"+id))$("#"+id).checked=true;});
  $("#dupe").value="5";$("#advantage").checked=true;$("#critical").checked=true;$("#expectedCrit").checked=false;
  updateLevelOptions();updateCostumeOptions();render();
}
function wire(){
  function handleControlChange(e){
    const card=e.target.closest(".gearCard");
    if(card){
      const slot=card.dataset.slot,g=gearState[slot];
      if(e.target.dataset.gear!==undefined){
        applyCatalogGear(slot,e.target.value);
        buildGearUI();render();return;
      }
      if(e.target.dataset.k){
        g[e.target.dataset.k]=e.target.value;
        if(e.target.dataset.k==="tier")g.catalogId="";
        refreshMainOptions();
      }
      if(e.target.dataset.sub!=null)g.subs[+e.target.dataset.sub]=e.target.value;
      if(e.target.dataset.ref!=null)g.ref[+e.target.dataset.ref]=e.target.value;
      render();return;
    }
    if(e.target.id==="character"){
      updateLevelOptions();refreshMainOptions();updateCostumeOptions();buildGearUI();render();return;
    }
    if(e.target.id==="costume"){syncCalculationMode();updateBurstOptions();render();return;}
    render();
  }
  document.addEventListener("input",handleControlChange);
  document.addEventListener("change",handleControlChange);
  $("#resetBtn").onclick=resetBuild;$("#resetBtnMirror").onclick=resetBuild;
  document.querySelectorAll(".themeDock button").forEach(function(b){
    b.onclick=function(){document.documentElement.dataset.theme=b.dataset.theme;document.querySelectorAll(".themeDock button").forEach(function(x){x.classList.toggle("active",x===b);});};
  });
}

function addStat(obj,k,v){if(k)obj[k]=(obj[k]||0)+(Number(v)||0);}
function exValueFor(c,tier,slot,g){
  if(!String(tier).startsWith("EX"))return null;
  const named=g&&g.catalogId?getCatalogGear(g.catalogId):null;

  // For named BD2DB exclusive gear, the catalog is the authority for the
  // exclusive stat type and slot. The copied calculator remains the authority
  // for the character's exact EX R / SR / UR numeric value.
  if(named){
    if(named.category!=="Exclusive"||!catalogMatchesCharacter(named,c))return null;
    const stats=abilityTokens(named.extra_ability);
    const stat=stats[0]||c.EXSTAT;
    if(!stat)return null;
    const key=tier==="EX UR"?"EX UR":tier==="EX SR"?"EX SR":"EX R";
    const raw=c[key];
    if(raw==="-"||raw===""||raw==null)return null;
    return {
      stat:stat,
      value:Number(raw)||0,
      name:named.name_en||c.EXNAME||"Exclusive Gear",
      source:"BD2DB"
    };
  }

  // Manual EX mode mirrors the spreadsheet: an EX tier in the character's
  // exclusive slot automatically receives that character's exclusive bonus.
  if(c.EXSLOT!==slot||!c.EXSTAT)return null;
  const key=tier==="EX UR"?"EX UR":tier==="EX SR"?"EX SR":"EX R",raw=c[key];
  if(raw==="-"||raw===""||raw==null)return null;
  return {
    stat:c.EXSTAT,
    value:Number(raw)||0,
    name:c.EXNAME||"Exclusive Gear",
    source:"Sheet"
  };
}
function mainGearValue(g,stat){
  const m=gearTables.main[g.tier]||{},ref=gearTables.refine[g.tier]||{};
  const factor=g.ref.reduce(function(a,x){return a+(REFINE_FACTOR[x]||0);},0);
  return 2*(m[stat]||0)+(ref[stat]||0)*factor;
}
function subGearValue(g,stat){return (gearTables.sub[g.tier]||{})[stat]||0;}
function gearStats(c){
  const total={};ALL_STATS.forEach(function(s){total[s]=0;});
  const previews={};
  Object.keys(gearState).forEach(function(slot){
    const g=gearState[slot],piece={};
    [g.main1,g.main2].forEach(function(stat){const v=mainGearValue(g,stat);addStat(total,stat,v);addStat(piece,stat,v);});
    g.subs.forEach(function(stat){const v=subGearValue(g,stat);addStat(total,stat,v);addStat(piece,stat,v);});
    const ex=exValueFor(c,g.tier,slot,g);if(ex){addStat(total,ex.stat,ex.value);addStat(piece,ex.stat,ex.value);}
    previews[slot]=piece;
  });
  return {total:total,previews:previews};
}
function progressionStatValue(stat,step){return engravingSteps[stat]&&engravingSteps[stat][step]!=null?engravingSteps[stat][step]:0;}
function potValue(rarity,kind,stat){return potentialValues[[rarity,kind,stat].join("|")]||0;}
function progressionStats(c){
  const out={};ALL_STATS.forEach(function(s){out[s]=0;});
  const pairs=[
    [c.ENG_LIFE,Number($("#engraveLife").value)||0],
    [c.ENG_STR,Number($("#engraveStrength").value)||0],
    [c.ENG_PSV,Number($("#engravePerseverance").value)||0]
  ];
  pairs.forEach(function(x){if(x[0])addStat(out,x[0],progressionStatValue(x[0],x[1]));});
  if($("#awakening").checked){
    if(c.AWA1)addStat(out,c.AWA1,awakeningValues[c.AWA1]||0);
    if(c.AWA2)addStat(out,c.AWA2,awakeningValues[c.AWA2]||0);
  }
  const costume=getCostume(),p=costume?costumePotentials.find(function(x){return x.costume_id===costume.id;}):null;
  if(p){
    const rarity=Number(c.RARITY)||5;
    if($("#potPermanent").checked&&p.permanent_stat)addStat(out,p.permanent_stat,potValue(rarity,"permanent",p.permanent_stat));
    if($("#potMinor1").checked&&p.minor_1_stat)addStat(out,p.minor_1_stat,potValue(rarity,"minor_bond",p.minor_1_stat));
    if($("#potMinor2").checked&&p.minor_2_stat)addStat(out,p.minor_2_stat,potValue(rarity,"minor_bond",p.minor_2_stat));
    if($("#potMajor1").checked&&p.major_1_stat)addStat(out,p.major_1_stat,potValue(rarity,"major_bond",p.major_1_stat));
    if($("#potMajor2").checked&&p.major_2_stat)addStat(out,p.major_2_stat,potValue(rarity,"major_bond",p.major_2_stat));
  }
  return out;
}
function baseAtLevel(c,stat){
  const level=$("#level").value;if(level==="MAX")return Number(c[stat])||0;
  const lv=Number(level)||0;
  if(stat==="HP")return (Number(c.HP0)||0)*(1+lv/5);
  if(stat==="ATK")return (Number(c.ATK0)||0)*(1+lv/10);
  if(stat==="MATK")return (Number(c.MATK0)||0)*(1+lv/10);
  return Number(c[stat])||0;
}
function combineStats(a,b){
  const out={};ALL_STATS.forEach(function(s){out[s]=(a[s]||0)+(b[s]||0);});return out;
}
function compute(){
  const c=getChar(),gear=gearStats(c),prog=progressionStats(c),t=combineStats(gear.total,prog);
  const atkKey=attackType(c)==="physical"?"ATK":"MATK",atkPct=atkKey+"%";
  const collectionAtk=+$("#collectionAtk").value/100,collectionHp=+$("#collectionHp").value/100;
  const extAtk=+$("#externalAtk").value/100,extCr=+$("#externalCr").value/100,extCdmg=+$("#externalCdmg").value/100,extEle=+$("#externalEle").value/100;
  const atk=Math.floor((baseAtLevel(c,atkKey)+(t[atkKey]||0))*(1+collectionAtk+extAtk+(t[atkPct]||0)));
  const hp=Math.floor((baseAtLevel(c,"HP")+(t.HP||0))*(1+collectionHp+(t["HP%"]||0)));
  const cr=(Number(c.CR)||0)+(t.CR||0)+extCr;
  const cdmg=(Number(c.CDMG)||0)+(t.CDMG||0)+extCdmg;
  const def=(Number(c.DEF)||0)+(t.DEF||0),mres=(Number(c.MRES)||0)+(t.MRES||0);
  const property=.5+(t["ELE%"]||0)+extEle;
  const skill=+$("#skillMult").value/100,hits=Math.max(1,+$("#hits").value||1),initial=Math.max(0,+$("#chains").value||0);
  const enemy=Math.min(.9,Math.max(-1,+$("#enemyRes").value/100||0)),dmgMult=Math.max(0,+$("#dmgMult").value||0);
  let critFactor=1;if($("#expectedCrit").checked)critFactor=1+Math.min(1,Math.max(0,cr))*cdmg;else if($("#critical").checked)critFactor=1+cdmg;
  const advantageBonus=$("#advantage").checked?property:0;
  const baseHit=atk*skill*critFactor*(1+advantageBonus)*(1-enemy)*dmgMult;
  const chainStep=.10+(+$("#chainBuff").value/100||0);
  let damage=0;for(let i=0;i<hits;i++)damage+=baseHit*(1+(initial+i)*chainStep);
  return {c:c,t:t,gearOnly:gear.total,progression:prog,atkKey:atkKey,atk:atk,hp:hp,cr:cr,cdmg:cdmg,def:def,mres:mres,property:property,hits:hits,enemy:enemy,baseHit:baseHit,damage:damage,gear:gear};
}
function displayStat(k,v){return PERCENT_STATS.has(k)?pct(v):fmt(v);}
function currentDupeValue(obj,dupe){
  if(!obj||typeof obj!=="object")return null;
  return obj[String(dupe)]!=null?obj[String(dupe)]:obj[dupe]!=null?obj[dupe]:null;
}
function updateCostumePanel(r){
  const costume=getCostume(),c=getChar(),dupe=Number($("#dupe").value)||0;
  if(!costume){
    $("#skillTitle").textContent="Damage Test";$("#skillDescription").textContent="No costume data loaded for this character.";$("#skillProgression").innerHTML="";$("#burstInfo").textContent="No Burst data for this costume.";return;
  }
  if(costume.is_basic_attack){
    const type=r.atkKey==="ATK"?"Physical":"Magic";
    $("#skillTitle").textContent="Basic Attack";
    $("#skillDescription").textContent="Deal "+fmt(r.baseHit)+" "+type+" Damage based off of 100% of "+r.atkKey+". Gain 1 SP.";
    $("#targetBadge").textContent=c.TARGET==="Vault"?"Vault":"Very Front";
    $("#skillProgression").innerHTML='<span class="skillVarChip"><span>Multiplier</span><b>100%</b></span><span class="skillVarChip"><span>SP Gain</span><b>1</b></span>';
    $("#burstInfo").textContent="Basic Attack has no costume upgrade, potential, or Burst stage.";
    return;
  }
  $("#skillTitle").textContent=costume.skill_name||costume.name;
  $("#skillDescription").textContent=costume.skill_description||"No description available.";
  $("#targetBadge").textContent=costume.target||c.TARGET||"Target";
  const vars=costumeVariables.filter(function(x){return x.costume_id===costume.id&&x.dupe_values&&Object.keys(x.dupe_values).length;});
  $("#skillProgression").innerHTML=vars.slice(0,8).map(function(v,i){
    const val=currentDupeValue(v.dupe_values,dupe)||v.displayed_value||"—";
    return '<span class="skillVarChip"><span>Effect '+(i+1)+'</span><b>'+val+"</b></span>";
  }).join("");
  const burstStage=Number($("#burst").value)||0;
  const burst=costumeBursts.find(function(x){return x.costume_id===costume.id&&Number(x.stage)===burstStage;});
  $("#burstInfo").textContent=burst?(("Burst "+burst.stage+" · +"+burst.extra_sp+" SP · ")+(burst.effect_summary||"Effect data loaded.")):"No Burst selected or Burst data is not available yet.";
}
function render(){
  if(!characters.length)return;
  const r=compute(),c=r.c,atkPct=r.atkKey+"%";
  $("#rarityBadge").textContent="★".repeat(Number(c.RARITY)||5);
  $("#elementSigil").textContent=(c.ELE||"S").slice(0,1);$("#portraitInitial").textContent=(c.Name||"?").slice(0,1).toUpperCase();$("#portraitElement").textContent=c.ELE||"Element";
  $("#charElement").textContent=c.ELE||"—";$("#detailElement").textContent=c.ELE||"—";$("#charRes").textContent=c.RES||"—";
  const activeExclusive=Object.keys(gearState).map(function(slot){
    const g=gearState[slot];
    return exValueFor(c,g.tier,slot,g);
  }).find(Boolean);
  const exclusiveLabel=activeExclusive
    ? (activeExclusive.name+" · "+activeExclusive.stat+" "+displayStat(activeExclusive.stat,activeExclusive.value))
    : (c.EXNAME?(c.EXNAME+" · "+c.EXSTAT):"—");
  $("#detailExclusive").textContent=exclusiveLabel;
  $("#charEx").textContent=exclusiveLabel;
  $("#charAttackType").textContent=r.atkKey==="ATK"?"Physical":"Magic";$("#detailAttackType").textContent=$("#charAttackType").textContent;$("#detailTarget").textContent=(getCostume()?.target)||c.TARGET||"—";

  $("#engraveLifeLabel").textContent="Life · "+(c.ENG_LIFE||"—");$("#engraveStrengthLabel").textContent="Strength · "+(c.ENG_STR||"—");$("#engravePerseveranceLabel").textContent="Perseverance · "+(c.ENG_PSV||"—");

  $("#sumAtkLabel").textContent=r.atkKey;$("#sumHp").textContent=fmt(r.hp);$("#sumAtk").textContent=fmt(r.atk);$("#sumCr").textContent=pct(r.cr);$("#sumCdmg").textContent=pct(r.cdmg);
  $("#leftDef").textContent=pct(r.def);$("#leftMres").textContent=pct(r.mres);$("#elementDamageLabel").textContent=(c.ELE?c.ELE+" DMG":"Property DMG");$("#leftProperty").textContent=pct(r.property);
  $("#resistLabel").textContent=(c.RES||"Property")+" Resist";$("#leftResist").textContent=c.RES==="Property"?"0%":"50%";

  $("#sumDamage").textContent=fmt(r.damage);$("#damageBig").textContent=fmt(r.damage);$("#rightHits").textContent=r.hits;$("#rightDamage").textContent=fmt(r.damage);
  $("#damageExplain").textContent=r.hits+" hit"+(r.hits===1?"":"s")+" · "+Math.round(r.baseHit).toLocaleString()+" base/hit · "+(r.property*100).toFixed(1)+"% property · "+(r.enemy*100).toFixed(1)+"% enemy RES";

  $("#gearHpFlat").textContent=fmt(r.t.HP||0);$("#gearAtkLabel").textContent=r.atkKey;$("#gearAtkFlat").textContent=fmt(r.t[r.atkKey]||0);$("#gearDef").textContent=pct(r.t.DEF||0);
  $("#gearAtkPctLabel").textContent=atkPct;$("#gearAtkPct").textContent=pct(r.t[atkPct]||0);$("#gearCdmg").textContent=pct(r.t.CDMG||0);$("#detailHpPct").textContent=pct(r.t["HP%"]||0);$("#detailCr").textContent=pct(r.t.CR||0);$("#detailProperty").textContent=pct(r.property);

  document.querySelectorAll(".gearCard").forEach(function(card){
    const slot=card.dataset.slot,g=gearState[slot],ex=exValueFor(c,g.tier,slot,g);
    card.querySelector(".gearTier").classList.toggle("exclusiveTier",!!ex);
    const named=getCatalogGear(g.catalogId);
    card.querySelector(".exMark").textContent=ex?"EX":named?(named.category==="Monster"?"FIEND":""):"";
    const exBox=card.querySelector(".exclusiveValue");
    exBox.innerHTML=ex?("<span>"+ex.stat+"</span><b>"+displayStat(ex.stat,ex.value)+"</b>"):"<span>-</span><b>-</b>";
    exBox.title=ex?(ex.name+" · "+ex.stat+" "+displayStat(ex.stat,ex.value)):"No exclusive bonus";
    const a=card.querySelector('[data-value="main1"]'),b=card.querySelector('[data-value="main2"]');
    if(a)a.textContent=displayStat(g.main1,mainGearValue(g,g.main1));if(b)b.textContent=displayStat(g.main2,mainGearValue(g,g.main2));
    g.subs.forEach(function(stat,i){const out=card.querySelector('[data-value="sub'+i+'"]');if(out)out.textContent=displayStat(stat,subGearValue(g,stat));});
  });

  const breakdown=[
    ["Final HP",fmt(r.hp)],["Final "+r.atkKey,fmt(r.atk)],["Crit Rate",pct(r.cr)],["Crit DMG",pct(r.cdmg)],
    ["DEF",pct(r.def)],["MRES",pct(r.mres)],["Property",pct(r.property)],["Skill Test",fmt(r.damage)]
  ];
  $("#breakdown").innerHTML=breakdown.map(function(row){return "<article><span>"+row[0]+"</span><strong>"+row[1]+"</strong></article>";}).join("");
  updateCostumePanel(r);
}
loadData();