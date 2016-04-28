export class GeneratorRegistry {
    constructor(){
        this.generators = [];
    }

    addGenerator = (generator) => {
        this.removeGenerator(generator.generatorType);
        this.generators.push(generator);
    }

    getGenerator = (generatorName) => {
        var sanitisedName = generatorName.toLowerCase();
        for(var i=0;i<this.generators.length;i++) {
            if(this.generators[i].generatorType.toLowerCase() == sanitisedName) {
                return this.generators[i];
            }
        }
        throw new Error("No Generator Registered for [" + generatorName + "]");
    }

    removeGenerator = (generatorName) => {
        var matchedIndex = -1;
        var sanitisedName = generatorName.toLowerCase();
        for(var i=0;i<this.generators.length;i++) {
            if(this.generators[i].generatorType.toLowerCase() == sanitisedName) {
                this.generators.splice(matchedIndex, 1);
                return;
            }
        }
    }
}