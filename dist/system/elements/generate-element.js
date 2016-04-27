System.register(["aurelia-framework", "../generators/template-generator"], function (_export) {
  "use strict";

  var inject, customElement, noView, bindable, ViewSlot, ViewResources, ViewCompiler, TemplateGenerator, GenerateElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      noView = _aureliaFramework.noView;
      bindable = _aureliaFramework.bindable;
      ViewSlot = _aureliaFramework.ViewSlot;
      ViewResources = _aureliaFramework.ViewResources;
      ViewCompiler = _aureliaFramework.ViewCompiler;
    }, function (_generatorsTemplateGenerator) {
      TemplateGenerator = _generatorsTemplateGenerator.TemplateGenerator;
    }],
    execute: function () {

      console.log("type listening for", new TemplateGenerator());

      GenerateElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(GenerateElement, [{
          key: "usingModel",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function GenerateElement(element, viewSlot, viewCompiler, viewResources, templateGenerator) {
          _classCallCheck(this, _GenerateElement);

          _defineDecoratedPropertyDescriptor(this, "usingModel", _instanceInitializers);

          this.element = element;
          this.viewSlot = viewSlot;
          this.viewCompiler = viewCompiler;
          this.viewResources = viewResources;
          this.templateGenerator = templateGenerator;
        }

        _createDecoratedClass(GenerateElement, [{
          key: "attached",
          value: function attached() {
            var generatedElements = this.templateGenerator.generateTemplate(this.usingModel, {});
            var documentFragment = document.createDocumentFragment();
            generatedElements.forEach(function (generatedElement) {
              documentFragment.appendChild(generatedElement);
            });

            var viewFactory = this.viewCompiler.compile(documentFragment, this.viewResources);
            var view = viewFactory.create(this.element, this.usingModel);
            this.viewSlot.add(view);
          }
        }], null, _instanceInitializers);

        var _GenerateElement = GenerateElement;
        GenerateElement = inject(Element, ViewSlot, ViewCompiler, ViewResources, TemplateGenerator)(GenerateElement) || GenerateElement;
        GenerateElement = noView(GenerateElement) || GenerateElement;
        GenerateElement = customElement('generate')(GenerateElement) || GenerateElement;
        return GenerateElement;
      })();

      _export("GenerateElement", GenerateElement);
    }
  };
});