---
title: MaskedTextBox
page_title: Configuration, methods and events of Kendo UI MaskedTextBox
description: Code examples and tips how to configure MaskedTextBox widget, use available methods and events.
res_type: api
component: maskedtextbox
---

# kendo.ui.MaskedTextBox

Represents the Kendo UI MaskedTextBox widget. Inherits from [Widget](/api/javascript/ui/widget).

## Configuration

### clearPromptChar `Boolean`*(default: false)*

Specifies whether the widget will replace the prompt characters with spaces on blur. Prompt chars will be shown again on focus (available since Q2 2014 SP1).

#### Example - specify different prompt char

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        clearPromptChar: true
    });
    </script>

### culture `String`*(default: "en-US")*

Specifies the culture info used by the widget.

#### Example - specify German culture internationalization

    <!--
        TODO: Add the kendo.culture.de-DE.min.js file as it is required!

        Here is a sample script tag:
        <script src="https://kendo.cdn.telerik.com/{kendo version}/js/cultures/kendo.culture.de-DE.min.js"></script>

        For more information check this help topic:
        https://docs.telerik.com/kendo-ui/framework/globalization/overview
    -->

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "0,000.00 $",
        culture: "de-DE"
    });
    </script>

### fillMode `String`*(default: "solid")*

Sets a value controlling how the color is applied. Can also be set to the following string values:

- "none"
- "solid"
- "flat"
- "outline"

#### Example - sets the fillMode

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        fillMode: "flat"
    });
    </script>

### label `String|Function|Object` *(default: null)*

Adds a label before the input. If the input has no `id` attribute, a generated `id` will be assigned. The `string` and the `function` parameters are setting the inner HTML of the label.

#### Example - create a label from a string

    <input id="maskedtextbox" />
    <script>
        $("#maskedtextbox").kendoMaskedTextBox({
            label: "First name"
        });
    </script>

The function context (available via the `this` keyword) will be set to the widget instance.

#### Example - create a label from a function

    <input id="maskedtextbox" />
    <script>
        $("#maskedtextbox").kendoMaskedTextBox({
            label: function() {
                return "First name";
            }
        });
    </script>

### label.content `String|Function` *(default: "")*

Sets the inner HTML of the label.

#### Example - create a label from a string

    <input id="maskedtextbox" />
    <script>
        $("#maskedtextbox").kendoMaskedTextBox({
            label: {
                content: "First name"
            }
        });
    </script>

The function context (available via the `this` keyword) will be set to the widget instance.

#### Example - create a label from a function

    <input id="maskedtextbox" />
    <script>
        $("#maskedtextbox").kendoMaskedTextBox({
            label: {
                content: function() {
                    return "First name";
                }
            }
        });
    </script>

### label.floating `Boolean` *(default: false)*

If set to `true`, the widget will be wrapped in a container that will allow the floating label functionality.

> **Important:** The [value](/api/javascript/ui/maskedtextbox/methods/value) method **does not trigger** the `focusout` event of the input.
This could affect the floating label functionality.
You can overcome this behavior by manually invoking the `refresh` method of the Floating Label: `$("#maskedtextbox").data("kendoMaskedTextBox").floatingLabel.refresh();`

#### Example - create a floating label

    <input id="maskedtextbox" />
    <script>
        $("#maskedtextbox").kendoMaskedTextBox({
            label: {
                content: "First name",
                floating: true
            }
        });
    </script>

### mask `String`*(default: "")*

Specifies the input mask. The following mask rules are supported:

- **0** - Digit. Accepts any digit between 0 and 9.
- **9** - Digit or space. Accepts any digit between 0 and 9, plus space.
- **#** - Digit or space. Like **9** rule, but allows also (+) and (-) signs.
- **L** - Letter. Restricts input to letters a-z and A-Z. This rule is equivalent to [a-zA-Z] in regular expressions.
- **?** - Letter or space. Restricts input to letters a-z and A-Z. This rule is equivalent to [a-zA-Z] in regular expressions.
- **&** - Character. Accepts any character. The rule is equivalent to *\S* in regular expressions.
- **C** - Character or space. Accepts any character. The rule is equivalent to *.* in regular expressions.
- **A** - Alphanumeric. Accepts letters and digits only.
- **a** - Alphanumeric or space. Accepts letters, digits and space only.
- **.** - Decimal placeholder. The decimal separator will be gotten from the current culture used by Kendo.
- **,** - Thousands placeholder. The display character will be gotten from the current culture used by Kendo.
- **$** - Currency symbol. The display character will be gotten from the current culture used by Kendo.

#### Example - specify a phone number mask

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "(000) 000-0000"
    });
    </script>

### promptChar `String`*(default: "_")*

Specifies the character used to represent the absence of user input in the widget

#### Example - specify different prompt char

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        promptChar: " " //specify prompt char as empty char
    });
    </script>

> Note that the `promptChar` should not be equal to any of the used mask literals in the mask value.

### rounded `String`*(default: "medium")*

Sets a value controlling the border radius. Can also be set to the following string values:

- "none"
- "small"
- "medium"
- "large"
- "full"

#### Example - sets a border radius

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        size: "large",
        rounded: "large"
    });
    </script>

### rules `Object`

Defines an object of custom mask rules.

#### Example - specify a custom rule as a RegExp instance

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "~000",
        rules: {
            "~": /[+-]/
        }
    });
    </script>

#### Example - specify a custom rule as a function

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "^000^",
        rules: {
            "^": function (char) {
                return char === "^"; //allow ony "^" symbol
            }
        }
    });
    </script>

### size `String`*(default: "medium")*

Sets a value controlling size of the component. Can also be set to the following string values:

- "small"
- "medium"
- "large"
- "none"

#### Example - sets a size

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        size: "large",
        rounded: "large"
    });
    </script>

### unmaskOnPost `Boolean`*(default: false)*

Specifies whether the widget will unmask the input value on form post (available since Q1 2015).

#### Example - unmask value on form post

    <form id='form'>
      <input id="maskedtextbox" name='maskedtb'/>
      <button type='submit'>Post</button>
    </form>

    <div><h4>Result</h4><p id='result'></p></div>
    <script>
      $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        unmaskOnPost: true
      });

      $("#form").on("submit", function(e) {
        e.preventDefault();
        let formData = $("#form").serialize();
        $("#result").html(formData);
      });
    </script>

### value `String`*(default: "")*

Specifies the value of the MaskedTextBox widget.

#### Example - specify value option

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "(000) 000-0000",
        value: "(123) 456-7890"
    });
    </script>

#### Example - specify value option as a HTML attribute

    <input id="maskedtextbox" value="(123) 456-7890" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "(000) 000-0000"
    });
    </script>

## Fields

### options `Object`

An object, which holds the options of the widget.

#### Example - get options of the widget

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox();

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");

    var options = maskedtextbox.options;
    <script>

## Methods

### destroy

Prepares the **MaskedTextBox** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks.

> **Important:** This method does not remove the MaskedTextBox element from DOM.

#### Example

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox();

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");

    // detach events
    maskedtextbox.destroy();
    <script>

### enable

Enables or disables the widget.

#### Parameters

##### enable `Boolean`

If set to `true` the widget will be enabled. If set to `false` the widget will be disabled.

#### Example - enable the widget

    <input id="maskedtextbox" disabled="disabled" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox();

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");
    maskedtextbox.enable(true);
    </script>

### readonly

Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.

> There is a difference between disabled and readonly mode. The value of a disabled widget is **not** posted as part of a `form` whereas the value of a readonly widget is posted.

#### Parameters

##### readonly `Boolean`

If set to `true` the widget will not allow user input. If set to `false` the widget will allow user input.

#### Example - make the widget readonly

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox();

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");
    maskedtextbox.readonly();
    </script>

### raw

Gets the unmasked value of the MaskedTextBox.

#### Returns

`String` The raw value of the widget.

#### Example - get the raw value of the MaskedTextBox

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "(000)-000",
        value: "(123)-456"
    });

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");

    var raw = maskedtextbox.raw(); //the result value will be "123456"

	/* The result can be observed in the DevTools(F12) console of the browser. */
    console.log(raw);
    </script>

### value

Gets or sets the value of the MaskedTextBox.

> **Important:** This method **does not trigger** the `focusout` event of the input.
This could affect the [floating label functionality](/api/javascript/ui/maskedtextbox/configuration/label.floating).
You can overcome this behavior by manually invoking the `refresh` method of the Floating Label: `$("#maskedtextbox").data("kendoMaskedTextBox").floatingLabel.refresh();`

#### Parameters

##### value `String`

The value to set.

#### Returns

`String` The value of the widget.

#### Example - get the value of the MaskedTextBox

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "000000",
        value: "123456"
    });

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");

    var value = maskedtextbox.value();

	/* The result can be observed in the DevTools(F12) console of the browser. */
    console.log(value);
    </script>

#### Example - set the value of the MaskedTextBox

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        mask: "(000) 000-0000"
    });

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");

    var value = maskedtextbox.value();

    maskedtextbox.value("555 123 1234");
    </script>

## Events

### change

Fires when the value is changed

#### Event Data

##### e.sender `kendo.ui.MaskedTextBox`

The widget instance which fired the event.

#### Example - subscribe to the "change" event during initialization

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox({
        change: function() {
            var value = this.value();
	/* The result can be observed in the DevTools(F12) console of the browser. */
            console.log(value); //value is the selected date in the maskedtextbox
        }
    });
    </script>

#### Example - subscribe to the "change" event after initialization

    <input id="maskedtextbox" />
    <script>
    $("#maskedtextbox").kendoMaskedTextBox();

    var maskedtextbox = $("#maskedtextbox").data("kendoMaskedTextBox");

    maskedtextbox.bind("change", function() {
        var value = this.value();
	/* The result can be observed in the DevTools(F12) console of the browser. */
        console.log(value); //value is the selected date in the maskedtextbox
    });
    </script>

