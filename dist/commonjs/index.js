"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _registryGeneratorRegistry = require("./registry/generator-registry");

var _generatorsDefaultTemplateGenerator = require("./generators/default-template-generator");

Object.defineProperty(exports, "GeneratorRegistry", {
    enumerable: true,
    get: function get() {
        return _registryGeneratorRegistry.GeneratorRegistry;
    }
});

var _generatorsTemplateGenerator = require("./generators/template-generator");

Object.defineProperty(exports, "TemplateGenerator", {
    enumerable: true,
    get: function get() {
        return _generatorsTemplateGenerator.TemplateGenerator;
    }
});
Object.defineProperty(exports, "DefaultTemplateGenerator", {
    enumerable: true,
    get: function get() {
        return _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator;
    }
});

var _helpersElementHelper = require("./helpers/element-helper");

Object.defineProperty(exports, "ElementHelper", {
    enumerable: true,
    get: function get() {
        return _helpersElementHelper.ElementHelper;
    }
});

var _helpersNameHelper = require("./helpers/name-helper");

Object.defineProperty(exports, "NameHelper", {
    enumerable: true,
    get: function get() {
        return _helpersNameHelper.NameHelper;
    }
});

var _helpersTypeHelper = require("./helpers/type-helper");

Object.defineProperty(exports, "TypeHelper", {
    enumerable: true,
    get: function get() {
        return _helpersTypeHelper.TypeHelper;
    }
});

function configure(aurelia) {
    var generatorRegistry = new _registryGeneratorRegistry.GeneratorRegistry();
    generatorRegistry.addGenerator(new _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator());
    aurelia.container.registerInstance(_registryGeneratorRegistry.GeneratorRegistry, generatorRegistry);

    aurelia.globalResources("./elements/generate-element");
}