import {TemplateGenerator} from "aurelia-generate";

export class StrikeGenerator extends TemplateGenerator
{
    constructor()
    {
        super();
        this.generatorType = "super-strike";
    }

    createStrikeFor(property, value) {
        var strikeElement = document.createElement("strike");
        strikeElement.setAttribute("id", "another-" + property + "-winner");
        strikeElement.setAttribute("textContent.bind", "model." + property);
        return strikeElement;
    };

    generateTemplate = (model, options) => {
        var generatedElements = [];
        for(var property in model)
        { generatedElements.push(this.createStrikeFor(property, model[property])); }

        return generatedElements;
    }
}