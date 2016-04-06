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

    console.log("normal generator", new _generatorsTemplateGenerator.TemplateGenerator());
    console.log("default generator", new _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator());

    console.log("immediate check", aurelia.container.get(_generatorsTemplateGenerator.TemplateGenerator));
}