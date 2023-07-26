Blockly.Blocks['pwmio_out_init'] = {
    init: function() {
        this.appendValueInput("BOARDPIN")
        .setCheck("board_type_digitalpin")
        .appendField("Setup");
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("as a PWM Output called");
        this.appendValueInput("FREQ")
        .setCheck(null)
        .appendField("at a frequency of");
        this.appendDummyInput()
        .appendField("Hz");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['pwmio_out_init'] = function(block, generator) {
    Blockly.Python.definitions_['import_pwmio'] = 'import pwmio';
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_freq = generator.valueToCode(block, 'FREQ', python.Order.ATOMIC);
    var value_boardpin = generator.valueToCode(block, 'BOARDPIN', python.Order.ATOMIC);
    var code = value_pin + " = pwmio.PWMOut(" + value_boardpin + ", frequency=" + value_freq + ")\n";
    return code;
};

Blockly.Blocks['pwmio_setdutycycle'] = {
    init: function() {
        this.appendValueInput("PIN")
        .setCheck(null)
        .appendField("Set the duty cycle of PWM");
        this.appendValueInput("VAL")
        // .setCheck("Number")
        .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Sets the duty cycle of the PWM output. Range: 0-65535");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['pwmio_setdutycycle'] = function(block, generator) {
    var value_pin = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var value_val = generator.valueToCode(block, 'VAL', python.Order.ATOMIC);
    var code = value_pin + '.duty_cycle = ' + value_val + '\n';
    return code;
};