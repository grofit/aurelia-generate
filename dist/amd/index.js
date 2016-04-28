define(["exports", "./registry/generator-registry", "./generators/default-template-generator", "./generators/template-generator", "./helpers/element-helper", "./helpers/name-helper", "./helpers/type-helper"], function (exports, _registryGeneratorRegistry, _generatorsDefaultTemplateGenerator, _generatorsTemplateGenerator, _helpersElementHelper, _helpersNameHelper, _helpersTypeHelper) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    Object.defineProperty(exports, "GeneratorRegistry", {
        enumerable: true,
        get: function get() {
            return _registryGeneratorRegistry.GeneratorRegistry;
        }
    });
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
    Object.defineProperty(exports, "ElementHelper", {
        enumerable: true,
        get: function get() {
            return _helpersElementHelper.ElementHelper;
        }
    });
    Object.defineProperty(exports, "NameHelper", {
        enumerable: true,
        get: function get() {
            return _helpersNameHelper.NameHelper;
        }
    });
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
});