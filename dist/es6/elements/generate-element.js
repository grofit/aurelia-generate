import {inject, customElement, noView, bindable, ViewSlot, ViewResources, ViewCompiler} from 'aurelia-framework';
import {GeneratorRegistry} from "../registry/generator-registry"

@customElement('generate')
@noView
@inject(Element, ViewSlot, ViewCompiler, ViewResources, GeneratorRegistry)
export class GenerateElement {
  @bindable usingModel;
  @bindable type = "default";
  @bindable options;

  constructor(element, viewSlot, viewCompiler, viewResources, generatorRegistry) {
    this.element = element;
    this.viewSlot = viewSlot;
    this.viewCompiler = viewCompiler;
    this.viewResources = viewResources;
    this.generatorRegistry = generatorRegistry;
  }

  bind(bindingContext) {
    bindingContext.model = this.usingModel;

    var templateGenerator = this.generatorRegistry.getGenerator(this.type);
    
    var generatedElements = templateGenerator.generateTemplate(this.usingModel, this.options || {});
    var documentFragment = document.createDocumentFragment();

    generatedElements.forEach((generatedElement) => {
      documentFragment.appendChild(generatedElement);
    });

    var viewFactory = this.viewCompiler.compile(documentFragment, this.viewResources);
    var view = viewFactory.create(this.element, this.usingModel);
    this.viewSlot.add(view);
  }
}
