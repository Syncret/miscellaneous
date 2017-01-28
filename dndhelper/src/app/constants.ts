export module Constants {
    export var Race = {
        HUMAN: "人类",
        ELF: "精灵",
        DWARF: "矮人",
        HALFLING: "半身人",
        HALFELF: "半精灵",
        HALFORC: "半兽人",
        GNOME: "侏儒"
    };
    export var Races=[Race.HUMAN,Race.ELF,Race.DWARF,Race.HALFLING,Race.HALFELF,Race.HALFORC,Race.GNOME];

    export var Class = {
        BARBARIAN: "野蛮人",
        BARD: "吟游诗人",
        CLERIC: "牧师",
        DRUID: "德鲁伊",
        FIGHTER: "战士",
        MONK: "武僧",
        PALADIN: "圣战士",
        RANGER: "巡林人",
        ROGUE: "游荡者",
        SORCERER: "术士",
        WIZARD: "法师",
    };
    export var Classes=[Class.BARBARIAN,Class.BARD,Class.CLERIC,Class.DRUID,Class.FIGHTER,Class.MONK,Class.PALADIN,Class.RANGER,Class.ROGUE,Class.SORCERER,Class.WIZARD]

    export var Alignment = {
        LAWFUL_GOOD: "守序善良",
        NEUTRAL_GOOD: "中立善良",
        CHAOTIC_GOOD: "混乱善良",
        LAWFUL_NEUTRAL: "守序中立",
        TRUE_NEUTRAL: "绝对中立",
        CHAOTIC_NEUTRAL: "混乱中立",
        LAWFUL_EVIL: "守序邪恶",
        NEUTRAL_EVIL: "中立邪恶",
        CHAOTIC_EVIL: "混乱邪恶",
    };
    export var Alignments=[Alignment.LAWFUL_GOOD,Alignment.NEUTRAL_GOOD,Alignment.CHAOTIC_GOOD,Alignment.LAWFUL_NEUTRAL,Alignment.TRUE_NEUTRAL,
    Alignment.CHAOTIC_NEUTRAL,Alignment.LAWFUL_EVIL,Alignment.NEUTRAL_EVIL,Alignment.CHAOTIC_EVIL];

    export var Religion = {
        NONE: "无",
        BACCOB: "博卡布",
        CORELLON_LARENTHIAN: "柯瑞隆‧拉瑞斯安",
        EHLONNA: "艾罗娜",
        ERYTNUL: "厄瑞斯努",
        FARLANGHN: "法兰恩",
        GARL_GLITTERGOLD: "加尔闪金",
        GRUUMSH: "格乌什",
        HEIRONEOUS: "海若尼斯",
        HEXTOR: "海克斯托",
        KORD: "寇德",
        MORADIN: "摩拉丁",
        NERULL: "奈落",
        OBAD_HAI: "欧拜‧亥",
        OLIDAMMARA: "渥利达马拉",
        PELOR: "培罗",
        ST_CUTHBERT: "圣‧库斯伯特",
        VECNA: "威可那",
        WEE_JAS: "维婕丝",
        YONDALLA: "悠达拉",
        OTHER_GOD: "其他",
    };

    export var Religions = [Religion.NONE, Religion.BACCOB, Religion.CORELLON_LARENTHIAN, Religion.EHLONNA, Religion.ERYTNUL, Religion.FARLANGHN,
    Religion.GARL_GLITTERGOLD, Religion.GRUUMSH, Religion.HEIRONEOUS, Religion.HEXTOR, Religion.KORD, Religion.MORADIN, Religion.NERULL,
    Religion.OBAD_HAI, Religion.OLIDAMMARA, Religion.PELOR, Religion.ST_CUTHBERT, Religion.VECNA, Religion.WEE_JAS, Religion.YONDALLA,
    Religion.OTHER_GOD];

    export var ReligionAlignment = {
        NONE: "无",
        BACCOB: "魔法之神(绝对中立)",
        CORELLON_LARENTHIAN: "精灵之神(混乱善良)",
        EHLONNA: "森林女神(中立善良)",
        ERYTNUL: "杀戮之神(混乱邪恶)",
        FARLANGHN: "道路之神(绝对中立)",
        GARL_GLITTERGOLD: "侏儒之神(中立善良)",
        GRUUMSH: "兽人之神(混乱邪恶)",
        HEIRONEOUS: "勇者之神(守序善良)",
        HEXTOR: "暴虐之王(守序邪恶)",
        KORD: "力量之神(混乱善良)",
        MORADIN: "矮人之神(守序善良)",
        NERULL: "死亡之神(中立邪恶)",
        OBAD_HAI: "自然之神(绝对中立)",
        OLIDAMMARA: "游荡者之神(混乱中立)",
        PELOR: "太阳神(中立善良)",
        ST_CUTHBERT: "惩罚之神(守序中立)",
        VECNA: "私秘之神(中立邪恶)",
        WEE_JAS: "死亡与魔法女神(守序中立)",
        YONDALLA: "半身人女神(守序善良)",
        OTHER_GOD: "其他",
    };
    export var ReligionAlignments = [ReligionAlignment.NONE, ReligionAlignment.BACCOB, ReligionAlignment.CORELLON_LARENTHIAN, ReligionAlignment.EHLONNA, ReligionAlignment.ERYTNUL, ReligionAlignment.FARLANGHN,
    ReligionAlignment.GARL_GLITTERGOLD, ReligionAlignment.GRUUMSH, ReligionAlignment.HEIRONEOUS, ReligionAlignment.HEXTOR, ReligionAlignment.KORD, ReligionAlignment.MORADIN, ReligionAlignment.NERULL,
    ReligionAlignment.OBAD_HAI, ReligionAlignment.OLIDAMMARA, ReligionAlignment.PELOR, ReligionAlignment.ST_CUTHBERT, ReligionAlignment.VECNA, ReligionAlignment.WEE_JAS, ReligionAlignment.YONDALLA,
    ReligionAlignment.OTHER_GOD];
}