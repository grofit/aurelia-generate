# Aurelia-Generate

A binding to automagically create templates based upon your view models.

This may sound like madness but its more to be used as a conventions based way to avoid the boilerplate of making lots of mundane templates for your POCO style view models.

## WHY!?!?

First of all if you do not use composition style view models, which look something like this:

```
export class User
{
   Name = "";
   Age = 0;
   IsActive = true;
}

export class SomeVM()
{
  activeUser = new User(); // or get it via IoC or whatever
}

```

Then you may not find this as useful, but lets assume you do this or do not care.
 
So anyway in a conventions based approach you will often end up doing lots of boilerplate templates which will just 
contain an input element for each of your VM properties. This may not always be the case, and in some situations 
you will probably still want templates, but for those times you just want to spit out some input fields which represent 
your VM then you are in luck, this is what knockout.generate should do.

## Usage

So the simplest usage would be
```
<generate using-model.bind="ActiveUser"></generate>
```

Which would end up outputting (by default) the content:
```
<input type="text" id="name" value.bind="Name" />
<input type="text" id="age" value.bind="Age" />
<input type="checkbox" id="isactive" checked.bind"IsActive" />
```
The default template generator can also setup id prefixes, suffixes, labels and placeholders like so: (Not fully working in aurelia yet)

```
<generate using-model.bind="ActiveUser" id-prefix.bind="some-prefix" id-suffix.bind="some-suffix" with-labels="true" with-placeholders="true"></generate>
```
There is also the `type` value which can influence which generator is used, and this can all be customised, although this is still a work in progress in aurelia.

```
import {TemplateGenerator} from "aurelia-generate"
aurelia.container.registerInstance(TemplateGenerator, new MyCustomTemplateGenerator());
```

There are a few options you can set

* **using-model** - The vm you wish to generate the markup for (MANDATORY FOR ALL GENERATORS)
* **with-type** - The type of generator your want to use (MANDATORY FOR ALL GENERATORS)

These are specifically for the default generator

* **id-prefix** - The prefix to give an elements id, general format is <prefix>-<name-of-property-as-spinal-case>-<suffix>, defaulted to nothing
* **id-suffix** - The suffix to give an elements id
* **with-labels** - If labels should be generated before the input element, defaults to true
* **with-placeholders** - If placeholders should be generated for the input elements, defaults to true
* **with-container** - If container divs should wrap each input (and possible label), defaults to true

## Customisation

So by default there is a `DefaultTemplateGenerator` which will carry out all the above usage examples and has the associated 
type `default`, however you can add your own template generator classes with custom types then register them and have everything 
resolve for you.

So for example if you wanted to make a template generator which automatically added a label around every input object you could do that 
or add a validation message after it etc. The only criteria is that the custom template generator adheres to:

```
import {TemplateGenerator} from "aurelia-generate"
export class YourCustomTemplateGenerator extends TemplateGenerator
{
    this.generatorType = "name-of-your-type";
    this.generateTemplate = function(model, options) {
        var generatedElements = []; // your DOM elements go in here
        // ... Do your magic
        return generatedElements;
    }
}
```

Not much more too it really...