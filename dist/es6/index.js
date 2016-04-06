import {TemplateGenerator} from "./generators/template-generator"
import {DefaultTemplateGenerator} from "./generators/default-template-generator"

export function configure(aurelia) {
    aurelia.container.registerInstance(TemplateGenerator, new DefaultTemplateGenerator());
    aurelia.globalResources("./elements/generate-element");

    console.log("normal generator", new TemplateGenerator());
    console.log("default generator", new DefaultTemplateGenerator());

    console.log("immediate check", aurelia.container.get(TemplateGenerator));
}