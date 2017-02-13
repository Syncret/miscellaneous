export class Character{
    name:string;
    race:string;
    initialClass:string;
    alignment:string;
    religion;string;
    otherReligion:string;

    strength=0;
    dexterity=0;
    constitution=0;
    intelligence=0;
    wisdom=0;
    charisma=0;

    calcModifier(value:number):number{
        return Math.floor(value/2-5);
    }

    get strengthModifier(){
        return this.calcModifier(this.strength);
    }
    get dexterityModifier(){
        return this.calcModifier(this.dexterity);
    }
    get constitutionModifier(){
        return this.calcModifier(this.constitution);
    }
    get intelligenceModifier(){
        return this.calcModifier(this.intelligence);
    }
    get wisdomModifier(){
        return this.calcModifier(this.wisdom);
    }
    get charismaModifier(){
        return this.calcModifier(this.charisma);
    }
}
