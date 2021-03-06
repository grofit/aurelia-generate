import {TemplateGenerator} from "./template-generator"
import {ElementHelper} from "../helpers/element-helper"
import {NameHelper} from "../helpers/name-helper"
import {TypeHelper} from "../helpers/type-helper"

export class DefaultTemplateGenerator extends TemplateGenerator
{
  constructor()
  {
    super();
    this.generatorType = "default";
  }

  createInputElement(property, observable) {
    var observableValue = observable;
    var boundProperty = "model." + property;

    if(TypeHelper.isBoolean(observableValue))
    { return ElementHelper.createCheckbox(boundProperty); }

    if(TypeHelper.isNumber(observableValue))
    { return ElementHelper.createInputType(boundProperty, "number"); }

    if(TypeHelper.isDate(observableValue))
    { return ElementHelper.createInputType(boundProperty, "datetime")}

    if(property.toLowerCase().indexOf("password") >= 0)
    { return ElementHelper.createInputType(boundProperty, "password"); }

    return ElementHelper.createInputType(boundProperty, "text");
  };

  createForObservable = function(property, observable, idPrefix, idSuffix, withPlaceholders) {
    var inputElement = this.createInputElement(property, observable);

    if(withPlaceholders && inputElement.type != "checkbox") {
      var placeholderText = NameHelper.makeTextualName(property);
      inputElement.placeholder = placeholderText;
    }

    return inputElement;
  };

  generateTemplate = (model, options) => {
    var idPrefix = options.idPrefix || "";
    var idSuffix = options.idSuffix || "";
    var withLabels = TypeHelper.isBoolean(options.withLabels) ? options.withLabels : true;
    var withPlaceholders = TypeHelper.isBoolean(options.withPlaceholders) ? options.withPlaceholders : true;
    var withContainer = TypeHelper.isBoolean(options.withContainer) ? options.withContainer : true;

    var generatedElements = [];
    var inputElement, labelElement, containerElement;

    for(var property in model)
    {
      if(!TypeHelper.isFunction(model[property])) {
        inputElement = this.createForObservable(property, model[property], idPrefix, idSuffix, withPlaceholders);
        inputElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-input";

        if(withLabels) {
          labelElement = ElementHelper.createLabelFor(inputElement, property);
          labelElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-label";
        }

        if(withContainer){
          containerElement = ElementHelper.createContainer();
          containerElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-container";

          if(withLabels) { containerElement.appendChild(labelElement); }
          containerElement.appendChild(inputElement);
          generatedElements.push(containerElement);
        }
        else {
          if(withLabels) { generatedElements.push(labelElement); }
          generatedElements.push(inputElement);
        }
      }
    }
    return generatedElements;
  }
}
