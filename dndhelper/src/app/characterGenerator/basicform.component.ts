import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';
import { ConstantsService } from '../constants.service';

@Component({
    moduleId: module.id,
    selector: 'character-basicform',
    templateUrl: 'basicform.component.html'
})
export class BasicformComponent implements OnInit {
    character:Character;
    constructor(private characterService: CharacterService, private constants: ConstantsService) {
        this.character = characterService;

    }

    ngOnInit() {

    }
}