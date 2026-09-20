const SUPABASE_URL = "https://zhjasralevblmvqthqln.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoamFzcmFsZXZibG12cXRocWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NDM1MjQsImV4cCI6MjEwNTMxOTUyNH0.OcrncbhHVr1VLxrh5Y4wh1PhsfATdMWzyG9KCbutrwc";
const SHEET_ID = "1aNXv7zzY3G4YqqRhInpfIN9ei4skCf2iGYCG9oYyQ1o";
const BD2DB_IMAGE_HOST = "https://image-bd2db.souseha.com";
const COSTUME_MEDIA_FALLBACK = {"venaka--dj":"Venaka_1","glacia--alice":"Glacia_1","julie--healer":"Julie_1","blade--apostle":"Blade_1","gray--vanguard":"Gray_3","rou--stray-cat":"Rou_4","rou--white-cat":"Rou_1","seir--new-hire":"Seir_3","levia--overheat":"Levia_3","loen--last-hope":"Loen_1","maria--archmage":"Maria_1","sylvia--admiral":"Sylvia_3","yuri--whitebolt":"Yuri_1","celia--the-curse":"Celia_1","gray--pool-party":"Gray_4","helena--top-idol":"Helena_1","morpeah--apostle":"Morpeah_3","nebris--new-hire":"Nebris_3","olivier--apostle":"Olivier_3","blade--young-lady":"Blade_2","elise--naive-lady":"Elise_3","gynt--lugo-hunter":"Gynt_1","rafina--game-club":"Rafina_3","seir--b-rank-idol":"Seir_2","andrew--specialist":"Andrew_2","dalvi--bright-moon":"Dalvi_1","elise--code-name-o":"Elise_2","elise--lovely-lady":"Elise_1","emma--school-queen":"Emma_2","justia--kendo-club":"Justia_4","justia--pool-party":"Justia_5","lathel--homunculus":"Lathel_3","lathel--pool-party":"Lathel_6","luvencia--wild-dog":"Luvencia_2","rou--nature-s-claw":"Rou_3","rubia--maid-bikini":"Rubia_4","rubia--maid-name-c":"Rubia_3","zenith--robin-hood":"Zenith_1","alec--sword-breaker":"Alec_2","dalvi--tricky-lover":"Dalvi_3","granhildr--the-void":"Granhildr_1","helena--b-rank-idol":"Helena_2","lathel--dark-knight":"Lathel_4","nekyndalia--deadeye":"Nekyndalia_1","rafina--code-name-a":"Rafina_2","samay--kind-student":"Samay_2","tyr--innocent-bunny":"Tyr_2","venaka--wind-dancer":"Venaka_2","ventana--snow-white":"Ventana_1","yuri--comeback-idol":"Yuri_2","andrew--loyal-butler":"Andrew_1","angelica--pool-party":"Angelica_2","angelica--the-fallen":"Angelica_1","diana--anti-dystopia":"Diana_2","eclipse--dream-bride":"Eclipse_4","granhildr--boo-ghost":"Granhildr_3","gray--b-rank-manager":"Gray_2","ikaruga--noble-flame":"Ikaruga_1","justia--white-reaper":"Justia_1","kry--violent-student":"Kry_2","lecliss--killer-doll":"Lecliss_1","liatris--maid-name-r":"Liatris_3","rafina--steel-engine":"Rafina_1","rou--red-riding-hood":"Rou_2","sylvia--bikini-agent":"Sylvia_4","wiggle--bomb-fanatic":"Wiggle_1","alec--the-destruction":"Alec_1","angelica--neon-savior":"Angelica_3","eleaneer--b-rank-idol":"Eleaneer_2","ingrid--kardis-bullet":"Ingrid_1","justia--blood-glutton":"Justia_3","liatris--neon-stalker":"Liatris_2","liatris--rodev-s-star":"Liatris_1","liberta--miracle-rose":"Liberta_3","loen--celebrity-bunny":"Loen_3","olivier--fallen-wings":"Olivier_1","roxy--emerging-desire":"Roxy_2","samay--kind-liberator":"Samay_1","sonya--shadowed-dream":"Sonya_1","sylvia--desert-flower":"Sylvia_1","teresse--medical-club":"Teresse_2","anastasia--gentle-maid":"Anastasia_1","aquila--savage-warrior":"Aquila_1","dalvi--summer-vacation":"Dalvi_2","eleaneer--shadow-bunny":"Eleaneer_3","goblin-slayer--orcbolg":"GoblinSlayer_1","helena--sunny-inn-hand":"Helena_3","lecliss--android-queen":"Lecliss_2","liberta--dark-saintess":"Liberta_2","liberta--onsen-manager":"Liberta_1","nartas--anonymous-sage":"Nartas_1","olstein--fiend-scholar":"Olstein_1","remnunt--combat-doctor":"Remnunt_1","roxy--respected-master":"Roxy_1","seir--demon-s-daughter":"Seir_1","ventana--comeback-idol":"Ventana_2","yomi--gentle-destroyer":"Yomi_1","celia--masquerade-bunny":"Celia_3","darian--prophetic-dream":"Darian_1","eclipse--beach-vacation":"Eclipse_3","eris--your-very-own-cat":"Eris_2","granhildr--combat-medic":"Granhildr_4","justia--knight-of-blood":"Justia_2","kry--liberated-marauder":"Kry_1","lathel--lonely-survivor":"Lathel_2","luvencia--deal-snatcher":"Luvencia_1","mamonir--miracle-marine":"Mamonir_2","mamonir--night-of-death":"Mamonir_1","morpeah--beach-vacation":"Morpeah_1","morpeah--daydream-bunny":"Morpeah_2","olivier--faithful-wings":"Olivier_2","olivier--retired-legend":"Olivier_4","palette--miracle-violet":"Palette_2","sylvia--the-sword-queen":"Sylvia_2","tyr--starlight-guardian":"Tyr_1","yumi--dancing-snowflake":"Yumi_1","anastasia--fire-graffiti":"Anastasia_2","diana--magical-innovator":"Diana_3","eclipse--dimension-witch":"Eclipse_1","eclipse--nightmare-bunny":"Eclipse_2","elpis--hand-of-salvation":"Elpis_1","emma--haggard-delinquent":"Emma_1","fred--lugo-defense-force":"Fred_1","granhildr--comeback-idol":"Granhildr_2","layla--anvil-of-creation":"Layla_1","levia--night-of-jealousy":"Levia_2","luvencia--ocean-vanguard":"Luvencia_3","palette--shattered-dream":"Palette_1","refithea--poolside-fairy":"Refithea_3","refithea--the-gluttonous":"Refithea_1","rigenette--little-hunter":"Rigenette_1","scheherazade--pool-party":"Scheherazade_4","teresse--beachside-angel":"Teresse_3","wilhelmina--frozen-queen":"Wilhelmina_3","wilhelmina--iron-monarch":"Wilhelmina_1","blade--onsen-swordfighter":"Blade_3","carlson--mercenary-knight":"Carlson_1","darian--bittersweet-bunny":"Darian_2","eris--esteemed-adventurer":"Eris_1","hikage--kind-ruthlessness":"Hikage_1","lucrezia--seductive-wings":"Lucrezia_1","scheherazade--code-name-s":"Scheherazade_3","scheherazade--lapis-witch":"Scheherazade_1","zenith--poolside-guardian":"Zenith_2","arines--priest-of-vitality":"Arines_1","lisianne--wandering-priest":"Lisianne_1","lydia--apprentice-spearman":"Lydia_1","rubia--thorn-of-the-desert":"Rubia_1","sonya--little-pumpkin-girl":"Sonya_2","tenka-izumo--ame-no-mitori":"TenkaIzumo_1","wiggle--bomb-in-the-hoodie":"Wiggle_2","granadair--queen-of-gluttis":"Granadair_1","jayden--manga-research-club":"Jayden_2","kyouka-uzen--eternal-chains":"KyoukaUzen_1","michaela--acting-archbishop":"Michaela_3","michaela--beachside-justice":"Michaela_1","nebris--laid-back-lifeguard":"Nebris_1","rubia--empress-of-the-ocean":"Rubia_2","ventana--onsen-practitioner":"Ventana_3","eleaneer--piercing-magic-bow":"Eleaneer_1","lathel--promise-of-vengeance":"Lathel_5","nebris--labyrinth-gatekeeper":"Nebris_2","olstein--sage-of-blue-clouds":"Olstein_2","wilhelmina--water-park-queen":"Wilhelmina_2","bernie--righteous-raider-girl":"Bernie_1","michaela--queen-of-signatures":"Michaela_2","refithea--pure-white-blessing":"Refithea_2","teresse--angel-of-destruction":"Teresse_1","yozakura--fists-of-conviction":"Yozakura_1","glacia--disciplinary-committee":"Glacia_2","gray--sharpshooter-of-the-mist":"Gray_1","jayden--beautiful-girl-devotee":"Jayden_1","lathel--medicinal-herb-tracker":"Lathel_1","diana--adventurer-of-the-unknown":"Diana_1","justia-sacred--reclaimed-destiny":"SacredJustia_1","priestess--earth-mother-believer":"Priestess_1","loen--track-and-field-team-member":"Loen_2","glacia--heavenly-guardian-successor":"Glacia_3","levia--track-and-field-team-captain":"Levia_1","celia--descendant-of-the-great-witch":"Celia_2","scheherazade--magic-school-professor":"Scheherazade_2","sword-maiden--supreme-god-archbishop":"SwordMaiden_1","beatrice--mighty-warrior-of-the-tribe":"Beatrice_1","high-elf-archer--daughter-of-starwind":"HighElfArcher_1","cynthia--warmth-within-the-severe-cold":"Cynthia_1","granadair--shrine-maiden-of-purification":"Granadair_2"};
const CHARACTER_FALLBACK_CACHE = {"Kry":[4,"Dark","Property",28,252,0,0,126,2142,0.1,0.5,0,0,"Very Front","Weapon","Crying Devil","CR",0.0479,0.0839,0.1199,null,null,null,null,null],"Rou":[5,"Dark","Property",28,308,0,0,126,2646,0.1,0.5,0,0,"Very Front","Weapon","Dark Restraint","CR",null,0.1049,0.1499,"HP","CDMG","DEF","CDMG","CR"],"Tyr":[5,"Wind","Water",36,396,0,0,75,1575,0.1,0.5,0,0,"Very Front","Weapon","Brionac","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Alec":[5,"Fire","Wind",38,418,0,0,74,1554,0,0,0,0,"Very Front","Weapon","Predator","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Emma":[3,"Light","Property",35,245,0,0,92,1196,0,0,0,0,"Very Front","Accessory","Scholar's Emblem","CR",0.036,0.063,0.09,null,null,null,null,null],"Eris":[5,"Fire","Wind",34,374,0,0,88,1848,0.1,0.5,0,0,"Very Front","Weapon","Eris' Sword","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Fred":[3,"Wind","Water",12,84,0,0,215,2795,0.1,0.5,0.1,0,"Very Front","Body","Lugo Shirt","HP%",0.108,0.189,0.324,null,null,null,null,null],"Gray":[5,"Wind","Water",30,330,0,0,104,2184,0.2,0.5,0,0,"Vault","Weapon","Diathema","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Gynt":[3,"Wind","Water",30,210,0,0,104,1352,0.2,0.5,0,0,"Vault","Gloves","Handmade","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Loen":[5,"Fire","Wind",0,0,29,319,120,2520,0.05,1,0,0,"Vault","Weapon","Lost Magic","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Roxy":[5,"Water","Fire",0,0,37,407,69,1449,0.05,1,0,0,"Vault","Weapon","Roxy's Staff","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Seir":[5,"Dark","Property",0,0,15,165,208,4368,0.1,0.5,0,0,"Very Front","Accessory","Arch Demons","HP%",null,0.315,0.54,"HP","MATK","MRES","MRES","HP%"],"Yomi":[5,"Wind","Water",31,341,0,0,107,2247,0.1,0.5,0,0,"Very Front","Weapon","Roaring Sword Ragnarok","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Yumi":[5,"Water","Fire",0,0,30,330,96,2016,0.1,1,0,0.15,"Very Front","Weapon","Kurokage's Fan","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Yuri":[5,"Light","Property",33,363,0,0,95,1995,0.1,0.5,0,0,"Very Front","Weapon","Black Snow Tiger Sword","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Blade":[5,"Dark","Property",39,429,0,0,50,1050,0.1,0.75,0,0,"Very Front","Weapon","Blade","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Celia":[5,"Dark","Property",0,0,25,275,122,2562,0.2,0.5,0,0.2,"Vault","Accessory","Terra Concealer","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Dalvi":[5,"Wind","Water",0,0,32,352,96,2016,0.1,0.75,0,0,"Vault","Head","Thousand-Year-Long Hairpin","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Diana":[5,"Wind","Water",0,0,16,176,191,4011,0.1,0.5,0,0.1,"Vault","Head","White Pixie","HP%",null,0.315,0.54,"HP","MATK","MRES","MRES","HP%"],"Elise":[5,"Fire","Wind",25,275,0,0,137,2877,0.1,0.5,0,0.1,"Vault","Body","Rose Selection","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Elpis":[4,"Dark","Property",0,0,25,225,145,2465,0.1,0.5,0,0,"Vault","Accessory","Akrasion","HP%",0.108,0.189,0.324,null,null,null,null,null],"Julie":[3,"Wind","Water",0,0,32,224,93,1209,0.1,0.5,0,0.15,"Very Front","Head","Spirit Ribbon","MATK",16,27,40,null,null,null,null,null],"Layla":[4,"Light","Property",32,288,0,0,101,1717,0.1,0.5,0,0,"Very Front","Weapon","Pigsmith","ATK%",0.144,0.252,0.36,null,null,null,null,null],"Levia":[5,"Fire","Wind",0,0,36,396,70,1470,0.1,0.75,0,0,"Vault","Weapon","Tome of Liberation","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Lydia":[3,"Water","Fire",24,168,0,0,151,1963,0.1,0.5,0,0,"Very Front","Weapon","Simple Spear","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Maria":[3,"Dark","Property",0,0,32,224,91,1183,0.1,0.75,0,0.1,"Very Front","Weapon","Ruiner","MATK%",0.108,0.189,0.27,null,null,null,null,null],"Rubia":[5,"Fire","Wind",32,352,0,0,91,1911,0.2,0.5,0,0,"Very Front","Weapon","Carneliana","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Samay":[4,"Dark","Property",0,0,28,252,126,2142,0.1,0.5,0,0,"Very Front","Gloves","Seventh Hell","MATK",22,38,54,null,null,null,null,null],"Sonya":[5,"Dark","Property",0,0,37,407,69,1449,0.1,0.5,0,0,"Vault","Accessory","Ater Hecate","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Andrew":[4,"Fire","Wind",22,198,0,0,164,2788,0.1,0.5,0,0,"Very Front","Body","Demon's Suit","HP%",0.144,0.252,0.432,null,null,null,null,null],"Arines":[3,"Light","Property",0,0,28,196,116,1508,0.1,0.5,0,0.15,"Vault","Head","Holy Gaze","HP",97,169,292,null,null,null,null,null],"Bernie":[4,"Wind","Water",30,270,0,0,104,1768,0.2,0.5,0,0,"Very Front","Gloves","Stealer Hand","ATK%",0.144,0.252,0.36,null,null,null,null,null],"Darian":[5,"Water","Fire",35,385,0,0,81,1701,0.05,1,0,0,"Vault","Weapon","Revelatio","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Glacia":[5,"Water","Fire",0,0,10,110,213,4473,0.1,0.5,0,0.2,"Very Front","Weapon","Frost Queen","MRES",null,0.0945,0.162,"HP","MATK","MRES","MRES","HP%"],"Helena":[5,"Light","Property",0,0,32,352,96,2016,0.1,0.5,0,0.1,"Very Front","Head","Top Idol","MATK",null,47,67,"HP","MATK","MRES","MRES","HP%"],"Hikage":[5,"Wind","Water",32,352,0,0,91,1911,0.1,1,0,0,"Very Front","Weapon","Hinata's Knife","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Ingrid":[3,"Water","Fire",28,196,0,0,124,1612,0.25,0.25,0,0,"Very Front","Weapon","Double Trouble","ATK",16,27,40,null,null,null,null,null],"Jayden":[4,"Light","Property",0,0,20,180,182,3094,0,0,0,0,"Vault","Accessory","J Collection","MATK",22,38,54,null,null,null,null,null],"Justia":[5,"Light","Property",32,352,0,0,101,2121,0.1,0.5,0,0,"Very Front","Weapon","Royaldite","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Lathel":[5,"Fire","Wind",25,275,0,0,137,2877,0.1,0.5,0.1,0,"Very Front","Body","Artha Lugo","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Nartas":[5,"Dark","Property",0,0,36,396,70,1470,0.1,0.75,0,0,"Very Front","Gloves","Seal of Hell","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Nebris":[5,"Wind","Water",36,396,0,0,70,1470,0.1,0.75,0,0,"Very Front","Weapon","Black Moon","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Rafina":[5,"Water","Fire",20,220,0,0,167,3507,0.1,0.5,0.1,0,"Vault","Gloves","E.P.G.","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Sylvia":[5,"Water","Fire",32,352,0,0,91,1911,0.2,0.5,0,0,"Very Front","Weapon","Primulan","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Venaka":[5,"Wind","Water",0,0,33,363,85,1785,0.1,0.75,0,0.1,"Very Front","Weapon","Sing in Harmony","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Wiggle":[3,"Fire","Wind",47,329,0,0,6,78,0.1,0.5,0,0,"Very Front","Weapon","Dangerous Bomb","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Zenith":[5,"Wind","Water",18,198,0,0,179,3759,0.1,0.5,0.1,0,"Vault","Weapon","Rabbit Ranger","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Carlson":[3,"Water","Fire",10,70,0,0,220,2860,0.1,0.5,0.15,0,"Very Front","Body","Evoren Guard","HP%",0.108,0.189,0.324,null,null,null,null,null],"Cynthia":[3,"Water","Fire",0,0,30,210,104,1352,0.1,0.5,0,0,"Very Front","Accessory","Frozen Ruby","MATK%",0.108,0.189,0.27,null,null,null,null,null],"Eclipse":[5,"Dark","Property",0,0,28,308,119,2499,0.1,0.5,0,0.1,"Vault","Accessory","Star Caller Ornament","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Lecliss":[5,"Wind","Water",12,132,0,0,215,4515,0.1,0.5,0.1,0,"Very Front","Head","Soul Cortana","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Liatris":[5,"Fire","Wind",32,352,0,0,96,2016,0.1,0.75,0,0,"Vault","Weapon","Lunar Piercer","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Liberta":[5,"Fire","Wind",17,187,0,0,185,3885,0.1,0.5,0.1,0,"Very Front","Accessory","Dark Rosarium","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Morpeah":[5,"Water","Fire",0,0,27,297,132,2772,0.1,0.5,0,0,"Vault","Accessory","La Hypnos","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Olivier":[5,"Light","Property",0,0,31,341,97,2037,0.1,1,0,0,"Very Front","Weapon","Tyrfing I","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Olstein":[5,"Wind","Water",0,0,24,264,143,3003,0.1,0.5,0,0.1,"Vault","Head","Verum Lux","HP%",null,0.315,0.54,"HP","MATK","MRES","MRES","HP%"],"Remnunt":[3,"Water","Fire",26,182,0,0,131,1703,0.2,0.5,0,0,"Vault","Weapon","Arbalest","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Teresse":[5,"Water","Fire",12,132,0,0,215,4515,0.1,0.5,0.1,0,"Very Front","Weapon","Gravior","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Ventana":[5,"Light","Property",35,385,0,0,71,1491,0.2,0.5,0,0,"Very Front","Weapon","Purple Moon","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Angelica":[5,"Light","Property",0,0,22,242,157,3297,0.1,1,0,0,"Very Front","Weapon","Evil Sword Jormun","CDMG",null,0.63,0.9,"HP","CDMG","DEF","CDMG","CR"],"Beatrice":[3,"Fire","Wind",28,196,0,0,134,1742,0,0,0,0,"Very Front","Weapon","Earth Shaker","ATK%",0.108,0.189,0.27,null,null,null,null,null],"Eleaneer":[5,"Dark","Property",32,352,0,0,91,1911,0.2,0.5,0,0,"Very Front","Weapon","Freischutz","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"Lisianne":[4,"Wind","Water",0,0,26,234,123,2091,0.1,0.5,0,0.2,"Vault","Accessory","Amitie","MATK",22,38,54,null,null,null,null,null],"Lucrezia":[4,"Dark","Property",0,0,34,306,84,1428,0.1,0.5,0,0.1,"Very Front","Accessory","Winged Skull","MATK%",0.144,0.252,0.36,null,null,null,null,null],"Luvencia":[5,"Dark","Property",29,319,0,0,111,2331,0.1,1,0,0,"Very Front","Weapon","Superbia","ATK",null,47,67,"HP","ATK","DEF","ATK%","ELE%"],"Michaela":[5,"Light","Property",0,0,30,330,93,1953,0.15,1,0,0.05,"Vault","Weapon","Prelude","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Refithea":[5,"Light","Property",0,0,17,187,185,3885,0.1,0.5,0,0.1,"Vault","Body","Little Fairy","MRES",null,0.0945,0.162,"HP","MATK","MRES","MRES","HP%"],"Yozakura":[5,"Wind","Water",0,0,34,374,88,1848,0.05,0.5,0.1,0,"Very Front","Weapon","Expandable Pile Bunker Gauntlets","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Anastasia":[5,"Fire","Wind",34,374,0,0,88,1848,0.1,0.5,0,0,"Very Front","Weapon","M.A.I.D. C","CDMG",null,0.63,0.9,"HP","CDMG","DEF","CDMG","CR"],"Granhildr":[5,"Light","Property",12,132,0,0,227,4767,0.1,0.5,0,0,"Very Front","Weapon","Freinir","HP%",null,0.315,0.54,"HP","ATK","DEF","DEF","HP%"],"Priestess":[5,"Light","Property",0,0,31,341,75,1575,0.2,1,0,0.1,"Vault","Weapon","Staff","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Rigenette":[3,"Wind","Water",25,175,0,0,137,1781,0.2,0.5,0,0,"Vault","Weapon","Hunter's Bow","ATK",16,27,40,null,null,null,null,null],"Wilhelmina":[5,"Water","Fire",29,319,0,0,111,2331,0.1,1,0,0,"Very Front","Weapon","Fleur Stinger","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Scheherazade":[5,"Water","Fire",0,0,35,385,78,1638,0.1,0.5,0,0.1,"Very Front","Weapon","Plentithoum","MATK%",null,0.315,0.45,"HP","MATK","MRES","MATK%","ELE%"],"Sword Maiden":[5,"Light","Property",0,0,34,374,83,1743,0.1,0.5,0,0.1,"Vault","Weapon","Sword-and-Scales Staff","MATK",null,47,67,"HP","MATK","MRES","MATK%","ELE%"],"Goblin Slayer":[5,"Fire","Wind",26,286,0,0,131,2751,0.1,0.5,0.1,0,"Very Front","Weapon","Short Sword","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"],"High Elf Archer":[5,"Wind","Water",34,374,0,0,98,2058,0,1,0,0,"Vault","Weapon","Yew Wood Bow","CDMG",null,0.63,0.9,"HP","ATK","DEF","ATK%","ELE%"],"Justia (Sacred)":[5,"Light","Property",32,352,0,0,101,2121,0.1,0.5,0,0,"Very Front","Weapon","Mistilsteinn","ATK%",null,0.315,0.45,"HP","ATK","DEF","ATK%","ELE%"]};
const COSTUME_VARIABLE_FALLBACK_CACHE = {"venaka--dj":[[2,"700%",{"0":"300%","1":"300%","2":"375%","3":"450%","4":"525%","5":"600%"},"=SWITCH($C$4, 0,300%, 1,300%, 2,375%, 3,450%, 4,525%, 5,600%) +IF(E2,100%)"]],"glacia--alice":[[1,"4",{},"=IF($C$4 = 5, 4, 2)"],[3,"1250%",{"0":"200%","1":"400%","2":"600%","3":"600%","4":"800%","5":"1000%"},"=SWITCH($C$4, 0,200%, 1,400%, 2,600%, 3,600%, 4,800%, 5,1000%) +IF(E2,125%) +IF(E3,125%)"],[4,"100%",{"0":"50%","1":"65%","2":"80%","3":"80%","4":"90%","5":"100%"},"=SWITCH($C$4, 0,50%, 1,65%, 2,80%, 3,80%, 4,90%, 5,100%) "]],"julie--healer":[[2,"155%",{"0":"25%","1":"25%","2":"30%","3":"30%","4":"40%","5":"55%"},"=SWITCH($C$4, 0,25%, 1,25%, 2,30%, 3,30%, 4,40%, 5,55%) +IF(E3,100%)"]],"blade--apostle":[[1,"138,978",{},"=DMG(ATK(0%),O20*CRIT(0,0))"],[2,"700%",{"0":"300%","1":"380%","2":"380%","3":"460%","4":"540%","5":"620%"},"=SWITCH($C$4, 0,300%, 1,380%, 2,380%, 3,460%, 4,540%, 5,620%) +IF(E2,80%)"],[3,"39,708",{},"=DMG(ATK(0%),Q20*CRIT(0,0))"],[4,"200%",{"0":"100%","1":"120%","2":"120%","3":"140%","4":"160%","5":"180%"},"=SWITCH($C$4, 0,100%, 1,120%, 2,120%, 3,140%, 4,160%, 5,180%) +IF(E3,20%)"],[5,"10",{},"=IF($C$4 > 1, 10, 8)"]],"gray--vanguard":[[1,"12,905",{},"=DMG(ATK(0%),O55*CRIT(0,0))"],[3,"36,623",{},"=DMG(ATK_E(),Q55*CRIT(0,0))"],[4,"425%",{"0":"125%","1":"215%","2":"295%","3":"295%","4":"365%","5":"425%"},"=SWITCH($C$4, 0,125%, 1,215%, 2,295%, 3,295%, 4,365%, 5,425%)"]],"rou--stray-cat":[[1,"138,978",{},"=DMG(ATK(0%),O128*CRIT(0,0))"],[2,"700%",{"0":"350%","1":"400%","2":"450%","3":"500%","4":"550%","5":"600%"},"=SWITCH($C$4, 0,350%, 1,400%, 2,450%, 3,500%, 4,550%, 5,600%) +IF(E2,50%) +IF(E4,50%)"]],"rou--white-cat":[[1,"548,053",{},"=DMG(HP_E(),O125*CRIT(0,0))"],[2,"212%",{"0":"100%","1":"100%","2":"150%","3":"150%","4":"200%","5":"200%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,150%, 3,150%, 4,200%, 5,200%) +IF(E2,12%)"],[3,"42,686",{},"=DMG(ATK(0%),Q125*CRIT(0,0))"],[4,"215%",{"0":"75%","1":"125%","2":"125%","3":"125%","4":"125%","5":"175%"},"=SWITCH($C$4, 0,75%, 1,125%, 2,125%, 3,125%, 4,125%, 5,175%) +IF(E3,20%) +IF(E4,20%)"]],"seir--new-hire":[[1,"22%",{"0":"10%","1":"12%","2":"15%","3":"17%","4":"20%","5":"22%"},"=SWITCH($C$4, 0,10%, 1,12%, 2,15%, 3,17%, 4,20%, 5,22%)"]],"levia--overheat":[[2,"69,489",{},"=DMG(ATK(0%),P86*CRIT(0,0))"],[3,"350%",{"0":"200%","1":"200%","2":"275%","3":"275%","4":"350%","5":"350%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,275%, 3,275%, 4,350%, 5,350%)"],[4,"198,540",{},"=DMG(ATK(0%),R86*CRIT(0,0))"],[5,"1000%",{"0":"550%","1":"550%","2":"550%","3":"725%","4":"725%","5":"900%"},"=SWITCH($C$4, 0,550%, 1,550%, 2,550%, 3,725%, 4,725%, 5,900%) +IF(E2,50%) +IF(E3,50%)"]],"loen--last-hope":[[1,"148,905",{},"=DMG(ATK(0%),O93*CRIT(0,0))"],[2,"750%",{"0":"300%","1":"370%","2":"440%","3":"510%","4":"580%","5":"650%"},"=SWITCH($C$4, 0,300%, 1,370%, 2,440%, 3,510%, 4,580%, 5,650%) +IF(E2,50%) +IF(E3,50%)"]],"maria--archmage":[[1,"49,635",{},"=DMG(ATK(0%),O100*CRIT(0,0))"],[2,"250%",{"0":"80%","1":"80%","2":"100%","3":"100%","4":"140%","5":"200%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,100%, 3,100%, 4,140%, 5,200%) +IF(E3,50%)"]],"sylvia--admiral":[[2,"700%",{"0":"400%","1":"400%","2":"550%","3":"550%","4":"550%","5":"700%"},"=SWITCH($C$4, 0,400%, 1,400%, 2,550%, 3,550%, 4,550%, 5,700%)"],[3,"7",{"0":"3","1":"3","2":"4","3":"4","4":"4","5":"5"},"=SWITCH($C$4, 0,3, 1,3, 2,4, 3,4, 4,4, 5,5) +IF(E4, 2)"],[4,"19,854",{},"=DMG(ATK(0%),R148*CRIT(0,0))"],[5,"100%",{"0":"45%","1":"67%","2":"67%","3":"67%","4":"85%","5":"85%"},"=SWITCH($C$4, 0,45%, 1,67%, 2,67%, 3,67%, 4,85%, 5,85%) +IF(E2,15%)"]],"yuri--whitebolt":[[2,"82,587",{},"=DMG(ATK(N169),P169*CRIT(0,0))"],[3,"160%",{"0":"80%","1":"80%","2":"95%","3":"110%","4":"125%","5":"140%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,95%, 3,110%, 4,125%, 5,140%) +IF(E3,20%)"]],"celia--the-curse":[[1,"6,948",{},"=DMG(ATK(0%),O23*CRIT(0,0))"],[2,"35%",{"0":"18%","1":"21%","2":"24%","3":"24%","4":"27%","5":"30%"},"=SWITCH($C$4, 0,18%, 1,21%, 2,24%, 3,24%, 4,27%, 5,30%)+IF(E3,5%)"],[3,"65%",{"0":"35%","1":"45%","2":"55%","3":"55%","4":"65%","5":"65%"},"=SWITCH($C$4, 0,35%, 1,45%, 2,55%, 3,55%, 4,65%, 5,65%)"]],"gray--pool-party":[[1,"35,710",{},"=DMG(ATK(0%),O57*CRIT(50%,50%))"],[2,"170%",{"0":"100%","1":"114%","2":"127%","3":"127%","4":"139%","5":"150%"},"=SWITCH($C$4, 0,100%, 1,114%, 2,127%, 3,127%, 4,139%, 5,150%) +IF(E2,10%) +IF(E3,10%)"]],"helena--top-idol":[[1,"70%",{"0":"30%","1":"37%","2":"44%","3":"44%","4":"50%","5":"50%"},"=SWITCH($C$4, 0,30%, 1,37%, 2,44%, 3,44%, 4,50%, 5,50%) +IF(E2,10%) +IF(E4,10%)"],[2,"6",{},"=IF($C$4 = 5, 6, 4)"]],"morpeah--apostle":[[1,"39,708",{},"=DMG(ATK(0),O104*CRIT(0,0))"],[2,"200%",{"0":"100%","1":"100%","2":"125%","3":"150%","4":"175%","5":"200%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,125%, 3,150%, 4,175%, 5,200%)"],[3,"180%",{"0":"100%","1":"100%","2":"115%","3":"130%","4":"145%","5":"160%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,115%, 3,130%, 4,145%, 5,160%) +IF(E3,10%) +IF(E4,10%)"]],"nebris--new-hire":[[2,"15,883",{},"=DMG(ATK(0%),P110*CRIT(0,0))"],[3,"80%",{"0":"40%","1":"40%","2":"55%","3":"55%","4":"70%","5":"70%"},"=SWITCH($C$4, 0,40%, 1,40%, 2,55%, 3,55%, 4,70%, 5,70%) +IF(E2,10%)"],[4,"5,956",{},"=DMG(ATK(0%),R110*CRIT(0,0))"],[5,"30%",{"0":"15%","1":"15%","2":"15%","3":"20%","4":"20%","5":"25%"},"=SWITCH($C$4, 0,15%, 1,15%, 2,15%, 3,20%, 4,20%, 5,25%) +IF(E3,5%)"]],"olivier--apostle":[[2,"3",{},"=IF($C$4 > 2, 3, 2)"],[3,"80%",{"0":"50%","1":"50%","2":"56%","3":"56%","4":"62%","5":"68%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,56%, 3,56%, 4,62%, 5,68%) +IF(E2,6%) +IF(E3,6%)"]],"blade--young-lady":[[1,"29,781",{},"=DMG(ATK(0%),O21*CRIT(0,0))"],[2,"150%",{"0":"50%","1":"50%","2":"70%","3":"90%","4":"110%","5":"130%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,70%, 3,90%, 4,110%, 5,130%) +IF(E2,20%)"],[3,"150%",{"0":"100%","1":"100%","2":"110%","3":"120%","4":"130%","5":"140%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,110%, 3,120%, 4,130%, 5,140%) +IF(E3,10%)"]],"gynt--lugo-hunter":[[1,"63,532",{},"=DMG(ATK(0%),O58*CRIT(0,0))"],[2,"320%",{"0":"100%","1":"100%","2":"125%","3":"125%","4":"175%","5":"250%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,125%, 3,125%, 4,175%, 5,250%) +IF(E3,70%)"]],"rafina--game-club":[[1,"27,795",{},"=DMG(ATK(0%),O119*CRIT(0,0))"],[2,"140%",{"0":"70%","1":"70%","2":"70%","3":"90%","4":"90%","5":"110%"},"=SWITCH($C$4, 0,70%, 1,70%, 2,70%, 3,90%, 4,90%, 5,110%) +IF(E2,15%) +IF(E3,15%)"],[3,"100%",{"0":"50%","1":"50%","2":"75%","3":"75%","4":"100%","5":"100%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,75%, 3,75%, 4,100%, 5,100%)"]],"seir--b-rank-idol":[[1,"3",{},"=IF($C$4 > 1, 3, 2)"],[3,"85%",{"0":"40%","1":"50%","2":"50%","3":"50%","4":"60%","5":"70%"},"=SWITCH($C$4, 0,40%, 1,50%, 2,50%, 3,50%, 4,60%, 5,70%) +IF(E2,15%)"]],"andrew--specialist":[[1,"65%",{"0":"35%","1":"35%","2":"40%","3":"40%","4":"50%","5":"65%"},"=SWITCH($C$4, 0,35%, 1,35%, 2,40%, 3,40%, 4,50%, 5,65%)"]],"dalvi--bright-moon":[[1,"For 2 turns, create a 3,456 HP Energy Guard equal to 150% of Magic ATK. ",{},"=IF($C$4 = 5, \"For 2 turns, create a \"&TXT(O27)&\" HP Energy Guard equal to 150% of Magic ATK. \", \"\")"],[3,"91,328",{},"=DMG(ATK(0%),Q27*CRIT(0,0))"],[4,"460%",{"0":"250%","1":"250%","2":"295%","3":"340%","4":"385%","5":"430%"},"=SWITCH($C$4, 0,250%, 1,250%, 2,295%, 3,340%, 4,385%, 5,430%) +IF(E2,15%) +IF(E4,15%)"]],"elise--code-name-o":[[2,"198,540",{},"=DMG(ATK(0%),P41*CRIT(0,0))"],[3,"1000%",{"0":"500%","1":"600%","2":"700%","3":"700%","4":"800%","5":"900%"},"=SWITCH($C$4, 0,500%, 1,600%, 2,700%, 3,700%, 4,800%, 5,900%) +IF(E2,100%)"]],"elise--lovely-lady":[[1,"43,678",{},"=DMG(ATK(0%),O40*CRIT(0,0))"],[2,"220%",{"0":"90%","1":"115%","2":"140%","3":"140%","4":"165%","5":"185%"},"=SWITCH($C$4, 0,90%, 1,115%, 2,140%, 3,140%, 4,165%, 5,185%) +IF(E2,35%)"],[3,"6",{},"=IF($C$4 = 5, 6, 4)"]],"emma--school-queen":[[1,"323,145",{},"=DMG(HP_E(),O44*CRIT(0,0))"],[2,"125%",{"0":"50%","1":"50%","2":"75%","3":"75%","4":"125%","5":"125%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,75%, 3,75%, 4,125%, 5,125%)"],[3,"19,854",{},"=DMG(ATK(0%),Q44*CRIT(0,0))"],[4,"100%",{},"=IF($C$4 = 5, 100%, 50%)"]],"justia--kendo-club":[[2,"230%",{"0":"90%","1":"120%","2":"150%","3":"150%","4":"175%","5":"200%"},"=SWITCH($C$4, 0,90%, 1,120%, 2,150%, 3,150%, 4,175%, 5,200%) +IF(E2,15%) +IF(E3,15%)"]],"justia--pool-party":[[1,"4",{"0":"2","1":"2","2":"3","3":"3","4":"3","5":"4"},"=SWITCH($C$4, 0,2, 1,2, 2,3, 3,3, 4,3, 5,4)"],[2,"300%",{"0":"150%","1":"185%","2":"210%","3":"210%","4":"245%","5":"270%"},"=SWITCH($C$4, 0,150%, 1,185%, 2,210%, 3,210%, 4,245%, 5,270%) +IF(E2,30%)"]],"lathel--homunculus":[[1,"90%",{"0":"60%","1":"60%","2":"70%","3":"70%","4":"80%","5":"80%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,70%, 3,70%, 4,80%, 5,80%) +IF(E3,10%)"],[2,"6",{},"=IF($C$4 = 5, 6, 4)"],[3,"70%",{},"=IF($C$4 > 0, 50%, 25%) +IF(E2,10%) +IF(E4,10%)"]],"lathel--pool-party":[[1,"34,744",{},"=DMG(ATK(0%),O79*CRIT(100,0))"],[2,"175%",{"0":"75%","1":"93%","2":"111%","3":"111%","4":"128%","5":"145%"},"=SWITCH($C$4, 0,75%, 1,93%, 2,111%, 3,111%, 4,128%, 5,145%) +IF(E2,15%) +IF(E4,15%)"]],"luvencia--wild-dog":[[1,"15,883",{},"=DMG(ATK(0%),O98*CRIT(0,0))"],[2,"80%",{"0":"30%","1":"30%","2":"40%","3":"50%","4":"60%","5":"70%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,40%, 3,50%, 4,60%, 5,70%) +IF(E2,10%)"],[3,"31,766",{},"=DMG(ATK(0%),Q98*CRIT(0,0))"],[4,"160%",{"0":"40%","1":"40%","2":"65%","3":"90%","4":"115%","5":"140%"},"=SWITCH($C$4, 0,40%, 1,40%, 2,65%, 3,90%, 4,115%, 5,140%) +IF(E3,20%)"]],"rou--nature-s-claw":[[1,"46,532",{},"=DMG(HP_E(),O126*CRIT(0,0))"],[2,"18%",{"0":"7%","1":"10%","2":"12%","3":"12%","4":"14%","5":"16%"},"=SWITCH($C$4, 0,7%, 1,10%, 2,12%, 3,12%, 4,14%, 5,16%) +IF(E2,2%)"]],"rubia--maid-bikini":[[1,"29,781",{},"=DMG(ATK(0%),1.5*CRIT(0,0))"],[2,"94,306",{},"=DMG(ATK(0%),P134*CRIT(0,0))"],[3,"475%",{"0":"250%","1":"250%","2":"350%","3":"350%","4":"450%","5":"450%"},"=SWITCH($C$4, 0,250%, 1,250%, 2,350%, 3,350%, 4,450%, 5,450%) +IF(E4,25%)"],[4,"300%",{"0":"150%","1":"150%","2":"150%","3":"200%","4":"200%","5":"250%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,150%, 3,200%, 4,200%, 5,250%) +IF(E2,25%) +IF(E3,25%)"]],"rubia--maid-name-c":[[3,"65,518",{},"=DMG(ATK(50%),Q133*CRIT(0,0))"],[4,"220%",{"0":"120%","1":"120%","2":"140%","3":"160%","4":"180%","5":"200%"},"=SWITCH($C$4, 0,120%, 1,120%, 2,140%, 3,160%, 4,180%, 5,200%) +IF(E2,20%)"]],"zenith--robin-hood":[[1,"4,963",{},"=DMG(ATK(0%),0.25*CRIT(0,0))"],[2,"100%",{"0":"20%","1":"28%","2":"36%","3":"36%","4":"43%","5":"50%"},"=SWITCH($C$4, 0,20%, 1,28%, 2,36%, 3,36%, 4,43%, 5,50%) +IF(E2,25%) +IF(E4,25%)"]],"alec--sword-breaker":[[2,"285%",{"0":"95%","1":"135%","2":"170%","3":"170%","4":"200%","5":"225%"},"=SWITCH($C$4, 0,95%, 1,135%, 2,170%, 3,170%, 4,200%, 5,225%) +IF(E2,60%)"]],"granhildr--the-void":[[1,"0",{},"=DMG(Calculator!AA25,O51*CRIT(0,0))"],[2,"415%",{"0":"200%","1":"250%","2":"250%","3":"300%","4":"350%","5":"400%"},"=SWITCH($C$4, 0,200%, 1,250%, 2,250%, 3,300%, 4,350%, 5,400%) +IF(E3,15%)"],[3,"7",{},"=IF($C$4 > 1, 5, 3) +IF(E2,2)"]],"helena--b-rank-idol":[[2,"115%",{"0":"35%","1":"45%","2":"55%","3":"55%","4":"75%","5":"75%"},"=SWITCH($C$4, 0,35%, 1,45%, 2,55%, 3,55%, 4,75%, 5,75%) +IF(E2,20%) +IF(E4,20%)"],[3,"100%",{"0":"50%","1":"75%","2":"100%","3":"100%","4":"100%","5":"100%"},"=SWITCH($C$4, 0,50%, 1,75%, 2,100%, 3,100%, 4,100%, 5,100%)"],[4,"50%",{},"=IF($C$4 < 5, 25%, 50%)"]],"lathel--dark-knight":[[2,"350%",{"0":"170%","1":"220%","2":"270%","3":"270%","4":"320%","5":"320%"},"=SWITCH($C$4, 0,170%, 1,220%, 2,270%, 3,270%, 4,320%, 5,320%) +IF(E2,15%) +IF(E4,15%)"],[3,"6",{},"=IF($C$4 = 5, 6, 4)"]],"rafina--code-name-a":[[1,"25,810",{},"=DMG(ATK(0%),O118*CRIT(0,0))"],[2,"130%",{"0":"40%","1":"60%","2":"75%","3":"75%","4":"90%","5":"100%"},"=SWITCH($C$4, 0,40%, 1,60%, 2,75%, 3,75%, 4,90%, 5,100%) +IF(E2,15%) +IF(E3,15%)"]],"samay--kind-student":[[2,"50%",{"0":"20%","1":"20%","2":"25%","3":"25%","4":"35%","5":"50%"},"=SWITCH($C$4, 0,20%, 1,20%, 2,25%, 3,25%, 4,35%, 5,50%)"]],"tyr--innocent-bunny":[[1,"59,562",{},"=DMG(ATK(0%),O155*CRIT(0,0))"],[2,"300%",{"0":"125%","1":"175%","2":"175%","3":"225%","4":"225%","5":"275%"},"=SWITCH($C$4, 0,125%, 1,175%, 2,175%, 3,225%, 4,225%, 5,275%) +IF(E2,25%)"],[3,"35,737",{},"=DMG(ATK(0%),Q155*CRIT(0,0))"],[4,"180%",{"0":"100%","1":"100%","2":"130%","3":"130%","4":"160%","5":"160%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,130%, 3,130%, 4,160%, 5,160%) +IF(E3,10%) +IF(E4,10%)"]],"venaka--wind-dancer":[[1,"150%",{"0":"75%","1":"75%","2":"75%","3":"125%","4":"125%","5":"125%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,75%, 3,125%, 4,125%, 5,125%) +IF(E4,25%)"],[2,"79,416",{},"=DMG(ATK(0%),P156*CRIT(0,0))"],[3,"400%",{"0":"200%","1":"200%","2":"250%","3":"250%","4":"300%","5":"350%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,250%, 3,250%, 4,300%, 5,350%) +IF(E2,25%) +IF(E3,25%)"]],"ventana--snow-white":[[1,"89,343",{},"=DMG(ATK(0%),O158*CRIT(0,0))"],[2,"450%",{"0":"200%","1":"245%","2":"285%","3":"285%","4":"320%","5":"350%"},"=SWITCH($C$4, 0,200%, 1,245%, 2,285%, 3,285%, 4,320%, 5,350%) +IF(E2,50%) +IF(E3,50%)"],[3,"258,102",{},"=DMG(ATK(0%),Q158*CRIT(0,0))"],[4,"1300%",{"0":"600%","1":"735%","2":"855%","3":"855%","4":"960%","5":"1050%"},"=SWITCH($C$4, 0,600%, 1,735%, 2,855%, 3,855%, 4,960%, 5,1050%) +IF(E2,125%) +IF(E3,125%)"]],"yuri--comeback-idol":[[1,"209,790",{},"=DMG(ATK(0%),O170*CRIT(0,150%))"],[2,"900%",{"0":"495%","1":"495%","2":"575%","3":"655%","4":"735%","5":"820%"},"=SWITCH($C$4, 0,495%, 1,495%, 2,575%, 3,655%, 4,735%, 5,820%) +IF(E2,40%) +IF(E4,40%)"]],"andrew--loyal-butler":[[2,"54,598",{},"=DMG(ATK(0%),P12*CRIT(0,0))"],[3,"275%",{"0":"75%","1":"75%","2":"100%","3":"100%","4":"150%","5":"225%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,100%, 3,100%, 4,150%, 5,225%) +IF(E3,50%)"]],"angelica--pool-party":[[1,"74,969",{},"=DMG(HP_E(),O15*CRIT(0,0))"],[2,"29%",{"0":"15%","1":"18%","2":"21%","3":"21%","4":"23%","5":"25%"},"=SWITCH($C$4, 0,15%, 1,18%, 2,21%, 3,21%, 4,23%, 5,25%) +IF(E2,2%)+IF(E3,2%)"]],"angelica--the-fallen":[[1,"232,664",{},"=DMG(HP_E(),O14*CRIT(0,0))"],[2,"90%",{"0":"45%","1":"55%","2":"64%","3":"64%","4":"72%","5":"80%"},"=SWITCH($C$4, 0,45%, 1,55%, 2,64%, 3,64%, 4,72%, 5,80%)+IF(E3,5%)+IF(E4,5%)"]],"diana--anti-dystopia":[[2,"1100%",{"0":"500%","1":"500%","2":"650%","3":"800%","4":"800%","5":"1000%"},"=SWITCH($C$4, 0,500%, 1,500%, 2,650%, 3,800%, 4,800%, 5,1000%) +IF(E2,50%) +IF(E3, 50%)"]],"eclipse--dream-bride":[[1,"124,087",{},"=DMG(ATK(0%),O36*CRIT(0,0))"],[2,"625%",{"0":"350%","1":"350%","2":"400%","3":"450%","4":"500%","5":"550%"},"=SWITCH($C$4, 0,350%, 1,350%, 2,400%, 3,450%, 4,500%, 5,550%) +IF(E2,25%) +IF(E3,25%) +IF(E4,25%)"]],"granhildr--boo-ghost":[[1,"2,125",{},"=DMG(HP(),O53*CRIT(0,0))"],[3,"0",{},"=DMG(Calculator!AA25,Q53*CRIT(0,0))"],[4,"12%",{"0":"7%","1":"7%","2":"8%","3":"9%","4":"10%","5":"11%"},"=SWITCH($C$4, 0,7%, 1,7%, 2,8%, 3,9%, 4,10%, 5,11%) +IF(E4,1%)"]],"gray--b-rank-manager":[[1,"19,854",{},"=DMG(ATK(0%),O56*CRIT(0,0))"],[2,"100%",{"0":"35%","1":"50%","2":"65%","3":"65%","4":"75%","5":"85%"},"=SWITCH($C$4, 0,35%, 1,50%, 2,65%, 3,65%, 4,75%, 5,85%) +IF(E2,7%) +IF(E4,8%)"]],"justia--white-reaper":[[2,"625%",{"0":"275%","1":"350%","2":"420%","3":"420%","4":"490%","5":"555%"},"=SWITCH($C$4, 0,275%, 1,350%, 2,420%, 3,420%, 4,490%, 5,555%) +IF(E2,35%) +IF(E4,35%)"]],"kry--violent-student":[[1,"258,516",{},"=DMG(HP_E(),CRIT(0,0))"],[2,"25,810",{},"=DMG(ATK(0%),P74*CRIT(0,0))"],[3,"130%",{"0":"50%","1":"50%","2":"65%","3":"65%","4":"90%","5":"130%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,65%, 3,65%, 4,90%, 5,130%)"]],"lecliss--killer-doll":[[1,"85%",{"0":"45%","1":"55%","2":"65%","3":"65%","4":"75%","5":"75%"},"=SWITCH($C$4, 0,45%, 1,55%, 2,65%, 3,65%, 4,75%, 5,75%) +IF(E2,10%)"],[2,"4",{},"=IF($C$4 = 5, 4, 2)"]],"liatris--maid-name-r":[[1,"109,197",{},"=DMG(ATK(0%),O89*CRIT(0,0))"],[2,"550%",{"0":"400%","1":"400%","2":"475%","3":"475%","4":"550%","5":"550%"},"=SWITCH($C$4, 0,400%, 1,400%, 2,475%, 3,475%, 4,550%, 5,550%)"],[3,"168,759",{},"=DMG(ATK(0%),Q89*CRIT(0,0))"],[4,"850%",{"0":"550%","1":"600%","2":"675%","3":"725%","4":"800%","5":"850%"},"=SWITCH($C$4, 0,550%, 1,600%, 2,675%, 3,725%, 4,800%, 5,850%)"]],"nebris--basic-attack":[[1,"19,854",{},"=DMG(ATK(0%), 1*CRIT(0,0))"]],"rafina--steel-engine":[[1,"183,649",{},"=DMG(ATK(0%),O117*CRIT(0,0))"],[2,"925%",{"0":"500%","1":"595%","2":"685%","3":"685%","4":"775%","5":"860%"},"=SWITCH($C$4, 0,500%, 1,595%, 2,685%, 3,685%, 4,775%, 5,860%) +IF(E2,65%)"]],"rou--red-riding-hood":[[1,"50%",{"0":"30%","1":"40%","2":"50%","3":"50%","4":"50%","5":"50%"},"=SWITCH($C$4, 0,30%, 1,40%, 2,50%, 3,50%, 4,50%, 5,50%)"],[2,"300%",{"0":"150%","1":"150%","2":"150%","3":"150%","4":"225%","5":"300%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,150%, 3,150%, 4,225%, 5,300%)"],[4,"150%",{"0":"50%","1":"60%","2":"70%","3":"70%","4":"95%","5":"120%"},"=SWITCH($C$4, 0,50%, 1,60%, 2,70%, 3,70%, 4,95%, 5,120%) +IF(E2,15%) +IF(E3,15%)"]],"sylvia--bikini-agent":[[1,"148,905",{},"=DMG(ATK(0%),O150*CRIT(0,0))"],[2,"750%",{"0":"400%","1":"400%","2":"475%","3":"550%","4":"625%","5":"700%"},"=SWITCH($C$4, 0,400%, 1,400%, 2,475%, 3,550%, 4,625%, 5,700%) +IF(E3,25%) +IF(E4,25%)"]],"wiggle--bomb-fanatic":[[1,"99,270",{},"=DMG(ATK(0%),O161*CRIT(0,0))"],[2,"500%",{"0":"300%","1":"300%","2":"335%","3":"335%","4":"400%","5":"500%"},"=SWITCH($C$4, 0,300%, 1,300%, 2,335%, 3,335%, 4,400%, 5,500%)"]],"alec--the-destruction":[[2,"1000%",{"0":"400%","1":"525%","2":"625%","3":"625%","4":"725%","5":"800%"},"=SWITCH($C$4, 0,400%, 1,525%, 2,625%, 3,625%, 4,725%, 5,800%) +IF(E2,100%) +IF(E4,100%)"]],"angelica--neon-savior":[[1,"12,925",{},"=DMG(HP_E(),5%*CRIT(0,0))"],[2,"95,650",{},"=DMG(HP_E(),P16*CRIT(0,0))"],[3,"37%",{"0":"14%","1":"18%","2":"21%","3":"21%","4":"23%","5":"25%"},"=SWITCH($C$4, 0,14%, 1,18%, 2,21%, 3,21%, 4,23%, 5,25%) +IF(E3,12%)"]],"eleaneer--b-rank-idol":[[1,"53,605",{},"=DMG(ATK(0%),O38*CRIT(0,0))"],[2,"270%",{"0":"135%","1":"160%","2":"185%","3":"185%","4":"210%","5":"235%"},"=SWITCH($C$4, 0,135%, 1,160%, 2,185%, 3,185%, 4,210%, 5,235%) + IF(E2,35%)"]],"ingrid--kardis-bullet":[[1,"41,693",{},"=DMG(ATK(0%),O63*CRIT(0,0))"],[2,"210%",{"0":"60%","1":"60%","2":"80%","3":"80%","4":"110%","5":"160%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,80%, 3,80%, 4,110%, 5,160%) +IF(E3,50%)"]],"justia--blood-glutton":[[1,"400%",{"0":"200%","1":"200%","2":"250%","3":"300%","4":"350%","5":"400%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,250%, 3,300%, 4,350%, 5,400%)"],[4,"340%",{"0":"150%","1":"150%","2":"185%","3":"225%","4":"260%","5":"300%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,185%, 3,225%, 4,260%, 5,300%) +IF(E2,20%) +IF(E3,20%)"]],"liatris--neon-stalker":[[1,"12,905",{},"=DMG(ATK(0%),O88*CRIT(0,0))"],[2,"65%",{"0":"35%","1":"35%","2":"47%","3":"47%","4":"47%","5":"55%"},"=SWITCH($C$4, 0,35%, 1,35%, 2,47%, 3,47%, 4,47%, 5,55%)+IF(E2,10%)"],[3,"7,941",{},"=DMG(ATK(0%),Q88*CRIT(0,0))"],[4,"40%",{"0":"20%","1":"28%","2":"28%","3":"28%","4":"35%","5":"35%"},"=SWITCH($C$4, 0,20%, 1,28%, 2,28%, 3,28%, 4,35%, 5,35%) +IF(E3,5%)"]],"liatris--rodev-s-star":[[1,"8,934",{},"=DMG(ATK(0%),O87*CRIT(0,0))"],[3,"8,934",{},"=DMG(ATK(0%),Q87*CRIT(0,0))"],[4,"45%",{"0":"18%","1":"25%","2":"31%","3":"31%","4":"36%","5":"41%"},"=SWITCH($C$4, 0,18%, 1,25%, 2,31%, 3,31%, 4,36%, 5,41%) + IF(E4,4%)"]],"loen--celebrity-bunny":[[1,"9,927",{},"=DMG(ATK(0%),0.5*CRIT(0,0))"],[2,"34,744",{},"=DMG(ATK(0%),P95*CRIT(0,0))"],[3,"175%",{"0":"75%","1":"75%","2":"95%","3":"115%","4":"135%","5":"155%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,95%, 3,115%, 4,135%, 5,155%) +IF(E2,10%) +IF(E3,10%)"]],"olivier--fallen-wings":[[2,"49,635",{},"=DMG(ATK(0%),P112*CRIT(0,0))"],[3,"250%",{"0":"150%","1":"150%","2":"170%","3":"190%","4":"210%","5":"230%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,170%, 3,190%, 4,210%, 5,230%) +IF(E2,20%)"],[4,"19,854",{},"=DMG(ATK(0%),R112*CRIT(0,0))"],[5,"100%",{"0":"60%","1":"60%","2":"68%","3":"76%","4":"84%","5":"92%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,68%, 3,76%, 4,84%, 5,92%) +IF(E3,8%)"]],"roxy--emerging-desire":[[1,"13,897",{},"=DMG(ATK(0%),O130*CRIT(0,0))"],[2,"70%",{"0":"30%","1":"30%","2":"37%","3":"44%","4":"51%","5":"58%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,37%, 3,44%, 4,51%, 5,58%) +IF(E2,6%) +IF(E4,6%)"]],"samay--kind-liberator":[[1,"39,708",{},"=DMG(ATK(0%),O135*CRIT(0,0))"],[2,"200%",{"0":"80%","1":"80%","2":"100%","3":"100%","4":"140%","5":"200%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,100%, 3,100%, 4,140%, 5,200%)"]],"sonya--shadowed-dream":[[1,"125%",{"0":"55%","1":"55%","2":"80%","3":"80%","4":"105%","5":"105%"},"=SWITCH($C$4, 0,55%, 1,55%, 2,80%, 3,80%, 4,105%, 5,105%) +IF(E2,10%) +IF(E3,10%)"],[2,"175%",{"0":"75%","1":"75%","2":"115%","3":"115%","4":"155%","5":"155%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,115%, 3,115%, 4,155%, 5,155%) +IF(E2,10%) +IF(E3,10%)"],[3,"109,197",{},"=DMG(ATK(0%),Q144*CRIT(0,0))"],[4,"550%",{"0":"300%","1":"300%","2":"300%","3":"400%","4":"400%","5":"500%"},"=SWITCH($C$4, 0,300%, 1,300%, 2,300%, 3,400%, 4,400%, 5,500%) +IF(E4,50%)"]],"sylvia--desert-flower":[[1,"140,963",{},"=DMG(ATK(0%),O147*CRIT(0,0))"],[2,"710%",{"0":"400%","1":"465%","2":"530%","3":"530%","4":"595%","5":"660%"},"=SWITCH($C$4, 0,400%, 1,465%, 2,530%, 3,530%, 4,595%, 5,660%) +IF(E2,50%)"]],"teresse--medical-club":[[1,"120%",{"0":"50%","1":"50%","2":"70%","3":"70%","4":"90%","5":"110%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,70%, 3,70%, 4,90%, 5,110%) +IF(E2,10%)"],[3,"75%",{},"=IF($C$4 > 2, 50%, 25%) +IF(E3,25%)"]],"anastasia--gentle-maid":[[1,"500%",{"0":"200%","1":"350%","2":"350%","3":"350%","4":"350%","5":"500%"},"=SWITCH($C$4, 0,200%, 1,350%, 2,350%, 3,350%, 4,350%, 5,500%)"],[2,"65,885",{},"=DMG(ATK(0%),P10*CRIT(0,N10))"],[3,"210%",{"0":"90%","1":"90%","2":"135%","3":"135%","4":"180%","5":"180%"},"=SWITCH($C$4, 0,90%, 1,90%, 2,135%, 3,135%, 4,180%, 5,180%) +IF(E2,30%)"]],"dalvi--summer-vacation":[[1,"19,854",{},"=DMG(ATK(0%),O28*CRIT(0,0))"],[2,"100%",{"0":"55%","1":"55%","2":"70%","3":"70%","4":"85%","5":"85%"},"=SWITCH($C$4, 0,55%, 1,55%, 2,70%, 3,70%, 4,85%, 5,85%) +IF(E3, 15%)"],[3,"29,781",{},"=DMG(ATK(0%),Q28*CRIT(0,0))"],[4,"150%",{"0":"75%","1":"75%","2":"75%","3":"95%","4":"95%","5":"120%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,75%, 3,95%, 4,95%, 5,120%) +IF(E2,15%) +IF(E4,15%)"],[5,"6",{},"=IF($C$4 > 2, 6, 4)"]],"eleaneer--shadow-bunny":[[1,"40%",{"0":"20%","1":"20%","2":"20%","3":"28%","4":"28%","5":"36%"},"=SWITCH($C$4, 0,20%, 1,20%, 2,20%, 3,28%, 4,28%, 5,36%) + IF(E4,4%)"],[2,"60%",{"0":"20%","1":"20%","2":"40%","3":"40%","4":"60%","5":"60%"},"=SWITCH($C$4, 0,20%, 1,20%, 2,40%, 3,40%, 4,60%, 5,60%)"],[3,"50%",{"0":"30%","1":"30%","2":"40%","3":"40%","4":"50%","5":"50%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,40%, 3,40%, 4,50%, 5,50%)"]],"goblin-slayer--orcbolg":[[2,"50,627",{},"=DMG(ATK(0%),P50*CRIT(0,0))"],[3,"255%",{"0":"125%","1":"125%","2":"150%","3":"175%","4":"200%","5":"225%"},"=SWITCH($C$4, 0,125%, 1,125%, 2,150%, 3,175%, 4,200%, 5,225%) +IF(E2,15%) +IF(E2,15%)"]],"lecliss--android-queen":[[1,"10,626",{},"=DMG(HP(),O83*CRIT(0,0))"],[2,"40%",{"0":"15%","1":"15%","2":"25%","3":"25%","4":"35%","5":"35%"},"=SWITCH($C$4, 0,15%, 1,15%, 2,25%, 3,25%, 4,35%, 5,35%) +IF(E3,5%)"],[4,"160%",{"0":"65%","1":"100%","2":"100%","3":"100%","4":"100%","5":"125%"},"=SWITCH($C$4, 0,65%, 1,100%, 2,100%, 3,100%, 4,100%, 5,125%) +IF(E2,15%) +IF(E4,20%)"]],"liberta--dark-saintess":[[1,"115%",{"0":"35%","1":"35%","2":"50%","3":"50%","4":"65%","5":"85%"},"=SWITCH($C$4, 0,35%, 1,35%, 2,50%, 3,50%, 4,65%, 5,85%) +IF(E2,15%) +IF(E3,15%)"],[2,"50%",{},"=IF($C$4 > 2, 50%, 25%)"]],"liberta--onsen-manager":[[1,"130%",{"0":"80%","1":"80%","2":"90%","3":"100%","4":"110%","5":"120%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,90%, 3,100%, 4,110%, 5,120%) +IF(E2,10%)"]],"nartas--anonymous-sage":[[1,"59,562",{},"=DMG(ATK(0%),O107*CRIT(0,0))"],[2,"300%",{"0":"150%","1":"200%","2":"200%","3":"250%","4":"250%","5":"300%"},"=SWITCH($C$4, 0,150%, 1,200%, 2,200%, 3,250%, 4,250%, 5,300%)"],[3,"208,467",{},"=DMG(ATK(0%),Q107*CRIT(0,0))"],[4,"1050%",{"0":"400%","1":"450%","2":"600%","3":"650%","4":"800%","5":"850%"},"=SWITCH($C$4, 0,400%, 1,450%, 2,600%, 3,650%, 4,800%, 5,850%) +IF(E2,100%) +IF(E3,100%)"]],"olstein--fiend-scholar":[[1,"6",{"0":"1","1":"2","2":"3","3":"3","4":"4","5":"5"},"=SWITCH($C$4, 0,1, 1,2, 2,3, 3,3, 4,4, 5,5) +IF(E2,1)"],[2,"6",{"0":"1","1":"2","2":"3","3":"3","4":"4","5":"5"},"=SWITCH($C$4, 0,1, 1,2, 2,3, 3,3, 4,4, 5,5) +IF(E4,1)"],[3,"29,781",{},"=DMG(ATK(0%),Q114*CRIT(0,0))"]],"remnunt--combat-doctor":[[1,"63,532",{},"=DMG(ATK(0%),O123*CRIT(0,0))"],[2,"320%",{"0":"100%","1":"100%","2":"125%","3":"125%","4":"175%","5":"250%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,125%, 3,125%, 4,175%, 5,250%) +IF(E3,70%)"]],"roxy--respected-master":[[1,"79,416",{},"=DMG(ATK(0%),O129*CRIT(0,0))"],[2,"400%",{"0":"140%","1":"140%","2":"210%","3":"280%","4":"280%","5":"350%"},"=SWITCH($C$4, 0,140%, 1,140%, 2,210%, 3,280%, 4,280%, 5,350%) +IF(E2,50%)"],[3,"119,124",{},"=DMG(ATK(0%),Q129*CRIT(0,0))"],[4,"600%",{},"=IF($C$4 > 3, 450%, 300%) +IF(E3,75%) +IF(E4,75%)"]],"seir--demon-s-daughter":[[2,"30%",{},"=IF($C$4 = 5, 30%, 15%)"],[3,"85%",{"0":"40%","1":"50%","2":"60%","3":"60%","4":"70%","5":"70%"},"=SWITCH($C$4, 0,40%, 1,50%, 2,60%, 3,60%, 4,70%, 5,70%) +IF(E3,15%)"],[4,"6",{},"=IF($C$4 = 5, 6, 4)"]],"ventana--comeback-idol":[[1,"125%",{"0":"50%","1":"75%","2":"75%","3":"100%","4":"100%","5":"100%"},"=SWITCH($C$4, 0,50%, 1,75%, 2,75%, 3,100%, 4,100%, 5,100%) +IF(E4,25%)"],[2,"357,372",{},"=DMG(ATK(N159),P159*CRIT(0,0))"],[3,"800%",{"0":"400%","1":"400%","2":"500%","3":"500%","4":"600%","5":"700%"},"=SWITCH($C$4, 0,400%, 1,400%, 2,500%, 3,500%, 4,600%, 5,700%) +IF(E2,100%)"]],"yomi--gentle-destroyer":[[1,"33,751",{},"=DMG(ATK(0%),O166*CRIT(0,0))"],[2,"170%",{"0":"30%","1":"50%","2":"70%","3":"90%","4":"110%","5":"130%"},"=SWITCH($C$4, 0,30%, 1,50%, 2,70%, 3,90%, 4,110%, 5,130%) +IF(E2,20%) +IF(E3,20%)"]],"celia--masquerade-bunny":[[1,"6",{},"=IF($C$4 > 3, 6, 4)"],[2,"31,766",{},"=DMG(ATK(0%),P25*CRIT(0,0))"],[3,"160%",{"0":"65%","1":"65%","2":"85%","3":"105%","4":"105%","5":"125%"},"=SWITCH($C$4, 0,65%, 1,65%, 2,85%, 3,105%, 4,105%, 5,125%) +IF(E2,10%) +IF(E3,15%) +IF(E4,10%)"]],"darian--prophetic-dream":[[1,"178,686",{},"=DMG(ATK(0%),O29*CRIT(0,0))"],[2,"900%",{"0":"500%","1":"500%","2":"600%","3":"600%","4":"700%","5":"700%"},"=SWITCH($C$4, 0,500%, 1,500%, 2,600%, 3,600%, 4,700%, 5,700%) +IF(E2,100%) +IF(E4,100%)"],[3,"258,102",{},"=DMG(ATK(0%),Q29*CRIT(0,0))"],[4,"1300%",{"0":"775%","1":"775%","2":"775%","3":"950%","4":"950%","5":"1125%"},"=SWITCH($C$4, 0,775%, 1,775%, 2,775%, 3,950%, 4,950%, 5,1125%) +IF(E3,175%)"]],"eclipse--beach-vacation":[[1,"119,124",{},"=DMG(ATK(0%),O35*CRIT(0,0))"],[2,"600%",{"0":"300%","1":"300%","2":"350%","3":"400%","4":"450%","5":"500%"},"=SWITCH($C$4, 0,300%, 1,300%, 2,350%, 3,400%, 4,450%, 5,500%) +IF(E2,50%) +IF(E3,50%)"]],"eris--your-very-own-cat":[[1,"15,883",{},"=DMG(ATK(0%),O46*CRIT(0,0))"],[2,"80%",{"0":"30%","1":"30%","2":"30%","3":"45%","4":"45%","5":"60%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,30%, 3,45%, 4,45%, 5,60%) +IF(E2,20%)"],[3,"150%",{"0":"100%","1":"100%","2":"125%","3":"125%","4":"150%","5":"150%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,125%, 3,125%, 4,150%, 5,150%)"]],"justia--knight-of-blood":[[2,"200%",{"0":"75%","1":"105%","2":"130%","3":"130%","4":"155%","5":"175%"},"=SWITCH($C$4, 0,75%, 1,105%, 2,130%, 3,130%, 4,155%, 5,175%) +IF(E3,25%)"]],"kry--liberated-marauder":[[1,"42,686",{},"=DMG(ATK(0%),O73*CRIT(0,0))"],[2,"215%",{"0":"80%","1":"80%","2":"100%","3":"100%","4":"140%","5":"200%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,100%, 3,100%, 4,140%, 5,200%) +IF(E3,15%)"]],"lathel--lonely-survivor":[[1,"55,094",{},"=DMG(ATK(50%),O76*CRIT(0,0))"],[2,"185%",{"0":"65%","1":"90%","2":"115%","3":"115%","4":"135%","5":"155%"},"=SWITCH($C$4, 0,65%, 1,90%, 2,115%, 3,115%, 4,135%, 5,155%) +IF(E2,15%) +IF(E4,15%)"]],"luvencia--deal-snatcher":[[1,"7,941",{},"=DMG(ATK(0%),(O97-5%*TARGETS())*CRIT(0,0))"],[2,"80%",{"0":"60%","1":"60%","2":"60%","3":"70%","4":"70%","5":"80%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,60%, 3,70%, 4,70%, 5,80%)"],[3,"23,824",{},"=DMG(ATK(0%),(Q97-5%*TARGETS())*CRIT(0,0))"],[4,"160%",{"0":"80%","1":"80%","2":"100%","3":"110%","4":"130%","5":"140%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,100%, 3,110%, 4,130%, 5,140%) +IF(E3,10%) +IF(E4,10%)"]],"morpeah--beach-vacation":[[1,"138,978",{},"=DMG(ATK(0%),O105*CRIT(0,0))"],[2,"700%",{"0":"300%","1":"380%","2":"460%","3":"540%","4":"620%","5":"700%"},"=SWITCH($C$4, 0,300%, 1,380%, 2,460%, 3,540%, 4,620%, 5,700%)"]],"morpeah--daydream-bunny":[[1,"129,051",{},"=DMG(ATK(0%),O106*CRIT(0,0))"],[2,"650%",{"0":"200%","1":"290%","2":"380%","3":"470%","4":"560%","5":"650%"},"=SWITCH($C$4, 0,200%, 1,290%, 2,380%, 3,470%, 4,560%, 5,650%)"]],"olivier--faithful-wings":[[2,"49,635",{},"=DMG(ATK(0%),P113*CRIT(0,0))"],[3,"250%",{"0":"150%","1":"150%","2":"170%","3":"190%","4":"210%","5":"230%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,170%, 3,190%, 4,210%, 5,230%) +IF(E2,10%) +IF(E3,10%)"],[4,"9,927",{},"=DMG(ATK(0%),R113*CRIT(0,0))"],[5,"50%",{"0":"30%","1":"30%","2":"34%","3":"38%","4":"42%","5":"46%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,34%, 3,38%, 4,42%, 5,46%) +IF(E4,4%)"]],"sylvia--the-sword-queen":[[1,"225%",{"0":"100%","1":"100%","2":"150%","3":"150%","4":"150%","5":"200%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,150%, 3,150%, 4,150%, 5,200%) +IF(E3, 25%)"],[2,"6",{"0":"2","1":"2","2":"4","3":"4","4":"4","5":"6"},"=SWITCH($C$4, 0,2, 1,2, 2,4, 3,4, 4,4, 5,6)"],[3,"28,391",{},"=DMG(ATK(N149),Q149*CRIT(0,0))"],[4,"44%",{"0":"25%","1":"30%","2":"30%","3":"35%","4":"40%","5":"40%"},"=SWITCH($C$4, 0,25%, 1,30%, 2,30%, 3,35%, 4,40%, 5,40%) +IF(E2,2%) +IF(E4,2%)"]],"tyr--starlight-guardian":[[1,"277,956",{},"=DMG(ATK(0%),O154*CRIT(0,0))"],[2,"1400%",{"0":"700%","1":"700%","2":"825%","3":"950%","4":"1075%","5":"1200%"},"=SWITCH($C$4, 0,700%, 1,700%, 2,825%, 3,950%, 4,1075%, 5,1200%) +IF(E3,100%) +IF(E4,100%)"]],"yumi--dancing-snowflake":[[1,"23,824",{},"=DMG(ATK(0%),O168*CRIT(0,0))"],[2,"120%",{"0":"30%","1":"30%","2":"60%","3":"60%","4":"90%","5":"90%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,60%, 3,60%, 4,90%, 5,90%) +IF(E2,30%)"],[3,"3,970",{},"=DMG(ATK(0%),Q168*CRIT(0,0))"],[4,"20%",{"0":"10%","1":"10%","2":"10%","3":"15%","4":"15%","5":"20%"},"=SWITCH($C$4, 0,10%, 1,10%, 2,10%, 3,15%, 4,15%, 5,20%)"]],"anastasia--fire-graffiti":[[1,"500%",{"0":"200%","1":"350%","2":"350%","3":"350%","4":"350%","5":"500%"},"=SWITCH($C$4, 0,200%, 1,350%, 2,350%, 3,350%, 4,350%, 5,500%)"],[2,"42,354",{},"=DMG(ATK(0%),P11*CRIT(0,N11))"],[3,"135%",{"0":"60%","1":"60%","2":"90%","3":"90%","4":"115%","5":"115%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,90%, 3,90%, 4,115%, 5,115%) +IF(E2,10%) +IF(E3,10%)"]],"eclipse--dimension-witch":[[2,"49,635",{},"=DMG(ATK(0%),P33*CRIT(0,0))"],[3,"250%",{"0":"120%","1":"145%","2":"170%","3":"170%","4":"195%","5":"220%"},"=SWITCH($C$4, 0,120%, 1,145%, 2,170%, 3,170%, 4,195%, 5,220%) +IF(E2,30%)"]],"eclipse--nightmare-bunny":[[3,"220%",{"0":"75%","1":"100%","2":"125%","3":"150%","4":"175%","5":"200%"},"=SWITCH($C$4, 0,75%, 1,100%, 2,125%, 3,150%, 4,175%, 5,200%) +IF(E3,10%) +IF(E4,10%)"]],"elpis--hand-of-salvation":[[1,"80%",{"0":"25%","1":"40%","2":"40%","3":"55%","4":"55%","5":"70%"},"=SWITCH($C$4, 0,25%, 1,40%, 2,40%, 3,55%, 4,55%, 5,70%) +IF(E3,10%)"],[2,"35%",{},"=IF($C$4 > 3, 35%, 30%)"]],"emma--haggard-delinquent":[[1,"500%",{"0":"200%","1":"200%","2":"250%","3":"250%","4":"350%","5":"500%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,250%, 3,250%, 4,350%, 5,500%)"]],"fred--lugo-defense-force":[[1,"4",{},"=IF($C$4 = 5, 4, 3)"],[2,"180,961",{},"=DMG(HP_E(),P47*CRIT(0,0))"],[3,"70%",{"0":"25%","1":"25%","2":"35%","3":"35%","4":"50%","5":"50%"},"=SWITCH($C$4, 0,25%, 1,25%, 2,35%, 3,35%, 4,50%, 5,50%) +IF(E3,20%)"],[4,"9,927",{},"=DMG(ATK(0%),0.5*CRIT(0,0))"]],"granhildr--comeback-idol":[[2,"350%",{"0":"100%","1":"150%","2":"150%","3":"200%","4":"250%","5":"300%"},"=SWITCH($C$4, 0,100%, 1,150%, 2,150%, 3,200%, 4,250%, 5,300%) +IF(E2,25%) +IF(E4,25%)"]],"layla--anvil-of-creation":[[1,"35,737",{},"=DMG(ATK(0%),O81*CRIT(0,0))"],[2,"180%",{"0":"60%","1":"60%","2":"80%","3":"80%","4":"120%","5":"180%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,80%, 3,80%, 4,120%, 5,180%)"]],"levia--night-of-jealousy":[[1,"17,868",{},"=DMG(ATK(0%),O84*CRIT(0,0))"],[2,"90%",{"0":"30%","1":"30%","2":"30%","3":"50%","4":"50%","5":"70%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,30%, 3,50%, 4,50%, 5,70%) +IF(E2,20%)"],[3,"59,562",{},"=DMG(ATK(0%),Q84*CRIT(0,0))"],[4,"300%",{"0":"80%","1":"80%","2":"120%","3":"160%","4":"200%","5":"240%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,120%, 3,160%, 4,200%, 5,240%) +IF(E2,20%) +IF(E3,40%)"]],"refithea--poolside-fairy":[[1,"50%",{"0":"25%","1":"25%","2":"30%","3":"30%","4":"35%","5":"40%"},"=SWITCH($C$4, 0,25%, 1,25%, 2,30%, 3,30%, 4,35%, 5,40%) +IF(E3,5%) +IF(E4,5%)"],[2,"8",{},"=IF($C$4 > 2, 8, 6)"]],"refithea--the-gluttonous":[[1,"125%",{"0":"50%","1":"50%","2":"75%","3":"100%","4":"100%","5":"100%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,75%, 3,100%, 4,100%, 5,100%) +IF(E3,10%) +IF(E4,15%)"],[2,"5",{},"=IF($C$4 > 3, 5, 3)"],[3,"50%",{},"=IF($C$4 = 5, 50%, 25%)"]],"rigenette--little-hunter":[[1,"31,766",{},"=DMG(ATK(0%),O124*CRIT(0,0))"],[2,"160%",{"0":"35%","1":"35%","2":"60%","3":"60%","4":"110%","5":"110%"},"=SWITCH($C$4, 0,35%, 1,35%, 2,60%, 3,60%, 4,110%, 5,110%) +IF(E3,50%)"],[3,"6",{},"=IF($C$4 = 5, 6, 4)"]],"scheherazade--pool-party":[[1,"15,883",{},"=DMG(ATK(0%),O140*CRIT(0,0))"],[2,"80%",{"0":"30%","1":"38%","2":"46%","3":"46%","4":"53%","5":"60%"},"=SWITCH($C$4, 0,30%, 1,38%, 2,46%, 3,46%, 4,53%, 5,60%) +IF(E2,10%) +IF(E4,10%)"]],"teresse--beachside-angel":[[1,"200%",{"0":"100%","1":"100%","2":"120%","3":"120%","4":"140%","5":"160%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,120%, 3,120%, 4,140%, 5,160%) +IF(E3,20%) +IF(E4,20%)"],[2,"8",{},"=IF($C$4 > 2, 8, 4)"]],"wilhelmina--frozen-queen":[[1,"60%",{"0":"30%","1":"30%","2":"30%","3":"45%","4":"45%","5":"60%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,30%, 3,45%, 4,45%, 5,60%)"],[3,"23,824",{},"=DMG(ATK(0%),Q165*CRIT(0,0))"],[4,"120%",{"0":"60%","1":"60%","2":"85%","3":"85%","4":"110%","5":"110%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,85%, 3,85%, 4,110%, 5,110%) +IF(E4,10%)"]],"wilhelmina--iron-monarch":[[1,"18,861",{},"=DMG(ATK(0%),O163*CRIT(0,0))"],[2,"95%",{"0":"60%","1":"60%","2":"67%","3":"74%","4":"74%","5":"81%"},"=SWITCH($C$4, 0,60%, 1,60%, 2,67%, 3,74%, 4,74%, 5,81%) +IF(E2,7%) +IF(E2,7%)"]],"carlson--mercenary-knight":[[1,"65%",{"0":"35%","1":"35%","2":"45%","3":"45%","4":"65%","5":"65%"},"=SWITCH($C$4, 0,35%, 1,35%, 2,45%, 3,45%, 4,65%, 5,65%)"],[2,"4",{},"=IF($C$4 = 5, 4, 2)"]],"darian--bittersweet-bunny":[[1,"79,416",{},"=DMG(ATK(0%),O30*CRIT(0,0))"],[2,"400%",{"0":"200%","1":"200%","2":"200%","3":"275%","4":"275%","5":"350%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,200%, 3,275%, 4,275%, 5,350%) +IF(E3,50%)"],[3,"119,124",{},"=DMG(ATK(0%),Q30*CRIT(0,0))"],[4,"600%",{"0":"400%","1":"400%","2":"400%","3":"475%","4":"475%","5":"550%"},"=SWITCH($C$4, 0,400%, 1,400%, 2,400%, 3,475%, 4,475%, 5,550%) +IF(E4,50%)"],[5,"35,737",{},"=DMG(ATK(0%),S30*CRIT(0,0))"],[6,"180%",{},"=IF($C$4 > 3, 150%, 110%) +IF(E2,30%)"]],"eris--esteemed-adventurer":[[1,"129,051",{},"=DMG(ATK(0%),O45*CRIT(0,0))"],[2,"650%",{"0":"300%","1":"300%","2":"375%","3":"450%","4":"525%","5":"600%"},"=SWITCH($C$4, 0,300%, 1,300%, 2,375%, 3,450%, 4,525%, 5,600%) +IF(E2,50%)"],[3,"218,394",{},"=DMG(ATK(0%),Q45*CRIT(0,0))"],[4,"1100%",{"0":"600%","1":"600%","2":"675%","3":"750%","4":"825%","5":"900%"},"=SWITCH($C$4, 0,600%, 1,600%, 2,675%, 3,750%, 4,825%, 5,900%) +IF(E3,100%) +IF(E4,100%)"]],"hikage--kind-ruthlessness":[[1,"17,868",{},"=DMG(ATK(0%),O62*CRIT(0,0))"],[2,"90%",{"0":"40%","1":"40%","2":"50%","3":"60%","4":"60%","5":"70%"},"=SWITCH($C$4, 0,40%, 1,40%, 2,50%, 3,60%, 4,60%, 5,70%) +IF(E2,10%) +IF(E3,10%)"]],"lucrezia--seductive-wings":[[1,"3",{"0":"1","1":"1","2":"2","3":"2","4":"3","5":"3"},"=SWITCH($C$4, 0,1, 1,1, 2,2, 3,2, 4,3, 5,3)"],[2,"7,941",{},"=DMG(ATK(0%),P96*CRIT(0,0))"],[4,"6",{},"=IF($C$4 = 5, 6, 2)"]],"scheherazade--code-name-s":[[1,"45,664",{},"=DMG(ATK(0%),O139*CRIT(0,0))"],[2,"230%",{"0":"80%","1":"105%","2":"130%","3":"130%","4":"150%","5":"170%"},"=SWITCH($C$4, 0,80%, 1,105%, 2,130%, 3,130%, 4,150%, 5,170%) +IF(E2,30%) +IF(E3,30%)"]],"scheherazade--lapis-witch":[[1,"47,649",{},"=DMG(ATK(0%),O137*CRIT(0,0))"],[2,"240%",{"0":"90%","1":"115%","2":"140%","3":"140%","4":"160%","5":"180%"},"=SWITCH($C$4, 0,90%, 1,115%, 2,140%, 3,140%, 4,160%, 5,180%) +IF(E2,30%) +IF(E4,30%)"]],"zenith--poolside-guardian":[[1,"9,927",{},"=DMG(ATK(0%),0.5*CRIT(0,0))"],[2,"4",{},"=IF($C$4 > 2, 4, 2)"],[3,"10%",{"0":"5%","1":"5%","2":"6%","3":"6%","4":"7%","5":"8%"},"=SWITCH($C$4, 0,5%, 1,5%, 2,6%, 3,6%, 4,7%, 5,8%) +IF(E3,1%) +IF(E4,1%)"]],"arines--priest-of-vitality":[[1,"80%",{"0":"25%","1":"25%","2":"35%","3":"35%","4":"50%","5":"70%"},"=SWITCH($C$4, 0,25%, 1,25%, 2,35%, 3,35%, 4,50%, 5,70%) +IF(E3,10%)"]],"lisianne--wandering-priest":[[2,"150%",{"0":"50%","1":"50%","2":"70%","3":"70%","4":"100%","5":"150%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,70%, 3,70%, 4,100%, 5,150%)"]],"lydia--apprentice-spearman":[[1,"105,226",{},"=DMG(ATK(0%),O99*CRIT(0,0))"],[2,"530%",{"0":"200%","1":"200%","2":"225%","3":"225%","4":"275%","5":"350%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,225%, 3,225%, 4,275%, 5,350%) +IF(E3,180%)"]],"rubia--thorn-of-the-desert":[[1,"21,839",{},"=DMG(ATK(0%),O131*CRIT(0,0))"],[2,"110%",{"0":"40%","1":"60%","2":"75%","3":"75%","4":"75%","5":"75%"},"=SWITCH($C$4, 0,40%, 1,60%, 2,75%, 3,75%, 4,75%, 5,75%) +IF(E2,35%)"],[3,"67,503",{},"=DMG(ATK(0%),Q131*CRIT(0,0))"],[4,"340%",{"0":"150%","1":"150%","2":"150%","3":"150%","4":"195%","5":"240%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,150%, 3,150%, 4,195%, 5,240%) +IF(E3,50%) +IF(E4,50%)"]],"sonya--little-pumpkin-girl":[[1,"59,562",{},"=DMG(ATK(0%),O145*CRIT(0,0))"],[2,"300%",{"0":"200%","1":"200%","2":"225%","3":"225%","4":"250%","5":"275%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,225%, 3,225%, 4,250%, 5,275%) +IF(E2,25%)"],[3,"4",{},"=IF($C$4 > 2, 4, 2)"],[4,"19,854",{},"=DMG(ATK(0%),R145*CRIT(0,0))"],[5,"100%",{"0":"45%","1":"45%","2":"60%","3":"60%","4":"75%","5":"90%"},"=SWITCH($C$4, 0,45%, 1,45%, 2,60%, 3,60%, 4,75%, 5,90%) +IF(E3,5%) +IF(E4,5%)"]],"wiggle--bomb-in-the-hoodie":[[1,"3,970",{},"=DMG(ATK(0%),0.2*CRIT(0,0))"],[2,"30,773",{},"=DMG(ATK(0%),P162*CRIT(0,0))"],[3,"155%",{"0":"75%","1":"75%","2":"90%","3":"90%","4":"115%","5":"155%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,90%, 3,90%, 4,115%, 5,155%)"]],"jayden--manga-research-club":[[1,"33,751",{},"=DMG(ATK(0%),O65*CRIT(0,0))"],[2,"170%",{"0":"50%","1":"50%","2":"70%","3":"70%","4":"110%","5":"170%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,70%, 3,70%, 4,110%, 5,170%)"]],"michaela--acting-archbishop":[[1,"500%",{},"=IF($C$4 > 3, 400%, 300%) +IF(E3,100%)"],[2,"6",{},"=IF($C$4 > 2, 6, 4)"],[3,"62,748",{},"=DMG(ATK(0%),Q101*CRIT(0,N101))"],[4,"200%",{"0":"80%","1":"80%","2":"120%","3":"120%","4":"120%","5":"160%"},"=SWITCH($C$4, 0,80%, 1,80%, 2,120%, 3,120%, 4,120%, 5,160%) +IF(E2,40%)"]],"michaela--beachside-justice":[[1,"238,248",{},"=DMG(ATK(200%),O102*CRIT(0,0))"],[2,"400%",{"0":"160%","1":"160%","2":"200%","3":"240%","4":"280%","5":"320%"},"=SWITCH($C$4, 0,160%, 1,160%, 2,200%, 3,240%, 4,280%, 5,320%) +IF(E2,40%) +IF(E3,40%)"]],"nebris--laid-back-lifeguard":[[1,"10",{},"=IF($C$4 > 2, 10, 6)"],[2,"62,540",{},"=DMG(IF(HAS_BUFF(),ATK(0%),ATK(50%)),P109*CRIT(0,0))"],[3,"210%",{"0":"100%","1":"100%","2":"120%","3":"140%","4":"160%","5":"180%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,120%, 3,140%, 4,160%, 5,180%) +IF(E2,15%) +IF(E3,15%)"]],"rubia--empress-of-the-ocean":[[1,"15,883",{},"=DMG(ATK(0%),O132*CRIT(0,0))"],[2,"80%",{"0":"40%","1":"48%","2":"56%","3":"56%","4":"64%","5":"72%"},"=SWITCH($C$4, 0,40%, 1,48%, 2,56%, 3,56%, 4,64%, 5,72%) +IF(E3,8%)"]],"ventana--onsen-practitioner":[[1,"148,905",{},"=DMG(ATK(0),O160*CRIT(0,0))"],[2,"750%",{"0":"300%","1":"300%","2":"390%","3":"390%","4":"480%","5":"570%"},"=SWITCH($C$4, 0,300%, 1,300%, 2,390%, 3,390%, 4,480%, 5,570%) +IF(E2,90%) +IF(E3,90%)"],[3,"200%",{},"=IF($C$4 > 2, 200%, 100%)"]],"eleaneer--piercing-magic-bow":[[1,"41,693",{},"=DMG(ATK(0%),O37*CRIT(0,0))"],[2,"210%",{"0":"80%","1":"105%","2":"130%","3":"130%","4":"155%","5":"180%"},"=SWITCH($C$4, 0,80%, 1,105%, 2,130%, 3,130%, 4,155%, 5,180%) +IF(E2,15%) +IF(E3,15%)"]],"lathel--promise-of-vengeance":[[2,"365,274",{},"=DMG(ATK(N78),P78*CRIT(0,0))"],[3,"1150%",{"0":"450%","1":"600%","2":"750%","3":"750%","4":"875%","5":"1000%"},"=SWITCH($C$4, 0,450%, 1,600%, 2,750%, 3,750%, 4,875%, 5,1000%) +IF(E2,75%) +IF(E4,75%)"]],"nebris--labyrinth-gatekeeper":[[2,"150%",{"0":"100%","1":"100%","2":"125%","3":"125%","4":"150%","5":"150%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,125%, 3,125%, 4,150%, 5,150%)"],[3,"300%",{"0":"200%","1":"200%","2":"250%","3":"250%","4":"300%","5":"300%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,250%, 3,250%, 4,300%, 5,300%)"],[4,"111,678",{},"=DMG(ATK(0%),R108*CRIT(0,IF(HAS_DMG_BUFF(),P108,0)))*IF(HAS_DMG_BUFF(),1,1+O108)"],[5,"225%",{"0":"125%","1":"125%","2":"125%","3":"150%","4":"150%","5":"175%"},"=SWITCH($C$4, 0,125%, 1,125%, 2,125%, 3,150%, 4,150%, 5,175%) +IF(E2,15%) +IF(E3,15%) +IF(E4,20%)"]],"olstein--sage-of-blue-clouds":[[1,"4,963",{},"=DMG(ATK(0%),0.25*CRIT(0,0))"],[2,"70%",{"0":"35%","1":"45%","2":"54%","3":"54%","4":"62%","5":"70%"},"=SWITCH($C$4, 0,35%, 1,45%, 2,54%, 3,54%, 4,62%, 5,70%)"]],"wilhelmina--water-park-queen":[[1,"6",{},"=IF($C$4 > 3, 6, 4)"],[2,"17,868",{},"=DMG(ATK(0%),P164*CRIT(0,0))"],[3,"90%",{"0":"45%","1":"45%","2":"55%","3":"65%","4":"65%","5":"75%"},"=SWITCH($C$4, 0,45%, 1,45%, 2,55%, 3,65%, 4,65%, 5,75%) +IF(E2,5%) +IF(E3,5%) +IF(E4,5%)"]],"bernie--righteous-raider-girl":[[1,"3",{},"=IF($C$4 = 5, 3, 2)"],[2,"21,839",{},"=DMG(ATK(0%),P19*CRIT(0,0))"],[3,"110%",{"0":"50%","1":"50%","2":"70%","3":"70%","4":"110%","5":"110%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,70%, 3,70%, 4,110%, 5,110%)"]],"michaela--queen-of-signatures":[[1,"77,430",{},"=DMG(ATK(0),O103*CRIT(0,0))"],[2,"390%",{"0":"180%","1":"180%","2":"220%","3":"260%","4":"300%","5":"340%"},"=SWITCH($C$4, 0,180%, 1,180%, 2,220%, 3,260%, 4,300%, 5,340%) +IF(E2,25%) +IF(E3,25%)"]],"refithea--pure-white-blessing":[[1,"100%",{"0":"40%","1":"40%","2":"55%","3":"70%","4":"85%","5":"100%"},"=SWITCH($C$4, 0,40%, 1,40%, 2,55%, 3,70%, 4,85%, 5,100%)"]],"teresse--angel-of-destruction":[[1,"387,774",{},"=DMG(HP_E(),O151*CRIT(0,0))"],[2,"150%",{"0":"50%","1":"50%","2":"75%","3":"75%","4":"125%","5":"125%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,75%, 3,75%, 4,125%, 5,125%) +IF(E4,25%)"],[3,"44,671",{},"=DMG(ATK(0%),Q151*CRIT(0,0))"],[4,"225%",{"0":"75%","1":"125%","2":"125%","3":"125%","4":"125%","5":"175%"},"=SWITCH($C$4, 0,75%, 1,125%, 2,125%, 3,125%, 4,125%, 5,175%) +IF(E2,50%)"]],"yozakura--fists-of-conviction":[[1,"1200%",{"0":"400%","1":"400%","2":"400%","3":"650%","4":"650%","5":"900%"},"=SWITCH($C$4, 0,400%, 1,400%, 2,400%, 3,650%, 4,650%, 5,900%) +IF(E3,150%) +IF(E4,150%)"],[2,"56,583",{},"=DMG(ATK(0%),P167*CRIT(0,0))"],[3,"285%",{"0":"150%","1":"150%","2":"195%","3":"195%","4":"240%","5":"240%"},"=SWITCH($C$4, 0,150%, 1,150%, 2,195%, 3,195%, 4,240%, 5,240%) +IF(E2,45%)"]],"glacia--disciplinary-committee":[[2,"360%",{"0":"200%","1":"200%","2":"230%","3":"260%","4":"290%","5":"320%"},"=SWITCH($C$4, 0,200%, 1,200%, 2,230%, 3,260%, 4,290%, 5,320%) +IF(E2,20%) +IF(E4,20%)"]],"gray--sharpshooter-of-the-mist":[[1,"24,817",{},"=DMG(ATK(0%),O54*CRIT(0,0))"],[3,"36,623",{},"=DMG(ATK_E(),Q54*CRIT(0,0))"],[4,"425%",{"0":"125%","1":"215%","2":"295%","3":"295%","4":"365%","5":"425%"},"=SWITCH($C$4, 0,125%, 1,215%, 2,295%, 3,295%, 4,365%, 5,425%)"]],"jayden--beautiful-girl-devotee":[[2,"17%",{"0":"5%","1":"5%","2":"9%","3":"9%","4":"17%","5":"17%"},"=SWITCH($C$4, 0,5%, 1,5%, 2,9%, 3,9%, 4,17%, 5,17%)"],[4,"6",{},"=IF($C$4 = 5, 6, 4)"]],"lathel--medicinal-herb-tracker":[[1,"104,233",{},"=DMG(ATK(50%),O75*CRIT(0,0))"],[2,"350%",{"0":"150%","1":"200%","2":"245%","3":"245%","4":"285%","5":"320%"},"=SWITCH($C$4, 0,150%, 1,200%, 2,245%, 3,245%, 4,285%, 5,320%) +IF(E2,15%) +IF(E4,15%)"]],"diana--adventurer-of-the-unknown":[[1,"220%",{"0":"100%","1":"140%","2":"170%","3":"170%","4":"170%","5":"200%"},"=SWITCH($C$4, 0,100%, 1,140%, 2,170%, 3,170%, 4,170%, 5,200%) +IF(E2,20%)"],[2,"30%",{},"=IF($C$4 > 3, 30%, 20%)"]],"justia-sacred--reclaimed-destiny":[[1,"59,562",{},"=DMG(ATK(0%),O72*CRIT(0,0))"],[2,"300%",{},"=IF($C$4 > 1, 300%, 150%)"],[3,"19,854",{},"=DMG(ATK(0%),Q72*CRIT(0,0))"],[4,"100%",{"0":"50%","1":"50%","2":"50%","3":"70%","4":"70%","5":"90%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,50%, 3,70%, 4,70%, 5,90%) +IF(E2,5%) +IF(E3,5%)"]],"priestess--earth-mother-believer":[[1,"75%",{"0":"50%","1":"50%","2":"60%","3":"60%","4":"70%","5":"70%"},"=SWITCH($C$4, 0,50%, 1,50%, 2,60%, 3,60%, 4,70%, 5,70%) +IF(E2,5%)"],[2,"79,416",{},"=DMG(ATK(0%),P116*CRIT(0,0))"],[3,"400%",{"0":"250%","1":"250%","2":"250%","3":"300%","4":"300%","5":"350%"},"=SWITCH($C$4, 0,250%, 1,250%, 2,250%, 3,300%, 4,300%, 5,350%) +IF(E3,25%) +IF(E4,25%)"]],"loen--track-and-field-team-member":[[1,"80%",{"0":"40%","1":"40%","2":"60%","3":"60%","4":"80%","5":"80%"},"=SWITCH($C$4, 0,40%, 1,40%, 2,60%, 3,60%, 4,80%, 5,80%)"],[2,"71,471",{},"=DMG(ATK(N94),P94*CRIT(0,0))"],[3,"200%",{"0":"100%","1":"100%","2":"115%","3":"135%","4":"150%","5":"170%"},"=SWITCH($C$4, 0,100%, 1,100%, 2,115%, 3,135%, 4,150%, 5,170%) +IF($E$2,15%) +IF($E$3,15%)"]],"levia--track-and-field-team-captain":[[2,"17,868",{},"=DMG(ATK(0%),P85*CRIT(0,0))"],[3,"90%",{"0":"30%","1":"30%","2":"30%","3":"50%","4":"50%","5":"70%"},"=SWITCH($C$4, 0,30%, 1,30%, 2,30%, 3,50%, 4,50%, 5,70%) +IF(E2,10%) +IF(E3,10%)"],[4,"100%",{"0":"40%","1":"40%","2":"60%","3":"60%","4":"80%","5":"80%"},"=SWITCH($C$4, 0,40%, 1,40%, 2,60%, 3,60%, 4,80%, 5,80%) +IF(E4,20%)"]],"celia--descendant-of-the-great-witch":[[1,"11,515",{},"=DMG(ATK(0%),O24*CRIT(0,0))"],[2,"58%",{"0":"25%","1":"31%","2":"37%","3":"37%","4":"43%","5":"50%"},"=SWITCH($C$4, 0,25%, 1,31%, 2,37%, 3,37%, 4,43%, 5,50%)+IF(E3,8%)"],[3,"65%",{"0":"35%","1":"45%","2":"55%","3":"55%","4":"65%","5":"65%"},"=SWITCH($C$4, 0,35%, 1,45%, 2,55%, 3,55%, 4,65%, 5,65%)"]],"scheherazade--magic-school-professor":[[1,"12,905",{},"=DMG(ATK(0%),O138*CRIT(0,0))"],[2,"65%",{"0":"20%","1":"28%","2":"36%","3":"36%","4":"43%","5":"50%"},"=SWITCH($C$4, 0,20%, 1,28%, 2,36%, 3,36%, 4,43%, 5,50%) +IF(E3,15%)"]],"sword-maiden--supreme-god-archbishop":[[1,"23,824",{},"=DMG(ATK(0%),O146*CRIT(0,0))"],[2,"120%",{"0":"65%","1":"65%","2":"75%","3":"85%","4":"95%","5":"105%"},"=SWITCH($C$4, 0,65%, 1,65%, 2,75%, 3,85%, 4,95%, 5,105%) +IF(E2,5%) +IF(E3,5%) +IF(E4,5%)"]],"beatrice--mighty-warrior-of-the-tribe":[[2,"300%",{"0":"125%","1":"125%","2":"150%","3":"150%","4":"175%","5":"225%"},"=SWITCH($C$4, 0,125%, 1,125%, 2,150%, 3,150%, 4,175%, 5,225%) +IF(E3,75%)"]],"high-elf-archer--daughter-of-starwind":[[1,"26,802",{},"=DMG(ATK(0%),O61*CRIT(100%,0))"],[2,"135%",{"0":"75%","1":"75%","2":"87%","3":"100%","4":"112%","5":"125%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,87%, 3,100%, 4,112%, 5,125%) +IF(E2,5%) +IF(E3,5%)"]],"cynthia--warmth-within-the-severe-cold":[[1,"4,963",{},"=DMG(ATK(0%),0.25*CRIT(0,0))"],[2,"44,671",{},"=DMG(ATK(0%),P26*CRIT(0,0))"],[3,"225%",{"0":"75%","1":"75%","2":"100%","3":"100%","4":"150%","5":"225%"},"=SWITCH($C$4, 0,75%, 1,75%, 2,100%, 3,100%, 4,150%, 5,225%)"]]};
const COSTUME_FIELD_FALLBACK_CACHE = {"venaka--dj":[3,3,"=IF($C$4 > 0, 3, 4)","=3"],"glacia--alice":[3,5,"=IF($C$4 > 2, 3, 4)","=7 -IF(E4,2)"],"julie--healer":[2,3,"=IF($C$4 > 2, 2, 3)","=IF($C$4 > 0, 3, 7)"],"blade--apostle":[3,5,"=4 -IF(E4,1)",""],"gray--vanguard":[3,5,"=IF($C$4 > 2, 4, 5)-IF(E4,1)","=5 "],"rou--stray-cat":[4,5,"=5 -IF(E3,1)",""],"rou--white-cat":[1,3,"=IF($C$4 > 2, 1, 2)",""],"seir--new-hire":[2,5,"=3 -IF(E4,1)","=7 -IF(E2,2)"],"levia--overheat":[4,1,"=IF($C$4 > 0, 4, 5)","=3 -IF(E4,2)"],"loen--last-hope":[5,3,"",""],"maria--archmage":[4,3,"=IF($C$4 > 2, 4, 5)","=IF($C$4 > 0, 3, 7)"],"sylvia--admiral":[3,5,"=IF($C$4 > 2, 3, 4)","=9 -IF(E3, 4)"],"yuri--whitebolt":[3,3,"=IF($C$4 > 0, 3, 4)","=5 -IF(E2,2)"],"celia--the-curse":[4,3,"=IF($C$4 > 2, 4, 5)","=5-IF(E4,2)"],"gray--pool-party":[3,5,"=IF($C$4 > 2, 4, 5) -IF(E4, 1)",""],"helena--top-idol":[1,3,"=IF($C$4 > 2, 1, 2)","=5 -IF(E3,2)"],"morpeah--apostle":[1,1,"=IF($C$4 > 0, 2, 3) -IF(E2,1)",""],"nebris--new-hire":[3,5,"=IF($C$4 > 0, 3, 4)","=7 -IF(E4,2)"],"olivier--apostle":[2,9,"=IF($C$4 > 0, 2, 1)",""],"blade--young-lady":[4,3,"=IF($C$4 > 0, 4, 5)",""],"gynt--lugo-hunter":[3,3,"=IF($C$4 > 2, 3, 4)","=IF($C$4 > 0, 3, 7)"],"rafina--game-club":[3,5,"=IF($C$4 > 0, 4, 5) -IF(E4,1)",""],"seir--b-rank-idol":[1,5,"=IF($C$4 > 2, 1, 2)",""],"andrew--specialist":[3,3,"=IF($C$4 > 2, 4, 5) -IF(E3, 1)","=IF($C$4 > 0, 3, 7)"],"dalvi--bright-moon":[3,7,"=IF($C$4 > 0, 4, 5) -IF(E3,1)",""],"elise--code-name-o":[2,1,"=IF($C$4 > 2, 2, 3)","=5 -IF(E3,4)"],"elise--lovely-lady":[3,3,"=IF($C$4 > 0, 4, 5) -IF(E3,1)","=5 -IF(E4,2)"],"emma--school-queen":[1,3,"=IF($C$4 > 2, 2, 3) -IF(E3,1)","=IF($C$4 > 0, 3, 7)"],"justia--kendo-club":[2,5,"=IF($C$4 > 2, 3, 4) -IF(E4,1)",""],"justia--pool-party":[1,7,"=IF($C$4 > 2, 1, 2)",""],"lathel--homunculus":[1,5,"=IF($C$4 > 2, 1, 2)",""],"lathel--pool-party":[3,3,"=IF($C$4 > 2, 3, 4)",""],"luvencia--wild-dog":[4,3,"=IF($C$4 > 0, 4, 5)","=5 -IF(E4,2)"],"rou--nature-s-claw":[3,5,"=IF($C$4 > 2, 4, 5) -IF(E4, 1)",""],"rubia--maid-bikini":[3,3,"=IF($C$4 > 2, 3, 4)",""],"rubia--maid-name-c":[2,5,"=IF($C$4 > 0, 2, 3)",""],"zenith--robin-hood":[0,1,"=IF($C$4 > 2, 1, 2) -IF(E3,1)",""],"alec--sword-breaker":[2,3,"=IF($C$4 > 2, 3, 4) -IF(E3,1)","=5 -IF(E4,2)"],"granhildr--the-void":[3,5,"=4 -IF(E4,1)",""],"helena--b-rank-idol":[1,3,"=IF($C$4 > 2, 2, 3) -IF(E3,1)",""],"lathel--dark-knight":[2,5,"=IF($C$4 > 2, 2, 3)",""],"rafina--code-name-a":[3,5,"=IF($C$4 > 2, 4, 5) -IF(E4, 1)",""],"samay--kind-student":[0,1,"=IF($C$4 > 2, 1, 2) -IF(E3,1)","=IF($C$4 > 0, 1, 5)"],"tyr--innocent-bunny":[4,5,"",""],"venaka--wind-dancer":[3,3,"=IF($C$4 > 0, 3, 4)","=5 -IF(E3,2)"],"ventana--snow-white":[3,3,"=IF($C$4 > 2, 4, 5) -IF(E4, 1)",""],"yuri--comeback-idol":[3,3,"=IF($C$4 > 0, 3, 4)","=5 -IF(E3,2)"],"andrew--loyal-butler":[4,3,"=IF($C$4 > 2, 4, 5)","=IF($C$4 > 0, 3, 7)"],"angelica--pool-party":[4,3,"=IF($C$4 > 2, 4, 5)","=5-IF(E4,2)"],"angelica--the-fallen":[2,3,"=IF($C$4 > 2, 2, 3)","=5-IF(E2,2)"],"diana--anti-dystopia":[1,3,"=IF($C$4 > 0, 1, 2)","=IF($C$4 > 3, 3, 5)"],"eclipse--dream-bride":[4,5,"=IF($C$4 > 0, 4, 5)",""],"granhildr--boo-ghost":[4,3,"=IF($C$4 > 0, 5, 6) -IF(E2,1)",""],"gray--b-rank-manager":[2,3,"=IF($C$4 > 2, 2, 3)","=5 -IF(E3,2)"],"justia--white-reaper":[2,3,"=IF($C$4 > 2, 2, 3)","=5 -IF(E3,2)"],"kry--violent-student":[1,3,"=IF($C$4 > 2, 1, 2)","=IF($C$4 > 0, 3, 7)"],"lecliss--killer-doll":[1,5,"=IF($C$4 > 2, 3, 4) -IF(E3,1) -IF(E4,1)","=5 "],"liatris--maid-name-r":[3,3,"=4-IF(E2,1)","=5-IF(E4,2)"],"nebris--basic-attack":[0,1,"",""],"rafina--steel-engine":[3,3,"=IF($C$4 > 2, 3, 4)","=5 -IF(E4,2)"],"rou--red-riding-hood":[2,5,"=IF($C$4 > 2, 3, 4) -IF(E4,1)","=5 "],"sylvia--bikini-agent":[4,3,"=IF($C$4 > 2, 4, 5)","=5 -IF(E2,2)"],"wiggle--bomb-fanatic":[2,1,"=SWITCH($C$4, 0,5, 1,4, 2,4, 3,3, 4,3, 5,3) -IF(E3,1)",""],"alec--the-destruction":[2,3,"=IF($C$4 > 2, 2, 3)","=5 -IF(E3,2)"],"angelica--neon-savior":[3,5,"=IF($C$4 > 2, 5, 6) -IF(E2,1) -IF(E4,1)",""],"eleaneer--b-rank-idol":[3,3,"=IF($C$4 > 2, 4, 5) -IF(E3, 1)",""],"ingrid--kardis-bullet":[3,3,"=IF($C$4 > 2, 3, 4)","=IF($C$4 > 0, 3, 7)"],"justia--blood-glutton":[2,7,"=IF($C$4 > 0, 2, 3)",""],"liatris--neon-stalker":[3,3,"=IF($C$4 > 2, 3, 4)",""],"liatris--rodev-s-star":[4,3,"=IF($C$4 > 2, 5, 6) - IF(E3,1)",""],"loen--celebrity-bunny":[6,9,"=IF($C$4 > 0, 6, 7)",""],"olivier--fallen-wings":[1,3,"=IF($C$4 > 0, 1, 2)",""],"roxy--emerging-desire":[1,3,"=IF($C$4 > 0, 1, 2)",""],"samay--kind-liberator":[3,3,"=IF($C$4 > 2, 4, 5) -IF(E3, 1)","=IF($C$4 > 0, 3, 7)"],"sonya--shadowed-dream":[3,3,"=IF($C$4 > 0, 3, 4)",""],"sylvia--desert-flower":[2,5,"=IF($C$4 > 2, 3, 4) -IF(E3,1)",""],"teresse--medical-club":[3,5,"=IF($C$4 > 0, 3, 4)",""],"anastasia--gentle-maid":[3,3,"=IF($C$4 > 2, 4, 5) -IF(E3, 1)","=5 -IF(E4,2)"],"dalvi--summer-vacation":[4,5,"=IF($C$4 > 0, 4, 5)",""],"eleaneer--shadow-bunny":[4,13,"=IF($C$4 > 2, 5, 6) -IF(E2,1)","=15 -IF(E3,2)"],"goblin-slayer--orcbolg":[4,1,"=IF($C$4 > 0, 4, 5)",""],"lecliss--android-queen":[3,5,"=IF($C$4 > 2, 3, 4)",""],"liberta--dark-saintess":[1,3,"=IF($C$4 > 0, 2, 3) -IF(E4,1)",""],"liberta--onsen-manager":[2,5,"=IF($C$4 > 0, 2, 3)","=5 "],"nartas--anonymous-sage":[4,5,"=5 -IF(E4,1)",""],"olstein--fiend-scholar":[3,5,"=IF($C$4 > 2, 3, 4)",""],"remnunt--combat-doctor":[4,3,"=IF($C$4 > 2, 4, 5)","=IF($C$4 > 0, 3, 7)"],"roxy--respected-master":[6,3,"=IF($C$4 > 0, 6, 7)",""],"seir--demon-s-daughter":[1,5,"=IF($C$4 > 2, 2, 3) -IF(E2,1)",""],"ventana--comeback-idol":[4,3,"=5 -IF(E3,1)",""],"yomi--gentle-destroyer":[6,3,"=7 -IF(E4,1)",""],"celia--masquerade-bunny":[3,5,"=IF($C$4 > 0, 3, 4)",""],"darian--prophetic-dream":[3,3,"=IF($C$4 > 0, 3, 4)",""],"eclipse--beach-vacation":[3,11,"=IF($C$4 > 0, 4, 5) -IF(E4,1)",""],"eris--your-very-own-cat":[4,3,"=IF($C$4 > 0, 5, 6) -IF(E3,1)",""],"justia--knight-of-blood":[3,3,"=IF($C$4 > 2, 3, 4)","=5 -IF(E2,2)"],"kry--liberated-marauder":[4,3,"=IF($C$4 > 2, 4, 5)","=IF($C$4 > 0, 3, 7)"],"lathel--lonely-survivor":[2,5,"=IF($C$4 > 2, 3, 4) -IF(E3,1)",""],"luvencia--deal-snatcher":[4,5,"=IF($C$4 > 0, 5, 6) -IF(E2,1)",""],"morpeah--beach-vacation":[5,1,"=IF(E3 > 2, 5, 6)","=IF(E2, 1, 3)"],"morpeah--daydream-bunny":[1,3,"=3 -IF(E2,1) -IF(E3,1)","=5 -IF(E4,2)"],"olivier--faithful-wings":[2,3,"=IF($C$4 > 0, 2, 3)",""],"sylvia--the-sword-queen":[1,5,"",""],"tyr--starlight-guardian":[4,3,"=IF($C$4 > 0, 5, 6) -IF(E2,1)",""],"yumi--dancing-snowflake":[3,1,"=IF($C$4 > 0, 4, 5) -IF(E3,1)",""],"anastasia--fire-graffiti":[3,3,"=IF($C$4 > 2, 3, 4)",""],"eclipse--dimension-witch":[2,3,"=IF($C$4 > 2, 3, 4) -IF(E4,1)","=5 -IF(E3,2)"],"eclipse--nightmare-bunny":[3,5,"",""],"elpis--hand-of-salvation":[2,5,"=IF($C$4 > 1, 2, 3)","=5 "],"emma--haggard-delinquent":[1,3,"=IF($C$4 > 2, 1, 2)","=IF($C$4 > 0, 3, 7)"],"fred--lugo-defense-force":[1,3,"=IF($C$4 > 2, 1, 2)","=IF($C$4 > 0, 3, 7)"],"granhildr--comeback-idol":[5,5,"=6 -IF(E3,1)","=IF($C$4 > 1, 5, 7)"],"layla--anvil-of-creation":[4,3,"=IF($C$4 > 2, 5, 6) -IF(E3,1)","=IF($C$4 > 0, 3, 7)"],"levia--night-of-jealousy":[4,5,"=IF($C$4 > 0, 4, 5)",""],"refithea--poolside-fairy":[6,7,"=IF($C$4 > 0, 6, 7)",""],"refithea--the-gluttonous":[2,5,"=IF($C$4 > 0, 2, 3)","=7 -IF(E2,2)"],"rigenette--little-hunter":[1,3,"=IF($C$4 > 2, 1, 2)","=IF($C$4 > 0, 3, 7)"],"scheherazade--pool-party":[2,3,"=IF($C$4 > 2, 2, 3)","=5 -IF(E3,2)"],"teresse--beachside-angel":[2,5,"=IF($C$4 > 0, 3, 4) -IF(E2,1)",""],"wilhelmina--frozen-queen":[3,5,"=IF($C$4 > 0, 4, 5) -IF(E2,1)",""],"wilhelmina--iron-monarch":[3,1,"=IF($C$4 > 0, 4, 5) -IF(E4,1)","=IF($C$4 > 3, 1, 3)"],"carlson--mercenary-knight":[1,3,"=IF($C$4 > 2, 2, 3) -IF(E3,1)","=IF($C$4 > 0, 3, 7)"],"darian--bittersweet-bunny":[6,15,"=IF($C$4 > 0, 6, 7)","=IF($C$4 > 1, 15, 17)"],"eris--esteemed-adventurer":[3,3,"=IF($C$4 > 0, 3, 4)",""],"hikage--kind-ruthlessness":[3,1,"=IF($C$4 > 0, 4, 5) -IF(E4,1)","=IF($C$4 > 3, 1, 3)"],"lucrezia--seductive-wings":[2,3,"=IF($C$4 > 2, 2, 3)","=IF($C$4 > 0, 3, 7)"],"scheherazade--code-name-s":[3,5,"=IF($C$4 > 2, 3, 4)",""],"scheherazade--lapis-witch":[3,3,"=IF($C$4 > 2, 3, 4)","=5 -IF(E3,2)"],"zenith--poolside-guardian":[2,3,"=IF($C$4 > 0, 3, 4) -IF(E2,1)",""],"arines--priest-of-vitality":[2,3,"=IF($C$4 > 2, 2, 3)","=IF($C$4 > 0, 3, 7)"],"lisianne--wandering-priest":[2,3,"=IF($C$4 > 2, 2, 3)","=IF($C$4 > 0, 3, 7)"],"lydia--apprentice-spearman":[3,3,"=IF($C$4 > 2, 3, 4)","=IF($C$4 > 0, 3, 7)"],"rubia--thorn-of-the-desert":[3,5,"=IF($C$4 > 2, 3, 4)",""],"sonya--little-pumpkin-girl":[4,3,"=IF($C$4 > 0, 4, 5)",""],"wiggle--bomb-in-the-hoodie":[4,3,"=IF($C$4 > 2, 5, 6) -IF(E3,1)","=IF($C$4 > 0, 3, 7)"],"jayden--manga-research-club":[5,3,"=IF($C$4 > 2, 5, 6)","=IF($C$4 > 0, 3, 7)"],"michaela--acting-archbishop":[3,5,"=IF($C$4 > 0, 4, 5) -IF(E4,1)",""],"michaela--beachside-justice":[4,1,"=IF($C$4 > 0, 4, 5)",""],"nebris--laid-back-lifeguard":[3,3,"=IF($C$4 > 0, 3, 4)","=3"],"rubia--empress-of-the-ocean":[4,5,"=IF($C$4 > 2, 4, 5)",""],"ventana--onsen-practitioner":[2,7,"=IF($C$4 > 0, 2, 3)",""],"eleaneer--piercing-magic-bow":[2,3,"=IF($C$4 > 2, 2, 3)","=5 -IF(E4,2)"],"lathel--promise-of-vengeance":[2,5,"=IF($C$4 > 2, 2, 3)",""],"nebris--labyrinth-gatekeeper":[3,3,"=IF($C$4 > 0, 3, 4)","=3"],"olstein--sage-of-blue-clouds":[1,3,"=IF($C$4 > 2, 1, 2)","=5 -IF(E3,2)"],"wilhelmina--water-park-queen":[4,3,"=IF($C$4 > 0, 4, 5)",""],"bernie--righteous-raider-girl":[3,1,"=IF($C$4 > 2, 3, 4)","=IF($C$4 > 0, 3, 7) -IF(E3,2)"],"michaela--queen-of-signatures":[2,3,"=IF($C$4 > 0, 2, 3)","=IF(E4, 3, 7)"],"refithea--pure-white-blessing":[2,1,"=IF($C$4 > 0, 2, 3)",""],"teresse--angel-of-destruction":[1,3,"=IF($C$4 > 2, 1, 2)",""],"yozakura--fists-of-conviction":[4,3,"=IF($C$4 > 0, 4, 5)",""],"glacia--disciplinary-committee":[2,3,"=IF($C$4 > 0, 2, 3)","=5 -IF(E3,2)"],"gray--sharpshooter-of-the-mist":[2,5,"=IF($C$4 > 2, 2, 3)",""],"jayden--beautiful-girl-devotee":[2,3,"=IF($C$4 > 2, 2, 3)","=IF($C$4 > 0, 3, 7)"],"lathel--medicinal-herb-tracker":[2,3,"=IF($C$4 > 2, 2, 3)",""],"diana--adventurer-of-the-unknown":[2,7,"=IF($C$4 > 2, 2, 3)","=9-IF(E3,2)"],"justia-sacred--reclaimed-destiny":[5,1,"=IF($C$4 > 0, 5, 6)","=IF($C$4 > 3, 1, 3)"],"priestess--earth-mother-believer":[3,1,"=IF($C$4 > 2, 3, 4)",""],"loen--track-and-field-team-member":[4,3,"=IF($C$4 > 0, 4, 5)","=5 -IF(E4,2)"],"levia--track-and-field-team-captain":[4,5,"=IF($C$4 > 0, 4, 5)",""],"celia--descendant-of-the-great-witch":[4,3,"=IF($C$4 > 2, 4, 5)","=5-IF(E4,2)"],"scheherazade--magic-school-professor":[4,5,"=IF($C$4 > 2, 5, 6) -IF(E4,1)",""],"sword-maiden--supreme-god-archbishop":[5,3,"=IF($C$4 > 0, 5, 6)",""],"beatrice--mighty-warrior-of-the-tribe":[3,3,"=IF($C$4 > 2, 3, 4)","=IF($C$4 > 0, 3, 7)"],"high-elf-archer--daughter-of-starwind":[3,1,"=IF($C$4 > 0, 3, 4)",""],"cynthia--warmth-within-the-severe-cold":[2,3,"=IF($C$4 > 2, 3, 4) -IF(E3,1)","=IF($C$4 > 0, 3, 7)"]};
const GEAR_TABLE_FALLBACK = {"main":{"EX R":{"CR":0.0333,"HP":90,"ATK":15,"DEF":0.03,"HP%":0.1,"ATK%":0.1,"CDMG":0.2,"MATK":15,"MRES":0.03,"MATK%":0.1},"EX SR":{"CR":0.0583,"HP":157,"ATK":26,"DEF":0.0525,"HP%":0.175,"ATK%":0.175,"CDMG":0.35,"MATK":26,"MRES":0.0525,"MATK%":0.175},"EX UR":{"CR":0.0833,"HP":270,"ATK":37,"DEF":0.09,"HP%":0.3,"ATK%":0.25,"CDMG":0.5,"MATK":37,"MRES":0.09,"MATK%":0.25},"R4":{"CR":0.0333,"HP":90,"ATK":15,"DEF":0.03,"HP%":0.1,"ATK%":0.1,"CDMG":0.2,"MATK":15,"MRES":0.03,"MATK%":0.1},"SR1":{"CR":0.0291,"HP":78,"ATK":13,"DEF":0.0262,"HP%":0.0875,"ATK%":0.0875,"CDMG":0.175,"MATK":13,"MRES":0.0262,"MATK%":0.0875},"SR2":{"CR":0.035,"HP":94,"ATK":15,"DEF":0.0315,"HP%":0.105,"ATK%":0.105,"CDMG":0.21,"MATK":15,"MRES":0.0315,"MATK%":0.105},"SR3":{"CR":0.0466,"HP":126,"ATK":21,"DEF":0.042,"HP%":0.14,"ATK%":0.14,"CDMG":0.28,"MATK":21,"MRES":0.042,"MATK%":0.14},"SR4":{"CR":0.0583,"HP":157,"ATK":26,"DEF":0.0525,"HP%":0.175,"ATK%":0.175,"CDMG":0.35,"MATK":26,"MRES":0.0525,"MATK%":0.175},"UR1":{"CR":0.0416,"HP":135,"ATK":18,"DEF":0.045,"HP%":0.15,"ATK%":0.125,"CDMG":0.25,"MATK":18,"MRES":0.045,"MATK%":0.125},"UR2":{"CR":0.05,"HP":162,"ATK":22,"DEF":0.054,"HP%":0.18,"ATK%":0.15,"CDMG":0.3,"MATK":22,"MRES":0.054,"MATK%":0.15},"UR3":{"CR":0.0666,"HP":216,"ATK":30,"DEF":0.072,"HP%":0.24,"ATK%":0.2,"CDMG":0.4,"MATK":30,"MRES":0.072,"MATK%":0.2},"UR4":{"CR":0.0833,"HP":270,"ATK":37,"DEF":0.09,"HP%":0.3,"ATK%":0.25,"CDMG":0.5,"MATK":37,"MRES":0.09,"MATK%":0.25}},"sub":{"EX R":{"CR":0.012,"HP":32,"ATK":5,"DEF":0.0144,"HP%":0.036,"ATK%":0.036,"CDMG":0.072,"MATK":5,"MRES":0.0144,"MATK%":0.036},"EX SR":{"CR":0.021,"HP":56,"ATK":8,"DEF":0.0252,"HP%":0.063,"ATK%":0.063,"CDMG":0.126,"MATK":8,"MRES":0.0252,"MATK%":0.063},"EX UR":{"CR":0.03,"HP":96,"ATK":12,"DEF":0.0432,"HP%":0.108,"ATK%":0.09,"CDMG":0.18,"MATK":12,"MRES":0.0432,"MATK%":0.09},"R4":{"CR":0.012,"HP":32,"ATK":5,"DEF":0.0144,"HP%":0.036,"ATK%":0.036,"CDMG":0.072,"MATK":5,"MRES":0.0144,"MATK%":0.036},"SR1":{"CR":0.0105,"HP":28,"ATK":4,"DEF":0.0126,"HP%":0.0315,"ATK%":0.0315,"CDMG":0.063,"MATK":4,"MRES":0.0126,"MATK%":0.0315},"SR2":{"CR":0.0126,"HP":33,"ATK":5,"DEF":0.0151,"HP%":0.0378,"ATK%":0.0378,"CDMG":0.0756,"MATK":5,"MRES":0.0151,"MATK%":0.0378},"SR3":{"CR":0.0168,"HP":44,"ATK":7,"DEF":0.0201,"HP%":0.0504,"ATK%":0.0504,"CDMG":0.1008,"MATK":7,"MRES":0.0201,"MATK%":0.0504},"SR4":{"CR":0.021,"HP":56,"ATK":8,"DEF":0.0252,"HP%":0.063,"ATK%":0.063,"CDMG":0.126,"MATK":8,"MRES":0.0252,"MATK%":0.063},"UR1":{"CR":0.015,"HP":48,"ATK":6,"DEF":0.0216,"HP%":0.054,"ATK%":0.045,"CDMG":0.09,"MATK":6,"MRES":0.0216,"MATK%":0.045},"UR2":{"CR":0.018,"HP":57,"ATK":7,"DEF":0.0259,"HP%":0.0648,"ATK%":0.054,"CDMG":0.108,"MATK":7,"MRES":0.0259,"MATK%":0.054},"UR3":{"CR":0.024,"HP":76,"ATK":10,"DEF":0.0345,"HP%":0.0864,"ATK%":0.072,"CDMG":0.144,"MATK":10,"MRES":0.0345,"MATK%":0.072},"UR4":{"CR":0.03,"HP":96,"ATK":12,"DEF":0.0432,"HP%":0.108,"ATK%":0.09,"CDMG":0.18,"MATK":12,"MRES":0.0432,"MATK%":0.09}},"refine":{"EX R":{"CR":0.00224,"HP":6,"ATK":1,"DEF":0.002,"HP%":0.00668,"ATK%":0.00668,"CDMG":0.01334,"MATK":1,"MRES":0.002,"MATK%":0.00668},"EX SR":{"CR":0.00394,"HP":10.56,"ATK":1.74,"DEF":0.0035,"HP%":0.0118,"ATK%":0.0118,"CDMG":0.0236,"MATK":1.74,"MRES":0.0035,"MATK%":0.0118},"EX UR":{"CR":0.0056,"HP":18,"ATK":2.5,"DEF":0.006,"HP%":0.02,"ATK%":0.0168,"CDMG":0.0336,"MATK":2.5,"MRES":0.006,"MATK%":0.0168},"R4":{"CR":0.00224,"HP":6,"ATK":1,"DEF":0.002,"HP%":0.00668,"ATK%":0.00668,"CDMG":0.01334,"MATK":1,"MRES":0.002,"MATK%":0.00668},"SR1":{"CR":0.00196,"HP":5.2,"ATK":0.9,"DEF":0.00176,"HP%":0.006,"ATK%":0.006,"CDMG":0.0118,"MATK":0.9,"MRES":0.00176,"MATK%":0.006},"SR2":{"CR":0.00236,"HP":6.3,"ATK":1,"DEF":0.0021,"HP%":0.007,"ATK%":0.007,"CDMG":0.014,"MATK":1,"MRES":0.0021,"MATK%":0.007},"SR3":{"CR":0.00312,"HP":8.4,"ATK":1.4,"DEF":0.0028,"HP%":0.0094,"ATK%":0.0094,"CDMG":0.0188,"MATK":1.4,"MRES":0.0028,"MATK%":0.0094},"SR4":{"CR":0.00394,"HP":10.56,"ATK":1.74,"DEF":0.0035,"HP%":0.0118,"ATK%":0.0118,"CDMG":0.0236,"MATK":1.74,"MRES":0.0035,"MATK%":0.0118},"UR1":{"CR":0.0028,"HP":9,"ATK":1.2,"DEF":0.003,"HP%":0.01,"ATK%":0.0084,"CDMG":0.0168,"MATK":1.2,"MRES":0.003,"MATK%":0.0084},"UR2":{"CR":0.00336,"HP":10.8,"ATK":1.48,"DEF":0.0036,"HP%":0.012,"ATK%":0.01,"CDMG":0.02,"MATK":1.48,"MRES":0.0036,"MATK%":0.01},"UR3":{"CR":0.00446,"HP":14.5,"ATK":2,"DEF":0.0048,"HP%":0.016,"ATK%":0.01334,"CDMG":0.0268,"MATK":2,"MRES":0.0048,"MATK%":0.01334},"UR4":{"CR":0.0056,"HP":18,"ATK":2.5,"DEF":0.006,"HP%":0.02,"ATK%":0.0168,"CDMG":0.0336,"MATK":2.5,"MRES":0.006,"MATK%":0.0168}}};
const RECENT_BD2DB_FALLBACK = {"costumes":[{"id":"aquila--savage-warrior","name":"Savage Warrior","source":"bd2db","target":null,"base_sp":4,"has_burst":false,"is_limited":null,"skill_name":"Thrill of Battle","sp_formula":"=SWITCH($C$4,0,5,1,4,2,4,3,4,4,4,5,4)","external_id":"Aquila_1","character_id":"aquila","base_cooldown":9,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,9,1,9,2,9,3,9,4,9,5,9)","skill_description":"For 4 turn(s), whenever you receive an attack, apply 1 stacks of an effect that increases your ATK by {VALUE2}% for 4 turn(s). This can increase to a maximum of 99 stacks. For 2 turn(s), whenever you receive an attack, reduce the cooldown of the current Costume by 2. Attack the enemy 3 times, dealing  Physical DMG equal to {VALUE1}% of your ATK per hit.","total_damage_label":null},{"id":"blade--onsen-swordfighter","name":"Onsen Swordfighter","source":"bd2db","target":null,"base_sp":3,"has_burst":false,"is_limited":null,"skill_name":"Moonfall Slash","sp_formula":"=SWITCH($C$4,0,4,1,3,2,3,3,3,4,3,5,3)","external_id":"Blade_3","character_id":"blade","base_cooldown":5,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,5,1,5,2,5,3,5,4,5,5,5)","skill_description":"Deal  Physical DMG to the enemy equal to {VALUE1}% of your ATK. Deal additonal damage equal to {VALUE2}% of ATK for each Debuff on the enemy.","total_damage_label":null},{"id":"dalvi--tricky-lover","name":"Tricky Lover","source":"bd2db","target":null,"base_sp":6,"has_burst":false,"is_limited":null,"skill_name":"Playtime is Over","sp_formula":"=SWITCH($C$4,0,7,1,6,2,6,3,6,4,6,5,6)","external_id":"Dalvi_3","character_id":"dalvi","base_cooldown":9,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,9,1,9,2,9,3,9,4,9,5,9)","skill_description":"Deal Magic DMG to the enemy equal to {VALUE1}% of your Magic ATK. If the enemy has Bleed, deal Magic DMG equal to {VALUE2}% of your Magic ATK per Bleed stack making up the Total Bleed instead. Remove Bleed from the enemy.","total_damage_label":null},{"id":"diana--magical-innovator","name":"Magical Innovator","source":"bd2db","target":null,"base_sp":5,"has_burst":false,"is_limited":null,"skill_name":"Magical Field Expansion","sp_formula":"=SWITCH($C$4,0,5,1,5,2,5,3,5,4,5,5,5)","external_id":"Diana_3","character_id":"diana","base_cooldown":15,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,15,1,15,2,15,3,15,4,15,5,15)","skill_description":"Preemptive ActionUse Allied Zone Summon to create 1 Magic Amplifier ET001.","total_damage_label":null},{"id":"elise--naive-lady","name":"Naive Lady","source":"bd2db","target":null,"base_sp":3,"has_burst":false,"is_limited":null,"skill_name":"I Wanna Win!","sp_formula":"=SWITCH($C$4,0,4,1,3,2,3,3,3,4,3,5,3)","external_id":"Elise_3","character_id":"elise","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"Apply an Augmentation effect to yourself for 6 turn(s), increasing your damage dealt by {VALUE2}%. Resonate with a target affected by Stat Weakening on the battlefield. For 6 turn(s), apply {VALUE4} stack(s) of {VALUE3}% Augmentation to yourself for each target. Can stack up to 30 times. Attack the enemy 3 times, dealing  Physical DMG equal to {VALUE1}% of your ATK per hit.","total_damage_label":null},{"id":"glacia--heavenly-guardian-successor","name":"Heavenly Guardian Successor","source":"bd2db","target":null,"base_sp":4,"has_burst":false,"is_limited":null,"skill_name":"True Dragon Manifest","sp_formula":"=SWITCH($C$4,0,5,1,4,2,4,3,4,4,4,5,4)","external_id":"Glacia_3","character_id":"glacia","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"Attack the enemy 5 times, dealing Fixed DMG (Magic) equal to {VALUE1}% of your Magic ATK per hit. Apply {VALUE3} Chain Retention to the enemy for {VALUE2} turn(s).","total_damage_label":null},{"id":"granadair--queen-of-gluttis","name":"Queen of Gluttis","source":"bd2db","target":null,"base_sp":1,"has_burst":false,"is_limited":null,"skill_name":"Mana Convergence","sp_formula":"=SWITCH($C$4,0,2,1,1,2,1,3,1,4,1,5,1)","external_id":"Granadair_1","character_id":"granadair","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"For 4 turn(s), your allies restore 1 SP at the end of each turn. Ally Magic ATK is increased by {VALUE1}% for 4 turn(s). Ally Magic ATK is increased by {VALUE2}% for 2 turn(s).","total_damage_label":null},{"id":"granadair--shrine-maiden-of-purification","name":"Shrine Maiden of Purification","source":"bd2db","target":null,"base_sp":3,"has_burst":false,"is_limited":null,"skill_name":"Blessing of Purification","sp_formula":"=SWITCH($C$4,0,4,1,3,2,3,3,3,4,3,5,3)","external_id":"Granadair_2","character_id":"granadair","base_cooldown":5,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,5,1,5,2,5,3,5,4,5,5,5)","skill_description":"Apply an Augmentation effect to allies for {VALUE2} turn(s), increasing their damage dealt by {VALUE1}%. Absorb Debuffs from allies. For each debuff absorbed, grant that ally 1 stacks of 10% Augmentation for {VALUE3} turn(s). Can stack up to 15 times.","total_damage_label":null},{"id":"granhildr--combat-medic","name":"Combat Medic","source":"bd2db","target":null,"base_sp":4,"has_burst":false,"is_limited":null,"skill_name":"Drastic Measures","sp_formula":"=SWITCH($C$4,0,5,1,4,2,4,3,4,4,4,5,4)","external_id":"Granhildr_4","character_id":"granhildr","base_cooldown":5,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,5,1,5,2,5,3,5,4,5,5,5)","skill_description":"Your Crit DMG is increased by {VALUE2}% for {VALUE3} turn(s). If your Number of Buffs is 5 or more, Extend the duration of each Buff by {VALUE4} turn(s). Deal  Physical DMG to the enemy equal to {VALUE1}% of your Max HP.","total_damage_label":null},{"id":"helena--sunny-inn-hand","name":"Sunny Inn Hand","source":"bd2db","target":null,"base_sp":4,"has_burst":false,"is_limited":null,"skill_name":"A Big, Warm Hug!","sp_formula":"=SWITCH($C$4,0,5,1,4,2,4,3,4,4,4,5,4)","external_id":"Helena_3","character_id":"helena","base_cooldown":7,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,7,1,7,2,7,3,7,4,7,5,7)","skill_description":"Apply an Augmentation effect to the Next-Attacking Ally for {VALUE1} turn(s), increasing their damage dealt by {VALUE2}%. Reduce the cooldown of all Costumes owned by the Next-Attacking Ally by {VALUE3}.","total_damage_label":null},{"id":"ikaruga--noble-flame","name":"Noble Flame","source":"bd2db","target":null,"base_sp":5,"has_burst":false,"is_limited":null,"skill_name":"Hien Hōsen: Mode One","sp_formula":"=SWITCH($C$4,0,6,1,5,2,5,3,5,4,5,5,5)","external_id":"Ikaruga_1","character_id":"ikaruga","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"Apply 1 stacks of an effect that increases ATK by {VALUE2}%. Can stack up to 3 times. This effect wears off after being hit 1 times. Attack the enemy 6 times, dealing  Physical DMG equal to {VALUE1}% of your ATK per hit.","total_damage_label":null},{"id":"kyouka-uzen--eternal-chains","name":"Eternal Chains","source":"bd2db","target":null,"base_sp":4,"has_burst":false,"is_limited":null,"skill_name":"Time to Submit!","sp_formula":"=SWITCH($C$4,0,5,1,4,2,4,3,4,4,4,5,4)","external_id":"KyoukaUzen_1","character_id":"kyouka-uzen","base_cooldown":7,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,9,1,9,2,7,3,7,4,7,5,7)","skill_description":"Attack the enemy 1 times, dealing Physical DMG equal to {VALUE1}% of your ATK per hit.","total_damage_label":null},{"id":"liberta--miracle-rose","name":"Miracle Rose","source":"bd2db","target":null,"base_sp":1,"has_burst":false,"is_limited":null,"skill_name":"Rose☆Soul Empower","sp_formula":"=SWITCH($C$4,0,2,1,1,2,1,3,1,4,1,5,1)","external_id":"Liberta_3","character_id":"liberta","base_cooldown":5,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,5,1,5,2,5,3,5,4,5,5,5)","skill_description":"Your Crit Rate is increased by {VALUE2}% for 1 turn(s). Attack the enemy 5 times, dealing  Physical DMG equal to {VALUE1}% of your Max HP per hit.","total_damage_label":null},{"id":"luvencia--ocean-vanguard","name":"Ocean Vanguard","source":"bd2db","target":null,"base_sp":5,"has_burst":false,"is_limited":null,"skill_name":"Overclocked Run N' Gun","sp_formula":"=SWITCH($C$4,0,6,1,5,2,5,3,5,4,5,5,5)","external_id":"Luvencia_3","character_id":"luvencia","base_cooldown":5,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,5,1,5,2,5,3,5,4,5,5,5)","skill_description":"For 6 turn(s), accelerate (Acceleration), applying 1 stacks of an effect that increases your ATK by {VALUE2}% whenever you stack a Chain with an attack. Can stack up to 60 times. If you have more than 24 ATK Boost stacks, apply a {VALUE3}% Chain DMG Increase to yourself for 2 turn(s). Attack the enemy 8 times, dealing  Physical DMG equal to {VALUE1}% of your ATK per hit.","total_damage_label":null},{"id":"mamonir--miracle-marine","name":"Miracle Marine","source":"bd2db","target":null,"base_sp":2,"has_burst":false,"is_limited":null,"skill_name":"Marine☆Deep Endure","sp_formula":"=SWITCH($C$4,0,3,1,2,2,2,3,2,4,2,5,2)","external_id":"Mamonir_2","character_id":"mamonir","base_cooldown":7,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,7,1,7,2,7,3,7,4,7,5,7)","skill_description":"Whenever you receive an attack, apply {VALUE1}% Vulnerability to the enemy. This effect disappears after 8 hit(s) received. Vulnerability lasts for {VALUE2} turn(s) and applies 1 stacks per hit, up to a maximum of 8 stack(s). Apply a {VALUE3}% Barrier to yourself for 6 turn(s).","total_damage_label":null},{"id":"mamonir--night-of-death","name":"Night of Death","source":"bd2db","target":null,"base_sp":3,"has_burst":false,"is_limited":null,"skill_name":"Go, Octovius!","sp_formula":"=SWITCH($C$4,0,4,1,3,2,3,3,3,4,3,5,3)","external_id":"Mamonir_1","character_id":"mamonir","base_cooldown":7,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,7,1,7,2,7,3,7,4,7,5,7)","skill_description":"For 6 turn(s), Transforms by releasing the power of Octovius. Your Crit DMG is increased by {VALUE2}% for 6 turn(s). Attack the enemy 8 times, dealing  Magic DMG equal to {VALUE1}% of your Max HP per hit.","total_damage_label":null},{"id":"nekyndalia--deadeye","name":"Deadeye","source":"bd2db","target":null,"base_sp":3,"has_burst":false,"is_limited":null,"skill_name":"Fatal Line","sp_formula":"=SWITCH($C$4,0,4,1,3,2,3,3,3,4,3,5,3)","external_id":"Nekyndalia_1","character_id":"nekyndalia","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"For {VALUE2} turn(s), apply a Mark to the enemy. Attack the enemy {HIT1} times, dealing Magic DMG equal to {VALUE1}% of your Magic ATK.","total_damage_label":null},{"id":"olivier--retired-legend","name":"Retired Legend","source":"bd2db","target":null,"base_sp":5,"has_burst":false,"is_limited":null,"skill_name":"Sparkle☆Shower!","sp_formula":"=SWITCH($C$4,0,6,1,5,2,5,3,5,4,5,5,5)","external_id":"Olivier_4","character_id":"olivier","base_cooldown":15,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,15,1,15,2,15,3,15,4,15,5,15)","skill_description":"Create a Domain on the battlefield for 10 turn(s), increasing allies' Magic ATK by {VALUE1}%. Attack the enemy 6 times, dealing  Magic DMG equal to {VALUE2}% of your Magic ATK per hit.","total_damage_label":null},{"id":"palette--miracle-violet","name":"Miracle Violet","source":"bd2db","target":null,"base_sp":4,"has_burst":false,"is_limited":null,"skill_name":"Violet☆Ultra Rush","sp_formula":"=SWITCH($C$4,0,5,1,4,2,4,3,4,4,4,5,4)","external_id":"Palette_2","character_id":"palette","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"Attack the enemy {HIT1} times, dealing  Magic DMG equal to {VALUE1}% of your Magic ATK per hit. If the target has 7 or more Debuffs, deals Magic DMG equal to {VALUE2}% of your Magic ATK instead.","total_damage_label":null},{"id":"palette--shattered-dream","name":"Shattered Dream","source":"bd2db","target":null,"base_sp":3,"has_burst":false,"is_limited":null,"skill_name":"My Masterpiece...!","sp_formula":"=SWITCH($C$4,0,4,1,3,2,3,3,3,4,3,5,3)","external_id":"Palette_1","character_id":"palette","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"Deal  Magic DMG to the enemy equal to {VALUE1}% of your Magic ATK. Extend the duration of all Debuffs on the enemy by 2 turn(s).","total_damage_label":null},{"id":"tenka-izumo--ame-no-mitori","name":"Ame-no-Mitori","source":"bd2db","target":null,"base_sp":5,"has_burst":false,"is_limited":null,"skill_name":"Right Where I Want You!","sp_formula":"=SWITCH($C$4,0,6,1,5,2,5,3,5,4,5,5,5)","external_id":"TenkaIzumo_1","character_id":"tenka-izumo","base_cooldown":3,"is_basic_attack":false,"cooldown_formula":"=SWITCH($C$4,0,3,1,3,2,3,3,3,4,3,5,3)","skill_description":"Attack the enemy 3 times, dealing Magic DMG equal to {VALUE1}% of your Magic ATK per hit.","total_damage_label":null}],"variables":[{"formula":"=BD2DB_PRIMARY","costume_id":"aquila--savage-warrior","dupe_values":{"0":"200%","1":"200%","2":"250%","3":"250%","4":"300%","5":"300%"},"variable_index":1,"displayed_value":"300%"},{"formula":null,"costume_id":"aquila--savage-warrior","dupe_values":{"0":"15%","1":"15%","2":"15%","3":"21%","4":"21%","5":"27%"},"variable_index":2,"displayed_value":"27%"},{"formula":"=BD2DB_PRIMARY","costume_id":"blade--onsen-swordfighter","dupe_values":{"0":"350%","1":"350%","2":"425%","3":"425%","4":"500%","5":"500%"},"variable_index":1,"displayed_value":"500%"},{"formula":null,"costume_id":"blade--onsen-swordfighter","dupe_values":{"0":"70%","1":"70%","2":"70%","3":"90%","4":"90%","5":"110%"},"variable_index":2,"displayed_value":"110%"},{"formula":"=BD2DB_PRIMARY","costume_id":"dalvi--tricky-lover","dupe_values":{"0":"100%","1":"100%","2":"100%","3":"100%","4":"100%","5":"100%"},"variable_index":1,"displayed_value":"100%"},{"formula":null,"costume_id":"dalvi--tricky-lover","dupe_values":{"0":"100%","1":"100%","2":"140%","3":"180%","4":"220%","5":"260%"},"variable_index":2,"displayed_value":"260%"},{"formula":"=BD2DB_PRIMARY","costume_id":"elise--naive-lady","dupe_values":{"0":"100%","1":"100%","2":"100%","3":"120%","4":"120%","5":"140%"},"variable_index":1,"displayed_value":"140%"},{"formula":null,"costume_id":"elise--naive-lady","dupe_values":{"0":"70%","1":"70%","2":"85%","3":"85%","4":"100%","5":"100%"},"variable_index":2,"displayed_value":"100%"},{"formula":null,"costume_id":"elise--naive-lady","dupe_values":{"0":"4%","1":"4%","2":"6%","3":"6%","4":"8%","5":"8%"},"variable_index":3,"displayed_value":"8%"},{"formula":null,"costume_id":"elise--naive-lady","dupe_values":{"0":"1%","1":"1%","2":"1%","3":"1%","4":"1%","5":"1%"},"variable_index":4,"displayed_value":"1%"},{"formula":"=BD2DB_PRIMARY","costume_id":"glacia--heavenly-guardian-successor","dupe_values":{"0":"100%","1":"100%","2":"100%","3":"120%","4":"120%","5":"140%"},"variable_index":1,"displayed_value":"140%"},{"formula":null,"costume_id":"glacia--heavenly-guardian-successor","dupe_values":{"0":"4%","1":"4%","2":"4%","3":"4%","4":"4%","5":"4%"},"variable_index":2,"displayed_value":"4%"},{"formula":null,"costume_id":"glacia--heavenly-guardian-successor","dupe_values":{"0":"6%","1":"6%","2":"9%","3":"9%","4":"12%","5":"12%"},"variable_index":3,"displayed_value":"12%"},{"formula":null,"costume_id":"granadair--queen-of-gluttis","dupe_values":{"0":"50%","1":"50%","2":"60%","3":"60%","4":"70%","5":"70%"},"variable_index":1,"displayed_value":"70%"},{"formula":null,"costume_id":"granadair--queen-of-gluttis","dupe_values":{"0":"45%","1":"45%","2":"45%","3":"55%","4":"55%","5":"65%"},"variable_index":2,"displayed_value":"65%"},{"formula":null,"costume_id":"granadair--shrine-maiden-of-purification","dupe_values":{"0":"75%","1":"75%","2":"85%","3":"95%","4":"105%","5":"115%"},"variable_index":1,"displayed_value":"115%"},{"formula":null,"costume_id":"granadair--shrine-maiden-of-purification","dupe_values":{"0":"4%","1":"4%","2":"4%","3":"4%","4":"4%","5":"4%"},"variable_index":2,"displayed_value":"4%"},{"formula":null,"costume_id":"granadair--shrine-maiden-of-purification","dupe_values":{"0":"4%","1":"4%","2":"4%","3":"4%","4":"4%","5":"4%"},"variable_index":3,"displayed_value":"4%"},{"formula":null,"costume_id":"granhildr--combat-medic","dupe_values":{"0":"50%","1":"50%","2":"60%","3":"60%","4":"70%","5":"80%"},"variable_index":1,"displayed_value":"80%"},{"formula":"=BD2DB_PRIMARY","costume_id":"granhildr--combat-medic","dupe_values":{"0":"100%","1":"100%","2":"100%","3":"150%","4":"150%","5":"150%"},"variable_index":2,"displayed_value":"150%"},{"formula":null,"costume_id":"granhildr--combat-medic","dupe_values":{"0":"2%","1":"2%","2":"2%","3":"2%","4":"2%","5":"2%"},"variable_index":3,"displayed_value":"2%"},{"formula":null,"costume_id":"granhildr--combat-medic","dupe_values":{"0":"2%","1":"2%","2":"2%","3":"2%","4":"2%","5":"2%"},"variable_index":4,"displayed_value":"2%"},{"formula":null,"costume_id":"helena--sunny-inn-hand","dupe_values":{"0":"6%","1":"6%","2":"6%","3":"8%","4":"8%","5":"8%"},"variable_index":1,"displayed_value":"8%"},{"formula":null,"costume_id":"helena--sunny-inn-hand","dupe_values":{"0":"75%","1":"75%","2":"100%","3":"100%","4":"125%","5":"150%"},"variable_index":2,"displayed_value":"150%"},{"formula":null,"costume_id":"helena--sunny-inn-hand","dupe_values":{"0":"2%","1":"2%","2":"2%","3":"2%","4":"2%","5":"2%"},"variable_index":3,"displayed_value":"2%"},{"formula":"=BD2DB_PRIMARY","costume_id":"ikaruga--noble-flame","dupe_values":{"0":"40%","1":"40%","2":"40%","3":"60%","4":"60%","5":"80%"},"variable_index":1,"displayed_value":"80%"},{"formula":null,"costume_id":"ikaruga--noble-flame","dupe_values":{"0":"60%","1":"60%","2":"80%","3":"80%","4":"100%","5":"100%"},"variable_index":2,"displayed_value":"100%"},{"formula":"=BD2DB_PRIMARY","costume_id":"kyouka-uzen--eternal-chains","dupe_values":{"0":"300%","1":"300%","2":"300%","3":"350%","4":"400%","5":"450%"},"variable_index":1,"displayed_value":"450%"},{"formula":"=BD2DB_PRIMARY","costume_id":"liberta--miracle-rose","dupe_values":{"0":"7%","1":"7%","2":"8%","3":"8%","4":"9%","5":"10%"},"variable_index":1,"displayed_value":"10%"},{"formula":null,"costume_id":"liberta--miracle-rose","dupe_values":{"0":"40%","1":"40%","2":"40%","3":"70%","4":"70%","5":"70%"},"variable_index":2,"displayed_value":"70%"},{"formula":"=BD2DB_PRIMARY","costume_id":"luvencia--ocean-vanguard","dupe_values":{"0":"40%","1":"40%","2":"40%","3":"55%","4":"55%","5":"70%"},"variable_index":1,"displayed_value":"70%"},{"formula":null,"costume_id":"luvencia--ocean-vanguard","dupe_values":{"0":"1%","1":"1%","2":"2%","3":"2%","4":"2%","5":"2%"},"variable_index":2,"displayed_value":"2%"},{"formula":null,"costume_id":"luvencia--ocean-vanguard","dupe_values":{"0":"6%","1":"6%","2":"6%","3":"6%","4":"8%","5":"8%"},"variable_index":3,"displayed_value":"8%"},{"formula":null,"costume_id":"mamonir--miracle-marine","dupe_values":{"0":"30%","1":"30%","2":"35%","3":"40%","4":"45%","5":"50%"},"variable_index":1,"displayed_value":"50%"},{"formula":null,"costume_id":"mamonir--miracle-marine","dupe_values":{"0":"2%","1":"2%","2":"2%","3":"2%","4":"2%","5":"2%"},"variable_index":2,"displayed_value":"2%"},{"formula":null,"costume_id":"mamonir--miracle-marine","dupe_values":{"0":"50%","1":"50%","2":"50%","3":"50%","4":"50%","5":"50%"},"variable_index":3,"displayed_value":"50%"},{"formula":null,"costume_id":"mamonir--night-of-death","dupe_values":{"0":"9%","1":"9%","2":"10%","3":"11%","4":"12%","5":"13%"},"variable_index":1,"displayed_value":"13%"},{"formula":"=BD2DB_PRIMARY","costume_id":"mamonir--night-of-death","dupe_values":{"0":"200%","1":"200%","2":"220%","3":"240%","4":"260%","5":"280%"},"variable_index":2,"displayed_value":"280%"},{"formula":"=BD2DB_PRIMARY","costume_id":"nekyndalia--deadeye","dupe_values":{"0":"45%","1":"45%","2":"55%","3":"65%","4":"75%","5":"85%"},"variable_index":1,"displayed_value":"85%"},{"formula":null,"costume_id":"nekyndalia--deadeye","dupe_values":{"0":"4%","1":"4%","2":"4%","3":"4%","4":"4%","5":"4%"},"variable_index":2,"displayed_value":"4%"},{"formula":null,"costume_id":"olivier--retired-legend","dupe_values":{"0":"60%","1":"60%","2":"80%","3":"80%","4":"100%","5":"100%"},"variable_index":1,"displayed_value":"100%"},{"formula":"=BD2DB_PRIMARY","costume_id":"olivier--retired-legend","dupe_values":{"0":"50%","1":"50%","2":"50%","3":"65%","4":"65%","5":"80%"},"variable_index":2,"displayed_value":"80%"},{"formula":"=BD2DB_PRIMARY","costume_id":"palette--miracle-violet","dupe_values":{"0":"35%","1":"35%","2":"40%","3":"45%","4":"50%","5":"55%"},"variable_index":1,"displayed_value":"55%"},{"formula":null,"costume_id":"palette--miracle-violet","dupe_values":{"0":"110%","1":"110%","2":"125%","3":"140%","4":"155%","5":"170%"},"variable_index":2,"displayed_value":"170%"},{"formula":"=BD2DB_PRIMARY","costume_id":"palette--shattered-dream","dupe_values":{"0":"500%","1":"500%","2":"550%","3":"600%","4":"650%","5":"700%"},"variable_index":1,"displayed_value":"700%"},{"formula":"=BD2DB_PRIMARY","costume_id":"tenka-izumo--ame-no-mitori","dupe_values":{"0":"240%","1":"240%","2":"260%","3":"280%","4":"300%","5":"320%"},"variable_index":1,"displayed_value":"320%"}],"characters":[{"id":"aquila","hp0":100,"atk0":32,"name":"Aquila","matk0":0,"hp_max":2100,"rarity":5,"source":"bd2db","target":null,"atk_max":352,"defense":0,"element":"Fire","crit_dmg":0.5,"matk_max":0,"crit_rate":0.1,"resistance":"Wind","attack_type":"physical","exclusive_r":null,"exclusive_sr":47,"exclusive_ur":67,"magic_resist":0,"exclusive_name":"Blood Devourer","exclusive_slot":"Weapon","exclusive_stat":"ATK","awakening_1_stat":"ATK%","awakening_2_stat":"ELE%","engraving_life_stat":"HP","engraving_strength_stat":"ATK","engraving_perseverance_stat":"DEF"},{"id":"granadair","hp0":191,"atk0":0,"name":"Granadair","matk0":16,"hp_max":4011,"rarity":5,"source":"bd2db","target":null,"atk_max":0,"defense":0,"element":"Water","crit_dmg":0.5,"matk_max":176,"crit_rate":0.1,"resistance":"Fire","attack_type":"magic","exclusive_r":null,"exclusive_sr":0.315,"exclusive_ur":0.54,"magic_resist":0.1,"exclusive_name":"Glutti Queen","exclusive_slot":"Body","exclusive_stat":"HP%","awakening_1_stat":"MRES","awakening_2_stat":"HP%","engraving_life_stat":"HP","engraving_strength_stat":"MATK","engraving_perseverance_stat":"MRES"},{"id":"ikaruga","hp0":82,"atk0":33,"name":"Ikaruga","matk0":0,"hp_max":1722,"rarity":5,"source":"bd2db","target":null,"atk_max":363,"defense":0,"element":"Fire","crit_dmg":1,"matk_max":0,"crit_rate":0.1,"resistance":"Wind","attack_type":"physical","exclusive_r":null,"exclusive_sr":0.63,"exclusive_ur":0.9,"magic_resist":0,"exclusive_name":"The Exquisite Hien","exclusive_slot":"Weapon","exclusive_stat":"CDMG","awakening_1_stat":"ATK%","awakening_2_stat":"ELE%","engraving_life_stat":"HP","engraving_strength_stat":"ATK","engraving_perseverance_stat":"DEF"},{"id":"kyouka-uzen","hp0":86,"atk0":34,"name":"Kyouka Uzen","matk0":0,"hp_max":1806,"rarity":5,"source":"bd2db","target":null,"atk_max":374,"defense":0,"element":"Light","crit_dmg":0.5,"matk_max":0,"crit_rate":0.1,"resistance":"Property","attack_type":"physical","exclusive_r":null,"exclusive_sr":0.315,"exclusive_ur":0.45,"magic_resist":0,"exclusive_name":"Kyouka's Sword","exclusive_slot":"Weapon","exclusive_stat":"ATK%","awakening_1_stat":"ATK%","awakening_2_stat":"ELE%","engraving_life_stat":"HP","engraving_strength_stat":"ATK","engraving_perseverance_stat":"DEF"},{"id":"mamonir","hp0":245,"atk0":0,"name":"Mamonir","matk0":9,"hp_max":5145,"rarity":5,"source":"bd2db","target":null,"atk_max":0,"defense":0,"element":"Water","crit_dmg":0.5,"matk_max":99,"crit_rate":0.1,"resistance":"Fire","attack_type":"magic","exclusive_r":null,"exclusive_sr":0.315,"exclusive_ur":0.54,"magic_resist":0,"exclusive_name":"Grim Surge","exclusive_slot":"Weapon","exclusive_stat":"HP%","awakening_1_stat":"MRES","awakening_2_stat":"HP%","engraving_life_stat":"HP","engraving_strength_stat":"MATK","engraving_perseverance_stat":"MRES"},{"id":"nekyndalia","hp0":63,"atk0":0,"name":"Nekyndalia","matk0":37,"hp_max":1323,"rarity":5,"source":"bd2db","target":null,"atk_max":0,"defense":0,"element":"Wind","crit_dmg":0.75,"matk_max":407,"crit_rate":0.1,"resistance":"Water","attack_type":"magic","exclusive_r":null,"exclusive_sr":0.315,"exclusive_ur":0.45,"magic_resist":0,"exclusive_name":"Leukos Leipsana","exclusive_slot":"Weapon","exclusive_stat":"MATK%","awakening_1_stat":"MATK%","awakening_2_stat":"ELE%","engraving_life_stat":"HP","engraving_strength_stat":"MATK","engraving_perseverance_stat":"MRES"},{"id":"palette","hp0":77,"atk0":0,"name":"Palette","matk0":35,"hp_max":1617,"rarity":5,"source":"bd2db","target":null,"atk_max":0,"defense":0,"element":"Dark","crit_dmg":0.5,"matk_max":385,"crit_rate":0.1,"resistance":"Property","attack_type":"magic","exclusive_r":null,"exclusive_sr":0.315,"exclusive_ur":0.45,"magic_resist":0.1,"exclusive_name":"Delineo","exclusive_slot":"Weapon","exclusive_stat":"MATK%","awakening_1_stat":"MATK%","awakening_2_stat":"ELE%","engraving_life_stat":"HP","engraving_strength_stat":"MATK","engraving_perseverance_stat":"MRES"},{"id":"tenka-izumo","hp0":113,"atk0":0,"name":"Tenka Izumo","matk0":29,"hp_max":2373,"rarity":5,"source":"bd2db","target":null,"atk_max":0,"defense":0,"element":"Dark","crit_dmg":0.5,"matk_max":319,"crit_rate":0.1,"resistance":"Property","attack_type":"magic","exclusive_r":null,"exclusive_sr":0.315,"exclusive_ur":0.45,"magic_resist":0.1,"exclusive_name":"Tenka's Earring","exclusive_slot":"Accessory","exclusive_stat":"MATK%","awakening_1_stat":"MATK%","awakening_2_stat":"ELE%","engraving_life_stat":"HP","engraving_strength_stat":"MATK","engraving_perseverance_stat":"MRES"}]};
const BURST_FALLBACK_CACHE = [{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Main Target DMG +45%\",switches:[{target:\"VALUE4\",value:45}]","type":"Fire","value":45,"target":"VALUE4"},"extra_sp":1,"costume_id":"anastasia--fire-graffiti","effect_summary":"Main Target DMG +45%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Main Target DMG +45%\",switches:[{target:\"VALUE4\",value:45}]","type":"Fire","value":45,"target":"VALUE4"},"extra_sp":1,"costume_id":"anastasia--fire-graffiti","effect_summary":"Main Target DMG +45%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Crit DMG Reinforcement +2 Turns\",switches:[{target:\"VALUE3\",value:2}]}","type":"Fire","value":2,"target":"VALUE3"},"extra_sp":1,"costume_id":"anastasia--fire-graffiti","effect_summary":"Crit DMG Reinforcement +2 Turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Plus\",value:\"[Bonus] Apply a 100% Property DMG Increase effect to self for 4 turns,Attack +1 time(s)\",extraEffects:[{type:\"Hit\",switches:[{target:\"HIT1\",value:1}]}]","type":"Plus","value":1,"target":"HIT1"},"extra_sp":2,"costume_id":"angelica--the-fallen","effect_summary":"[Bonus] Apply a 100% Property DMG Increase effect to self for 4 turns,Attack +1 time(s)"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +20%\",switches:[{target:\"VALUE1\",value:20}]","type":"Fire","value":20,"target":"VALUE1"},"extra_sp":1,"costume_id":"angelica--the-fallen","effect_summary":"DMG +20%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +20%\",switches:[{target:\"VALUE1\",value:20}]}","type":"Fire","value":20,"target":"VALUE1"},"extra_sp":1,"costume_id":"angelica--the-fallen","effect_summary":"DMG +20%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"DMG +125%\",switches:[{target:\"VALUE1\",value:125}]","type":"Fire","value":125,"target":"VALUE1"},"extra_sp":1,"costume_id":"aquila--savage-warrior","effect_summary":"DMG +125%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +125%\",switches:[{target:\"VALUE1\",value:125}]","type":"Fire","value":125,"target":"VALUE1"},"extra_sp":1,"costume_id":"aquila--savage-warrior","effect_summary":"DMG +125%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus] Apply an Energy Guard equal to 200% of your ATK for 4 turns\"}","type":"Plus"},"extra_sp":1,"costume_id":"aquila--savage-warrior","effect_summary":"[Bonus] Apply an Energy Guard equal to 200% of your ATK for 4 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Plus\",value:\"[Bonus] Apply a 75% Vulnerability (Physical) to the enemy for 4 turns\"","type":"Plus"},"extra_sp":1,"costume_id":"blade--young-lady","effect_summary":"[Bonus] Apply a 75% Vulnerability (Physical) to the enemy for 4 turns"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +50%\",switches:[{target:\"VALUE1\",value:50}]","type":"Fire","value":50,"target":"VALUE1"},"extra_sp":1,"costume_id":"blade--young-lady","effect_summary":"DMG +50%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +50%\",switches:[{target:\"VALUE1\",value:50}]}","type":"Fire","value":50,"target":"VALUE1"},"extra_sp":1,"costume_id":"blade--young-lady","effect_summary":"DMG +50%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Total DMG +50%\",switches:[{target:\"VALUE2\",value:50}]","type":"Fire","value":50,"target":"VALUE2"},"extra_sp":1,"costume_id":"dalvi--tricky-lover","effect_summary":"Total DMG +50%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Total DMG +50%\",switches:[{target:\"VALUE2\",value:50}]","type":"Fire","value":50,"target":"VALUE2"},"extra_sp":1,"costume_id":"dalvi--tricky-lover","effect_summary":"Total DMG +50%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Cooldown\",value:\"Cooldown -4 turns\"}","type":"Cooldown"},"extra_sp":1,"costume_id":"dalvi--tricky-lover","effect_summary":"Cooldown -4 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +200%,Increase skill range\",switches:[{target:\"VALUE1\",value:200}],extraEffects:[{type:\"Range\",value:\"water_065\"}]","type":"Fire","value":200,"target":"VALUE1"},"extra_sp":2,"costume_id":"darian--prophetic-dream","effect_summary":"DMG +200%,Increase skill range"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +300%,Main Target DMG +300%\",switches:[{target:\"VALUE1\",value:300},{target:\"VALUE2\",value:300}]","type":"Fire","value":300,"target":"VALUE1"},"extra_sp":1,"costume_id":"darian--prophetic-dream","effect_summary":"DMG +300%,Main Target DMG +300%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +300%,Main Target DMG +300%\",switches:[{target:\"VALUE1\",value:300},{target:\"VALUE2\",value:300}]}","type":"Fire","value":300,"target":"VALUE1"},"extra_sp":1,"costume_id":"darian--prophetic-dream","effect_summary":"DMG +300%,Main Target DMG +300%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Property DMG +25%\",switches:[{target:\"VALUE1\",value:25}]","type":"Fire","value":25,"target":"VALUE1"},"extra_sp":1,"costume_id":"diana--adventurer-of-the-unknown","effect_summary":"Property DMG +25%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Property DMG +25%\",switches:[{target:\"VALUE1\",value:25}]","type":"Fire","value":25,"target":"VALUE1"},"extra_sp":1,"costume_id":"diana--adventurer-of-the-unknown","effect_summary":"Property DMG +25%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Property DMG +25%\",switches:[{target:\"VALUE1\",value:25}]}","type":"Fire","value":25,"target":"VALUE1"},"extra_sp":1,"costume_id":"diana--adventurer-of-the-unknown","effect_summary":"Property DMG +25%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:4,type:\"Cooldown\",value:\"Cooldown -10 turns,Increase skill range\",extraEffects:[{type:\"Range\",value:\"dark_032\"}]","type":"Cooldown"},"extra_sp":4,"costume_id":"eclipse--beach-vacation","effect_summary":"Cooldown -10 turns,Increase skill range"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +160%\",switches:[{target:\"VALUE1\",value:160}]","type":"Fire","value":160,"target":"VALUE1"},"extra_sp":1,"costume_id":"eclipse--beach-vacation","effect_summary":"DMG +160%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +160%\",switches:[{target:\"VALUE1\",value:160}]}","type":"Fire","value":160,"target":"VALUE1"},"extra_sp":1,"costume_id":"eclipse--beach-vacation","effect_summary":"DMG +160%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Plus\",value:\"[Bonus] Apply 1 Chain Reinforcement to self for 2 turns,Attack +2 time(s)\",extraEffects:[{type:\"Hit\",switches:[{target:\"HIT1\",value:2}]}]","type":"Plus","value":2,"target":"HIT1"},"extra_sp":2,"costume_id":"eleaneer--piercing-magic-bow","effect_summary":"[Bonus] Apply 1 Chain Reinforcement to self for 2 turns,Attack +2 time(s)"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Range\",value:\"dark_015\"","type":"Range"},"extra_sp":1,"costume_id":"eleaneer--piercing-magic-bow","effect_summary":"dark_015"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +50%\",switches:[{target:\"VALUE1\",value:50}]}","type":"Fire","value":50,"target":"VALUE1"},"extra_sp":1,"costume_id":"eleaneer--piercing-magic-bow","effect_summary":"DMG +50%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +150%,[Bonus][Priority] Restore 1 SP per hit\",switches:[{target:\"VALUE1\",value:150}],extraEffects:[{type:\"Plus\"}]","type":"Fire","value":150,"target":"VALUE1"},"extra_sp":2,"costume_id":"elise--code-name-o","effect_summary":"DMG +150%,[Bonus][Priority] Restore 1 SP per hit"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:2,type:\"Fire\",value:\"DMG +300%\",switches:[{target:\"VALUE1\",value:300}]","type":"Fire","value":300,"target":"VALUE1"},"extra_sp":2,"costume_id":"elise--code-name-o","effect_summary":"DMG +300%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:2,type:\"Fire\",value:\"DMG +300%\",switches:[{target:\"VALUE1\",value:300}]}","type":"Fire","value":300,"target":"VALUE1"},"extra_sp":2,"costume_id":"elise--code-name-o","effect_summary":"DMG +300%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Augmentation +50%\",switches:[{target:\"VALUE2\",value:50}]","type":"Fire","value":50,"target":"VALUE2"},"extra_sp":1,"costume_id":"elise--naive-lady","effect_summary":"Augmentation +50%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +50%\",switches:[{target:\"VALUE1\",value:50}]","type":"Fire","value":50,"target":"VALUE1"},"extra_sp":1,"costume_id":"elise--naive-lady","effect_summary":"DMG +50%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Resonate Augmentation Stack Count +1\",switches:[{target:\"VALUE4\",value:1}]}","type":"Fire","value":1,"target":"VALUE4"},"extra_sp":1,"costume_id":"elise--naive-lady","effect_summary":"Resonate Augmentation Stack Count +1"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Chain Retention +2 Turns\",switches:[{target:\"VALUE2\",value:2}]","type":"Fire","value":2,"target":"VALUE2"},"extra_sp":1,"costume_id":"glacia--heavenly-guardian-successor","effect_summary":"Chain Retention +2 Turns"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Chain Retention +5\",switches:[{target:\"VALUE3\",value:5}]","type":"Fire","value":5,"target":"VALUE3"},"extra_sp":1,"costume_id":"glacia--heavenly-guardian-successor","effect_summary":"Chain Retention +5"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus] Apply 1 Chain Reinforcement to self for 2 turns\"}","type":"Plus"},"extra_sp":1,"costume_id":"glacia--heavenly-guardian-successor","effect_summary":"[Bonus] Apply 1 Chain Reinforcement to self for 2 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"MATK buff +25%\",switches:[{target:\"VALUE1\",value:25}]","type":"Fire","value":25,"target":"VALUE1"},"extra_sp":1,"costume_id":"helena--b-rank-idol","effect_summary":"MATK buff +25%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"MATK buff +25%\",switches:[{target:\"VALUE1\",value:25}]","type":"Fire","value":25,"target":"VALUE1"},"extra_sp":1,"costume_id":"helena--b-rank-idol","effect_summary":"MATK buff +25%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"MATK buff +25%\",switches:[{target:\"VALUE1\",value:25}]}","type":"Fire","value":25,"target":"VALUE1"},"extra_sp":1,"costume_id":"helena--b-rank-idol","effect_summary":"MATK buff +25%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Augmentation +40%\",switches:[{target:\"VALUE2\",value:40}]","type":"Fire","value":40,"target":"VALUE2"},"extra_sp":1,"costume_id":"helena--sunny-inn-hand","effect_summary":"Augmentation +40%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Augmentation +40%\",switches:[{target:\"VALUE2\",value:40}]","type":"Fire","value":40,"target":"VALUE2"},"extra_sp":1,"costume_id":"helena--sunny-inn-hand","effect_summary":"Augmentation +40%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus] Apply an Energy Guard to the Next-Attacking Ally equal to 200% of your Magic ATK for 8 turns\"}","type":"Plus"},"extra_sp":1,"costume_id":"helena--sunny-inn-hand","effect_summary":"[Bonus] Apply an Energy Guard to the Next-Attacking Ally equal to 200% of your Magic ATK for 8 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +45%,[Bonus][Priority] Remove Barrier and Energy Guard on the Main Target enemy\",switches:[{target:\"VALUE2\",value:45}],extraEffects:[{type:\"Plus\"}]","type":"Fire","value":45,"target":"VALUE2"},"extra_sp":2,"costume_id":"justia--blood-glutton","effect_summary":"DMG +45%,[Bonus][Priority] Remove Barrier and Energy Guard on the Main Target enemy"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +45%\",switches:[{target:\"VALUE2\",value:45}]","type":"Fire","value":45,"target":"VALUE2"},"extra_sp":1,"costume_id":"justia--blood-glutton","effect_summary":"DMG +45%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +45%\",switches:[{target:\"VALUE2\",value:45}]}","type":"Fire","value":45,"target":"VALUE2"},"extra_sp":1,"costume_id":"justia--blood-glutton","effect_summary":"DMG +45%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"100% Evasion +3 Times\",switches:[{target:\"VALUE1\",value:3}]","type":"Fire","value":3,"target":"VALUE1"},"extra_sp":1,"costume_id":"justia--pool-party","effect_summary":"100% Evasion +3 Times"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Plus\",value:\"[Bonus] Restore 4 SP\"","type":"Plus"},"extra_sp":1,"costume_id":"justia--pool-party","effect_summary":"[Bonus] Restore 4 SP"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"ATK Reinforcement +100%\",switches:[{target:\"VALUE2\",value:100}]}","type":"Fire","value":100,"target":"VALUE2"},"extra_sp":1,"costume_id":"justia--pool-party","effect_summary":"ATK Reinforcement +100%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"Bonus DMG per Target +80%\",switches:[{target:\"VALUE2\",value:80}]","type":"Fire","value":80,"target":"VALUE2"},"extra_sp":2,"costume_id":"justia-sacred--reclaimed-destiny","effect_summary":"Bonus DMG per Target +80%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Bonus DMG per Target +40%\",switches:[{target:\"VALUE2\",value:40}]","type":"Fire","value":40,"target":"VALUE2"},"extra_sp":1,"costume_id":"justia-sacred--reclaimed-destiny","effect_summary":"Bonus DMG per Target +40%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Bonus DMG per Target +40%\",switches:[{target:\"VALUE2\",value:40}]}","type":"Fire","value":40,"target":"VALUE2"},"extra_sp":1,"costume_id":"justia-sacred--reclaimed-destiny","effect_summary":"Bonus DMG per Target +40%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Plus\",value:\"[Bonus] Reduce this skill's cooldown by 2 per target hit\"","type":"Plus"},"extra_sp":1,"costume_id":"kyouka-uzen--eternal-chains","effect_summary":"[Bonus] Reduce this skill's cooldown by 2 per target hit"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +150%\",switches:[{target:\"VALUE1\",value:150}]","type":"Fire","value":150,"target":"VALUE1"},"extra_sp":1,"costume_id":"kyouka-uzen--eternal-chains","effect_summary":"DMG +150%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +150%\",switches:[{target:\"VALUE1\",value:150}]}","type":"Fire","value":150,"target":"VALUE1"},"extra_sp":1,"costume_id":"kyouka-uzen--eternal-chains","effect_summary":"DMG +150%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"2-Turn ATK Reinforcement +80%\",switches:[{target:\"VALUE3\",value:80}]","type":"Fire","value":80,"target":"VALUE3"},"extra_sp":2,"costume_id":"lathel--homunculus","effect_summary":"2-Turn ATK Reinforcement +80%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"4(+2)-Turn ATK Reinforcement +20%\",switches:[{target:\"VALUE2\",value:20}]","type":"Fire","value":20,"target":"VALUE2"},"extra_sp":1,"costume_id":"lathel--homunculus","effect_summary":"4(+2)-Turn ATK Reinforcement +20%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"4(+2)-Turn ATK Reinforcement +20%\",switches:[{target:\"VALUE2\",value:20}]}","type":"Fire","value":20,"target":"VALUE2"},"extra_sp":1,"costume_id":"lathel--homunculus","effect_summary":"4(+2)-Turn ATK Reinforcement +20%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Plus\",value:\"[Bonus] Apply 50% Magic Vulnerability to the enemy for 4 turns\"","type":"Plus"},"extra_sp":1,"costume_id":"levia--night-of-jealousy","effect_summary":"[Bonus] Apply 50% Magic Vulnerability to the enemy for 4 turns"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Basic DMG +30%,Main Target DMG +50%\",switches:[{target:\"VALUE1\",value:30},{target:\"VALUE2\",value:50}]","type":"Fire","value":30,"target":"VALUE1"},"extra_sp":1,"costume_id":"levia--night-of-jealousy","effect_summary":"Basic DMG +30%,Main Target DMG +50%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Basic DMG +30%,Main Target DMG +50%\",switches:[{target:\"VALUE1\",value:30},{target:\"VALUE2\",value:50}]}","type":"Fire","value":30,"target":"VALUE1"},"extra_sp":1,"costume_id":"levia--night-of-jealousy","effect_summary":"Basic DMG +30%,Main Target DMG +50%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Damage buff +15%\",switches:[{target:\"VALUE2\",value:15}]","type":"Fire","value":15,"target":"VALUE2"},"extra_sp":1,"costume_id":"liberta--onsen-manager","effect_summary":"Damage buff +15%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Damage buff +15%\",switches:[{target:\"VALUE2\",value:15}]","type":"Fire","value":15,"target":"VALUE2"},"extra_sp":1,"costume_id":"liberta--onsen-manager","effect_summary":"Damage buff +15%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Damage buff +15%\",switches:[{target:\"VALUE2\",value:15}]}","type":"Fire","value":15,"target":"VALUE2"},"extra_sp":1,"costume_id":"liberta--onsen-manager","effect_summary":"Damage buff +15%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:3,type:\"Fire\",value:\"Chain DMG Increase +10%\",switches:[{target:\"VALUE3\",value:10}]","type":"Fire","value":10,"target":"VALUE3"},"extra_sp":3,"costume_id":"luvencia--ocean-vanguard","effect_summary":"Chain DMG Increase +10%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:2,type:\"Fire\",value:\"DMG +30%\",switches:[{target:\"VALUE1\",value:30}]","type":"Fire","value":30,"target":"VALUE1"},"extra_sp":2,"costume_id":"luvencia--ocean-vanguard","effect_summary":"DMG +30%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +15%\",switches:[{target:\"VALUE1\",value:15}]}","type":"Fire","value":15,"target":"VALUE1"},"extra_sp":1,"costume_id":"luvencia--ocean-vanguard","effect_summary":"DMG +15%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"Conditional DMG (Chain Multiples of 3) +50%\",switches:[{target:\"VALUE2\",value:50}]","type":"Fire","value":50,"target":"VALUE2"},"extra_sp":2,"costume_id":"luvencia--wild-dog","effect_summary":"Conditional DMG (Chain Multiples of 3) +50%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Conditional DMG (Chain Multiples of 3) +25%\",switches:[{target:\"VALUE2\",value:25}]","type":"Fire","value":25,"target":"VALUE2"},"extra_sp":1,"costume_id":"luvencia--wild-dog","effect_summary":"Conditional DMG (Chain Multiples of 3) +25%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Conditional DMG (Chain Multiples of 3) +25%\",switches:[{target:\"VALUE2\",value:25}]}","type":"Fire","value":25,"target":"VALUE2"},"extra_sp":1,"costume_id":"luvencia--wild-dog","effect_summary":"Conditional DMG (Chain Multiples of 3) +25%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Vulnerability +15%\",switches:[{target:\"VALUE1\",value:15}]","type":"Fire","value":15,"target":"VALUE1"},"extra_sp":1,"costume_id":"mamonir--miracle-marine","effect_summary":"Vulnerability +15%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Vulnerability +15%\",switches:[{target:\"VALUE1\",value:15}]","type":"Fire","value":15,"target":"VALUE1"},"extra_sp":1,"costume_id":"mamonir--miracle-marine","effect_summary":"Vulnerability +15%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Vulnerability +2 turns\",switches:[{target:\"VALUE2\",value:2}]}","type":"Fire","value":2,"target":"VALUE2"},"extra_sp":1,"costume_id":"mamonir--miracle-marine","effect_summary":"Vulnerability +2 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Magic ATK Reinforcement +2 Turns\",switches:[{target:\"VALUE2\",value:2}]","type":"Fire","value":2,"target":"VALUE2"},"extra_sp":1,"costume_id":"michaela--beachside-justice","effect_summary":"Magic ATK Reinforcement +2 Turns"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Magic ATK Reinforcement +50%\",switches:[{target:\"VALUE3\",value:50}]","type":"Fire","value":50,"target":"VALUE3"},"extra_sp":1,"costume_id":"michaela--beachside-justice","effect_summary":"Magic ATK Reinforcement +50%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Magic ATK Reinforcement +50%\",switches:[{target:\"VALUE3\",value:50}]}","type":"Fire","value":50,"target":"VALUE3"},"extra_sp":1,"costume_id":"michaela--beachside-justice","effect_summary":"Magic ATK Reinforcement +50%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Fire\",value:\"Bonus DMG per Buff +8%\",switches:[{target:\"VALUE2\",value:8}]","type":"Fire","value":8,"target":"VALUE2"},"extra_sp":1,"costume_id":"nebris--new-hire","effect_summary":"Bonus DMG per Buff +8%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Bonus DMG per Buff +8%\",switches:[{target:\"VALUE2\",value:8}]","type":"Fire","value":8,"target":"VALUE2"},"extra_sp":1,"costume_id":"nebris--new-hire","effect_summary":"Bonus DMG per Buff +8%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +30%\",switches:[{target:\"VALUE1\",value:30}]}","type":"Fire","value":30,"target":"VALUE1"},"extra_sp":1,"costume_id":"nebris--new-hire","effect_summary":"DMG +30%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Plus\",value:\"[Bonus] Apply +3% Chain DMG taken to enemies for 4 turns\"","type":"Plus"},"extra_sp":1,"costume_id":"nekyndalia--deadeye","effect_summary":"[Bonus] Apply +3% Chain DMG taken to enemies for 4 turns"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Hit\",value:\"Attack +2 time(s)\",switches:[{target:\"HIT1\",value:2}]","type":"Hit","value":2,"target":"HIT1"},"extra_sp":1,"costume_id":"nekyndalia--deadeye","effect_summary":"Attack +2 time(s)"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +30%\",switches:[{target:\"VALUE1\",value:30}]}","type":"Fire","value":30,"target":"VALUE1"},"extra_sp":1,"costume_id":"nekyndalia--deadeye","effect_summary":"DMG +30%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Plus\",value:\"[Bonus][Priority] Apply -50% Magic Resistance to the enemy for 4 turns,Attack +1 time(s)\",extraEffects:[{type:\"Hit\",switches:[{target:\"HIT1\",value:1}]}]","type":"Plus","value":1,"target":"HIT1"},"extra_sp":2,"costume_id":"palette--miracle-violet","effect_summary":"[Bonus][Priority] Apply -50% Magic Resistance to the enemy for 4 turns,Attack +1 time(s)"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Conditional DMG (7+ Debuffs) +25%\",switches:[{target:\"VALUE2\",value:25}]","type":"Fire","value":25,"target":"VALUE2"},"extra_sp":1,"costume_id":"palette--miracle-violet","effect_summary":"Conditional DMG (7+ Debuffs) +25%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Conditional DMG (7+ Debuffs) +25%\",switches:[{target:\"VALUE2\",value:25}]}","type":"Fire","value":25,"target":"VALUE2"},"extra_sp":1,"costume_id":"palette--miracle-violet","effect_summary":"Conditional DMG (7+ Debuffs) +25%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +370%\",switches:[{target:\"VALUE1\",value:370}]","type":"Fire","value":370,"target":"VALUE1"},"extra_sp":2,"costume_id":"rafina--steel-engine","effect_summary":"DMG +370%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Plus\",value:\"[Bonus][Priority] Apply 1 Chain Weakening to the enemy for 2 turns\"","type":"Plus"},"extra_sp":1,"costume_id":"rafina--steel-engine","effect_summary":"[Bonus][Priority] Apply 1 Chain Weakening to the enemy for 2 turns"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus][Priority] Restore 1 SP per hit\"}","type":"Plus"},"extra_sp":1,"costume_id":"rafina--steel-engine","effect_summary":"[Bonus][Priority] Restore 1 SP per hit"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +80%,Increase skill range\",switches:[{target:\"VALUE1\",value:80}],extraEffects:[{type:\"Range\",value:\"water_070\"}]","type":"Fire","value":80,"target":"VALUE1"},"extra_sp":2,"costume_id":"scheherazade--lapis-witch","effect_summary":"DMG +80%,Increase skill range"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +80%\",switches:[{target:\"VALUE1\",value:80}]","type":"Fire","value":80,"target":"VALUE1"},"extra_sp":1,"costume_id":"scheherazade--lapis-witch","effect_summary":"DMG +80%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +80%\",switches:[{target:\"VALUE1\",value:80}]}","type":"Fire","value":80,"target":"VALUE1"},"extra_sp":1,"costume_id":"scheherazade--lapis-witch","effect_summary":"DMG +80%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"Conditional DMG (15+ Chains on Enemy) +160%\",switches:[{target:\"VALUE2\",value:160}]","type":"Fire","value":160,"target":"VALUE2"},"extra_sp":2,"costume_id":"scheherazade--pool-party","effect_summary":"Conditional DMG (15+ Chains on Enemy) +160%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Conditional DMG (15+ Chains on Enemy) +80%\",switches:[{target:\"VALUE2\",value:80}]","type":"Fire","value":80,"target":"VALUE2"},"extra_sp":1,"costume_id":"scheherazade--pool-party","effect_summary":"Conditional DMG (15+ Chains on Enemy) +80%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus] Apply 1 Chain Reinforcement to self for 6 turns\"}","type":"Plus"},"extra_sp":1,"costume_id":"scheherazade--pool-party","effect_summary":"[Bonus] Apply 1 Chain Reinforcement to self for 6 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"When Hit Effect +2 Turns,Augmentation +5%\",switches:[{target:\"VALUE3\",value:2},{target:\"VALUE2\",value:5}]","type":"Fire","value":2,"target":"VALUE3"},"extra_sp":2,"costume_id":"seir--new-hire","effect_summary":"When Hit Effect +2 Turns,Augmentation +5%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"Augmentation +3%\",switches:[{target:\"VALUE2\",value:3}]","type":"Fire","value":3,"target":"VALUE2"},"extra_sp":1,"costume_id":"seir--new-hire","effect_summary":"Augmentation +3%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus] Apply an Energy Guard equal to 100% of Max HP for 2 turns\"}","type":"Plus"},"extra_sp":1,"costume_id":"seir--new-hire","effect_summary":"[Bonus] Apply an Energy Guard equal to 100% of Max HP for 2 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +300%\",switches:[{target:\"VALUE1\",value:300}]","type":"Fire","value":300,"target":"VALUE1"},"extra_sp":2,"costume_id":"sylvia--bikini-agent","effect_summary":"DMG +300%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +150%\",switches:[{target:\"VALUE1\",value:150}]","type":"Fire","value":150,"target":"VALUE1"},"extra_sp":1,"costume_id":"sylvia--bikini-agent","effect_summary":"DMG +150%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Plus\",value:\"[Bonus][Priority] If your Number of Buffs is 10 or more, apply a 200% Crit DMG Increase effect to self for 2 turns\"}","type":"Plus"},"extra_sp":1,"costume_id":"sylvia--bikini-agent","effect_summary":"[Bonus][Priority] If your Number of Buffs is 10 or more, apply a 200% Crit DMG Increase effect to self for 2 turns"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +100%,Increase skill range\",switches:[{target:\"VALUE1\",value:100}],extraEffects:[{type:\"Range\",value:\"dark_032\"}]","type":"Fire","value":100,"target":"VALUE1"},"extra_sp":2,"costume_id":"tenka-izumo--ame-no-mitori","effect_summary":"DMG +100%,Increase skill range"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +50%\",switches:[{target:\"VALUE1\",value:50}]","type":"Fire","value":50,"target":"VALUE1"},"extra_sp":1,"costume_id":"tenka-izumo--ame-no-mitori","effect_summary":"DMG +50%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +50%\",switches:[{target:\"VALUE1\",value:50}]}","type":"Fire","value":50,"target":"VALUE1"},"extra_sp":1,"costume_id":"tenka-izumo--ame-no-mitori","effect_summary":"DMG +50%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +560%\",switches:[{target:\"VALUE1\",value:560}]","type":"Fire","value":560,"target":"VALUE1"},"extra_sp":2,"costume_id":"tyr--starlight-guardian","effect_summary":"DMG +560%"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Plus\",value:\"[Bonus][Priority] Restore 1 SP per hit\"","type":"Plus"},"extra_sp":1,"costume_id":"tyr--starlight-guardian","effect_summary":"[Bonus][Priority] Restore 1 SP per hit"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +280%\",switches:[{target:\"VALUE1\",value:280}]}","type":"Fire","value":280,"target":"VALUE1"},"extra_sp":1,"costume_id":"tyr--starlight-guardian","effect_summary":"DMG +280%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Plus\",value:\"[Bonus] Apply a 100% Magic ATK Increase effect to self for 4 turns,Cooldown -2 turns\",extraEffects:[{type:\"Cooldown\",switches:[{target:\"CD\",value:2}]}]","type":"Plus","value":2,"target":"CD"},"extra_sp":2,"costume_id":"venaka--dj","effect_summary":"[Bonus] Apply a 100% Magic ATK Increase effect to self for 4 turns,Cooldown -2 turns"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +150%\",switches:[{target:\"VALUE1\",value:150}]","type":"Fire","value":150,"target":"VALUE1"},"extra_sp":1,"costume_id":"venaka--dj","effect_summary":"DMG +150%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"DMG +150%\",switches:[{target:\"VALUE1\",value:150}]}","type":"Fire","value":150,"target":"VALUE1"},"extra_sp":1,"costume_id":"venaka--dj","effect_summary":"DMG +150%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:1,type:\"Hit\",value:\"Attack +2 time(s)\",switches:[{target:\"HIT1\",value:2}]","type":"Hit","value":2,"target":"HIT1"},"extra_sp":1,"costume_id":"wilhelmina--frozen-queen","effect_summary":"Attack +2 time(s)"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +40%\",switches:[{target:\"VALUE3\",value:40}]","type":"Fire","value":40,"target":"VALUE3"},"extra_sp":1,"costume_id":"wilhelmina--frozen-queen","effect_summary":"DMG +40%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Property DMG Reinforcement +30%\",switches:[{target:\"VALUE2\",value:30}]}","type":"Fire","value":30,"target":"VALUE2"},"extra_sp":1,"costume_id":"wilhelmina--frozen-queen","effect_summary":"Property DMG Reinforcement +30%"},{"stage":1,"source":"bd2db","effects":{"raw":"{level:1,spCost:2,type:\"Fire\",value:\"DMG +200%,Increase skill range\",switches:[{target:\"VALUE1\",value:200}],extraEffects:[{type:\"Range\",value:\"light_064\"}]","type":"Fire","value":200,"target":"VALUE1"},"extra_sp":2,"costume_id":"yuri--comeback-idol","effect_summary":"DMG +200%,Increase skill range"},{"stage":2,"source":"bd2db","effects":{"raw":"2,spCost:1,type:\"Fire\",value:\"DMG +200%\",switches:[{target:\"VALUE1\",value:200}]","type":"Fire","value":200,"target":"VALUE1"},"extra_sp":1,"costume_id":"yuri--comeback-idol","effect_summary":"DMG +200%"},{"stage":3,"source":"bd2db","effects":{"raw":"3,spCost:1,type:\"Fire\",value:\"Apply +1 Stack of Crit DMG\",switches:[{target:\"VALUE3\",value:1}]}","type":"Fire","value":1,"target":"VALUE3"},"extra_sp":1,"costume_id":"yuri--comeback-idol","effect_summary":"Apply +1 Stack of Crit DMG"}];
const PROGRESSION_FALLBACK_CACHE = {"engravingSteps":[{"stat":"ATK","step":0,"value":0},{"stat":"ATK","step":1,"value":1},{"stat":"ATK","step":2,"value":2},{"stat":"ATK","step":3,"value":4},{"stat":"ATK","step":4,"value":6},{"stat":"ATK","step":5,"value":9},{"stat":"ATK","step":6,"value":12},{"stat":"ATK","step":7,"value":16},{"stat":"ATK","step":8,"value":20},{"stat":"ATK","step":9,"value":24},{"stat":"ATK","step":10,"value":34},{"stat":"ATK%","step":0,"value":0},{"stat":"CDMG","step":0,"value":0},{"stat":"CDMG","step":1,"value":0.015},{"stat":"CDMG","step":2,"value":0.03},{"stat":"CDMG","step":3,"value":0.06},{"stat":"CDMG","step":4,"value":0.09},{"stat":"CDMG","step":5,"value":0.13},{"stat":"CDMG","step":6,"value":0.18},{"stat":"CDMG","step":7,"value":0.23},{"stat":"CDMG","step":8,"value":0.29},{"stat":"CDMG","step":9,"value":0.34},{"stat":"CDMG","step":10,"value":0.45},{"stat":"CR","step":0,"value":0},{"stat":"DEF","step":0,"value":0},{"stat":"DEF","step":1,"value":0.003},{"stat":"DEF","step":2,"value":0.006},{"stat":"DEF","step":3,"value":0.012},{"stat":"DEF","step":4,"value":0.018},{"stat":"DEF","step":5,"value":0.026},{"stat":"DEF","step":6,"value":0.035},{"stat":"DEF","step":7,"value":0.046},{"stat":"DEF","step":8,"value":0.057},{"stat":"DEF","step":9,"value":0.068},{"stat":"DEF","step":10,"value":0.08},{"stat":"HP","step":0,"value":0},{"stat":"HP","step":1,"value":9},{"stat":"HP","step":2,"value":18},{"stat":"HP","step":3,"value":36},{"stat":"HP","step":4,"value":54},{"stat":"HP","step":5,"value":81},{"stat":"HP","step":6,"value":108},{"stat":"HP","step":7,"value":141},{"stat":"HP","step":8,"value":174},{"stat":"HP","step":9,"value":207},{"stat":"HP","step":10,"value":243},{"stat":"HP%","step":0,"value":0},{"stat":"MATK","step":0,"value":0},{"stat":"MATK","step":1,"value":1},{"stat":"MATK","step":2,"value":2},{"stat":"MATK","step":3,"value":4},{"stat":"MATK","step":4,"value":6},{"stat":"MATK","step":5,"value":9},{"stat":"MATK","step":6,"value":12},{"stat":"MATK","step":7,"value":16},{"stat":"MATK","step":8,"value":20},{"stat":"MATK","step":9,"value":24},{"stat":"MATK","step":10,"value":34},{"stat":"MATK%","step":0,"value":0},{"stat":"MRES","step":0,"value":0},{"stat":"MRES","step":1,"value":0.003},{"stat":"MRES","step":2,"value":0.006},{"stat":"MRES","step":3,"value":0.012},{"stat":"MRES","step":4,"value":0.018},{"stat":"MRES","step":5,"value":0.026},{"stat":"MRES","step":6,"value":0.035},{"stat":"MRES","step":7,"value":0.046},{"stat":"MRES","step":8,"value":0.057},{"stat":"MRES","step":9,"value":0.068},{"stat":"MRES","step":10,"value":0.08}],"awakeningValues":[{"stat":"ATK%","value":0.12},{"stat":"CDMG","value":0.24},{"stat":"CR","value":0.04},{"stat":"DEF","value":0.04},{"stat":"ELE%","value":0.1},{"stat":"HP%","value":0.14},{"stat":"MATK%","value":0.12},{"stat":"MRES","value":0.04}],"potentialValues":[{"kind":"major_bond","stat":"ATK","value":12,"rarity":3},{"kind":"major_bond","stat":"ATK%","value":0.081,"rarity":3},{"kind":"major_bond","stat":"CDMG","value":0.163,"rarity":3},{"kind":"major_bond","stat":"CR","value":0.027,"rarity":3},{"kind":"major_bond","stat":"DEF","value":0.029,"rarity":3},{"kind":"major_bond","stat":"ELE%","value":0.07,"rarity":3},{"kind":"major_bond","stat":"HP","value":88,"rarity":3},{"kind":"major_bond","stat":"HP%","value":0.098,"rarity":3},{"kind":"major_bond","stat":"MATK","value":12,"rarity":3},{"kind":"major_bond","stat":"MATK%","value":0.081,"rarity":3},{"kind":"major_bond","stat":"MRES","value":0.029,"rarity":3},{"kind":"minor_bond","stat":"ATK","value":7,"rarity":3},{"kind":"minor_bond","stat":"ATK%","value":0.049,"rarity":3},{"kind":"minor_bond","stat":"CDMG","value":0.098,"rarity":3},{"kind":"minor_bond","stat":"CR","value":0.016,"rarity":3},{"kind":"minor_bond","stat":"DEF","value":0.017,"rarity":3},{"kind":"minor_bond","stat":"HP","value":53,"rarity":3},{"kind":"minor_bond","stat":"HP%","value":0.058,"rarity":3},{"kind":"minor_bond","stat":"MATK","value":7,"rarity":3},{"kind":"minor_bond","stat":"MATK%","value":0.049,"rarity":3},{"kind":"minor_bond","stat":"MRES","value":0.017,"rarity":3},{"kind":"permanent","stat":"ATK","value":2,"rarity":3},{"kind":"permanent","stat":"ATK%","value":0.007,"rarity":3},{"kind":"permanent","stat":"HP","value":8,"rarity":3},{"kind":"permanent","stat":"HP%","value":0.009,"rarity":3},{"kind":"permanent","stat":"MATK","value":2,"rarity":3},{"kind":"permanent","stat":"MATK%","value":0.007,"rarity":3},{"kind":"major_bond","stat":"ATK","value":14,"rarity":4},{"kind":"major_bond","stat":"ATK%","value":0.094,"rarity":4},{"kind":"major_bond","stat":"CDMG","value":0.189,"rarity":4},{"kind":"major_bond","stat":"DEF","value":0.034,"rarity":4},{"kind":"major_bond","stat":"ELE%","value":0.1,"rarity":4},{"kind":"major_bond","stat":"HP","value":102,"rarity":4},{"kind":"major_bond","stat":"MATK","value":14,"rarity":4},{"kind":"major_bond","stat":"MATK%","value":0.094,"rarity":4},{"kind":"major_bond","stat":"MRES","value":0.034,"rarity":4},{"kind":"minor_bond","stat":"ATK","value":8,"rarity":4},{"kind":"minor_bond","stat":"ATK%","value":0.056,"rarity":4},{"kind":"minor_bond","stat":"CDMG","value":0.113,"rarity":4},{"kind":"minor_bond","stat":"CR","value":0.018,"rarity":4},{"kind":"minor_bond","stat":"DEF","value":0.02,"rarity":4},{"kind":"minor_bond","stat":"HP","value":61,"rarity":4},{"kind":"minor_bond","stat":"MATK","value":8,"rarity":4},{"kind":"minor_bond","stat":"MATK%","value":0.056,"rarity":4},{"kind":"minor_bond","stat":"MRES","value":0.02,"rarity":4},{"kind":"permanent","stat":"ATK","value":3,"rarity":4},{"kind":"permanent","stat":"HP","value":11,"rarity":4},{"kind":"permanent","stat":"MATK","value":3,"rarity":4},{"kind":"major_bond","stat":"ATK","value":18,"rarity":5},{"kind":"major_bond","stat":"ATK%","value":0.118,"rarity":5},{"kind":"major_bond","stat":"CDMG","value":0.236,"rarity":5},{"kind":"major_bond","stat":"CR","value":0.039,"rarity":5},{"kind":"major_bond","stat":"DEF","value":0.042,"rarity":5},{"kind":"major_bond","stat":"ELE%","value":0.15,"rarity":5},{"kind":"major_bond","stat":"HP","value":128,"rarity":5},{"kind":"major_bond","stat":"HP%","value":0.142,"rarity":5},{"kind":"major_bond","stat":"MATK","value":18,"rarity":5},{"kind":"major_bond","stat":"MATK%","value":0.118,"rarity":5},{"kind":"major_bond","stat":"MRES","value":0.042,"rarity":5},{"kind":"minor_bond","stat":"ATK","value":11,"rarity":5},{"kind":"minor_bond","stat":"ATK%","value":0.071,"rarity":5},{"kind":"minor_bond","stat":"CDMG","value":0.142,"rarity":5},{"kind":"minor_bond","stat":"CR","value":0.023,"rarity":5},{"kind":"minor_bond","stat":"DEF","value":0.025,"rarity":5},{"kind":"minor_bond","stat":"HP","value":77,"rarity":5},{"kind":"minor_bond","stat":"HP%","value":0.085,"rarity":5},{"kind":"minor_bond","stat":"MATK","value":11,"rarity":5},{"kind":"minor_bond","stat":"MATK%","value":0.071,"rarity":5},{"kind":"minor_bond","stat":"MRES","value":0.025,"rarity":5},{"kind":"permanent","stat":"ATK","value":4,"rarity":5},{"kind":"permanent","stat":"ATK%","value":0.013,"rarity":5},{"kind":"permanent","stat":"CDMG","value":0.027,"rarity":5},{"kind":"permanent","stat":"CR","value":0.004,"rarity":5},{"kind":"permanent","stat":"HP","value":14,"rarity":5},{"kind":"permanent","stat":"HP%","value":0.016,"rarity":5},{"kind":"permanent","stat":"MATK","value":4,"rarity":5},{"kind":"permanent","stat":"MATK%","value":0.013,"rarity":5}],"costumePotentials":[{"source":"gear_calculator_sheet","costume_id":"alec--sword-breaker","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"CD","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"alec--the-destruction","major_1_stat":"ATK%","major_2_stat":"DEF","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"anastasia--fire-graffiti","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"ATK","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"anastasia--gentle-maid","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"CD","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"andrew--loyal-butler","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"andrew--specialist","major_1_stat":"HP","major_2_stat":"DEF","minor_1_stat":"HP","minor_2_stat":"DEF","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"angelica--neon-savior","major_1_stat":"HP%","major_2_stat":"ELE%","minor_1_stat":"HP%","minor_2_stat":"CDMG","skill_1_type":"SP","skill_2_type":"DoT","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"angelica--pool-party","major_1_stat":"HP%","major_2_stat":"CDMG","minor_1_stat":"HP%","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"CR"},{"source":"gear_calculator_sheet","costume_id":"angelica--the-fallen","major_1_stat":"HP%","major_2_stat":"ELE%","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"CD","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"CDMG"},{"source":"bd2db","costume_id":"aquila--savage-warrior","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Buff","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"arines--priest-of-vitality","major_1_stat":"HP","major_2_stat":"MRES","minor_1_stat":"HP","minor_2_stat":"MRES","skill_1_type":null,"skill_2_type":"Buff","skill_3_type":null,"permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"beatrice--mighty-warrior-of-the-tribe","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"bernie--righteous-raider-girl","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":null,"skill_2_type":"CD","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"blade--apostle","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"Counter","skill_3_type":"SP","permanent_stat":"ATK%"},{"source":"bd2db","costume_id":"blade--onsen-swordfighter","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"blade--young-lady","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"Vuln","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"carlson--mercenary-knight","major_1_stat":"DEF","major_2_stat":"HP%","minor_1_stat":"DEF","minor_2_stat":"HP%","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"celia--descendant-of-the-great-witch","major_1_stat":"MATK","major_2_stat":"HP%","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":"NEW","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"celia--masquerade-bunny","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"celia--the-curse","major_1_stat":"MATK%","major_2_stat":"HP%","minor_1_stat":"MATK%","minor_2_stat":"DEF","skill_1_type":"NEW","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"cynthia--warmth-within-the-severe-cold","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"dalvi--bright-moon","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"dalvi--summer-vacation","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"CDMG","skill_1_type":"DoT","skill_2_type":"DMG","skill_3_type":"DoT","permanent_stat":"MATK%"},{"source":"bd2db","costume_id":"dalvi--tricky-lover","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"darian--bittersweet-bunny","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DoT","skill_2_type":"DMG","skill_3_type":"DMG+","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"darian--prophetic-dream","major_1_stat":"ATK%","major_2_stat":"MRES","minor_1_stat":"ATK%","minor_2_stat":"MRES","skill_1_type":"DMG","skill_2_type":"☼DMG","skill_3_type":"DMG","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"diana--adventurer-of-the-unknown","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"Buff","skill_2_type":"CD","skill_3_type":"Range","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"diana--anti-dystopia","major_1_stat":"MATK","major_2_stat":"HP%","minor_1_stat":"MATK","minor_2_stat":"HP%","skill_1_type":"EG","skill_2_type":"EG","skill_3_type":"Range","permanent_stat":"MATK"},{"source":"bd2db","costume_id":"diana--magical-innovator","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"SP","skill_2_type":"SP","skill_3_type":"NEW","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"eclipse--beach-vacation","major_1_stat":"MATK%","major_2_stat":"CDMG","minor_1_stat":"MATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"eclipse--dimension-witch","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"eclipse--dream-bride","major_1_stat":"MATK","major_2_stat":"CDMG","minor_1_stat":"MATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"eclipse--nightmare-bunny","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"HP%","skill_1_type":"Shred","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"eleaneer--b-rank-idol","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"NEW","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"eleaneer--piercing-magic-bow","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"eleaneer--shadow-bunny","major_1_stat":"ATK%","major_2_stat":"ATK%","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"SP","skill_2_type":"CD","skill_3_type":"Buff","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"elise--code-name-o","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"Battery","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"elise--lovely-lady","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"CD","permanent_stat":"HP%"},{"source":"bd2db","costume_id":"elise--naive-lady","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"Skill","skill_3_type":"Range","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"elpis--hand-of-salvation","major_1_stat":"HP","major_2_stat":"MRES","minor_1_stat":"HP","minor_2_stat":"MRES","skill_1_type":null,"skill_2_type":"Buff","skill_3_type":null,"permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"emma--haggard-delinquent","major_1_stat":"ATK","major_2_stat":"CR","minor_1_stat":"ATK","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"NEW","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"emma--school-queen","major_1_stat":"CR","major_2_stat":"ELE%","minor_1_stat":"CR","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"eris--esteemed-adventurer","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"Main","skill_3_type":"Main","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"eris--your-very-own-cat","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"fred--lugo-defense-force","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":null,"skill_2_type":"KB","skill_3_type":null,"permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"glacia--alice","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"Heal","skill_2_type":"Heal","skill_3_type":"CD","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"glacia--disciplinary-committee","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"MATK"},{"source":"bd2db","costume_id":"glacia--heavenly-guardian-successor","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"SP","skill_2_type":"DMG","skill_3_type":"Chain","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"goblin-slayer--orcbolg","major_1_stat":"DEF","major_2_stat":"ATK","minor_1_stat":"DEF","minor_2_stat":"ATK","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Barrier","permanent_stat":"HP%"},{"source":"bd2db","costume_id":"granadair--queen-of-gluttis","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Buff","skill_2_type":"Buff","skill_3_type":"Buff","permanent_stat":"HP%"},{"source":"bd2db","costume_id":"granadair--shrine-maiden-of-purification","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Skill","skill_2_type":"Turns","skill_3_type":"Turns","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"granhildr--boo-ghost","major_1_stat":"HP%","major_2_stat":"ELE%","minor_1_stat":"HP%","minor_2_stat":"ELE%","skill_1_type":"SP","skill_2_type":"DMG1","skill_3_type":"DMG2","permanent_stat":"HP%"},{"source":"bd2db","costume_id":"granhildr--combat-medic","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"CDMG","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"granhildr--comeback-idol","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"EG","skill_2_type":"SP","skill_3_type":"EG","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"granhildr--the-void","major_1_stat":"HP%","major_2_stat":"CR","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"Hits","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"gray--b-rank-manager","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"CR"},{"source":"gear_calculator_sheet","costume_id":"gray--pool-party","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"gray--sharpshooter-of-the-mist","major_1_stat":"ATK%","major_2_stat":"ATK%","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"Range","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"gray--vanguard","major_1_stat":"ATK","major_2_stat":"ATK","minor_1_stat":"ATK","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"gynt--lugo-hunter","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"helena--b-rank-idol","major_1_stat":"MATK%","major_2_stat":"HP","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"Buff","skill_2_type":"SP","skill_3_type":"Buff","permanent_stat":"MATK%"},{"source":"bd2db","costume_id":"helena--sunny-inn-hand","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Buff","skill_2_type":"Buff","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"helena--top-idol","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"DR","skill_2_type":"CD","skill_3_type":"DR","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"high-elf-archer--daughter-of-starwind","major_1_stat":"CDMG","major_2_stat":"ATK%","minor_1_stat":"CDMG","minor_2_stat":"ATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"hikage--kind-ruthlessness","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"CDMG"},{"source":"bd2db","costume_id":"ikaruga--noble-flame","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"SP","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"ingrid--kardis-bullet","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"jayden--beautiful-girl-devotee","major_1_stat":"HP","major_2_stat":"MRES","minor_1_stat":"HP","minor_2_stat":"MATK","skill_1_type":null,"skill_2_type":"DR","skill_3_type":null,"permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"jayden--manga-research-club","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"CR","skill_1_type":null,"skill_2_type":"Range","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"julie--healer","major_1_stat":"MATK","major_2_stat":"MATK","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":null,"skill_2_type":"Heal","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"justia--blood-glutton","major_1_stat":"HP%","major_2_stat":"ELE%","minor_1_stat":"HP%","minor_2_stat":"ATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"justia--kendo-club","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"justia--knight-of-blood","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"HP%","skill_1_type":"CD","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"justia--pool-party","major_1_stat":"ATK%","major_2_stat":"DEF","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"Buff","skill_2_type":"NEW","skill_3_type":"Turns","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"justia--white-reaper","major_1_stat":"ATK","major_2_stat":"MRES","minor_1_stat":"ATK","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"justia-sacred--reclaimed-destiny","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG+","skill_2_type":"DMG+","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"kry--liberated-marauder","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"CR","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"kry--violent-student","major_1_stat":"ATK","major_2_stat":"ATK","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":null,"skill_2_type":"Range","skill_3_type":null,"permanent_stat":"ATK"},{"source":"bd2db","costume_id":"kyouka-uzen--eternal-chains","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"lathel--dark-knight","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"ATK","skill_1_type":"EG","skill_2_type":"DR","skill_3_type":"EG","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"lathel--homunculus","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"Buff 2","skill_2_type":"Buff 1","skill_3_type":"Buff 2","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"lathel--lonely-survivor","major_1_stat":"ATK%","major_2_stat":"ATK%","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"lathel--medicinal-herb-tracker","major_1_stat":"ATK","major_2_stat":"DEF","minor_1_stat":"ATK","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"Range","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"lathel--pool-party","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"Range","skill_3_type":"DMG","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"lathel--promise-of-vengeance","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"Buff","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"layla--anvil-of-creation","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"lecliss--android-queen","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"EG","skill_2_type":"Counter","skill_3_type":"EG","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"lecliss--killer-doll","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"DR","skill_2_type":"SP","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"levia--night-of-jealousy","major_1_stat":"MATK","major_2_stat":"CDMG","minor_1_stat":"MATK","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"levia--overheat","major_1_stat":"MATK%","major_2_stat":"MATK%","minor_1_stat":"MATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"levia--track-and-field-team-captain","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Vuln","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"liatris--maid-name-r","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"SP","skill_2_type":"Range","skill_3_type":"CD","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"liatris--neon-stalker","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"Burn","skill_3_type":"Turns","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"liatris--rodev-s-star","major_1_stat":"ATK","major_2_stat":"ATK","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"Burn","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"liberta--dark-saintess","major_1_stat":"HP","major_2_stat":"MRES","minor_1_stat":"HP","minor_2_stat":"MRES","skill_1_type":"Buff","skill_2_type":"Buff","skill_3_type":"SP","permanent_stat":"HP"},{"source":"bd2db","costume_id":"liberta--miracle-rose","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"CR","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"liberta--onsen-manager","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"Buff","skill_2_type":"Heal","skill_3_type":"Turns","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"lisianne--wandering-priest","major_1_stat":"MATK","major_2_stat":"MATK","minor_1_stat":"MATK","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"NEW","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"loen--celebrity-bunny","major_1_stat":"MATK","major_2_stat":"CDMG","minor_1_stat":"MATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"loen--last-hope","major_1_stat":"CDMG","major_2_stat":"ELE%","minor_1_stat":"CDMG","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"loen--track-and-field-team-member","major_1_stat":"CR","major_2_stat":"ELE%","minor_1_stat":"CR","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"lucrezia--seductive-wings","major_1_stat":"HP","major_2_stat":"MRES","minor_1_stat":"HP","minor_2_stat":"MATK","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"luvencia--deal-snatcher","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"SP","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"bd2db","costume_id":"luvencia--ocean-vanguard","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"Buff","skill_3_type":"Chain","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"luvencia--wild-dog","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG+","skill_3_type":"CD","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"lydia--apprentice-spearman","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"bd2db","costume_id":"mamonir--miracle-marine","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Vuln","skill_2_type":"Barrier","skill_3_type":"Barrier","permanent_stat":"HP%"},{"source":"bd2db","costume_id":"mamonir--night-of-death","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Range","skill_2_type":"CDMG","skill_3_type":"DMG","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"maria--archmage","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"michaela--acting-archbishop","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"CDMG","skill_3_type":"SP","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"michaela--beachside-justice","major_1_stat":"MATK","major_2_stat":"CDMG","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"michaela--queen-of-signatures","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"CD","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"morpeah--apostle","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":"SP","skill_2_type":"Vuln","skill_3_type":"Vuln","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"morpeah--beach-vacation","major_1_stat":"MATK%","major_2_stat":"CDMG","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"CD","skill_2_type":"SP","skill_3_type":"NEW","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"morpeah--daydream-bunny","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"SP","skill_2_type":"SP","skill_3_type":"CD","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"nartas--anonymous-sage","major_1_stat":"CDMG","major_2_stat":"ELE%","minor_1_stat":"CDMG","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"nebris--labyrinth-gatekeeper","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"nebris--laid-back-lifeguard","major_1_stat":"CDMG","major_2_stat":"ELE%","minor_1_stat":"CDMG","minor_2_stat":"ATK%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"nebris--new-hire","major_1_stat":"ATK%","major_2_stat":"CR","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"DMG+","skill_3_type":"CD","permanent_stat":"ATK%"},{"source":"bd2db","costume_id":"nekyndalia--deadeye","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Turns","skill_2_type":"DMG","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"olivier--apostle","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"Buff","skill_2_type":"Buff","skill_3_type":"Turns","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"olivier--faithful-wings","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"DMG1","skill_2_type":"DMG1","skill_3_type":"DMG2","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"olivier--fallen-wings","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG+","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"bd2db","costume_id":"olivier--retired-legend","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"CD","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"olstein--fiend-scholar","major_1_stat":"MATK","major_2_stat":"HP%","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":"Battery","skill_2_type":"DMG","skill_3_type":"Drain","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"olstein--sage-of-blue-clouds","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"Turns","skill_2_type":"CD","skill_3_type":"Range","permanent_stat":"HP%"},{"source":"bd2db","costume_id":"palette--miracle-violet","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"bd2db","costume_id":"palette--shattered-dream","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"Range","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"priestess--earth-mother-believer","major_1_stat":"HP%","major_2_stat":"CDMG","minor_1_stat":"MATK","minor_2_stat":"CDMG","skill_1_type":"Vuln","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"rafina--code-name-a","major_1_stat":"ATK%","major_2_stat":"HP%","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"rafina--game-club","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"ATK","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"rafina--steel-engine","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"Range","skill_3_type":"CD","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"refithea--poolside-fairy","major_1_stat":"MATK","major_2_stat":"HP","minor_1_stat":"MATK","minor_2_stat":"HP","skill_1_type":"Range","skill_2_type":"Prop%","skill_3_type":"Prop%","permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"refithea--pure-white-blessing","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"EG","skill_2_type":"Range","skill_3_type":"EG","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"refithea--the-gluttonous","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"CD","skill_2_type":"CDMG","skill_3_type":"CDMG","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"remnunt--combat-doctor","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"rigenette--little-hunter","major_1_stat":"HP","major_2_stat":"HP","minor_1_stat":"HP","minor_2_stat":"ATK","skill_1_type":null,"skill_2_type":"DMG","skill_3_type":null,"permanent_stat":"HP"},{"source":"gear_calculator_sheet","costume_id":"rou--nature-s-claw","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"NEW","skill_3_type":"SP","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"rou--red-riding-hood","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"EG","skill_2_type":"EG","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"rou--stray-cat","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"MRES","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"rou--white-cat","major_1_stat":"CR","major_2_stat":"ELE%","minor_1_stat":"CR","minor_2_stat":"ATK%","skill_1_type":"KB","skill_2_type":"DoT","skill_3_type":"DoT","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"roxy--emerging-desire","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":"DMG","skill_2_type":"Range","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"roxy--respected-master","major_1_stat":"MATK%","major_2_stat":"CDMG","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"DMG 2","skill_3_type":"DMG 2","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"rubia--empress-of-the-ocean","major_1_stat":"ATK","major_2_stat":"ATK","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"Shred","skill_2_type":"DMG","skill_3_type":"Shred","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"rubia--maid-bikini","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":"Vuln","skill_2_type":"Vuln","skill_3_type":"Burn","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"rubia--maid-name-c","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"Duration","skill_3_type":"Evade","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"rubia--thorn-of-the-desert","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"DoT","skill_3_type":"DoT","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"samay--kind-liberator","major_1_stat":"MATK","major_2_stat":"CDMG","minor_1_stat":"MATK","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"samay--kind-student","major_1_stat":"MATK%","major_2_stat":"MATK%","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"scheherazade--code-name-s","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Silence","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"scheherazade--lapis-witch","major_1_stat":"MATK%","major_2_stat":"CDMG","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"scheherazade--magic-school-professor","major_1_stat":"MATK","major_2_stat":"ELE%","minor_1_stat":"MATK","minor_2_stat":"MRES","skill_1_type":"NEW","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"scheherazade--pool-party","major_1_stat":"MATK","major_2_stat":"MATK","minor_1_stat":"MATK","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"seir--b-rank-idol","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"DR","skill_2_type":"Turns","skill_3_type":"NEW","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"seir--demon-s-daughter","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"SP","skill_2_type":"DR","skill_3_type":"NEW","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"seir--new-hire","major_1_stat":"HP","major_2_stat":"MRES","minor_1_stat":"HP","minor_2_stat":"MATK","skill_1_type":"CD","skill_2_type":"Turns","skill_3_type":"SP","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"sonya--little-pumpkin-girl","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"MRES","skill_1_type":"DMG","skill_2_type":"Night","skill_3_type":"Night","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"sonya--shadowed-dream","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"Vuln","skill_2_type":"Vuln","skill_3_type":"DMG","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"sword-maiden--supreme-god-archbishop","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"sylvia--admiral","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"EG Hits","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"sylvia--bikini-agent","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":"CD","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"sylvia--desert-flower","major_1_stat":"ATK%","major_2_stat":"DEF","minor_1_stat":"ATK%","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"DR","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"sylvia--the-sword-queen","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"Buff","skill_3_type":"DMG","permanent_stat":"ATK%"},{"source":"bd2db","costume_id":"tenka-izumo--ame-no-mitori","major_1_stat":null,"major_2_stat":null,"minor_1_stat":null,"minor_2_stat":null,"skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"teresse--angel-of-destruction","major_1_stat":"ATK","major_2_stat":"HP%","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"DoT","skill_2_type":"Range","skill_3_type":"KB","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"teresse--beachside-angel","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"ATK%","skill_1_type":"SP","skill_2_type":"Buff","skill_3_type":"Buff","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"teresse--medical-club","major_1_stat":"HP%","major_2_stat":"MRES","minor_1_stat":"HP%","minor_2_stat":"ATK%","skill_1_type":"Buff","skill_2_type":"Heal","skill_3_type":"Range","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"tyr--innocent-bunny","major_1_stat":"ATK","major_2_stat":"DEF","minor_1_stat":"ATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"DMG+","skill_3_type":"DMG+","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"tyr--starlight-guardian","major_1_stat":"ATK","major_2_stat":"HP%","minor_1_stat":"ATK","minor_2_stat":"HP%","skill_1_type":"SP","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"venaka--dj","major_1_stat":"CDMG","major_2_stat":"ELE%","minor_1_stat":"CDMG","minor_2_stat":"MATK%","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"venaka--wind-dancer","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Vuln","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"ventana--comeback-idol","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CR","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"Buff","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"ventana--onsen-practitioner","major_1_stat":"ATK","major_2_stat":"CR","minor_1_stat":"ATK","minor_2_stat":"HP%","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"Turns","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"ventana--snow-white","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"wiggle--bomb-fanatic","major_1_stat":"ATK%","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"ATK%","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"wiggle--bomb-in-the-hoodie","major_1_stat":"ATK%","major_2_stat":"ELE%","minor_1_stat":"ATK%","minor_2_stat":"CR","skill_1_type":null,"skill_2_type":"SP","skill_3_type":null,"permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"wilhelmina--frozen-queen","major_1_stat":"HP%","major_2_stat":"CDMG","minor_1_stat":"HP%","minor_2_stat":"CR","skill_1_type":"SP","skill_2_type":"Buff","skill_3_type":"DMG","permanent_stat":"CR"},{"source":"gear_calculator_sheet","costume_id":"wilhelmina--iron-monarch","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"wilhelmina--water-park-queen","major_1_stat":"MRES","major_2_stat":"CDMG","minor_1_stat":"ATK%","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"DMG","permanent_stat":"CDMG"},{"source":"gear_calculator_sheet","costume_id":"yomi--gentle-destroyer","major_1_stat":"ATK","major_2_stat":"CDMG","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"DMG","skill_3_type":"SP","permanent_stat":"ATK"},{"source":"gear_calculator_sheet","costume_id":"yozakura--fists-of-conviction","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"DEF","skill_1_type":"DMG","skill_2_type":"Basic","skill_3_type":"Basic","permanent_stat":"MATK"},{"source":"gear_calculator_sheet","costume_id":"yumi--dancing-snowflake","major_1_stat":"MATK%","major_2_stat":"ELE%","minor_1_stat":"MATK%","minor_2_stat":"HP","skill_1_type":"DMG","skill_2_type":"SP","skill_3_type":"Range","permanent_stat":"MATK%"},{"source":"gear_calculator_sheet","costume_id":"yuri--comeback-idol","major_1_stat":"ATK","major_2_stat":"ELE%","minor_1_stat":"ATK","minor_2_stat":"CDMG","skill_1_type":"DMG","skill_2_type":"CD","skill_3_type":"DMG","permanent_stat":"CR"},{"source":"gear_calculator_sheet","costume_id":"yuri--whitebolt","major_1_stat":"ATK%","major_2_stat":"ATK%","minor_1_stat":"ATK%","minor_2_stat":"HP","skill_1_type":"CD","skill_2_type":"DMG","skill_3_type":"Buff","permanent_stat":"ATK%"},{"source":"gear_calculator_sheet","costume_id":"zenith--poolside-guardian","major_1_stat":"MRES","major_2_stat":"HP","minor_1_stat":"HP","minor_2_stat":"MRES","skill_1_type":"SP","skill_2_type":"Chain","skill_3_type":"Chain","permanent_stat":"HP%"},{"source":"gear_calculator_sheet","costume_id":"zenith--robin-hood","major_1_stat":"HP%","major_2_stat":"DEF","minor_1_stat":"HP%","minor_2_stat":"DEF","skill_1_type":"Vuln","skill_2_type":"SP","skill_3_type":"Vuln","permanent_stat":"HP%"}]};

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
let potentialCharacterId="";
let bondedCostumeId="";
let permanentPotentialLevels={};
let bondPotentialLevels={minor_1_stat:4,minor_2_stat:2,major_1_stat:2,major_2_stat:2};

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
  costumeBursts=(optional[2]&&optional[2].length?optional[2]:clone(BURST_FALLBACK_CACHE));
  gearTables={main:{},sub:{},refine:{}};
  critical[2].forEach(function(r){
    const section=normalizedGearSection(r.section);
    if(!gearTables[section])return;
    if(!gearTables[section][r.tier])gearTables[section][r.tier]={};
    gearTables[section][r.tier][r.stat]=Number(r.value)||0;
  });
  ensureGearTables();
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

function normalizedGearSection(section){
  return section==="refinement"?"refine":section;
}
function cloneGearFallback(){
  return clone(GEAR_TABLE_FALLBACK);
}
function gearTablesValid(){
  return !!(
    gearTables &&
    gearTables.main && gearTables.main["EX UR"] &&
    Number(gearTables.main["EX UR"].ATK)>0 &&
    gearTables.sub && gearTables.sub["EX UR"] &&
    Number(gearTables.sub["EX UR"]["ATK%"])>0 &&
    gearTables.refine && gearTables.refine["EX UR"] &&
    Number(gearTables.refine["EX UR"].ATK)>0
  );
}
function ensureGearTables(){
  if(!gearTablesValid()) gearTables=cloneGearFallback();
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
function loadProgressionFallbackData(){
  costumePotentials=clone(PROGRESSION_FALLBACK_CACHE.costumePotentials||[]);
  engravingSteps={};
  (PROGRESSION_FALLBACK_CACHE.engravingSteps||[]).forEach(function(r){
    if(!engravingSteps[r.stat])engravingSteps[r.stat]={};
    engravingSteps[r.stat][Number(r.step)]=Number(r.value)||0;
  });
  awakeningValues={};
  (PROGRESSION_FALLBACK_CACHE.awakeningValues||[]).forEach(function(r){
    awakeningValues[r.stat]=Number(r.value)||0;
  });
  potentialValues={};
  (PROGRESSION_FALLBACK_CACHE.potentialValues||[]).forEach(function(r){
    potentialValues[[r.rarity,r.kind,r.stat].join("|")]=Number(r.value)||0;
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
  RECENT_BD2DB_FALLBACK.characters.forEach(function(r){
    if(!characters.some(function(c){return c.__id===r.id;}))characters.push(toLegacyChar(r));
  });
  parseGear(data[1]);
  ensureGearTables();

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
  RECENT_BD2DB_FALLBACK.costumes.forEach(function(x){
    if(!costumes.some(function(c){return c.id===x.id;}))costumes.push(clone(x));
  });
  costumes.forEach(function(x){
    const f=COSTUME_FIELD_FALLBACK_CACHE[x.id];
    if(!f)return;
    x.base_sp=f[0];
    x.base_cooldown=f[1];
    x.sp_formula=f[2]||"";
    x.cooldown_formula=f[3]||"";
  });
  costumeVariables=[];
  Object.keys(COSTUME_VARIABLE_FALLBACK_CACHE).forEach(function(costumeId){
    (COSTUME_VARIABLE_FALLBACK_CACHE[costumeId]||[]).forEach(function(v){
      costumeVariables.push({
        costume_id:costumeId,
        variable_index:Number(v[0])||0,
        displayed_value:v[1]==null?"":String(v[1]),
        dupe_values:v[2]||{},
        formula:v[3]||""
      });
    });
  });
  RECENT_BD2DB_FALLBACK.variables.forEach(function(v){
    const exists=costumeVariables.some(function(x){return x.costume_id===v.costume_id&&Number(x.variable_index)===Number(v.variable_index);});
    if(!exists)costumeVariables.push(clone(v));
  });
  loadProgressionFallbackData();costumeBursts=clone(BURST_FALLBACK_CACHE);gearCatalog=[];
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
      RECENT_BD2DB_FALLBACK.characters.forEach(function(r){
        if(!characters.some(function(c){return c.__id===r.id;}))characters.push(toLegacyChar(r));
      });
      costumes=RECENT_BD2DB_FALLBACK.costumes.map(clone);
      costumeVariables=RECENT_BD2DB_FALLBACK.variables.map(clone);
      costumeBursts=clone(BURST_FALLBACK_CACHE);
      loadProgressionFallbackData();
      gearTables=cloneGearFallback();
      catalogSource="Emergency fallback";
    }
  }
  setup();
}

function setup(){
  const options=characters.slice().sort(function(a,b){return a.Name.localeCompare(b.Name);}).map(function(c){
    return "<option value=\""+c.__id+"\">"+c.Name+"</option>";
  }).join("");
  $("#character").innerHTML='<option value=""></option>'+options;
  $("#character").value="";
  $("#costume").innerHTML="";
  $("#costume").disabled=true;
  fillProgressionSelects();
  wire();
  initSearchableSelect("character");
  initSearchableSelect("costume");
  showBlankSelectionState();
  const actualCostumeCount=costumes.filter(function(x){return !x.is_basic_attack;}).length;
  const gearCount=new Set(gearCatalog.map(function(x){return x.weapon_id;})).size;
  $("#dataStatus").textContent=catalogSource+" · "+characters.length+" characters · "+actualCostumeCount+" costumes + Basic Attack"+(gearCount?" · "+gearCount+" gears":" · gear catalog unavailable");
}
function searchableParts(id){
  return {
    select:$("#"+id),
    input:$("#"+id+"Search"),
    menu:$("#"+id+"SearchMenu"),
    wrap:$("#"+id+"SearchWrap")
  };
}
function renderSearchableMenu(id,query){
  const p=searchableParts(id);
  if(!p.select||!p.menu)return;
  const q=String(query||"").trim().toLowerCase();
  const rows=Array.from(p.select.options).filter(function(o){
    return o.value && (!q || o.textContent.toLowerCase().includes(q));
  });
  p.menu.innerHTML=rows.length?rows.map(function(o){
    return '<button type="button" class="searchSelectOption" data-search-value="'+escapeHtml(o.value)+'">'+escapeHtml(o.textContent)+'</button>';
  }).join(""):'<div class="searchSelectOption searchSelectEmpty">No matches</div>';
}
function syncSearchableSelect(id){
  const p=searchableParts(id);
  if(!p.select||!p.input)return;
  const selected=p.select.options[p.select.selectedIndex];
  p.input.value=selected&&selected.value?selected.textContent:"";
  p.input.disabled=!!p.select.disabled;
  renderSearchableMenu(id,"");
}
function initSearchableSelect(id){
  const p=searchableParts(id);
  if(!p.select||!p.input||!p.menu||!p.wrap)return;
  p.input.addEventListener("focus",function(){
    if(p.input.disabled)return;
    renderSearchableMenu(id,"");
    p.wrap.classList.add("open");
    p.input.select();
  });
  p.input.addEventListener("input",function(){
    renderSearchableMenu(id,p.input.value);
    p.wrap.classList.add("open");
  });
  p.input.addEventListener("keydown",function(e){
    if(e.key==="Escape"){p.wrap.classList.remove("open");p.input.value=(p.select.selectedOptions[0]?.textContent)||"";return;}
    if(e.key==="Enter"){
      const first=p.menu.querySelector("[data-search-value]");
      if(first){e.preventDefault();first.click();}
    }
  });
  p.menu.addEventListener("mousedown",function(e){
    const option=e.target.closest("[data-search-value]");
    if(!option)return;
    e.preventDefault();
    p.select.value=option.dataset.searchValue;
    p.input.value=option.textContent;
    p.wrap.classList.remove("open");
    p.select.dispatchEvent(new Event("change",{bubbles:true}));
  });
  document.addEventListener("mousedown",function(e){
    if(!p.wrap.contains(e.target))p.wrap.classList.remove("open");
  });
  syncSearchableSelect(id);
}
function showBlankSelectionState(){
  $("#character").value="";
  $("#costume").innerHTML="";
  $("#costume").disabled=true;
  syncSearchableSelect("character");
  syncSearchableSelect("costume");
  $("#elementSigil").textContent="";
  $("#rarityBadge").textContent="";
  $("#catalogCount").textContent="—";
  $("#gearGrid").innerHTML="";
  setPortraitState("missing");
  $("#costumePortrait").dataset.mediaId="";
  $("#costumePortrait").removeAttribute("src");
  $("#portraitInitial").textContent="?";
  $("#portraitElement").textContent="Select";
  ["sumHp","sumAtk","sumCr","sumCdmg","leftDef","leftMres","leftProperty","leftResist",
   "damageNormal","damageAverage","damageCritical","sumDamage"].forEach(function(id){
    const el=$("#"+id);if(el)el.textContent="—";
  });
  $("#skillTitle").textContent="Select a character";
  $("#skillDescription").textContent="Search for a character above to begin.";
  $("#skillProgression").innerHTML="";
  $("#targetBadge").textContent="—";
}
function fillProgressionSelects(){
  ["engraveLife","engraveStrength","engravePerseverance"].forEach(function(id){
    const el=$("#"+id);if(!el)return;
    el.innerHTML="";
    for(let i=0;i<=10;i++){const o=document.createElement("option");o.value=i;o.textContent=i===10?"10 · MAX":String(i);el.appendChild(o);}
    el.value="10";
  });
}
function skillPotentialRawType(type){
  const t=String(type||"").trim();
  if(t==="SP")return "Rhombus";
  if(t==="CD")return "Cooldown";
  if(t==="Range"||t==="Tiles")return "Range";
  if(t==="NEW")return "Plus";
  return "Fire";
}
function skillPotentialIconPath(type){
  return BD2DB_IMAGE_HOST+"/common/pngs/potentail_"+skillPotentialRawType(type)+".webp";
}
function skillPotentialIconFallbackPath(type){
  const t=String(type||"").trim();
  if(t==="SP")return "./assets/potential-sp.png";
  if(t==="CD")return "./assets/potential-cd.png";
  if(t==="Range"||t==="Tiles")return "./assets/potential-tiles.png";
  if(t==="NEW")return "./assets/potential-new.png";
  return "./assets/potential-skill.png";
}
function costumeMediaId(costume){
  if(!costume||costume.is_basic_attack)return "";
  return costume.external_id||COSTUME_MEDIA_FALLBACK[costume.id]||"";
}
function costumePortraitUrl(costume){
  const mediaId=costumeMediaId(costume);
  return mediaId?BD2DB_IMAGE_HOST+"/characters/"+encodeURIComponent(mediaId)+".webp":"";
}
function setPortraitState(state){
  const box=$("#portraitBox");
  if(!box)return;
  box.classList.remove("hasPortrait","loadingPortrait","noPortrait");
  if(state==="loaded")box.classList.add("hasPortrait");
  else if(state==="loading")box.classList.add("loadingPortrait");
  else box.classList.add("noPortrait");
}
function updateCostumePortrait(){
  const box=$("#portraitBox"),img=$("#costumePortrait"),costume=getCostume();
  if(!box||!img)return;
  const mediaId=costumeMediaId(costume);
  const selectedChar=getChar();
  $("#portraitInitial").textContent=selectedChar?(selectedChar.Name||"?").slice(0,1).toUpperCase():"?";

  if(!mediaId){
    setPortraitState("missing");
    img.dataset.mediaId="";
    img.removeAttribute("src");
    img.alt="";
    return;
  }

  if(img.dataset.mediaId===mediaId&&img.getAttribute("src")){
    if(img.complete&&img.naturalWidth>0)setPortraitState("loaded");
    return;
  }

  setPortraitState("loading");
  img.dataset.mediaId=mediaId;
  img.alt=(costume&&costume.name?costume.name:"Costume")+" portrait";
  img.onload=function(){
    if(img.dataset.mediaId!==mediaId)return;
    setPortraitState("loaded");
  };
  img.onerror=function(){
    if(img.dataset.mediaId!==mediaId)return;
    setPortraitState("missing");
    img.dataset.mediaId="";
    img.removeAttribute("src");
  };
  img.src=costumePortraitUrl(costume);
}
function potentialRecord(costumeId){
  return costumePotentials.find(function(p){return p.costume_id===costumeId;})||null;
}
function potentialCostumesForCharacter(c){
  return costumes.filter(function(x){
    return x.character_id===c.__id&&!x.is_basic_attack&&!!potentialRecord(x.id);
  });
}
function ensurePotentialState(c){
  if(potentialCharacterId===c.__id)return;
  potentialCharacterId=c.__id;
  permanentPotentialLevels={};
  const rows=potentialCostumesForCharacter(c);
  rows.forEach(function(x){permanentPotentialLevels[x.id]=4;});
  const selected=getCostume();
  bondedCostumeId=selected&&!selected.is_basic_attack&&potentialRecord(selected.id)
    ? selected.id
    : (rows[0]?rows[0].id:"");
  bondPotentialLevels={minor_1_stat:4,minor_2_stat:2,major_1_stat:2,major_2_stat:2};
  ["skillPot1","skillPot2","skillPot3"].forEach(function(id){if($("#"+id))$("#"+id).checked=true;});
}
function skillPotentialEnabled(sheetRow){
  const id=sheetRow===2?"skillPot1":sheetRow===3?"skillPot2":sheetRow===4?"skillPot3":null;
  const el=id?$("#"+id):null;
  return el?el.checked:true;
}
function formulaPotentialAdjustment(formula,percentMode){
  let total=0;
  const re=/([+-])\s*IF\(E([234])\s*,\s*(-?\d+(?:\.\d+)?)(%)?\s*\)/gi;
  let m;
  while((m=re.exec(String(formula||"")))){
    const isPct=!!m[4];
    if(isPct!==!!percentMode)continue;
    if(!skillPotentialEnabled(Number(m[2])))continue;
    total+=(m[1]==="-"?-1:1)*Number(m[3]);
  }
  return total;
}
function levelOptions(max,current){
  let html="";
  for(let i=0;i<=max;i++)html+='<option value="'+i+'" '+(i===Number(current)?"selected":"")+'>'+i+"</option>";
  return html;
}
function updatePotentialSheet(){
  const c=getChar();
  ensurePotentialState(c);
  const rarity=Number(c.RARITY)||5;

  const prog=[
    {stat:c.ENG_LIFE,value:progressionStatValue(c.ENG_LIFE,Number($("#engraveLife").value)||0),on:$("#engraveLifeOn").checked},
    {stat:c.ENG_STR,value:progressionStatValue(c.ENG_STR,Number($("#engraveStrength").value)||0),on:$("#engraveStrengthOn").checked},
    {stat:c.ENG_PSV,value:progressionStatValue(c.ENG_PSV,Number($("#engravePerseverance").value)||0),on:$("#engravePerseveranceOn").checked},
    {stat:c.AWA1,value:awakeningValues[c.AWA1]||0,on:$("#awakening1").checked},
    {stat:c.AWA2,value:awakeningValues[c.AWA2]||0,on:$("#awakening2").checked}
  ];
  prog.forEach(function(x,i){
    const n=i+1;
    $("#potProg"+n+"Stat").textContent=x.stat||"—";
    $("#potProg"+n+"Value").textContent=x.stat?displayStat(x.stat,x.on?x.value:0):"—";
  });

  const costume=getCostume(),sp=costume&&!costume.is_basic_attack?potentialRecord(costume.id):null;
  [1,2,3].forEach(function(i){
    const type=sp?sp["skill_"+i+"_type"]:null;
    const label=$("#skillPot"+i+"Type"),box=$("#skillPot"+i),icon=$("#skillPot"+i+"Icon");
    label.textContent=type||"—";
    box.disabled=!type;
    if(!type)box.checked=false;
    if(icon){
      icon.onerror=function(){
        icon.onerror=null;
        icon.src=skillPotentialIconFallbackPath(type);
      };
      icon.src=skillPotentialIconPath(type);
      icon.alt=type?type+" Skill Potential":"No Skill Potential";
      icon.title=type||"";
      icon.style.opacity=type?"1":".25";
    }
  });

  const rows=potentialCostumesForCharacter(c);
  const bondedSelect=$("#bondedCostume");
  bondedSelect.innerHTML=rows.map(function(x){
    return '<option value="'+x.id+'" '+(x.id===bondedCostumeId?"selected":"")+'>'+escapeHtml(x.name)+"</option>";
  }).join("");
  bondedSelect.disabled=!rows.length;

  const bonded=potentialRecord(bondedCostumeId);
  const defs=[
    ["minor_1_stat","minor_bond",4],
    ["minor_2_stat","minor_bond",2],
    ["major_1_stat","major_bond",2],
    ["major_2_stat","major_bond",2]
  ];
  $("#bondPotentialRows").innerHTML=defs.map(function(d){
    const stat=bonded?bonded[d[0]]:null;
    const level=bondPotentialLevels[d[0]]==null?d[2]:bondPotentialLevels[d[0]];
    const value=stat?potValue(rarity,d[1],stat)*level:0;
    return '<div class="bondPotentialRow">'+
      '<b>'+escapeHtml(stat||"—")+'</b>'+
      '<span>'+escapeHtml(stat?displayStat(stat,value):"—")+'</span>'+
      '<select data-bond-key="'+d[0]+'">'+levelOptions(d[2],level)+'</select>'+
      '</div>';
  }).join("");

  $("#permanentPotentialRows").innerHTML=rows.map(function(x){
    const p=potentialRecord(x.id),stat=p&&p.permanent_stat;
    const level=permanentPotentialLevels[x.id]==null?4:permanentPotentialLevels[x.id];
    const value=stat?potValue(rarity,"permanent",stat)*level:0;
    return '<div class="permanentPotentialRow">'+
      '<span class="costumeName" title="'+escapeHtml(x.name)+'">'+escapeHtml(x.name)+'</span>'+
      '<span class="stat">'+escapeHtml(stat||"—")+'</span>'+
      '<span class="value">'+escapeHtml(stat?displayStat(stat,value):"—")+'</span>'+
      '<select data-perm-costume="'+x.id+'">'+levelOptions(4,level)+'</select>'+
      '</div>';
  }).join("");
}

function attackType(c){return Number(c.ATK)>0?"physical":"magic";}
function getChar(){return characters.find(function(c){return c.__id===$("#character").value;})||null;}
function isBasicAttack(){return $("#costume")&&$("#costume").value==="__basic__";}
function getCostume(){
  if(isBasicAttack()){
    const c=getChar();
    if(!c)return null;
    return {id:"__basic__",character_id:c.__id,name:"Basic Attack",skill_name:"Basic Attack",target:c.TARGET||"Very Front",is_basic_attack:true};
  }
  return costumes.find(function(c){return c.id===$("#costume").value;})||null;
}
function updateCatalogCount(){
  const c=getChar();
  if(!c){if($("#catalogCount"))$("#catalogCount").textContent="—";return;}
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
function applyCharacterDefaultGearTiers(){
  const c=getChar();
  if(!c)return;
  Object.keys(gearState).forEach(function(slot){
    const g=gearState[slot];
    g.tier="UR4";
    g.catalogId="";
    g.autoExclusive=false;
  });
  if(c&&c.EXSLOT&&hasExclusiveForTier(c,c.EXSLOT,"EX UR")){
    gearState[c.EXSLOT].tier="EX UR";
  }
  syncAllExclusiveGear();
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
  const c=getChar(),el=$("#level");
  if(!c)return;
  const max=MAX_LEVEL[Number(c.RARITY)]||80,prev=el.value;
  const opts=[20,40,60,80].filter(function(x){return x<=max;});
  el.innerHTML=opts.map(function(x){return '<option value="'+x+'">'+x+"</option>";}).join("")+'<option value="MAX">MAX</option>';
  el.value=prev&&Array.from(el.options).some(function(o){return o.value===prev;})?prev:"MAX";
}
function updateCostumeOptions(){
  const c=getChar(),el=$("#costume"),prev=el.value;
  if(!c){
    el.innerHTML="";
    el.disabled=true;
    syncSearchableSelect("costume");
    updateCatalogCount();
    return;
  }
  const rows=costumes.filter(function(x){return x.character_id===c.__id&&!x.is_basic_attack;})
    .sort(function(a,b){return a.name.localeCompare(b.name);});
  el.disabled=false;
  el.innerHTML=rows.map(function(x){return '<option value="'+x.id+'">'+x.name+"</option>";}).join("")+
    '<option value="__basic__">Basic Attack</option>';
  if(prev&&rows.some(function(x){return x.id===prev;}))el.value=prev;
  else{
    const preferred=rows.find(function(x){return c.Name==="Tyr"&&x.name==="Innocent Bunny";});
    el.value=preferred?preferred.id:(rows[0]?rows[0].id:"__basic__");
  }
  syncSearchableSelect("costume");
  updateCatalogCount();
  syncCalculationMode();
}
function syncCalculationMode(){
  const basic=isBasicAttack();
  $("#dupe").disabled=true;
  $("#dupe").value=basic?"0":"5";
  syncCostumeUpgradeToCalculator();
}

function resetBuild(){
  if(!getChar()){showBlankSelectionState();return;}
  gearState=clone(DEFAULT_GEAR);applyCharacterDefaultGearTiers();buildGearUI();
  const defaults={collectionAtk:80,collectionHp:80,externalAtk:0,externalCr:0,externalCdmg:0,externalEle:0,skillMult:100,hits:1,chains:0,chainBuff:0,enemyRes:0,dmgMult:1,enemyHp:30000,enemyAtk:1000};
  Object.keys(defaults).forEach(function(id){const el=$("#"+id);if(el)el.value=defaults[id];});
  ["engraveLife","engraveStrength","engravePerseverance"].forEach(function(id){if($("#"+id))$("#"+id).value="10";});
  ["engraveLifeOn","engraveStrengthOn","engravePerseveranceOn","awakening1","awakening2","skillPot1","skillPot2","skillPot3"].forEach(function(id){if($("#"+id))$("#"+id).checked=true;});
  potentialCharacterId="";bondedCostumeId="";permanentPotentialLevels={};bondPotentialLevels={minor_1_stat:4,minor_2_stat:2,major_1_stat:2,major_2_stat:2};
  $("#dupe").value="5";$("#advantage").checked=true;
  updateLevelOptions();updateCostumeOptions();render();
}
function wire(){
  function handleControlChange(e){
    if(e.target.dataset&&e.target.dataset.searchInput)return;
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
      syncSearchableSelect("character");
      if(!e.target.value){showBlankSelectionState();return;}
      potentialCharacterId="";bondedCostumeId="";permanentPotentialLevels={};
      updateLevelOptions();
      updateCostumeOptions();
      applyCharacterDefaultGearTiers();
      buildGearUI();
      render();
      return;
    }
    if(e.target.id==="costume"){syncSearchableSelect("costume");syncCalculationMode();render();return;}
    if(e.target.id==="dupe"){syncCostumeUpgradeToCalculator();render();return;}
    if(e.target.id==="bondedCostume"){bondedCostumeId=e.target.value;render();return;}
    if(e.target.dataset.bondKey){bondPotentialLevels[e.target.dataset.bondKey]=Number(e.target.value)||0;render();return;}
    if(e.target.dataset.permCostume){permanentPotentialLevels[e.target.dataset.permCostume]=Number(e.target.value)||0;render();return;}
    if(/^skillPot[123]$/.test(e.target.id)){syncCostumeUpgradeToCalculator();render();return;}
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
  ensureGearTables();
  const m=gearTables.main[g.tier]||{},ref=gearTables.refine[g.tier]||{};
  const factor=g.ref.reduce(function(a,x){return a+(REFINE_FACTOR[x]||0);},0);
  return 2*(m[stat]||0)+(ref[stat]||0)*factor;
}
function subGearValue(g,stat){
  ensureGearTables();
  return (gearTables.sub[g.tier]||{})[stat]||0;
}
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
  ensurePotentialState(c);

  const engravingPairs=[
    [c.ENG_LIFE,Number($("#engraveLife").value)||0,$("#engraveLifeOn").checked],
    [c.ENG_STR,Number($("#engraveStrength").value)||0,$("#engraveStrengthOn").checked],
    [c.ENG_PSV,Number($("#engravePerseverance").value)||0,$("#engravePerseveranceOn").checked]
  ];
  engravingPairs.forEach(function(x){
    if(x[0]&&x[2])addStat(out,x[0],progressionStatValue(x[0],x[1]));
  });

  if($("#awakening1").checked&&c.AWA1)addStat(out,c.AWA1,awakeningValues[c.AWA1]||0);
  if($("#awakening2").checked&&c.AWA2)addStat(out,c.AWA2,awakeningValues[c.AWA2]||0);

  const rarity=Number(c.RARITY)||5;
  potentialCostumesForCharacter(c).forEach(function(costume){
    const p=potentialRecord(costume.id),stat=p&&p.permanent_stat;
    const level=permanentPotentialLevels[costume.id]==null?4:permanentPotentialLevels[costume.id];
    if(stat&&level)addStat(out,stat,potValue(rarity,"permanent",stat)*level);
  });

  const bonded=potentialRecord(bondedCostumeId);
  if(bonded){
    [
      ["minor_1_stat","minor_bond"],
      ["minor_2_stat","minor_bond"],
      ["major_1_stat","major_bond"],
      ["major_2_stat","major_bond"]
    ].forEach(function(d){
      const stat=bonded[d[0]],level=Number(bondPotentialLevels[d[0]])||0;
      if(stat&&level)addStat(out,stat,potValue(rarity,d[1],stat)*level);
    });
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
function calculateDamageSet(atk,skillPct,hits,cr,cdmg,property,enemy,dmgMult){
  const skill=(Number(skillPct)||0)/100;
  const hitCount=Math.max(1,Number(hits)||1);
  const initial=Math.max(0,+$("#chains").value||0);
  const advantageBonus=$("#advantage").checked?property:0;
  const baseHit=atk*skill*(1+advantageBonus)*(1-enemy)*dmgMult;
  const chainStep=.10+(+$("#chainBuff").value/100||0);
  let normal=0;
  for(let i=0;i<hitCount;i++)normal+=baseHit*(1+(initial+i)*chainStep);
  const critChance=Math.min(1,Math.max(0,Number(cr)||0));
  return {
    baseHit:baseHit,
    normal:normal,
    average:normal*(1+critChance*(Number(cdmg)||0)),
    critical:normal*(1+(Number(cdmg)||0))
  };
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
  const skillPct=+$("#skillMult").value||0,hits=Math.max(1,+$("#hits").value||1);
  const enemy=Math.min(.9,Math.max(-1,+$("#enemyRes").value/100||0)),dmgMult=Math.max(0,+$("#dmgMult").value||0);
  const damageSet=calculateDamageSet(atk,skillPct,hits,cr,cdmg,property,enemy,dmgMult);
  return {
    c:c,t:t,gearOnly:gear.total,progression:prog,atkKey:atkKey,atk:atk,hp:hp,cr:cr,cdmg:cdmg,
    def:def,mres:mres,property:property,hits:hits,enemy:enemy,dmgMult:dmgMult,
    baseHit:damageSet.baseHit,normalDamage:damageSet.normal,averageDamage:damageSet.average,
    criticalDamage:damageSet.critical,damage:damageSet.average,gear:gear
  };
}
function displayStat(k,v){
  if(!PERCENT_STATS.has(k))return fmt(v);
  const n=(Number(v)||0)*100;
  const decimals=Math.abs(n-Math.round(n))<1e-9?0:Math.abs(n*10-Math.round(n*10))<1e-9?1:2;
  return n.toFixed(decimals)+"%";
}

function percentNumber(value){
  const m=String(value==null?"":value).trim().match(/^(-?\d+(?:\.\d+)?)%$/);
  return m?Number(m[1]):null;
}
function numericValue(value){
  const n=Number(String(value==null?"":value).replace(/,/g,"").trim());
  return Number.isFinite(n)?n:null;
}
function effectiveVariableValue(v,dupe){
  const raw=currentDupeValue(v.dupe_values,dupe);
  const formula=String(v.formula||"");
  if(raw!=null){
    const pctValue=percentNumber(raw);
    if(pctValue!=null){
      return (Math.round((pctValue+formulaPotentialAdjustment(formula,true))*10000)/10000)+"%";
    }
    const num=numericValue(raw);
    if(num!=null)return String(num+formulaPotentialAdjustment(formula,false));
    return String(raw);
  }

  let m=formula.match(/^=IF\(\$C\$4\s*>\s*(\d+)\s*,\s*([^,]+)\s*,\s*([^)]+)\)/i);
  if(m){
    const chosen=dupe>Number(m[1])?String(m[2]).trim():String(m[3]).trim();
    const p=percentNumber(chosen);
    if(p!=null)return (p+formulaPotentialAdjustment(formula,true))+"%";
    const n=numericValue(chosen);
    if(n!=null)return String(n+formulaPotentialAdjustment(formula,false));
    return chosen;
  }
  m=formula.match(/^=IF\(\$C\$4\s*>=\s*(\d+)\s*,\s*([^,]+)\s*,\s*([^)]+)\)/i);
  if(m){
    const chosen=dupe>=Number(m[1])?String(m[2]).trim():String(m[3]).trim();
    const p=percentNumber(chosen);
    if(p!=null)return (p+formulaPotentialAdjustment(formula,true))+"%";
    const n=numericValue(chosen);
    if(n!=null)return String(n+formulaPotentialAdjustment(formula,false));
    return chosen;
  }
  m=formula.match(/^=\s*(-?\d+(?:\.\d+)?)(%)?/);
  if(m){
    const pct=!!m[2],base=Number(m[1]);
    const value=base+formulaPotentialAdjustment(formula,pct);
    return pct?value+"%":String(value);
  }
  return v.displayed_value==null?null:String(v.displayed_value);
}
function sheetColumnNumber(col){
  let n=0;
  String(col||"").toUpperCase().split("").forEach(function(ch){
    n=n*26+(ch.charCodeAt(0)-64);
  });
  return n;
}
function primaryDamageVariable(vars){
  const marked=vars.find(function(v){return /BD2DB_PRIMARY/i.test(v.formula||"");});
  if(marked)return marked;
  const byIndex={};
  vars.forEach(function(v){byIndex[Number(v.variable_index)]=v;});
  const dmgRows=vars.filter(function(v){return /DMG\(/i.test(v.formula||"");});
  for(const row of dmgRows){
    const m=String(row.formula||"").match(/,\s*([A-Z]{1,2})\d+\s*\*\s*CRIT\s*\(/i);
    if(!m)continue;
    const idx=sheetColumnNumber(m[1])-13; // N = variable_index 1
    const candidate=byIndex[idx];
    if(candidate&&(candidate.dupe_values&&Object.keys(candidate.dupe_values).length||/\$C\$4/i.test(candidate.formula||""))){
      return candidate;
    }
  }
  return vars.find(function(v){
    return v.dupe_values&&Object.keys(v.dupe_values).length&&percentNumber(currentDupeValue(v.dupe_values,5))!=null;
  })||null;
}
function inferCostumeHits(costume){
  const text=String(costume&&costume.skill_description||"");
  const m=text.match(/Attack\s+(\d+)\s+Times/i)||text.match(/(\d+)\s+Times/i);
  return m?Math.max(1,Number(m[1])||1):1;
}

function effectiveCostumeField(displayed,formula,dupe){
  const text=String(formula||"");
  if(!text)return displayed;

  const sw=text.match(/SWITCH\(\$C\$4,\s*0,\s*(-?\d+(?:\.\d+)?),\s*1,\s*(-?\d+(?:\.\d+)?),\s*2,\s*(-?\d+(?:\.\d+)?),\s*3,\s*(-?\d+(?:\.\d+)?),\s*4,\s*(-?\d+(?:\.\d+)?),\s*5,\s*(-?\d+(?:\.\d+)?)\)/i);
  if(sw){
    const values=sw.slice(1).map(Number);
    return values[Math.max(0,Math.min(5,Number(dupe)||0))]+formulaPotentialAdjustment(text,false);
  }

  let m=text.match(/IF\(\$C\$4\s*>\s*(\d+)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/i);
  if(m){
    return (dupe>Number(m[1])?Number(m[2]):Number(m[3]))+formulaPotentialAdjustment(text,false);
  }
  m=text.match(/IF\(\$C\$4\s*>=\s*(\d+)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/i);
  if(m){
    return (dupe>=Number(m[1])?Number(m[2]):Number(m[3]))+formulaPotentialAdjustment(text,false);
  }
  const base=text.match(/^=\s*(-?\d+(?:\.\d+)?)/);
  if(base)return Number(base[1])+formulaPotentialAdjustment(text,false);
  return displayed;
}
function costumeUpgradeSummary(costume,vars,dupe){
  const sp=effectiveCostumeField(costume.base_sp,costume.sp_formula,dupe);
  const cd=effectiveCostumeField(costume.base_cooldown,costume.cooldown_formula,dupe);
  const primary=primaryDamageVariable(vars);
  const damage=primary?effectiveVariableValue(primary,dupe):null;
  return {sp:sp,cd:cd,primary:primary,damage:damage};
}

function replaceUpgradeValuesInDescription(costume,vars,dupe){
  let text=String(costume&&costume.skill_description||"");
  vars.forEach(function(v){
    const oldVal=String(v.displayed_value==null?"":v.displayed_value).trim();
    const newVal=effectiveVariableValue(v,dupe);
    if(!oldVal||newVal==null||String(newVal)===oldVal)return;
    text=text.split(oldVal).join(String(newVal));
  });
  return text;
}

function burstPrimaryBonus(burst,primary){
  if(!burst||!primary||!burst.effects)return 0;
  const target=String(burst.effects.target||"");
  if(target!=="VALUE"+Number(primary.variable_index))return 0;
  const value=Number(burst.effects.value);
  return Number.isFinite(value)?value:0;
}
function syncCostumeUpgradeToCalculator(){
  const costume=getCostume();
  if(!costume||costume.is_basic_attack){
    $("#skillMult").value="100";
    $("#hits").value="1";
    return;
  }
  const dupe=Number($("#dupe").value)||0;
  const vars=costumeVariables.filter(function(v){return v.costume_id===costume.id;});
  const primary=primaryDamageVariable(vars);
  if(primary){
    const value=effectiveVariableValue(primary,dupe);
    let p=percentNumber(value);
    if(p==null)p=numericValue(value);
    if(p!=null){
      $("#skillMult").value=String(p);
    }
  }
  $("#hits").value=String(inferCostumeHits(costume));
}

function currentDupeValue(obj,dupe){
  if(!obj||typeof obj!=="object")return null;
  return obj[String(dupe)]!=null?obj[String(dupe)]:obj[dupe]!=null?obj[dupe]:null;
}
function escapeHtml(value){
  return String(value==null?"—":value)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function buildUpgradeTable(costume,r,allVars){
  const primary=primaryDamageVariable(allVars);
  const effectVars=allVars.filter(function(v){
    if(primary&&Number(primary.variable_index)===Number(v.variable_index))return false;
    return (v.dupe_values&&Object.keys(v.dupe_values).length)||/\$C\$4/i.test(v.formula||"");
  }).slice(0,4);
  const levels=[0,1,2,3,4,5];
  const hits=inferCostumeHits(costume);
  const cols=levels.map(function(dupe){
    const summary=costumeUpgradeSummary(costume,allVars,dupe);
    let skillPct=percentNumber(summary.damage);
    if(skillPct==null)skillPct=numericValue(summary.damage);
    const damages=skillPct==null?null:calculateDamageSet(
      r.atk,skillPct,hits,r.cr,r.cdmg,r.property,r.enemy,r.dmgMult
    );
    return {dupe:dupe,summary:summary,skillPct:skillPct,damages:damages};
  });
  const row=function(label,values,className){
    return '<tr class="'+(className||"")+'"><th>'+escapeHtml(label)+'</th>'+
      values.map(function(v){return '<td>'+escapeHtml(v)+'</td>';}).join("")+'</tr>';
  };
  let html='<table class="upgradeTable"><thead><tr><th>Upgrade</th>'+
    levels.map(function(x){return '<th>+'+x+'</th>';}).join("")+'</tr></thead><tbody>';
  html+=row("SP",cols.map(function(x){return x.summary.sp==null?"—":x.summary.sp;}));
  html+=row("CD",cols.map(function(x){return x.summary.cd==null?"—":x.summary.cd+"T";}));
  html+=row("Skill %",cols.map(function(x){return x.summary.damage==null?"—":x.summary.damage;}));
  effectVars.forEach(function(v,i){
    html+=row("Effect "+(i+1),levels.map(function(dupe){
      return effectiveVariableValue(v,dupe)||v.displayed_value||"—";
    }));
  });
  html+=row("Normal",cols.map(function(x){return x.damages?fmt(x.damages.normal):"—";}),"damageRow normalRow");
  html+=row("Average",cols.map(function(x){return x.damages?fmt(x.damages.average):"—";}),"damageRow averageRow");
  html+=row("Critical",cols.map(function(x){return x.damages?fmt(x.damages.critical):"—";}),"damageRow criticalRow");
  html+="</tbody></table>";
  return html;
}
function buildBurstTable(costume,r,allVars){
  const bursts=costumeBursts.filter(function(x){return x.costume_id===costume.id;})
    .sort(function(a,b){return Number(a.stage)-Number(b.stage);});
  if(!bursts.length)return "";

  const primary=primaryDamageVariable(allVars);
  const baseSummary=costumeUpgradeSummary(costume,allVars,5);
  let basePct=percentNumber(baseSummary.damage);
  if(basePct==null)basePct=numericValue(baseSummary.damage);
  const hits=inferCostumeHits(costume);

  const stages=[1,2,3].map(function(stage){
    const burst=bursts.find(function(x){return Number(x.stage)===stage;})||null;
    if(!burst)return {stage:stage,burst:null,dmg:null};
    const bonus=burstPrimaryBonus(burst,primary);
    const canCalc=basePct!=null&&bonus!==0;
    const dmg=canCalc
      ? calculateDamageSet(r.atk,basePct+bonus,hits,r.cr,r.cdmg,r.property,r.enemy,r.dmgMult)
      : null;
    return {stage:stage,burst:burst,dmg:dmg};
  });

  const cells=function(values,className){
    return '<tr class="'+(className||"")+'">'+values.join("")+'</tr>';
  };
  const valueCell=function(value,className){
    return '<td class="'+(className||"")+'">'+escapeHtml(value==null?"—":value)+'</td>';
  };

  let html='<div class="burstTableWrap"><strong>Burst</strong>'+
    '<table class="upgradeTable burstTable"><thead><tr><th>Burst</th>'+
    stages.map(function(x){return '<th>B'+x.stage+'</th>';}).join("")+
    '</tr></thead><tbody>';

  html+=cells(
    ['<th>SP</th>'].concat(stages.map(function(x){
      return valueCell(x.burst?x.burst.extra_sp:"—");
    }))
  );

  html+=cells(
    ['<th>Effect</th>'].concat(stages.map(function(x){
      return valueCell(x.burst?(x.burst.effect_summary||"—"):"—","burstEffectCell");
    })),
    "burstEffectRow"
  );

  html+=cells(
    ['<th>Normal</th>'].concat(stages.map(function(x){
      return valueCell(x.dmg?fmt(x.dmg.normal):"—");
    })),
    "damageRow normalRow"
  );

  html+=cells(
    ['<th>Average</th>'].concat(stages.map(function(x){
      return valueCell(x.dmg?fmt(x.dmg.average):"—");
    })),
    "damageRow averageRow"
  );

  html+=cells(
    ['<th>Critical</th>'].concat(stages.map(function(x){
      return valueCell(x.dmg?fmt(x.dmg.critical):"—");
    })),
    "damageRow criticalRow"
  );

  html+='</tbody></table></div>';
  return html;
}
function updateCostumePanel(r){
  const costume=getCostume(),c=getChar();
  if(!costume){
    $("#skillTitle").textContent="Damage Test";
    $("#skillDescription").textContent="No costume data loaded for this character.";
    $("#skillProgression").innerHTML="";
    $("#burstInfo").textContent="No Burst data for this costume.";
    return;
  }
  if(costume.is_basic_attack){
    const type=r.atkKey==="ATK"?"Physical":"Magic";
    $("#skillTitle").textContent="Basic Attack";
    $("#skillDescription").textContent="Deal damage based on 100% of "+r.atkKey+". Gain 1 SP.";
    $("#targetBadge").textContent=c.TARGET==="Vault"?"Vault":"Very Front";
    $("#skillProgression").innerHTML=
      '<table class="upgradeTable basicDamageTable"><thead><tr><th>Basic Attack</th><th>Damage</th></tr></thead><tbody>'+
      '<tr><th>Normal</th><td>'+fmt(r.normalDamage)+'</td></tr>'+
      '<tr class="averageRow"><th>Average</th><td>'+fmt(r.averageDamage)+'</td></tr>'+
      '<tr class="criticalRow"><th>Critical</th><td>'+fmt(r.criticalDamage)+'</td></tr>'+
      '</tbody></table>';
    $("#burstInfo").textContent="Basic Attack has no costume upgrade or Burst stage.";
    return;
  }

  const allVars=costumeVariables.filter(function(x){return x.costume_id===costume.id;});
  $("#skillTitle").textContent=costume.skill_name||costume.name;
  $("#skillDescription").textContent=replaceUpgradeValuesInDescription(costume,allVars,5)||"No description available.";
  $("#targetBadge").textContent=costume.target||c.TARGET||"Target";
  $("#skillProgression").innerHTML=buildUpgradeTable(costume,r,allVars)+buildBurstTable(costume,r,allVars);

  const burstRows=costumeBursts.filter(function(x){return x.costume_id===costume.id;});
  $("#burstInfo").textContent=burstRows.length
    ? "Burst stages are shown in the Skill comparison table."
    : "No Burst data for this costume.";
}
function render(){
  if(!characters.length||!getChar())return;
  const r=compute(),c=r.c,atkPct=r.atkKey+"%";
  $("#rarityBadge").textContent="★".repeat(Number(c.RARITY)||5);
  $("#elementSigil").textContent=(c.ELE||"S").slice(0,1);$("#portraitInitial").textContent=(c.Name||"?").slice(0,1).toUpperCase();$("#portraitElement").textContent=c.ELE||"Element";updateCostumePortrait();
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
  updatePotentialSheet();

  $("#sumAtkLabel").textContent=r.atkKey;$("#sumHp").textContent=fmt(r.hp);$("#sumAtk").textContent=fmt(r.atk);$("#sumCr").textContent=pct(r.cr);$("#sumCdmg").textContent=pct(r.cdmg);
  $("#leftDef").textContent=pct(r.def);$("#leftMres").textContent=pct(r.mres);$("#elementDamageLabel").textContent=(c.ELE?c.ELE+" DMG":"Property DMG");$("#leftProperty").textContent=pct(r.property);
  $("#resistLabel").textContent=(c.RES||"Property")+" Resist";$("#leftResist").textContent=c.RES==="Property"?"0%":"50%";

  $("#damageNormal").textContent=fmt(r.normalDamage);
  $("#damageAverage").textContent=fmt(r.averageDamage);
  $("#damageCritical").textContent=fmt(r.criticalDamage);
  $("#sumDamage").textContent=fmt(r.averageDamage);
  $("#rightHits").textContent=r.hits;
  $("#rightDamage").textContent=fmt(r.averageDamage);
  $("#damageExplain").textContent=r.hits+" hit"+(r.hits===1?"":"s")+" · "+Math.round(r.baseHit).toLocaleString()+" normal base/hit · "+(r.cr*100).toFixed(1)+"% CR · "+(r.property*100).toFixed(1)+"% property · "+(r.enemy*100).toFixed(1)+"% enemy RES";

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
    ["DEF",pct(r.def)],["MRES",pct(r.mres)],["Property",pct(r.property)],["Avg Skill",fmt(r.averageDamage)]
  ];
  $("#breakdown").innerHTML=breakdown.map(function(row){return "<article><span>"+row[0]+"</span><strong>"+row[1]+"</strong></article>";}).join("");
  updateCostumePanel(r);
}
loadData();