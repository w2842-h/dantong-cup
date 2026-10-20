/* ============================================================
 *  「单通哥杯」成绩数据
 *  —— 只改这个文件，不要动 index.html ——
 *
 *  字段说明：
 *    char     角色
 *    cons     命座（数字或 "——"）
 *    weapon   武器
 *    element  自挂元素
 *    dps      DPS，纯数字，不要加逗号、不要加 "w"
 *    note     备注（留空则显示 —）
 *    driver   驾驶员
 *    featured true = 被置顶固定的那一条（目前是单通哥）
 *
 *  新增成绩：复制一整行 { ... }, 粘贴到底部，改内容即可。
 *  不需要手动排序，页面会自动按 DPS 排。
 * ============================================================ */

window.META = {
  updated: "2026-10-21",
  status: "数据更新中",
  submit: "B站投稿 @雪落棋枰，注明“单通哥杯”"
};

window.SCORES = [
  /* ---------- 置顶：被挂起来的那一条 ---------- */
  { char: "龙王", cons: 2, weapon: "r1大典", element: "火", dps: 62366, note: "单通哥出的唐分", driver: "植2bug必须修", featured: true },

  /* ---------- 其余成绩（顺序随意） ---------- */
  { char: "奥黛塔", cons: 2, weapon: "r1蝶变", element: "雷", dps: 70044, note: "59.4爆伤换29.7暴击", driver: "雪落棋枰" },
  { char: "草神", cons: 2, weapon: "r1粽子", element: "雷", dps: 33761, note: "", driver: "perorisSMOS" },
  { char: "杜林", cons: 6, weapon: "r5黑蚀", element: "冰", dps: 270593, note: "100级，魔导，双冰双火共鸣", driver: "杜林宝宝杜子饿" },
  { char: "杜林", cons: 6, weapon: "r1黑蚀", element: "冰", dps: 206575, note: "95级，魔导，双火双冰共鸣", driver: "古月陰荒" },
  { char: "杜林", cons: 6, weapon: "r1黑蚀", element: "冰", dps: 160182, note: "无魔导无队友", driver: "彩枫落终云" },
  { char: "法尔伽", cons: 0, weapon: "r1狼歌", element: "火", dps: 93164, note: "带双风双水挂件模拟满大权", driver: "牢法信仰手法玩家" },
  { char: "法尔伽", cons: 0, weapon: "r1裁断", element: "火", dps: 74150, note: "带双风双水挂件模拟满大权", driver: "-_-hgg" },
  { char: "法尔伽", cons: 0, weapon: "r1狼歌", element: "冰", dps: 86575, note: "魔导双火双风满大权，已模拟去除双火共鸣", driver: "隗寂" },
  { char: "法尔伽", cons: 2, weapon: "r1狼歌", element: "火", dps: 119096, note: "带双风双水挂件模拟满大权", driver: "ホタル流萤" },
  { char: "法尔伽", cons: 1, weapon: "r5螭骨", element: "冰", dps: 97575, note: "双风双火满天赋，双火加攻", driver: "softcitlali" },
  { char: "菲林斯", cons: 2, weapon: "r1荒城", element: "水", dps: 102420, note: "模拟满辉", driver: "Mirageil" },
  { char: "菲林斯", cons: 3, weapon: "r1荒城", element: "水", dps: 111337, note: "模拟满辉，带少机吃天赋加成13.1w", driver: "伊涅芙菲林斯" },
  { char: "菲林斯", cons: 3, weapon: "r1荒城", element: "水", dps: 113408, note: "模拟满辉", driver: "少达菲机" },
  { char: "菲林斯", cons: 6, weapon: "r1荒城", element: "水", dps: 168159, note: "模拟满辉，不用大q14.1w", driver: "挪德最值得抽的卡" },
  { char: "菲林斯", cons: 6, weapon: "r5荒城", element: "水", dps: 250032, note: "模拟满辉，100级", driver: "偷摸洛恩pg被抓的雨夜" },
  { char: "菲林斯", cons: 2, weapon: "r1荒城", element: "水", dps: 89894, note: "模拟满辉", driver: "温迪的宝bao" },
  { char: "胡桃", cons: "——", weapon: "护摩", element: "冰", dps: 65403, note: "胡桃命座几乎无影响", driver: "T0级黑胡桃流量大王" },
  { char: "火神", cons: 0, weapon: "r1千阳", element: "冰", dps: 77450, note: "无法模拟满战意，带欧洛仑充战意（未切出）", driver: "bili_23445668686" },
  { char: "火神", cons: 2, weapon: "r1千阳", element: "冰", dps: 145236, note: "无法模拟满战意", driver: "小鸠阿_" },
  { char: "火神", cons: 2, weapon: "r1千阳", element: "冰", dps: 152701, note: "无法模拟满战意", driver: "t0级爱少女充能大王" },
  { char: "火神", cons: 6, weapon: "r1千阳", element: "冰", dps: 246667, note: "无法模拟满战意，95级", driver: "手忙脚乱的新手" },
  { char: "火神", cons: 6, weapon: "r1千阳", element: "冰", dps: 284549, note: "95级，带欧茜模拟战意（未切出），模拟-30%攻击（6欧）", driver: "手忙脚乱的新手" },
  { char: "火神", cons: 6, weapon: "r5千阳", element: "冰", dps: 340541, note: "携带纳塔队友模拟战意（未切出），有双火，100级", driver: "碳基" },
  { char: "火神", cons: 2, weapon: "r1千阳", element: "冰", dps: 163813, note: "携带欧茜模拟战意，模拟词条-30攻（6欧）", driver: "九代目唐影" },
  { char: "火神", cons: 2, weapon: "r1千阳", element: "冰", dps: 126716, note: "模拟单通哥神秘zsa手法（单通哥不承认双玛头，我认）", driver: "Miss奥黛塔" },
  { char: "火神", cons: 2, weapon: "r1千阳", element: "火", dps: 61490, note: "火底非冰底，转圈流程", driver: "栗山未来Falsefuture" },
  { char: "火神", cons: 2, weapon: "r1千阳", element: "冰", dps: 124380, note: "带欧茜模拟战意，转圈手法", driver: "雾夕寒川" },
  { char: "火神", cons: 6, weapon: "r5千阳", element: "冰", dps: 358766, note: "100级，带茜欧模拟战意", driver: "有口无心丿" },
  { char: "火神", cons: 6, weapon: "r1千阳", element: "冰", dps: 302153, note: "带茜欧模拟夜魂，-30攻击（6欧），100级", driver: "OCO蜗居公主" },
  { char: "菈乌玛", cons: 2, weapon: "r1天镜", element: "水", dps: 72155, note: "初辉，模拟230分草套，无模拟草套6.4w", driver: "挪德最值得抽的卡" },
  { char: "菈乌玛", cons: 6, weapon: "r2天镜", element: "水", dps: 222652, note: "模拟满辉", driver: "Graceful_Bubu" },
  { char: "莱欧", cons: 1, weapon: "r1粽子", element: "雷", dps: 73280, note: "砺行修远可领命座，携带挂件冰主", driver: "佩露薇利_Peruere" },
  { char: "莱欧", cons: 6, weapon: "r5金流", element: "雷", dps: 304652, note: "0能量，携带挂件冰主，100级", driver: "bili_18172892167" },
  { char: "莉奈娅", cons: 2, weapon: "r5锻造", element: "水", dps: 40588, note: "95级，模拟满辉", driver: "那菈鲨鲨" },
  { char: "龙王", cons: 1, weapon: "r5祭礼", element: "火", dps: 62672, note: "", driver: "Mirageil" },
  { char: "龙王", cons: 1, weapon: "r1大典", element: "火", dps: 68534, note: "低练（算了我承认，这套猎人是胡桃挑剩下的）", driver: "雪落棋枰" },
  { char: "龙王", cons: 1, weapon: "r1大典", element: "火", dps: 73615, note: "", driver: "Mirageil" },
  { char: "龙王", cons: 3, weapon: "r1大典", element: "火", dps: 92499, note: "理论21龙同练度7.82w", driver: "克营这回永驻" },
  { char: "龙王", cons: 4, weapon: "r1大典", element: "火", dps: 110108, note: "", driver: "三叶与立花泷" },
  { char: "龙王", cons: 6, weapon: "r1大典", element: "火", dps: 152514, note: "100级", driver: "蕾姆酱q" },
  { char: "龙王", cons: 6, weapon: "r5大典", element: "火", dps: 190700, note: "100级", driver: "我想要0失误" },
  { char: "龙王", cons: 6, weapon: "r5大典", element: "火", dps: 221159, note: "100级", driver: "池渊OAO" },
  { char: "龙王", cons: 6, weapon: "r1大典", element: "火", dps: 106483, note: "", driver: "心凌-serendipity" },
  { char: "龙王", cons: 1, weapon: "r5玉珑", element: "火", dps: 65177, note: "带钟离（未放技能）触发武器切人特效", driver: "七年了我回来了" },
  { char: "龙王", cons: 2, weapon: "r1大典", element: "火", dps: 67552, note: "", driver: "不喜欢傲娇呢" },
  { char: "龙王", cons: 3, weapon: "r1大典", element: "火", dps: 93613, note: "", driver: "岭南惆怅客" },
  { char: "洛恩", cons: 2, weapon: "r1灾悔", element: "火", dps: 73668, note: "带杜林（未切出）开魔导，带香菱模拟争胜（已去除香菱伤害）", driver: "黄金小萌新" },
  { char: "莫娜", cons: 6, weapon: "r1四风", element: "火", dps: 90469, note: "模拟魔导", driver: "-_-hgg" },
  { char: "木偶", cons: 2, weapon: "r1超越", element: "雷", dps: 89518, note: "26.4爆伤换13.2暴击", driver: "不是东风不二秋" },
  { char: "木偶", cons: 0, weapon: "r1超越", element: "雷", dps: 89961, note: "加词条模拟双冰15暴击", driver: "softcitlali" },
  { char: "木偶", cons: 2, weapon: "r1超越", element: "雷", dps: 100045, note: "模拟词条双冰15暴击，无模拟9.7w", driver: "澜斓镧谰阑" },
  { char: "木偶", cons: 2, weapon: "r1裁断", element: "雷", dps: 106931, note: "100级", driver: "是闭月吗" },
  { char: "木偶", cons: 1, weapon: "r5狼末", element: "雷", dps: 64948, note: "模拟33词条", driver: "栗山未来Falsefuture" },
  { char: "木偶", cons: 0, weapon: "r2金律", element: "雷", dps: 56500, note: "", driver: "摆烂之人-" },
  { char: "木偶", cons: 6, weapon: "r1超越", element: "雷", dps: 201851, note: "模拟双冰214649，0能量190494", driver: "增殖的寄123" },
  { char: "木偶", cons: 6, weapon: "r5超越", element: "雷", dps: 274974, note: "100级，模拟双冰+15暴击", driver: "黑板大仙" },
  { char: "奈芙尔", cons: 2, weapon: "r1粽子", element: "水", dps: 70365, note: "模拟满辉", driver: "perorisSMOS" },
  { char: "仆人", cons: 2, weapon: "r1赤月", element: "冰", dps: 98997, note: "满能量无用", driver: "浅倚夕风" },
  { char: "仆人", cons: 2, weapon: "r1赤月", element: "冰", dps: 104982, note: "满能量无用", driver: "alqn0822" },
  { char: "仆人", cons: 3, weapon: "r1赤月", element: "冰", dps: 121313, note: "满能量无用", driver: "Ems_-" },
  { char: "仆人", cons: 3, weapon: "r5赤沙", element: "冰", dps: 135346, note: "满能量无用", driver: "畅畅怀里的缨" },
  { char: "仆人", cons: 3, weapon: "r1和璞", element: "冰", dps: 104286, note: "满能量无用", driver: "TimeReflection" },
  { char: "仆人", cons: 2, weapon: "r1赤月", element: "冰", dps: 110387, note: "满能量无用", driver: "Layaka1" },
  { char: "仆人", cons: 2, weapon: "r1赤月", element: "冰", dps: 112026, note: "95级，满能量无用", driver: "不喜欢傲娇呢" },
  { char: "仆人", cons: 2, weapon: "r1赤月", element: "冰", dps: 96847, note: "满能量无用", driver: "戶松瑶" },
  { char: "赛诺", cons: 6, weapon: "r5赤沙", element: "冰", dps: 267597, note: "100级，携带冰主", driver: "ID-iddi" },
  { char: "赛诺", cons: 2, weapon: "r5赤沙", element: "冰", dps: 112489, note: "砺行修远可领命座，携带挂件冰主", driver: "十一爱吃竹" },
  { char: "瓦蕾莎", cons: 3, weapon: "r1溢彩", element: "草", dps: 85056, note: "可自选命座", driver: "苏小燚" },
  { char: "薇斯纳", cons: 1, weapon: "r1蝶变", element: "冰", dps: 63389, note: "17.5暴击换35爆伤", driver: "雪落棋枰" },
  { char: "薇斯纳", cons: 2, weapon: "r1蝶变", element: "冰", dps: 75810, note: "天赋未满", driver: "流敏敏敏敏" },
  { char: "薇斯纳", cons: 2, weapon: "r1蝶变", element: "冰", dps: 83745, note: "", driver: "析构万理的发条少年" },
  { char: "希格雯+芙宁娜", cons: "——", weapon: "——", element: "火", dps: 217761, note: "双人娱乐赛道，100级65希格雯100级61芙", driver: "苯甲酸钠--" },
  { char: "魈", cons: 6, weapon: "r5护摩", element: "火", dps: 107727, note: "模拟对双触发c6，自挂元素基本无用，100级", driver: "泪也成诗-" },
  { char: "小玛", cons: 1, weapon: "r2冲浪", element: "火", dps: 76227, note: "95级，降3词条模拟r1冲浪", driver: "猪-猪猪大王" },
  { char: "小玛", cons: 2, weapon: "r1冲浪", element: "火", dps: 89722, note: "压到34.5词，提练度可10.1w", driver: "Hikari零酱" },
  { char: "小玛", cons: 2, weapon: "r1冲浪", element: "火", dps: 101295, note: "39.7词", driver: "-浅逅-" },
  { char: "小玛", cons: 2, weapon: "r1冲浪", element: "火", dps: 106578, note: "100级", driver: "那菈鲨鲨" },
  { char: "小玛", cons: 2, weapon: "r1冲浪", element: "火", dps: 119601, note: "100级", driver: "源初之结赛事" },
  { char: "小玛", cons: 0, weapon: "r5木棉", element: "火", dps: 57355, note: "词条模拟0+1", driver: "小黑子没树枝苏珊" },
  { char: "小玛", cons: 1, weapon: "r1冲浪", element: "火", dps: 84697, note: "95级，20爆伤换10暴击", driver: "栗山未来Falsefuture" },
  { char: "小玛", cons: 2, weapon: "r1冲浪", element: "火", dps: 88827, note: "", driver: "狂三ksks" },
  { char: "小玛", cons: 1, weapon: "r1冲浪", element: "火", dps: 81454, note: "", driver: "无想的狐狸" },
  { char: "小玛", cons: 2, weapon: "r1冲浪", element: "火", dps: 113149, note: "95级，90级等效10.9w", driver: "マラニー" },
  { char: "烟绯", cons: 4, weapon: "r1四风", element: "冰", dps: 29823, note: "", driver: "快乐的小豌豌" },
  { char: "烟绯", cons: 6, weapon: "r1四风", element: "冰", dps: 33455, note: "", driver: "o烟知绯福o" },
  { char: "兹白", cons: 3, weapon: "r5锻造", element: "水", dps: 79541, note: "模拟满辉", driver: "那菈鲨鲨" },
  { char: "小玛", cons: 3, weapon: "r1冲浪", element: "火", dps: 93849, note: "", driver: "杜林宝宝杜子饿" },
  { char: "菲林斯", cons: 3, weapon: "r1荒城", element: "水", dps: 115938, note: "模拟满辉", driver: "Sakura--上杉绘梨衣" },
  { char: "小玛", cons: 6, weapon: "r5冲浪", element: "火", dps: 235832, note: "100级", driver: "栗悟饭-龟派功等联合投稿" },
  { char: "迪卢克", cons: 6, weapon: "r1千阳", element: "冰", dps: 49071, note: "95级，随缘登龙", driver: "纯熠--" },
  { char: "木偶", cons: 1, weapon: "r1超越", element: "雷", dps: 88724, note: "", driver: "梅菜扣肉q" },
  { char: "木偶", cons: 1, weapon: "r1千阳", element: "雷", dps: 77319, note: "", driver: "迷你世界皇帝123" },
  { char: "龙王", cons: 2, weapon: "r1大典", element: "火", dps: 71700, note: "", driver: "雪落棋枰" },
  { char: "龙王", cons: 3, weapon: "r1大典", element: "火", dps: 96648, note: "等效21龙8.2w，等效满天赋31龙12.6w", driver: "克营这回永驻" }
];
