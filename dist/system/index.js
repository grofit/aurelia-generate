System.register(["./generators/template-generator", "./generators/default-template-generator"], function (_export) {
    "use strict";

    var TemplateGenerator, DefaultTemplateGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.container.registerInstance(TemplateGenerator, new DefaultTemplateGenerator());

        console.log("normal generator", new TemplateGenerator());
        console.log("default generator", new DefaultTemplateGenerator());

        console.log("immediate check", aurelia.container.get(TemplateGenerator));

        aurelia.globalResources("./elements/generate-element");
    }

    return {
        setters: [function (_generatorsTemplateGenerator) {
            TemplateGenerator = _generatorsTemplateGenerator.TemplateGenerator;
        }, function (_generatorsDefaultTemplateGenerator) {
            DefaultTemplateGenerator = _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator;
        }],
        execute: function () {}
    };
});