const SUPABASE_URL = "https://zhjasralevblmvqthqln.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoamFzcmFsZXZibG12cXRocWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NDM1MjQsImV4cCI6MjEwNTMxOTUyNH0.OcrncbhHVr1VLxrh5Y4wh1PhsfATdMWzyG9KCbutrwc";
const SHEET_ID = "1aNXv7zzY3G4YqqRhInpfIN9ei4skCf2iGYCG9oYyQ1o";
const CHARACTER_FALLBACK_CACHE = {"Kry":[4,"Dark","Property",28,252,0,0,126,2142,0.1,0.5,0,0,"Very Front","Weapon","Crying Devil","CR",0.0479,0.0839,0.1199,null,null,null,null,null],"Rou":[5,"Dark","Property",28,308,0,0,126,2646,0.1,0.5,0,0,"Very Front","Weapon","Dark Restraint","CR",null,0.1049,0.1499,"HP","CDMG","DEF","CDMG","CR"],"Tyr":[5,"Wind","Water",36,396,0,0,75,1575,0.1,0.5,0,0,"Very Front","Weapon","Brionac","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Alec":[5,"Fire","Wind",38,418,0,0,74,1554,0,0,0,0,"Very Front","Weapon","Predator","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Emma":[3,"Light","Property",35,245,0,0,92,1196,0,0,0,0,"Very Front","Accessory","Scholar's Emblem","CR",0.036,0.063,0.09,null,null,null,null,null],"Eris":[5,"Fire","Wind",34,374,0,0,88,1848,0.1,0.5,0,0,"Very Front","Weapon","Eris' Sword","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Fred":[3,"Wind","Water",12,84,0,0,215,2795,0.1,0.5,0.1,0,"Very Front","Body","Lugo Shirt","HP%",0.108,0.189,0.324,null,null,null,null,null],"Gray":[5,"Wind","Water",30,330,0,0,104,2184,0.2,0.5,0,0,"Vault","Weapon","Diathema","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Gynt":[3,"Wind","Water",30,210,0,0,104,1352,0.2,0.5,0,0,"Vault","Gloves","Handmade","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Loen":[5,"Fire","Wind",0,0,29,319,120,2520,0.05,1,0,0,"Vault","Weapon","Lost Magic","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Roxy":[5,"Water","Fire",0,0,37,407,69,1449,0.05,1,0,0,"Vault","Weapon","Roxy's Staff","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Seir":[5,"Dark","Property",0,0,15,165,208,4368,0.1,0.5,0,0,"Very Front","Accessory","Arch Demons","HP%",null,0.315,0.54,"HP","MATK","MRES","MRES","HP%"],"Yomi":[5,"Wind","Water",31,341,0,0,107,2247,0.1,0.5,0,0,"Very Front","Weapon","Roaring Sword Ragnarok","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Yumi":[5,"Water","Fire",0,0,30,330,96,2016,0.1,1,0,0.15,"Very Front","Weapon","Kurokage's Fan","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Yuri":[5,"Light","Property",33,363,0,0,95,1995,0.1,0.5,0,0,"Very Front","Weapon","Black Snow Tiger Sword","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Blade":[5,"Dark","Property",39,429,0,0,50,1050,0.1,0.75,0,0,"Very Front","Weapon","Blade","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Celia":[5,"Dark","Property",0,0,25,275,122,2562,0.2,0.5,0,0.2,"Vault","Accessory","Terra Concealer","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Dalvi":[5,"Wind","Water",0,0,32,352,96,2016,0.1,0.75,0,0,"Vault","Head","Thousand-Year-Long Hairpin","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Diana":[5,"Wind","Water",0,0,16,176,191,4011,0.1,0.5,0,0.1,"Vault","Head","White Pixie","HP%",null,0.315,0.54,"HP","MATK","MRES","MRES","HP%"],"Elise":[5,"Fire","Wind",25,275,0,0,137,2877,0.1,0.5,0,0.1,"Vault","Body","Rose Selection","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Elpis":[4,"Dark","Property",0,0,25,225,145,2465,0.1,0.5,0,0,"Vault","Accessory","Akrasion","HP%",0.108,0.189,0.324,null,null,null,null,null],"Julie":[3,"Wind","Water",0,0,32,224,93,1209,0.1,0.5,0,0.15,"Very Front","Head","Spirit Ribbon","MATK",16,27,40,null,null,null,null,null],"Layla":[4,"Light","Property",32,288,0,0,101,1717,0.1,0.5,0,0,"Very Front","Weapon","Pigsmith","ATK%",0.144,0.252,0.36,null,null,null,null,null],"Levia":[5,"Fire","Wind",0,0,36,396,70,1470,0.1,0.75,0,0,"Vault","Weapon","Tome of Liberation","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Lydia":[3,"Water","Fire",24,168,0,0,151,1963,0.1,0.5,0,0,"Very Front","Weapon","Simple Spear","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Maria":[3,"Dark","Property",0,0,32,224,91,1183,0.1,0.75,0,0.1,"Very Front","Weapon","Ruiner","MATK%",0.108,0.189,0.27,null,null,null,null,null],"Rubia":[5,"Fire","Wind",32,352,0,0,91,1911,0.2,0.5,0,0,"Very Front","Weapon","Carneliana","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Samay":[4,"Dark","Property",0,0,28,252,126,2142,0.1,0.5,0,0,"Very Front","Gloves","Seventh Hell","MATK",22,38,54,null,null,null,null,null],"Sonya":[5,"Dark","Property",0,0,37,407,69,1449,0.1,0.5,0,0,"Vault","Accessory","Ater Hecate","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Andrew":[4,"Fire","Wind",22,198,0,0,164,2788,0.1,0.5,0,0,"Very Front","Body","Demon's Suit","HP%",0.144,0.252,0.432,null,null,null,null,null],"Arines":[3,"Light","Property",0,0,28,196,116,1508,0.1,0.5,0,0.15,"Vault","Head","Holy Gaze","HP",97,169,292,null,null,null,null,null],"Bernie":[4,"Wind","Water",30,270,0,0,104,1768,0.2,0.5,0,0,"Very Front","Gloves","Stealer Hand","ATK%",0.144,0.252,0.36,null,null,null,null,null],"Darian":[5,"Water","Fire",35,385,0,0,81,1701,0.05,1,0,0,"Vault","Weapon","Revelatio","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Glacia":[5,"Water","Fire",0,0,10,110,213,4473,0.1,0.5,0,0.2,"Very Front","Weapon","Frost Queen","MRES",null,0.0945,0.162,"HP","MATK","MRES","MRES","HP%"],"Helena":[5,"Light","Property",0,0,32,352,96,2016,0.1,0.5,0,0.1,"Very Front","Head","Top Idol","MATK",null,47,67,"HP","MATK","MRES","MRES","HP%"],"Hikage":[5,"Wind","Water",32,352,0,0,91,1911,0.1,1,0,0,"Very Front","Weapon","Hinata's Knife","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Ingrid":[3,"Water","Fire",28,196,0,0,124,1612,0.25,0.25,0,0,"Very Front","Weapon","Double Trouble","ATK",16,27,40,null,null,null,null,null],"Jayden":[4,"Light","Property",0,0,20,180,182,3094,0,0,0,0,"Vault","Accessory","J Collection","MATK",22,38,54,null,null,null,null,null],"Justia":[5,"Light","Property",32,352,0,0,101,2121,0.1,0.5,0,0,"Very Front","Weapon","Royaldite","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Lathel":[5,"Fire","Wind",25,275,0,0,137,2877,0.1,0.5,0.1,0,"Very Front","Body","Artha Lugo","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Nartas":[5,"Dark","Property",0,0,36,396,70,1470,0.1,0.75,0,0,"Very Front","Gloves","Seal of Hell","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Nebris":[5,"Wind","Water",36,396,0,0,70,1470,0.1,0.75,0,0,"Very Front","Weapon","Black Moon","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Rafina":[5,"Water","Fire",20,220,0,0,167,3507,0.1,0.5,0.1,0,"Vault","Gloves","E.P.G.","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Sylvia":[5,"Water","Fire",32,352,0,0,91,1911,0.2,0.5,0,0,"Very Front","Weapon","Primulan","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Venaka":[5,"Wind","Water",0,0,33,363,85,1785,0.1,0.75,0,0.1,"Very Front","Weapon","Sing in Harmony","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Wiggle":[3,"Fire","Wind",47,329,0,0,6,78,0.1,0.5,0,0,"Very Front","Weapon","Dangerous Bomb","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Zenith":[5,"Wind","Water",18,198,0,0,179,3759,0.1,0.5,0.1,0,"Vault","Weapon","Rabbit Ranger","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Carlson":[3,"Water","Fire",10,70,0,0,220,2860,0.1,0.5,0.15,0,"Very Front","Body","Evoren Guard","HP%",0.108,0.189,0.324,null,null,null,null,null],"Cynthia":[3,"Water","Fire",0,0,30,210,104,1352,0.1,0.5,0,0,"Very Front","Accessory","Frozen Ruby","MATK%",0.108,0.189,0.27,null,null,null,null,null],"Eclipse":[5,"Dark","Property",0,0,28,308,119,2499,0.1,0.5,0,0.1,"Vault","Accessory","Star Caller Ornament","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Lecliss":[5,"Wind","Water",12,132,0,0,215,4515,0.1,0.5,0.1,0,"Very Front","Head","Soul Cortana","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Liatris":[5,"Fire","Wind",32,352,0,0,96,2016,0.1,0.75,0,0,"Vault","Weapon","Lunar Piercer","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Liberta":[5,"Fire","Wind",17,187,0,0,185,3885,0.1,0.5,0.1,0,"Very Front","Accessory","Dark Rosarium","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Morpeah":[5,"Water","Fire",0,0,27,297,132,2772,0.1,0.5,0,0,"Vault","Accessory","La Hypnos","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Olivier":[5,"Light","Property",0,0,31,341,97,2037,0.1,1,0,0,"Very Front","Weapon","Tyrfing I","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Olstein":[5,"Wind","Water",0,0,24,264,143,3003,0.1,0.5,0,0.1,"Vault","Head","Verum Lux","HP%",null,0.315,0.54,"HP","MATK","MRES","MRES","HP%"],"Remnunt":[3,"Water","Fire",26,182,0,0,131,1703,0.2,0.5,0,0,"Vault","Weapon","Arbalest","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Teresse":[5,"Water","Fire",12,132,0,0,215,4515,0.1,0.5,0.1,0,"Very Front","Weapon","Gravior","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Ventana":[5,"Light","Property",35,385,0,0,71,1491,0.2,0.5,0,0,"Very Front","Weapon","Purple Moon","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Angelica":[5,"Light","Property",0,0,22,242,157,3297,0.1,1,0,0,"Very Front","Weapon","Evil Sword Jormun","CDMG",null,0.63,0.9,"HP","CDMG","DEF","CDMG","CR"],"Beatrice":[3,"Fire","Wind",28,196,0,0,134,1742,0,0,0,0,"Very Front","Weapon","Earth Shaker","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Eleaneer":[5,"Dark","Property",32,352,0,0,91,1911,0.2,0.5,0,0,"Very Front","Weapon","Freischutz","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Lisianne":[4,"Wind","Water",0,0,26,234,123,2091,0.1,0.5,0,0.2,"Vault","Accessory","Amitie","MATK",22,38,54,null,null,null,null,null],"Lucrezia":[4,"Dark","Property",0,0,34,306,84,1428,0.1,0.5,0,0.1,"Very Front","Accessory","Winged Skull","MATK%",0.144,0.252,0.36,null,null,null,null,null],"Luvencia":[5,"Dark","Property",29,319,0,0,111,2331,0.1,1,0,0,"Very Front","Weapon","Superbia","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Michaela":[5,"Light","Property",0,0,30,330,93,1953,0.15,1,0,0.05,"Vault","Weapon","Prelude","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Refithea":[5,"Light","Property",0,0,17,187,185,3885,0.1,0.5,0,0.1,"Vault","Body","Little Fairy","MRES",null,0.0945,0.162,"HP","MATK","MRES","MRES","HP%"],"Yozakura":[5,"Wind","Water",0,0,34,374,88,1848,0.05,0.5,0.1,0,"Very Front","Weapon","Expandable Pile Bunker Gauntlets","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Anastasia":[5,"Fire","Wind",34,374,0,0,88,1848,0.1,0.5,0,0,"Very Front","Weapon","M.A.I.D. C","CDMG",null,0.63,0.9,"HP","CDMG","DEF","CDMG","CR"],"Granhildr":[5,"Light","Property",12,132,0,0,227,4767,0.1,0.5,0,0,"Very Front","Weapon","Freinir","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Priestess":[5,"Light","Property",0,0,31,341,75,1575,0.2,1,0,0.1,"Vault","Weapon","Staff","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Rigenette":[3,"Wind","Water",25,175,0,0,137,1781,0.2,0.5,0,0,"Vault","Weapon","Hunter's Bow","ATK",16,27,40,null,null,null,null,null],"Wilhelmina":[5,"Water","Fire",29,319,0,0,111,2331,0.1,1,0,0,"Very Front","Weapon","Fleur Stinger","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Scheherazade":[5,"Water","Fire",0,0,35,385,78,1638,0.1,0.5,0,0.1,"Very Front","Weapon","Plentithoum","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Sword Maiden":[5,"Light","Property",0,0,34,374,83,1743,0.1,0.5,0,0.1,"Vault","Weapon","Sword-and-Scales Staff","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Goblin Slayer":[5,"Fire","Wind",26,286,0,0,131,2751,0.1,0.5,0.1,0,"Very Front","Weapon","Short Sword","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"High Elf Archer":[5,"Wind","Water",34,374,0,0,98,2058,0,1,0,0,"Vault","Weapon","Yew Wood Bow","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Justia (Sacred)":[5,"Light","Property",32,352,0,0,101,2121,0.1,0.5,0,0,"Very Front","Weapon","Mistilsteinn","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"]};

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

function patchCharactersFromCache(){
  characters=characters.map(function(c){
    const a=CHARACTER_FALLBACK_CACHE[c.Name];
    if(!a)return c;
    c.RARITY=Number(a[0])||c.RARITY;
    c.ELE=a[1]||c.ELE;
    c.RES=a[2]||c.RES;
    c.ATK0=Number(a[3])||0;
    c.ATK=Number(a[4])||0;
    c.MATK0=Number(a[5])||0;
    c.MATK=Number(a[6])||0;
    c.HP0=Number(a[7])||0;
    c.HP=Number(a[8])||0;
    c.CR=Number(a[9])||0;
    c.CDMG=Number(a[10])||0;
    c.DEF=Number(a[11])||0;
    c.MRES=Number(a[12])||0;
    c.TARGET=a[13]||c.TARGET;
    c.EXSLOT=a[14]||null;
    c.EXNAME=a[15]||null;
    c.EXSTAT=a[16]||null;
    c["EX R"]=a[17];
    c["EX SR"]=a[18];
    c["EX UR"]=a[19];
    c.ENG_LIFE=a[20]||null;
    c.ENG_STR=a[21]||null;
    c.ENG_PSV=a[22]||null;
    c.AWA1=a[23]||null;
    c.AWA2=a[24]||null;
    c.__id=c.__id||slug(c.Name);
    return c;
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
  patchCharactersFromCache();
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
      characters=Object.keys(CHARACTER_FALLBACK_CACHE).map(function(name){
        const a=CHARACTER_FALLBACK_CACHE[name];
        return {
          __id:slug(name),Name:name,RARITY:Number(a[0])||5,ELE:a[1],RES:a[2],
          ATK0:Number(a[3])||0,ATK:Number(a[4])||0,MATK0:Number(a[5])||0,MATK:Number(a[6])||0,
          HP0:Number(a[7])||0,HP:Number(a[8])||0,CR:Number(a[9])||0,CDMG:Number(a[10])||0,
          DEF:Number(a[11])||0,MRES:Number(a[12])||0,TARGET:a[13],
          EXSLOT:a[14],EXNAME:a[15],EXSTAT:a[16],"EX R":a[17],"EX SR":a[18],"EX UR":a[19],
          ENG_LIFE:a[20],ENG_STR:a[21],ENG_PSV:a[22],AWA1:a[23],AWA2:a[24]
        };
      });
      gearTables={main:{},sub:{},refine:{}};
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
  const c=getChar(),g=gearState[slot];
  if(isExTier(g.tier)){
    if(hasExclusiveForTier(c,slot,g.tier)){
      const item=matchingCatalogExclusive(c,slot,g.tier);
      const label=(item&&item.name_en?item.name_en:(c.EXNAME||"Exclusive Gear"))+" · "+g.tier+" · EX";
      const value=item?item.variant_id:"__auto_ex__";
      return '<option value="'+value+'" selected>'+label+"</option>";
    }
    return '<option value="" selected>-</option>';
  }
  const rows=catalogRowsForSlot(slot).filter(function(r){return r.category!=="Exclusive";});
  return '<option value="">Manual / Custom</option>'+rows.map(function(r){
    const label=(r.name_en||r.weapon_id)+" · "+r.tier+(r.category==="Monster"?" · Fiend":"");
    return '<option value="'+r.variant_id+'" '+(current===r.variant_id?"selected":"")+'>'+label+"</option>";
  }).join("");
}
function getCatalogGear(id){return gearCatalog.find(function(r){return r.variant_id===id;})||null;}
function isExTier(tier){return /^EX\s+(R|SR|UR)$/.test(String(tier||""));}
function exKeyForTier(tier){
  return tier==="EX UR"?"EX UR":tier==="EX SR"?"EX SR":tier==="EX R"?"EX R":null;
}
function hasExclusiveForTier(c,slot,tier){
  const key=exKeyForTier(tier);
  const raw=key?c[key]:null;
  return !!(key && c.EXSLOT===slot && c.EXSTAT && raw!==null && raw!==undefined && raw!=="" && raw!=="-");
}
function matchingCatalogExclusive(c,slot,tier){
  return gearCatalog.find(function(r){
    return r.category==="Exclusive" && r.slot===slot && r.tier===tier && catalogMatchesCharacter(r,c);
  })||null;
}
function syncExclusiveGearForSlot(slot){
  const c=getChar(),g=gearState[slot];
  if(isExTier(g.tier) && hasExclusiveForTier(c,slot,g.tier)){
    const item=matchingCatalogExclusive(c,slot,g.tier);
    g.catalogId=item?item.variant_id:"";
    g.autoExclusive=true;
  }else{
    if(g.autoExclusive)g.catalogId="";
    g.autoExclusive=false;
  }
}
function syncAllExclusiveGear(){
  Object.keys(gearState).forEach(syncExclusiveGearForSlot);
}

function applyCatalogGear(slot,id){
  const g=gearState[slot];
  if(id==="__auto_ex__"){syncExclusiveGearForSlot(slot);return;}
  g.catalogId=id||"";
  g.autoExclusive=false;
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
    syncExclusiveGearForSlot(slot);
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
      if(isExTier(g.tier)){
        gearSelect.disabled=true;
      }else{
        gearSelect.disabled=false;
        gearSelect.value=g.catalogId||"";
      }
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
  gearState=clone(DEFAULT_GEAR);syncAllExclusiveGear();buildGearUI();
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
        if(e.target.dataset.k==="tier"){
          g.catalogId="";
          g.autoExclusive=false;
          syncExclusiveGearForSlot(slot);
          buildGearUI();
          render();
          return;
        }
        refreshMainOptions();
      }
      if(e.target.dataset.sub!=null)g.subs[+e.target.dataset.sub]=e.target.value;
      if(e.target.dataset.ref!=null)g.ref[+e.target.dataset.ref]=e.target.value;
      render();return;
    }
    if(e.target.id==="character"){
      updateLevelOptions();
      updateCostumeOptions();
      syncAllExclusiveGear();
      buildGearUI();
      render();
      return;
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
  if(!isExTier(tier) || c.EXSLOT!==slot || !c.EXSTAT)return null;
  const key=exKeyForTier(tier),raw=key?c[key]:null;
  if(raw==="-"||raw===""||raw==null)return null;
  const named=matchingCatalogExclusive(c,slot,tier);
  return {
    stat:c.EXSTAT,
    value:Number(raw)||0,
    name:(named&&named.name_en)||c.EXNAME||"Exclusive Gear",
    source:named?"BD2DB + Sheet":"Sheet"
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