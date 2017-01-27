import { Injectable }    from '@angular/core';
import {Character} from './character';


@Injectable()
export class CharacterService extends Character{
    constructor(){
        super();
    }

}