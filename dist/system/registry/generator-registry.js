System.register([], function (_export) {
    "use strict";

    var GeneratorRegistry;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            GeneratorRegistry = function GeneratorRegistry() {
                var _this = this;

                _classCallCheck(this, GeneratorRegistry);

                this.addGenerator = function (generator) {
                    _this.removeGenerator(generator.generatorType);
                    _this.generators.push(generator);
                };

                this.getGenerator = function (generatorName) {
                    var sanitisedName = generatorName.toLowerCase();
                    for (var i = 0; i < _this.generators.length; i++) {
                        if (_this.generators[i].generatorType.toLowerCase() == sanitisedName) {
                            return _this.generators[i];
                        }
                    }
                    throw new Error("No Generator Registered for [" + generatorName + "]");
                };

                this.removeGenerator = function (generatorName) {
                    var matchedIndex = -1;
                    var sanitisedName = generatorName.toLowerCase();
                    for (var i = 0; i < _this.generators.length; i++) {
                        if (_this.generators[i].generatorType.toLowerCase() == sanitisedName) {
                            _this.generators.splice(matchedIndex, 1);
                            return;
                        }
                    }
                };

                this.generators = [];
            };

            _export("GeneratorRegistry", GeneratorRegistry);
        }
    };
});