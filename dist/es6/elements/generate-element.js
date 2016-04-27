import {inject, customElement, noView, bindable, ViewSlot, ViewResources, ViewCompiler} from 'aurelia-framework';
import {TemplateGenerator} from "../generators/template-generator"

@customElement('generate')
@noView
@inject(Element, ViewSlot, ViewCompiler, ViewResources, TemplateGenerator)
export class GenerateElement {
  @bindable usingModel;
  @bindable options;

  constructor(element, viewSlot, viewCompiler, viewResources, templateGenerator) {
    this.element = element;
    this.viewSlot = viewSlot;
    this.viewCompiler = viewCompiler;
    this.viewResources = viewResources;
    this.templateGenerator = templateGenerator;
  }

  bind(bindingContext, overrideContext) {
    bindingContext.model = this.usingModel;

    var generatedElements = this.templateGenerator.generateTemplate(this.usingModel, this.options || {});
    var documentFragment = document.createDocumentFragment();
    generatedElements.forEach((generatedElement) => {
      documentFragment.appendChild(generatedElement);
    });

    var viewFactory = this.viewCompiler.compile(documentFragment, this.viewResources);
    var view = viewFactory.create(this.element, this.usingModel);
    this.viewSlot.add(view);
  }
}
