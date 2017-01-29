import { Injectable }    from '@angular/core';

@Injectable()
export class ConstantsService {
    Race = {
        HUMAN: "人类",
        ELF: "精灵",
        DWARF: "矮人",
        HALFLING: "半身人",
        HALFELF: "半精灵",
        HALFORC: "半兽人",
        GNOME: "侏儒"
    };
    Races=[this.Race.HUMAN,this.Race.ELF,this.Race.DWARF,this.Race.HALFLING,this.Race.HALFELF,this.Race.HALFORC,this.Race.GNOME];

    Class = {
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
    Classes=[this.Class.BARBARIAN,this.Class.BARD,this.Class.CLERIC,this.Class.DRUID,this.Class.FIGHTER,this.Class.MONK,this.Class.PALADIN,this.Class.RANGER,this.Class.ROGUE,this.Class.SORCERER,this.Class.WIZARD]

    Alignment = {
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
    Alignments=[this.Alignment.LAWFUL_GOOD,this.Alignment.NEUTRAL_GOOD,this.Alignment.CHAOTIC_GOOD,this.Alignment.LAWFUL_NEUTRAL,this.Alignment.TRUE_NEUTRAL,
    this.Alignment.CHAOTIC_NEUTRAL,this.Alignment.LAWFUL_EVIL,this.Alignment.NEUTRAL_EVIL,this.Alignment.CHAOTIC_EVIL];

    Religion = {
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

    Religions = [this.Religion.NONE, this.Religion.BACCOB, this.Religion.CORELLON_LARENTHIAN, this.Religion.EHLONNA, this.Religion.ERYTNUL, this.Religion.FARLANGHN,
    this.Religion.GARL_GLITTERGOLD, this.Religion.GRUUMSH, this.Religion.HEIRONEOUS, this.Religion.HEXTOR, this.Religion.KORD, this.Religion.MORADIN, this.Religion.NERULL,
    this.Religion.OBAD_HAI, this.Religion.OLIDAMMARA, this.Religion.PELOR, this.Religion.ST_CUTHBERT, this.Religion.VECNA, this.Religion.WEE_JAS, this.Religion.YONDALLA,
    this.Religion.OTHER_GOD];

    ReligionAlignment = {
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
    ReligionAlignments = [this.ReligionAlignment.NONE, this.ReligionAlignment.BACCOB, this.ReligionAlignment.CORELLON_LARENTHIAN, this.ReligionAlignment.EHLONNA, this.ReligionAlignment.ERYTNUL, this.ReligionAlignment.FARLANGHN,
    this.ReligionAlignment.GARL_GLITTERGOLD, this.ReligionAlignment.GRUUMSH, this.ReligionAlignment.HEIRONEOUS, this.ReligionAlignment.HEXTOR, this.ReligionAlignment.KORD, this.ReligionAlignment.MORADIN, this.ReligionAlignment.NERULL,
    this.ReligionAlignment.OBAD_HAI, this.ReligionAlignment.OLIDAMMARA, this.ReligionAlignment.PELOR, this.ReligionAlignment.ST_CUTHBERT, this.ReligionAlignment.VECNA, this.ReligionAlignment.WEE_JAS, this.ReligionAlignment.YONDALLA,
    this.ReligionAlignment.OTHER_GOD];
}