import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';
import { Constants } from '../constants';

@Component({
    // moduleId: module.id, //webpack don't need this
    selector: 'character-basicform',
    templateUrl: 'basicform.component.html'
})
export class BasicformComponent implements OnInit {
    character:Character;
    raceOptions:string[];
    classOptions:string[];
    alignmentOptions:string[];
    religionOptions:string[];
    constructor(private characterService: CharacterService) {
        this.character = characterService;
        this.raceOptions=Constants.Races;
        this.classOptions=Constants.Classes;
        this.alignmentOptions=Constants.Alignments;
        this.religionOptions=Constants.Religions.map((value,index)=>`${value} -- ${Constants.ReligionAlignments[index]}`);

        
        

    }

    ngOnInit() {

    }
}