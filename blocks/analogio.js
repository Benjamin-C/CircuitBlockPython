// https://docs.circuitpython.org/en/latest/shared-bindings/analogio/index.html
Blockly.Blocks['analogio_in_init'] = {
    init: function() {
        this.appendValueInput("BOARDPIN")
        .setCheck("board_type_analogpin")
        .appendField("Setup");
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("as Analog Input called");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['analogio_in_init'] = function(block, generator) {
    Blockly.Python.definitions_['import_analogio'] = 'import analogio';
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_boardpin = generator.valueToCode(block, 'BOARDPIN', python.Order.ATOMIC);
    // TODO: Assemble python into code variable.
    var code = value_pin + " = analogio.AnalogIn(" + value_boardpin + ")\n";
    return code;
};

Blockly.Blocks['analogio_out_init'] = {
    init: function() {
        this.appendValueInput("BOARDPIN")
        .setCheck("board_type_analogpin")
        .appendField("Setup");
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("as an Analog Output called");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['analogio_out_init'] = function(block, generator) {
    Blockly.Python.definitions_['import_analogio'] = 'import analogio';
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_boardpin = generator.valueToCode(block, 'BOARDPIN', python.Order.ATOMIC);
    // TODO: Assemble python into code variable.
    var code = value_pin + " = analogio.AnalogOut(" + value_boardpin + ")\n";
    return code;
};

Blockly.Blocks['analogio_readval'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("The value on AnalogIO");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Reads an analog voltage. Range 0-65535");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['analogio_readval'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var code = value_pin + ".value";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['analogio_setval'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("Set AnalogIO");
        this.appendValueInput("VAL")
        // .setCheck("Number")
        .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Sets an analog voltage. Range 0-65535");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['analogio_setval'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_val = generator.valueToCode(block, 'VAL', python.Order.ATOMIC);
    var code = value_pin + '.value = ' + value_val + '\n';
    return code;
};

Blockly.Blocks['analogio_reference_voltage'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("The AnalogIO reference voltage for AnalogIO");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Gets the reference voltage as a float");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['analogio_reference_voltage'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var code = value_pin + ".reference_voltage";
    return [code, Blockly.Python.ORDER_ATOMIC];
};