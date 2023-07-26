Blockly.Blocks['math_operation'] = {
    init: function() {
        this.appendValueInput("A")
        .setCheck(null);
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["/","/"], ["**","**"], ["//","//"], ["%","%"]]), "OP");
        this.appendValueInput("B")
        .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Adds a comment in the code");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['math_operation'] = function(block, generator) {
    var value_a = generator.valueToCode(block, 'A', python.Order.ATOMIC);
    var dropdown_op = block.getFieldValue('OP');
    var value_b = generator.valueToCode(block, 'B', python.Order.ATOMIC);
    var code = value_a + " " + dropdown_op + " " + value_b;
    switch(dropdown_op) {
        case "+": return [code, Blockly.Python.ORDER_ADDITIVE];
        case "-": return [code, Blockly.Python.ORDER_ADDITIVE];
        case "*": return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
        case "/": return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
        case "//": return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
        case "**": return [code, Blockly.Python.ORDER_EXPONENTIATION];
        case "%": return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
    }
    return ["(" + code + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['math_compare'] = {
    init: function() {
        this.appendValueInput("A")
        .setCheck(null);
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            [">",">"], 
            ["<","<"], 
            [">=",">="], 
            ["<=","<="], 
            ["==","=="], 
            ["!=","!="]]), "OP");
        this.appendValueInput("B")
        .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("Adds a comment in the code");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['math_compare'] = function(block, generator) {
    var value_a = generator.valueToCode(block, 'A', python.Order.ATOMIC);
    var dropdown_op = block.getFieldValue('OP');
    var value_b = generator.valueToCode(block, 'B', python.Order.ATOMIC);
    var code = value_a + " " + dropdown_op + " " + value_b;
    return [code, Blockly.Python.ORDER_RELATIONAL];
};
    
Blockly.Blocks['math_int'] = {
    init: function() {
        this.appendValueInput("NUM")
        .setCheck(null)
        .appendField("as int");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

python.pythonGenerator.forBlock['math_int'] = function(block, generator) {
    var value_num = generator.valueToCode(block, 'NUM', python.Order.ATOMIC);
    // TODO: Assemble python into code variable.
    var code = "int(" + value_num + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };