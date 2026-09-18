const SHEET_ID = "1w5S3YpKmWAFoRdazR7MtmzL20LD0K9DCt0WvdQXsjwA";
const STAT_NAMES = ["ATK","MATK","ATK%","MATK%","HP","HP%","CR","CDMG","DEF","MRES"];
const PERCENT_STATS = new Set(["ATK%","MATK%","HP%","CR","CDMG","DEF","MRES","ELE%"]);
const SLOT_OPTIONS = {
  Weapon: {physical:["ATK","ATK%","CDMG"], magic:["MATK","MATK%","CDMG"]},
  Body: {physical:["DEF","HP","HP%"], magic:["MRES","HP","HP%"]},
  Head: {physical:["DEF","HP","HP%"], magic:["MRES","HP","HP%"]},
  Accessory: {physical:["CDMG","HP","HP%"], magic:["CDMG","HP","HP%"]},
  Gloves: {physical:["ATK","ATK%","CR"], magic:["MATK","MATK%","CR"]}
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

const $ = function(s){ return document.querySelector(s); };
const fmt = function(n){ return Math.round(Number(n)||0).toLocaleString(); };
const pct = function(n){ return (((Number(n)||0)*100).toFixed(2))+"%"; };
const clone = function(x){ return JSON.parse(JSON.stringify(x)); };

let characters = [];
let gearTables = {main:{},sub:{},refine:{}};
let gearState = clone(DEFAULT_GEAR);

function gvizRaw(sheet){
  return new Promise(function(resolve,reject){
    const cb = "__gviz_"+Math.random().toString(36).slice(2);
    const script = document.createElement("script");
    const tqx = "out:json;responseHandler:"+cb;
    script.src = "https://docs.google.com/spreadsheets/d/"+SHEET_ID+"/gviz/tq?sheet="+encodeURIComponent(sheet)+"&headers=0&tqx="+encodeURIComponent(tqx);
    const timer=setTimeout(function(){cleanup();reject(new Error("timeout"));},9000);
    function cleanup(){ clearTimeout(timer); delete window[cb]; script.remove(); }
    window[cb]=function(res){
      cleanup();
      if(res.status==="error") return reject(new Error("Sheet query failed"));
      const rows=res.table.rows.map(function(r){ return r.c.map(function(c){ return c && c.v != null ? c.v : ""; }); });
      resolve(rows);
    };
    script.onerror=function(){cleanup();reject(new Error("network"));};
    document.head.appendChild(script);
  });
}
function parseBase(rows){
  const headerIndex=rows.findIndex(function(r){ return String(r[0]).trim()==="Name"; });
  if(headerIndex<0) throw new Error("Base Stats header not found");
  const header=rows[headerIndex].map(function(x){return String(x).trim();});
  return rows.slice(headerIndex+1).filter(function(r){return r[0];}).map(function(r){
    const obj={};
    header.forEach(function(h,i){obj[h]=r[i];});
    return obj;
  });
}
function parseGear(rows){
  let mode=null,header=null;
  rows.forEach(function(r){
    const first=String(r[0] == null ? "" : r[0]).trim();
    if(first==="Main Stats"){mode="main";header=null;return;}
    if(first==="Sub Stats"){mode="sub";header=null;return;}
    if(first==="Refinements"){mode="refine";header=null;return;}
    if(first==="Tier"){header=r.map(function(x){return String(x).trim();});return;}
    if(mode && header && first){
      const obj={};
      header.slice(1).forEach(function(s,i){if(s)obj[s]=Number(r[i+1])||0;});
      if(Object.keys(obj).length)gearTables[mode][first]=obj;
    }
  });
}
function fallback(){
  characters=[{
    Name:"Nebris",RARITY:5,ELE:"Wind",RES:"Water",ATK0:36,ATK:396,MATK0:0,MATK:0,HP0:70,HP:1470,CR:.1,CDMG:.75,DEF:0,MRES:0,
    TARGET:"Very Front",EXSLOT:"Weapon",EXNAME:"Black Moon",EXSTAT:"ATK%","EX R":"-","EX SR":.315,"EX UR":.45
  },{
    Name:"Justia",RARITY:5,ELE:"Light",RES:"Property",ATK0:32,ATK:352,MATK0:0,MATK:0,HP0:101,HP:2121,CR:.1,CDMG:.5,DEF:0,MRES:0,
    TARGET:"Very Front",EXSLOT:"Weapon",EXNAME:"Royaldite",EXSTAT:"ATK%","EX R":"-","EX SR":.315,"EX UR":.45
  }];
  const mainRows=[
    ["EX UR",37,37,.25,.25,270,.3,.0833,.5,.09,.09],["UR4",37,37,.25,.25,270,.3,.0833,.5,.09,.09],
    ["UR3",30,30,.2,.2,216,.24,.0666,.4,.072,.072],["UR2",22,22,.15,.15,162,.18,.05,.3,.054,.054],
    ["UR1",18,18,.125,.125,135,.15,.0416,.25,.045,.045],["EX SR",26,26,.175,.175,157,.175,.0583,.35,.0525,.0525],
    ["SR4",26,26,.175,.175,157,.175,.0583,.35,.0525,.0525],["SR3",21,21,.14,.14,126,.14,.0466,.28,.042,.042],
    ["SR2",15,15,.105,.105,94,.105,.035,.21,.0315,.0315],["SR1",13,13,.0875,.0875,78,.0875,.0291,.175,.0262,.0262],
    ["EX R",15,15,.1,.1,90,.1,.0333,.2,.03,.03],["R4",15,15,.1,.1,90,.1,.0333,.2,.03,.03]
  ];
  const subRows=[
    ["EX UR",12,12,.09,.09,96,.108,.03,.18,.0432,.0432],["UR4",12,12,.09,.09,96,.108,.03,.18,.0432,.0432],
    ["UR3",10,10,.072,.072,76,.0864,.024,.144,.0345,.0345],["UR2",7,7,.054,.054,57,.0648,.018,.108,.0259,.0259],
    ["UR1",6,6,.045,.045,48,.054,.015,.09,.0216,.0216],["EX SR",8,8,.063,.063,56,.063,.021,.126,.0252,.0252],
    ["SR4",8,8,.063,.063,56,.063,.021,.126,.0252,.0252],["SR3",7,7,.0504,.0504,44,.0504,.0168,.1008,.0201,.0201],
    ["SR2",5,5,.0378,.0378,33,.0378,.0126,.0756,.0151,.0151],["SR1",4,4,.0315,.0315,28,.0315,.0105,.063,.0126,.0126],
    ["EX R",5,5,.036,.036,32,.036,.012,.072,.0144,.0144],["R4",5,5,.036,.036,32,.036,.012,.072,.0144,.0144]
  ];
  const refRows=[
    ["EX UR",2.5,2.5,.0168,.0168,18,.02,.0056,.0336,.006,.006],["UR4",2.5,2.5,.0168,.0168,18,.02,.0056,.0336,.006,.006],
    ["UR3",2,2,.01334,.01334,14.5,.016,.00446,.0268,.0048,.0048],["UR2",1.48,1.48,.01,.01,10.8,.012,.00336,.02,.0036,.0036],
    ["UR1",1.2,1.2,.0084,.0084,9,.01,.0028,.0168,.003,.003],["EX SR",1.74,1.74,.0118,.0118,10.56,.0118,.00394,.0236,.0035,.0035],
    ["SR4",1.74,1.74,.0118,.0118,10.56,.0118,.00394,.0236,.0035,.0035],["SR3",1.4,1.4,.0094,.0094,8.4,.0094,.00312,.0188,.0028,.0028],
    ["SR2",1,1,.007,.007,6.3,.007,.00236,.014,.0021,.0021],["SR1",.9,.9,.006,.006,5.2,.006,.00196,.0118,.00176,.00176],
    ["EX R",1,1,.00668,.00668,6,.00668,.00224,.01334,.002,.002],["R4",1,1,.00668,.00668,6,.00668,.00224,.01334,.002,.002]
  ];
  [["main",mainRows],["sub",subRows],["refine",refRows]].forEach(function(pair){
    const kind=pair[0],rows=pair[1];
    rows.forEach(function(r){
      const obj={};
      STAT_NAMES.forEach(function(s,i){obj[s]=Number(r[i+1])||0;});
      gearTables[kind][r[0]]=obj;
    });
  });
}
async function loadData(){
  try{
    gearTables={main:{},sub:{},refine:{}};
    const results=await Promise.all([gvizRaw("Base Stats"),gvizRaw("Gear Stats")]);
    characters=parseBase(results[0]);
    parseGear(results[1]);
    if(!characters.length || !Object.keys(gearTables.main).length)throw new Error("empty data");
    $("#dataStatus").textContent="Live sheet · "+characters.length+" characters · "+Object.keys(gearTables.main).length+" gear tiers";
  }catch(err){
    gearTables={main:{},sub:{},refine:{}};
    fallback();
    $("#dataStatus").textContent="Sheet lookup unavailable · bundled fallback active";
  }
  setup();
}
function setup(){
  const sel=$("#character");
  sel.innerHTML=characters.map(function(c){return "<option>"+c.Name+"</option>";}).join("");
  if(characters.some(function(c){return c.Name==="Nebris";}))sel.value="Nebris";
  buildGearUI();
  wire();
  updateLevelOptions();
  render();
}
function attackType(c){return Number(c.ATK)>0?"physical":"magic";}
function tierOptions(){
  return Object.keys(gearTables.main).filter(function(x){return x && x!=="NULL";}).map(function(x){return "<option>"+x+"</option>";}).join("");
}
function selectOptions(items,current){
  return items.map(function(x){return "<option "+(x===current?"selected":"")+">"+x+"</option>";}).join("");
}
function buildGearUI(){
  const grid=$("#gearGrid");
  grid.innerHTML='<div class="gearLabels"><div>Tier</div><div>Refinement</div><div>Exclusive</div><div>Basic 1</div><div>Basic 2</div><div>Substat 1</div><div>Substat 2</div><div>Substat 3</div><div>Gear Slot</div></div>';
  Object.keys(DEFAULT_GEAR).forEach(function(slot){
    const g=gearState[slot];
    const col=document.createElement("article");
    col.className="gearCard";
    col.dataset.slot=slot;
    let refs="";
    [0,1,2].forEach(function(i){
      refs+='<select aria-label="Refinement '+(i+1)+'" data-ref="'+i+'">'+selectOptions(["C","B","A","S"],g.ref[i])+"</select>";
    });
    let subs="";
    [0,1,2].forEach(function(i){
      subs+='<div class="gearCell gearStatCell gearSub"><select data-sub="'+i+'">'+selectOptions(SUB_OPTIONS,g.subs[i])+'</select><b class="gearStatValue" data-value="sub'+i+'">—</b></div>';
    });
    col.innerHTML=
      '<div class="gearCell gearTier"><select data-k="tier">'+tierOptions()+"</select></div>"+
      '<div class="gearCell"><div class="refineGroup">'+refs+"</div></div>"+
      '<div class="gearCell"><div class="exclusiveValue"><span>-</span><b>-</b></div></div>'+
      '<div class="gearCell gearStatCell gearBasic"><select data-k="main1"></select><b class="gearStatValue" data-value="main1">—</b></div>'+
      '<div class="gearCell gearStatCell gearBasic"><select data-k="main2"></select><b class="gearStatValue" data-value="main2">—</b></div>'+
      subs+
      '<div class="gearCell gearSlotName"><span>'+slot+'</span><small class="exMark"></small></div>'+
      '<div class="gearPreview"></div>';
    grid.appendChild(col);
    const tier=col.querySelector('[data-k="tier"]');
    if(Array.from(tier.options).some(function(o){return o.value===g.tier;}))tier.value=g.tier;
  });
  refreshMainOptions();
}
function refreshMainOptions(){
  const c=getChar(),type=attackType(c);
  document.querySelectorAll(".gearCard").forEach(function(card){
    const slot=card.dataset.slot,g=gearState[slot],opts=SLOT_OPTIONS[slot][type];
    ["main1","main2"].forEach(function(k){
      const el=card.querySelector('[data-k="'+k+'"]');
      let desired=g[k];
      if(!opts.includes(desired)){
        if(type==="magic")desired=desired.replace("ATK","MATK");
        else desired=desired.replace("MATK","ATK");
      }
      if(!opts.includes(desired))desired=opts[0];
      g[k]=desired;
      el.innerHTML=selectOptions(opts,desired);
    });
  });
}
function resetBuild(){
  gearState=clone(DEFAULT_GEAR);
  buildGearUI();
  const defaults={collectionAtk:80,collectionHp:80,externalAtk:0,externalCr:0,externalCdmg:0,externalEle:0,skillMult:100,hits:1,chains:0,chainBuff:0,enemyRes:0,dmgMult:1,enemyHp:30000,enemyAtk:1000};
  Object.keys(defaults).forEach(function(id){const el=$("#"+id);if(el)el.value=defaults[id];});
  $("#advantage").checked=true;
  $("#critical").checked=true;
  $("#expectedCrit").checked=false;
  updateLevelOptions();
  render();
}
function wire(){
  document.addEventListener("input",function(e){
    const card=e.target.closest(".gearCard");
    if(card){
      const s=card.dataset.slot,g=gearState[s];
      if(e.target.dataset.k)g[e.target.dataset.k]=e.target.value;
      if(e.target.dataset.sub!=null)g.subs[+e.target.dataset.sub]=e.target.value;
      if(e.target.dataset.ref!=null)g.ref[+e.target.dataset.ref]=e.target.value;
      render();
      return;
    }
    if(e.target.id==="character"){
      updateLevelOptions();
      refreshMainOptions();
    }
    render();
  });
  $("#resetBtn").onclick=resetBuild;
  $("#resetBtnMirror").onclick=resetBuild;
  document.querySelectorAll(".themeDock button").forEach(function(b){
    b.onclick=function(){
      document.documentElement.dataset.theme=b.dataset.theme;
      document.querySelectorAll(".themeDock button").forEach(function(x){x.classList.toggle("active",x===b);});
    };
  });
}
function getChar(){return characters.find(function(c){return c.Name===$("#character").value;})||characters[0];}
function updateLevelOptions(){
  const c=getChar(),max=MAX_LEVEL[Number(c.RARITY)]||80,el=$("#level"),prev=el.value;
  const opts=[20,40,60,80].filter(function(x){return x<=max;});
  el.innerHTML=opts.map(function(x){return '<option value="'+x+'">'+x+"</option>";}).join("")+'<option value="MAX">MAX</option>';
  el.value=prev&&Array.from(el.options).some(function(o){return o.value===prev;})?prev:"MAX";
}
function addStat(obj,k,v){obj[k]=(obj[k]||0)+(Number(v)||0);}
function exValueFor(c,tier,slot){
  if(!String(tier).startsWith("EX") || c.EXSLOT!==slot || !c.EXSTAT)return null;
  const key=tier==="EX UR"?"EX UR":tier==="EX SR"?"EX SR":"EX R";
  const raw=c[key];
  if(raw==="-" || raw==="" || raw==null)return null;
  return {stat:c.EXSTAT,value:Number(raw)||0};
}
function mainGearValue(g,stat){
  const tier=g.tier,m=gearTables.main[tier]||{},ref=gearTables.refine[tier]||{};
  const factor=g.ref.reduce(function(a,x){return a+(REFINE_FACTOR[x]||0);},0);
  return 2*(m[stat]||0)+(ref[stat]||0)*factor;
}
function subGearValue(g,stat){
  const sub=gearTables.sub[g.tier]||{};
  return sub[stat]||0;
}
function gearStats(c){
  const total={};
  STAT_NAMES.concat(["ELE%"]).forEach(function(s){total[s]=0;});
  const previews={};
  Object.keys(gearState).forEach(function(slot){
    const g=gearState[slot],tier=g.tier,m=gearTables.main[tier]||{},sub=gearTables.sub[tier]||{},ref=gearTables.refine[tier]||{};
    const factor=g.ref.reduce(function(a,x){return a+(REFINE_FACTOR[x]||0);},0);
    const piece={};
    [g.main1,g.main2].forEach(function(stat){
      const v=2*(m[stat]||0)+(ref[stat]||0)*factor;
      addStat(total,stat,v);addStat(piece,stat,v);
    });
    g.subs.forEach(function(stat){addStat(total,stat,sub[stat]||0);addStat(piece,stat,sub[stat]||0);});
    const ex=exValueFor(c,tier,slot);
    if(ex){addStat(total,ex.stat,ex.value);addStat(piece,ex.stat,ex.value);}
    previews[slot]=piece;
  });
  return {total:total,previews:previews};
}
function baseAtLevel(c,stat){
  const level=$("#level").value;
  if(level==="MAX")return Number(c[stat])||0;
  const lv=Number(level)||0;
  if(stat==="HP")return (Number(c.HP0)||0)*(1+lv/5);
  if(stat==="ATK")return (Number(c.ATK0)||0)*(1+lv/10);
  if(stat==="MATK")return (Number(c.MATK0)||0)*(1+lv/10);
  return Number(c[stat])||0;
}
function compute(){
  const c=getChar(),gear=gearStats(c),t=gear.total;
  const atkKey=attackType(c)==="physical"?"ATK":"MATK",atkPct=atkKey+"%";
  const collectionAtk=+$("#collectionAtk").value/100,collectionHp=+$("#collectionHp").value/100;
  const extAtk=+$("#externalAtk").value/100,extCr=+$("#externalCr").value/100,extCdmg=+$("#externalCdmg").value/100,extEle=+$("#externalEle").value/100;
  const baseAtk=baseAtLevel(c,atkKey),baseHp=baseAtLevel(c,"HP");
  const atk=Math.floor((baseAtk+(t[atkKey]||0))*(1+collectionAtk+extAtk+(t[atkPct]||0)));
  const hp=Math.floor((baseHp+(t.HP||0))*(1+collectionHp+(t["HP%"]||0)));
  const cr=(Number(c.CR)||0)+(t.CR||0)+extCr;
  const cdmg=(Number(c.CDMG)||0)+(t.CDMG||0)+extCdmg;
  const def=(Number(c.DEF)||0)+(t.DEF||0),mres=(Number(c.MRES)||0)+(t.MRES||0);
  const property=$("#advantage").checked ? .5+(t["ELE%"]||0)+extEle : 0;
  const skill=+$("#skillMult").value/100,hits=Math.max(1,+$("#hits").value||1),initial=Math.max(0,+$("#chains").value||0);
  const enemy=Math.min(.9,Math.max(-1,+$("#enemyRes").value/100||0)),dmgMult=Math.max(0,+$("#dmgMult").value||0);
  let critFactor=1;
  if($("#expectedCrit").checked)critFactor=1+Math.min(1,Math.max(0,cr))*cdmg;
  else if($("#critical").checked)critFactor=1+cdmg;
  const baseHit=atk*skill*critFactor*(1+property)*(1-enemy)*dmgMult;
  const chainStep=.10+(+$("#chainBuff").value/100||0);
  let damage=0;
  for(let i=0;i<hits;i++)damage+=baseHit*(1+(initial+i)*chainStep);
  return {c:c,t:t,atkKey:atkKey,atk:atk,hp:hp,cr:cr,cdmg:cdmg,def:def,mres:mres,property:property,skill:skill,hits:hits,enemy:enemy,dmgMult:dmgMult,baseHit:baseHit,damage:damage,gear:gear};
}
function displayStat(k,v){return PERCENT_STATS.has(k)?pct(v):fmt(v);}
function render(){
  if(!characters.length)return;
  const r=compute(),c=r.c,atkPct=r.atkKey+"%";
  $("#rarityBadge").textContent="★".repeat(Number(c.RARITY)||5);
  $("#elementSigil").textContent=(c.ELE||"S").slice(0,1);
  $("#portraitInitial").textContent=(c.Name||"?").slice(0,1).toUpperCase();
  $("#portraitElement").textContent=c.ELE||"Element";
  $("#charElement").textContent=c.ELE||"—";
  $("#detailElement").textContent=c.ELE||"—";
  $("#charRes").textContent=c.RES||"—";
  $("#detailExclusive").textContent=c.EXNAME?(c.EXNAME+" · "+c.EXSTAT):"—";
  $("#charEx").textContent=c.EXNAME?(c.EXNAME+" · "+c.EXSTAT):"—";
  $("#charAttackType").textContent=r.atkKey==="ATK"?"Physical":"Magic";
  $("#detailAttackType").textContent=r.atkKey==="ATK"?"Physical":"Magic";
  $("#targetBadge").textContent=c.TARGET||"Target";
  $("#detailTarget").textContent=c.TARGET||"—";

  $("#sumAtkLabel").textContent=r.atkKey;
  $("#sumHp").textContent=fmt(r.hp);
  $("#sumAtk").textContent=fmt(r.atk);
  $("#sumCr").textContent=pct(r.cr);
  $("#sumCdmg").textContent=pct(r.cdmg);
  $("#leftDef").textContent=pct(r.def);
  $("#leftMres").textContent=pct(r.mres);
  $("#elementDamageLabel").textContent=(c.ELE?c.ELE+" DMG":"Property DMG");
  $("#leftProperty").textContent=pct(r.property);
  $("#resistLabel").textContent=(c.RES||"Property")+" Resist";
  $("#leftResist").textContent=c.RES?"50%":"—";

  $("#sumDamage").textContent=fmt(r.damage);
  $("#damageBig").textContent=fmt(r.damage);
  $("#damageExplain").textContent=r.hits+" hit"+(r.hits===1?"":"s")+" · "+Math.round(r.baseHit).toLocaleString()+" base/hit · "+(r.property*100).toFixed(1)+"% property · "+(r.enemy*100).toFixed(1)+"% enemy RES";
  $("#rightHits").textContent=r.hits;
  $("#rightDamage").textContent=fmt(r.damage);

  $("#gearHpFlat").textContent=fmt(r.t.HP||0);
  $("#gearAtkLabel").textContent=r.atkKey;
  $("#gearAtkFlat").textContent=fmt(r.t[r.atkKey]||0);
  $("#gearDef").textContent=pct(r.t.DEF||0);
  $("#gearAtkPctLabel").textContent=atkPct;
  $("#gearAtkPct").textContent=pct(r.t[atkPct]||0);
  $("#gearCdmg").textContent=pct(r.t.CDMG||0);
  $("#detailHpPct").textContent=pct(r.t["HP%"]||0);
  $("#detailCr").textContent=pct(r.t.CR||0);
  $("#detailProperty").textContent=pct(r.property);

  document.querySelectorAll(".gearCard").forEach(function(card){
    const slot=card.dataset.slot,g=gearState[slot],ex=exValueFor(c,g.tier,slot);
    card.querySelector(".gearTier").classList.toggle("exclusiveTier",!!ex);
    card.querySelector(".exMark").textContent=ex?"EX":"";
    const exBox=card.querySelector(".exclusiveValue");
    exBox.innerHTML=ex?("<span>"+ex.stat+"</span><b>"+displayStat(ex.stat,ex.value)+"</b>"):"<span>-</span><b>-</b>";
    const main1Value=mainGearValue(g,g.main1);
    const main2Value=mainGearValue(g,g.main2);
    const main1Out=card.querySelector('[data-value="main1"]');
    const main2Out=card.querySelector('[data-value="main2"]');
    if(main1Out)main1Out.textContent=displayStat(g.main1,main1Value);
    if(main2Out)main2Out.textContent=displayStat(g.main2,main2Value);
    g.subs.forEach(function(stat,i){
      const out=card.querySelector('[data-value="sub'+i+'"]');
      if(out)out.textContent=displayStat(stat,subGearValue(g,stat));
    });
  });

  const breakdown=[
    ["Final HP",fmt(r.hp)],["Final "+r.atkKey,fmt(r.atk)],["Crit Rate",pct(r.cr)],["Crit DMG",pct(r.cdmg)],
    ["DEF",pct(r.def)],["MRES",pct(r.mres)],["Property",pct(r.property)],["Skill DMG",fmt(r.damage)]
  ];
  $("#breakdown").innerHTML=breakdown.map(function(row){return "<article><span>"+row[0]+"</span><strong>"+row[1]+"</strong></article>";}).join("");
}
loadData();