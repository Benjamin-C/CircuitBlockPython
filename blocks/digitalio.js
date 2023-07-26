Blockly.Blocks['digitalio_init'] = {
    init: function() {
        this.appendValueInput("BOARDPIN")
        .setCheck("board_type_digitalpin")
        .appendField("Setup");
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("as digital IO called");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_init'] = function(block, generator) {
    Blockly.Python.definitions_['import_digitalio'] = 'import digitalio';
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_boardpin = generator.valueToCode(block, 'BOARDPIN', python.Order.ATOMIC);
    // TODO: Assemble python into code variable.
    var code = value_pin + " = digitalio.DigitalInOut(" + value_boardpin + ")\n";
    return code;
};

Blockly.Blocks['digitalio_readval'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("The value on Digital IO");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(230);
        this.setTooltip("Returns a boolean of state");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_readval'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var code = value_pin + ".value";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['digitalio_setval'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("Set Digital IO");
        this.appendValueInput("VAL")
        .setCheck("Boolean")
        .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Sets a digital value. Takes a boolean");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_setval'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_val = generator.valueToCode(block, 'VAL', python.Order.ATOMIC);
    var code = value_pin + '.value = ' + value_val + '\n';
    return code;
};

Blockly.Blocks['digitalio_outputlevel'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Output Level")
        .appendField(new Blockly.FieldDropdown([["High","True"], ["Low","False"]]), "STATE");
        this.setOutput(true, "Boolean");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_outputlevel'] = function(block, generator) {
    var dropdown_state = block.getFieldValue('STATE');
    var code = dropdown_state;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['digitalio_pindir'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["Input","INPUT"], ["Output","OUTPUT"]]), "DIR");
        this.setOutput(true, "digitalio_type_pindir");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_pindir'] = function(block, generator) {
    var dropdown_dir = block.getFieldValue('DIR');
    var code = "digitalio.Direction." + dropdown_dir
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['digitalio_pinpull'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Pull")
        .appendField(new Blockly.FieldDropdown([["Down","DOWN"], ["Up","UP"]]), "PULL");
        this.setOutput(true, "digitalio_type_pinpull");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_pinpull'] = function(block, generator) {
    var dropdown_pull = block.getFieldValue('PULL');
    var code = "digitalio.Pull." + dropdown_pull
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['digitalio_setdir'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("Set the direction of Digital IO");
        this.appendValueInput("DIR")
        .setCheck("digitalio_type_pindir")
        .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_setdir'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_dir = generator.valueToCode(block, 'DIR', python.Order.ATOMIC);
    var code = `${value_pin}.direction = ${value_dir}\n`;
    return code;
};

Blockly.Blocks['digitalio_setpull'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("Set the pull of Digital IO");
        this.appendValueInput("PULL")
        .setCheck("digitalio_type_pinpull")
        .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['digitalio_setpull'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_pull = generator.valueToCode(block, 'PULL', python.Order.ATOMIC);
    var code = `${value_pin}.pull = ${value_pull}\n`;
    return code;
};