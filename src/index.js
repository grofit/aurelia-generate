import {GeneratorRegistry} from "./registry/generator-registry"
import {DefaultTemplateGenerator} from "./generators/default-template-generator"

export {GeneratorRegistry} from "./registry/generator-registry";
export {TemplateGenerator} from "./generators/template-generator";
export {DefaultTemplateGenerator} from "./generators/default-template-generator";
export {ElementHelper} from "./helpers/element-helper";
export {NameHelper} from "./helpers/name-helper";
export {TypeHelper} from "./helpers/type-helper";

export function configure(aurelia) {
    var generatorRegistry = new GeneratorRegistry();
    generatorRegistry.addGenerator(new DefaultTemplateGenerator());
    aurelia.container.registerInstance(GeneratorRegistry, generatorRegistry);

    aurelia.globalResources("./elements/generate-element");
}