import {inject, customElement, noView, bindable, ViewSlot, ViewResources, ViewCompiler} from 'aurelia-framework';
import {TemplateGenerator} from "../generators/template-generator"

console.log("type listening for", new TemplateGenerator());

@customElement('generate')
@noView
@inject(Element, ViewSlot, ViewCompiler, ViewResources, TemplateGenerator)
export class GenerateElement {
  @bindable usingModel;

  constructor(element, viewSlot, viewCompiler, viewResources, templateGenerator) {
    this.element = element;
    this.viewSlot = viewSlot;
    this.viewCompiler = viewCompiler;
    this.viewResources = viewResources;
    this.templateGenerator = templateGenerator;
  }

  attached() {
    var generatedElements = this.templateGenerator.generateTemplate(this.usingModel, {});
    var documentFragment = document.createDocumentFragment();
    generatedElements.forEach((generatedElement) => {
      documentFragment.appendChild(generatedElement);
    });

    var viewFactory = this.viewCompiler.compile(documentFragment, this.viewResources);
    var view = viewFactory.create(this.element, this.usingModel);
    this.viewSlot.add(view);
  }
}
