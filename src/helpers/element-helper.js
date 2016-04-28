import {NameHelper} from "./name-helper";

export class ElementHelper
{
    static createCheckbox(property) {
        var inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.setAttribute("checked.bind", property);
        return inputElement;
    };

    static createInputType(property, type) {
        var inputElement = document.createElement("input");
        inputElement.type = type;
        inputElement.setAttribute("value.bind", property);
        return inputElement;
    };

    static createLabelFor(element, property) {
        var labelElement = document.createElement("label");
        labelElement.htmlFor = element.id;
        labelElement.innerHTML = NameHelper.makeTextualName(property);
        return labelElement;
    };

    static createContainer() {
        var containerElement = document.createElement("div");
        return containerElement;
    };
}