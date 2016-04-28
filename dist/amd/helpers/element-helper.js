define(["exports", "./name-helper"], function (exports, _nameHelper) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var ElementHelper = (function () {
        function ElementHelper() {
            _classCallCheck(this, ElementHelper);
        }

        _createClass(ElementHelper, null, [{
            key: "createCheckbox",
            value: function createCheckbox(property) {
                var inputElement = document.createElement("input");
                inputElement.type = "checkbox";
                inputElement.setAttribute("checked.bind", property);
                return inputElement;
            }
        }, {
            key: "createInputType",
            value: function createInputType(property, type) {
                var inputElement = document.createElement("input");
                inputElement.type = type;
                inputElement.setAttribute("value.bind", property);
                return inputElement;
            }
        }, {
            key: "createLabelFor",
            value: function createLabelFor(element, property) {
                var labelElement = document.createElement("label");
                labelElement.htmlFor = element.id;
                labelElement.innerHTML = _nameHelper.NameHelper.makeTextualName(property);
                return labelElement;
            }
        }, {
            key: "createContainer",
            value: function createContainer() {
                var containerElement = document.createElement("div");
                return containerElement;
            }
        }]);

        return ElementHelper;
    })();

    exports.ElementHelper = ElementHelper;
});