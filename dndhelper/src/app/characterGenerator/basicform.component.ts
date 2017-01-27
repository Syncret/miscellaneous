import { Component, OnInit } from '@angular/core';
import {Character} from './character';
import {CharacterService} from './character.service';

@Component({
    // moduleId: module.id, //webpack don't need this
    selector: 'character-basicform',
    templateUrl: 'basicform.component.html'
})
export class BasicformComponent implements OnInit {
    character:Character;
    constructor(private characterService: CharacterService) {
        this.character = characterService;
        // this.character.
        

    }

    ngOnInit() {

    }
}