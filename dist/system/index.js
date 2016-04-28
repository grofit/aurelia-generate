System.register(["./registry/generator-registry", "./generators/default-template-generator", "./generators/template-generator", "./helpers/element-helper", "./helpers/name-helper", "./helpers/type-helper"], function (_export) {
    "use strict";

    var GeneratorRegistry, DefaultTemplateGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        var generatorRegistry = new GeneratorRegistry();
        generatorRegistry.addGenerator(new DefaultTemplateGenerator());
        aurelia.container.registerInstance(GeneratorRegistry, generatorRegistry);

        aurelia.globalResources("./elements/generate-element");
    }

    return {
        setters: [function (_registryGeneratorRegistry) {
            GeneratorRegistry = _registryGeneratorRegistry.GeneratorRegistry;

            _export("GeneratorRegistry", _registryGeneratorRegistry.GeneratorRegistry);
        }, function (_generatorsDefaultTemplateGenerator) {
            DefaultTemplateGenerator = _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator;

            _export("DefaultTemplateGenerator", _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator);
        }, function (_generatorsTemplateGenerator) {
            _export("TemplateGenerator", _generatorsTemplateGenerator.TemplateGenerator);
        }, function (_helpersElementHelper) {
            _export("ElementHelper", _helpersElementHelper.ElementHelper);
        }, function (_helpersNameHelper) {
            _export("NameHelper", _helpersNameHelper.NameHelper);
        }, function (_helpersTypeHelper) {
            _export("TypeHelper", _helpersTypeHelper.TypeHelper);
        }],
        execute: function () {}
    };
});