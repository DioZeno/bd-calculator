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

let characters = [];
let gearTables = {main:{},sub:{},refine:{}};
let gearState = structuredClone(DEFAULT_GEAR);

const $ = s => document.querySelector(s);
const fmt = n => Math.round(Number(n)||0).toLocaleString();
const pct = n => `${((Number(n)||0)*100).toFixed(2)}%`;
const clone = x => JSON.parse(JSON.stringify(x));

function gviz(sheet){
  return new Promise((resolve,reject)=>{
    const cb = "__gviz_"+Math.random().toString(36).slice(2);
    const script = document.createElement("script");
    const tqx = `out:json;responseHandler:${cb}`;
    script.src = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${encodeURIComponent(sheet)}&headers=1&tqx=${encodeURIComponent(tqx)}`;
    const timer=setTimeout(()=>{cleanup();reject(new Error("timeout"))},9000);
    function cleanup(){clearTimeout(timer);delete window[cb];script.remove()}
    window[cb]=res=>{
      cleanup();
      if(res.status==="error") return reject(new Error("Sheet query failed"));
      const cols=res.table.cols.map(c=>c.label||c.id);
      const rows=res.table.rows.map(r=>r.c.map(c=>c?.v ?? ""));
      resolve({cols,rows});
    };
    script.onerror=()=>{cleanup();reject(new Error("network"))};
    document.head.appendChild(script);
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
  [ ["main",mainRows],["sub",subRows],["refine",refRows] ].forEach(([kind,rows])=>{
    rows.forEach(r=>{gearTables[kind][r[0]]=Object.fromEntries(STAT_NAMES.map((s,i)=>[s,Number(r[i+1])||0]))})
  });
}
async function loadData(){
  try{
    const [base,gear]=await Promise.all([gviz("Base Stats"),gviz("Gear Stats")]);
    const head=base.cols;
    characters=base.rows.filter(r=>r[0]).map(r=>Object.fromEntries(head.map((h,i)=>[h,r[i]])));
    const rows=gear.rows;
    let mode=null, statHeader=null;
    rows.forEach(r=>{
      const first=String(r[0]??"");
      if(first==="Main Stats"){mode="main";statHeader=null;return}
      if(first==="Sub Stats"){mode="sub";statHeader=null;return}
      if(first==="Refinements"){mode="refine";statHeader=null;return}
      if(first==="Tier"){statHeader=r;return}
      if(mode && statHeader && first){
        const obj={};
        statHeader.slice(1).forEach((s,i)=>obj[s]=Number(r[i+1])||0);
        gearTables[mode][first]=obj;
      }
    });
    if(!characters.length || !Object.keys(gearTables.main).length) throw new Error("empty data");
    $("#dataStatus").textContent=`Live source loaded · ${characters.length} characters · ${Object.keys(gearTables.main).length} gear tiers`;
  }catch(err){
    fallback();
    $("#dataStatus").textContent="Live Sheet lookup unavailable — using bundled fallback data.";
  }
  setup();
}

function setup(){
  const sel=$("#character");
  sel.innerHTML=characters.map(c=>`<option>${c.Name}</option>`).join("");
  if(characters.some(c=>c.Name==="Nebris")) sel.value="Nebris";
  buildGearUI();
  wire();
  updateLevelOptions();
  render();
}
function attackType(c){return Number(c.ATK)>0?"physical":"magic"}
function tierOptions(){
  const tiers=Object.keys(gearTables.main).filter(x=>x && x!=="NULL");
  return tiers.map(x=>`<option>${x}</option>`).join("");
}
function selectOptions(items,current){return items.map(x=>`<option ${x===current?"selected":""}>${x}</option>`).join("")}
function buildGearUI(){
  const grid=$("#gearGrid");
  grid.innerHTML="";
  Object.keys(DEFAULT_GEAR).forEach(slot=>{
    const g=gearState[slot];
    const card=document.createElement("article");
    card.className="gearCard";card.dataset.slot=slot;
    card.innerHTML=`<div class="gearTitle"><strong>${slot}</strong><span class="exMark"></span></div>
    <div class="gearFields">
      <label class="gearField"><span>Tier</span><select data-k="tier">${tierOptions()}</select></label>
      <label class="gearField"><span>Basic 1</span><select data-k="main1"></select></label>
      <label class="gearField"><span>Basic 2</span><select data-k="main2"></select></label>
      <div class="gearRefine">
        ${[0,1,2].map(i=>`<label class="gearField"><span>Ref ${i+1}</span><select data-ref="${i}">${selectOptions(["C","B","A","S"],g.ref[i])}</select></label>`).join("")}
      </div>
      ${[0,1,2].map(i=>`<label class="gearField"><span>Substat ${i+1}</span><select data-sub="${i}">${selectOptions(SUB_OPTIONS,g.subs[i])}</select></label>`).join("")}
    </div><div class="gearPreview"></div>`;
    grid.appendChild(card);
    card.querySelector('[data-k="tier"]').value=g.tier;
  });
  refreshMainOptions();
}
function refreshMainOptions(){
  const c=getChar(), type=attackType(c);
  document.querySelectorAll(".gearCard").forEach(card=>{
    const slot=card.dataset.slot,g=gearState[slot],opts=SLOT_OPTIONS[slot][type];
    ["main1","main2"].forEach(k=>{
      const el=card.querySelector(`[data-k="${k}"]`);
      let desired=g[k];
      if(!opts.includes(desired)){
        if(type==="magic") desired=desired.replace("ATK","MATK");
        else desired=desired.replace("MATK","ATK");
      }
      if(!opts.includes(desired)) desired=opts[0];
      g[k]=desired;el.innerHTML=selectOptions(opts,desired);
    });
  });
}
function wire(){
  document.addEventListener("input",e=>{
    const card=e.target.closest(".gearCard");
    if(card){
      const s=card.dataset.slot,g=gearState[s];
      if(e.target.dataset.k) g[e.target.dataset.k]=e.target.value;
      if(e.target.dataset.sub!=null) g.subs[+e.target.dataset.sub]=e.target.value;
      if(e.target.dataset.ref!=null) g.ref[+e.target.dataset.ref]=e.target.value;
      render();return;
    }
    if(e.target.id==="character"){updateLevelOptions();refreshMainOptions()}
    render();
  });
  $("#resetBtn").onclick=()=>{gearState=clone(DEFAULT_GEAR);buildGearUI();document.querySelectorAll("input").forEach(el=>{const defaults={collectionAtk:80,collectionHp:80,externalAtk:0,externalCr:0,externalCdmg:0,externalEle:0,skillMult:100,hits:1,chains:0,chainBuff:0,enemyRes:0,dmgMult:1};if(el.id in defaults)el.value=defaults[el.id]});$("#advantage").checked=true;$("#critical").checked=true;$("#expectedCrit").checked=false;render()};
  document.querySelectorAll(".themeDock button").forEach(b=>b.onclick=()=>{document.documentElement.dataset.theme=b.dataset.theme;document.querySelectorAll(".themeDock button").forEach(x=>x.classList.toggle("active",x===b))});
}
function getChar(){return characters.find(c=>c.Name===$("#character").value)||characters[0]}
function updateLevelOptions(){
  const c=getChar(),max=MAX_LEVEL[Number(c.RARITY)]||80,el=$("#level"),prev=el.value;
  const opts=[20,40,60,80].filter(x=>x<=max);
  el.innerHTML=opts.map(x=>`<option value="${x}">${x}</option>`).join("")+`<option value="MAX">MAX</option>`;
  el.value=prev&&[...el.options].some(o=>o.value===prev)?prev:"MAX";
}
function addStat(obj,k,v){obj[k]=(obj[k]||0)+(Number(v)||0)}
function gearStats(c){
  const total=Object.fromEntries([...STAT_NAMES,"ELE%"].map(s=>[s,0]));
  const previews={};
  Object.entries(gearState).forEach(([slot,g])=>{
    const tier=g.tier,m=gearTables.main[tier]||{},sub=gearTables.sub[tier]||{},ref=gearTables.refine[tier]||{};
    const factor=g.ref.reduce((a,x)=>a+(REFINE_FACTOR[x]||0),0);
    const piece={};
    [g.main1,g.main2].forEach(stat=>{const v=2*(m[stat]||0)+(ref[stat]||0)*factor;addStat(total,stat,v);addStat(piece,stat,v)});
    g.subs.forEach(stat=>{addStat(total,stat,sub[stat]||0);addStat(piece,stat,sub[stat]||0)});
    if(String(tier).startsWith("EX") && c.EXSLOT===slot && c.EXSTAT){
      const key=tier==="EX UR"?"EX UR":tier==="EX SR"?"EX SR":"EX R";
      let v=c[key]; if(v!=="-" && v!=="" && v!=null){v=Number(v)||0;addStat(total,c.EXSTAT,v);addStat(piece,c.EXSTAT,v)}
    }
    previews[slot]=piece;
  });
  return {total,previews};
}
function baseAtLevel(c,stat){
  const level=$("#level").value;
  if(level==="MAX") return Number(c[stat])||0;
  const lv=Number(level)||0;
  if(stat==="HP") return (Number(c.HP0)||0)*(1+lv/5);
  if(stat==="ATK") return (Number(c.ATK0)||0)*(1+lv/10);
  if(stat==="MATK") return (Number(c.MATK0)||0)*(1+lv/10);
  return Number(c[stat])||0;
}
function compute(){
  const c=getChar(),t=gearStats(c).total;
  const atkKey=attackType(c)==="physical"?"ATK":"MATK",atkPct=atkKey+"%";
  const collectionAtk=+$("#collectionAtk").value/100, collectionHp=+$("#collectionHp").value/100;
  const extAtk=+$("#externalAtk").value/100, extCr=+$("#externalCr").value/100, extCdmg=+$("#externalCdmg").value/100, extEle=+$("#externalEle").value/100;
  const baseAtk=baseAtLevel(c,atkKey),baseHp=baseAtLevel(c,"HP");
  const atk=Math.floor((baseAtk+(t[atkKey]||0))*(1+collectionAtk+extAtk+(t[atkPct]||0)));
  const hp=Math.floor((baseHp+(t.HP||0))*(1+collectionHp+(t["HP%"]||0)));
  const cr=(Number(c.CR)||0)+(t.CR||0)+extCr;
  const cdmg=(Number(c.CDMG)||0)+(t.CDMG||0)+extCdmg;
  const def=(Number(c.DEF)||0)+(t.DEF||0), mres=(Number(c.MRES)||0)+(t.MRES||0);
  const advantage=$("#advantage").checked;
  const property=advantage ? .5+(t["ELE%"]||0)+extEle : 0;
  const skill=+$("#skillMult").value/100,hits=Math.max(1,+$("#hits").value||1),initial=Math.max(0,+$("#chains").value||0);
  const enemy=Math.min(.9,Math.max(-1,+$("#enemyRes").value/100||0)),dmgMult=Math.max(0,+$("#dmgMult").value||0);
  let critFactor=1;
  if($("#expectedCrit").checked) critFactor=1+Math.min(1,Math.max(0,cr))*cdmg;
  else if($("#critical").checked) critFactor=1+cdmg;
  const baseHit=atk*skill*critFactor*(1+property)*(1-enemy)*dmgMult;
  const chainStep=.10+(+$("#chainBuff").value/100||0);
  let damage=0;
  for(let i=0;i<hits;i++) damage += baseHit*(1+(initial+i)*chainStep);
  return {c,t,atkKey,atk,hp,cr,cdmg,def,mres,property,skill,hits,enemy,dmgMult,baseHit,damage,gear:gearStats(c)};
}
function displayStat(k,v){
  return PERCENT_STATS.has(k)?pct(v):fmt(v);
}
function render(){
  if(!characters.length)return;
  const r=compute(),c=r.c;
  $("#rarityBadge").textContent="★".repeat(Number(c.RARITY)||5);
  $("#charElement").textContent=c.ELE||"—";$("#charRes").textContent=c.RES||"—";
  $("#charEx").textContent=c.EXNAME?`${c.EXNAME} · ${c.EXSTAT}`:"—";
  $("#charAttackType").textContent=r.atkKey==="ATK"?"Physical":"Magic";
  $("#sumAtkLabel").textContent=r.atkKey;
  $("#sumHp").textContent=fmt(r.hp);$("#sumAtk").textContent=fmt(r.atk);$("#sumCr").textContent=pct(r.cr);$("#sumCdmg").textContent=pct(r.cdmg);$("#sumDamage").textContent=fmt(r.damage);
  $("#damageBig").textContent=fmt(r.damage);
  $("#damageExplain").textContent=`${r.hits} hit${r.hits===1?"":"s"} · ${Math.round(r.baseHit).toLocaleString()} base/hit · ${(r.property*100).toFixed(1)}% property bonus · ${(r.enemy*100).toFixed(1)}% enemy mitigation`;
  document.querySelectorAll(".gearCard").forEach(card=>{
    const slot=card.dataset.slot,p=r.gear.previews[slot]||{},ex=String(gearState[slot].tier).startsWith("EX")&&c.EXSLOT===slot;
    card.querySelector(".exMark").textContent=ex?"EX active":"";
    const parts=Object.entries(p).filter(([,v])=>Math.abs(v)>1e-9).map(([k,v])=>`${k} ${displayStat(k,v)}`);
    card.querySelector(".gearPreview").innerHTML=parts.length?parts.map(x=>`<strong>${x}</strong>`).join(" · "):"No stats";
  });
  const breakdown=[
    ["HP",r.hp], [r.atkKey,r.atk], ["Crit Rate",pct(r.cr)],["Crit DMG",pct(r.cdmg)],
    ["DEF",pct(r.def)],["MRES",pct(r.mres)],["Property DMG",pct(r.property)],
    ["Flat "+r.atkKey,fmt(r.t[r.atkKey]||0)],[r.atkKey+"%",pct(r.t[r.atkKey+"%"]||0)],
    ["Gear HP",fmt(r.t.HP||0)],["Gear HP%",pct(r.t["HP%"]||0)],["Gear CDMG",pct(r.t.CDMG||0)]
  ];
  $("#breakdown").innerHTML=breakdown.map(([k,v])=>`<article><span>${k}</span><strong>${v}</strong></article>`).join("");
}
loadData();
