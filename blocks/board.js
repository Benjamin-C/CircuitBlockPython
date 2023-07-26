// https://docs.circuitpython.org/en/latest/shared-bindings/board/index.html
// Currently set up for Raspberry Pi Pico
 
Blockly.Blocks['board_digital_pin'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([
            ["board.LED","board.LED"],
            ["board.GP0","board.GP0"],
            ["board.GP1","board.GP1"], 
            ["board.GP2","board.GP2"], 
            ["board.GP3","board.GP3"], 
            ["board.GP4","board.GP4"], 
            ["board.GP5","board.GP5"], 
            ["board.GP6","board.GP6"], 
            ["board.GP7","board.GP7"], 
            ["board.GP8","board.GP8"], 
            ["board.GP9","board.GP9"], 
            ["board.GP10","board.GP10"], 
            ["board.GP11","board.GP11"], 
            ["board.GP12","board.GP12"], 
            ["board.GP13","board.GP13"], 
            ["board.GP14","board.GP14"], 
            ["board.GP15","board.GP15"], 
            ["board.GP16","board.GP16"], 
            ["board.GP17","board.GP17"], 
            ["board.GP18","board.GP18"], 
            ["board.GP19","board.GP19"], 
            ["board.GP20","board.GP20"], 
            ["board.GP21","board.GP21"], 
            ["board.GP22","board.GP22"], 
            ["board.GP23","board.GP26"], 
            ["board.GP24","board.GP27"], 
            ["board.GP25","board.GP28"]]), "PIN");
        this.setOutput(true, "board_type_digitalpin");
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['board_digital_pin'] = function(block, generator) {
    Blockly.Python.definitions_['import_board'] = 'import board';
    var dropdown_name = block.getFieldValue('PIN');
    var value_name = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var code = dropdown_name;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['board_analog_pin'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([
            ["board.A0","board.A0"],
            ["board.A1","board.A1"],
            ["board.A2","board.A2"],
            ["board.A3","board.A3"]]), "PIN");
        this.setOutput(true, "board_type_analogpin");
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['board_analog_pin'] = function(block, generator) {
    Blockly.Python.definitions_['import_board'] = 'import board';
    var dropdown_name = block.getFieldValue('PIN');
    var value_name = generator.valueToCode(block, 'PIN', python.Order.ATOMIC);
    var code = dropdown_name;
    return [code, Blockly.Python.ORDER_ATOMIC];
};