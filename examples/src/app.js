import {inject} from "aurelia-framework";
import {GeneratorRegistry} from "aurelia-generate";

import {User} from "./models/user";
import {StrikeGenerator} from "./generators/strike-generator";

@inject(GeneratorRegistry)
export class App
{
    constructor(generatorRegistry){
        this.user = new User();
        this.generatorRegistry = generatorRegistry;
        this.registerStrikeRegistry();
    }

    registerStrikeRegistry() {
        this.generatorRegistry.addGenerator(new StrikeGenerator());
    }
}