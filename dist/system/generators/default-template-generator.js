System.register(["./template-generator", "../helpers/element-helper", "../helpers/name-helper", "../helpers/type-helper"], function (_export) {
  "use strict";

  var TemplateGenerator, ElementHelper, NameHelper, TypeHelper, DefaultTemplateGenerator;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_templateGenerator) {
      TemplateGenerator = _templateGenerator.TemplateGenerator;
    }, function (_helpersElementHelper) {
      ElementHelper = _helpersElementHelper.ElementHelper;
    }, function (_helpersNameHelper) {
      NameHelper = _helpersNameHelper.NameHelper;
    }, function (_helpersTypeHelper) {
      TypeHelper = _helpersTypeHelper.TypeHelper;
    }],
    execute: function () {
      DefaultTemplateGenerator = (function (_TemplateGenerator) {
        _inherits(DefaultTemplateGenerator, _TemplateGenerator);

        function DefaultTemplateGenerator() {
          var _this = this;

          _classCallCheck(this, DefaultTemplateGenerator);

          _get(Object.getPrototypeOf(DefaultTemplateGenerator.prototype), "constructor", this).call(this);

          this.createForObservable = function (property, observable, idPrefix, idSuffix, withPlaceholders) {
            var inputElement = this.createInputElement(property, observable);

            if (withPlaceholders && inputElement.type != "checkbox") {
              var placeholderText = NameHelper.makeTextualName(property);
              inputElement.placeholder = placeholderText;
            }

            return inputElement;
          };

          this.generateTemplate = function (model, options) {
            var idPrefix = options.idPrefix || "";
            var idSuffix = options.idSuffix || "";
            var withLabels = TypeHelper.isBoolean(options.withLabels) ? options.withLabels : true;
            var withPlaceholders = TypeHelper.isBoolean(options.withPlaceholders) ? options.withPlaceholders : true;
            var withContainer = TypeHelper.isBoolean(options.withContainer) ? options.withContainer : true;

            var generatedElements = [];
            var inputElement, labelElement, containerElement;

            for (var property in model) {
              if (!TypeHelper.isFunction(model[property])) {
                inputElement = _this.createForObservable(property, model[property], idPrefix, idSuffix, withPlaceholders);
                inputElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-input";

                if (withLabels) {
                  labelElement = ElementHelper.createLabelFor(inputElement, property);
                  labelElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-label";
                }

                if (withContainer) {
                  containerElement = ElementHelper.createContainer();
                  containerElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-container";

                  if (withLabels) {
                    containerElement.appendChild(labelElement);
                  }
                  containerElement.appendChild(inputElement);
                  generatedElements.push(containerElement);
                } else {
                  if (withLabels) {
                    generatedElements.push(labelElement);
                  }
                  generatedElements.push(inputElement);
                }
              }
            }
            return generatedElements;
          };

          this.generatorType = "default";
        }

        _createClass(DefaultTemplateGenerator, [{
          key: "createInputElement",
          value: function createInputElement(property, observable) {
            var observableValue = observable;
            var boundProperty = "model." + property;

            if (TypeHelper.isBoolean(observableValue)) {
              return ElementHelper.createCheckbox(boundProperty);
            }

            if (TypeHelper.isNumber(observableValue)) {
              return ElementHelper.createInputType(boundProperty, "number");
            }

            if (TypeHelper.isDate(observableValue)) {
              return ElementHelper.createInputType(boundProperty, "datetime");
            }

            if (property.toLowerCase().indexOf("password") >= 0) {
              return ElementHelper.createInputType(boundProperty, "password");
            }

            return ElementHelper.createInputType(boundProperty, "text");
          }
        }]);

        return DefaultTemplateGenerator;
      })(TemplateGenerator);

      _export("DefaultTemplateGenerator", DefaultTemplateGenerator);
    }
  };
});