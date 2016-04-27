"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _generatorsTemplateGenerator = require("./generators/template-generator");

var _generatorsDefaultTemplateGenerator = require("./generators/default-template-generator");

function configure(aurelia) {
    aurelia.container.registerInstance(_generatorsTemplateGenerator.TemplateGenerator, new _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator());
    aurelia.globalResources("./elements/generate-element");
}