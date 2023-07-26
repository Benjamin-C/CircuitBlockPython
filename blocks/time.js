Blockly.Blocks['time_sleep'] = {
    init: function() {
        this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Wait for");
        this.appendDummyInput()
        .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['time_sleep'] = function(block, generator) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var value_time = generator.valueToCode(block, 'TIME', python.Order.ATOMIC);
    var code = 'time.sleep(' + value_time + ')\n';
    return code;
};

Blockly.Blocks['time_monotonic'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Get the current system uptime");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['time_monotonic'] = function(block, generator) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'time.monotonic()';
    return [code, Blockly.python.ORDER_ATOMIC];
};