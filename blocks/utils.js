// Comment your code!
Blockly.Blocks['comment'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("#")
        .appendField(new Blockly.FieldTextInput(""), "TEXT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Adds a comment in the code");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['comment'] = function(block, generator) {
    var text_text = block.getFieldValue('TEXT');
    var code = "# " + text_text + '\n';
    return code;
};

// Formats a variable using a format string
Blockly.Blocks['format_string'] = {
    init: function() {
        this.appendValueInput("VAR")
        .setCheck(null)
        .appendField("Format");
        this.appendValueInput("FMT")
        .setCheck("format_string_str")
        .appendField("using");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['format_string'] = function(block, generator) {
    var value_var = generator.valueToCode(block, 'VAR', python.Order.ATOMIC);
    var value_fmt = generator.valueToCode(block, 'FMT', python.Order.ATOMIC);
    // TODO: Assemble python into code variable.
    var code = 'f"{' + value_var + ':' + value_fmt + '}"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// The format part of a format string
Blockly.Blocks['format_string_control'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("format")
        .appendField(new Blockly.FieldTextInput(".3f"), "FMT");
        this.setOutput(true, "format_string_str");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['format_string_control'] = function(block, generator) {
    var text_fmt = block.getFieldValue('FMT');
    var code = text_fmt;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Run a line of python directly
Blockly.Blocks['run_python'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Run Python line")
        .appendField(new Blockly.FieldTextInput("print(\"Hello world!\")"), "LINE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['run_python'] = function(block, generator) {
    var code = block.getFieldValue('LINE') + '\n';
    return code;
};