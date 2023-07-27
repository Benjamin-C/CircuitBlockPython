// Edit this JSON to set up the toolbox on the left where the blocks are stored
var toolbox = {
    "kind":"categoryToolbox",
    "contents":[
    {
        "kind":"category",
        "name":"Logic",
        "categorystyle":"logic_category",
        "contents":[
        { "kind":"block", "type":"controls_if" },
        { "kind":"block", "type":"math_compare" },
        { "kind":"block", "type":"logic_operation" },
        { "kind":"block", "type":"logic_negate" },
        { "kind":"block", "type":"logic_boolean" },
        { "kind":"block", "type":"logic_null" },
        { "kind":"block", "type":"logic_ternary" },
        ]
    },
    {
        "kind":"category",
        "name":"Loops",
        "categorystyle":"loop_category",
        "contents":[
        {
            "kind":"block", "type":"controls_repeat_ext",
            "inputs":{
                "TIMES":{
                    "block":{
                        "type":"math_number",
                        "fields":{ "NUM":10 }
                    }
                }
            }
        },
        { "kind":"block", "type":"controls_whileUntil" },
        { "kind":"block", "type":"controls_for",
            "inputs":{
                "FROM":{
                    "block":{
                        "type":"math_number",
                        "fields":{ "NUM":1, }
                    }
                },
                "TO":{
                    "block":{
                        "type":"math_number",
                        "fields":{ "NUM":10, }
                    }
                },
                "BY":{
                    "block":{
                        "type":"math_number",
                        "fields":{ "NUM":10, }
                    }
                }
            }
        },
        { "kind":"block", "type":"controls_forEach" },
        { "kind":"block", "type":"controls_flow_statements" },
        ]
    },
    {
        "kind":"category",
        "name":"Math",
        "categorystyle":"math_category",
        "contents":[
        { "kind":"block", "type":"math_number", "fields":{ "NUM":0 } },
        { "kind":"block", "type":"math_number", "fields":{ "NUM":1 } },
        { "kind":"block", "type":"math_number", "fields":{ "NUM":123 } },
        { "kind":"block", "type":"math_int" },
        { "kind":"block", "type":"math_operation" },
        { "kind":"block", "type":"math_single" },
        { "kind":"block", "type":"math_trig" },
        { "kind":"block", "type":"math_constant" },
        { "kind":"block", "type":"math_round" },
        { "kind":"block", "type":"math_on_list" },
        { "kind":"block", "type":"math_constrain",
            "inputs":{
                "VALUE":{
                    "block":{ "type":"math_number", "fields":{ "NUM":1, } }
                },
                "LOW":{
                    "block":{ "type":"math_number", "fields":{ "NUM":1, } }
                },
                "HIGH":{
                    "block":{ "type":"math_number", "fields":{ "NUM":100, } }
                }
            }
        },
        { "kind":"block", "type":"math_random_int",
            "inputs":{
                "FROM":{
                    "block":{ "type":"math_number", "fields":{ "NUM":1, } }
                },
                "TO":{
                    "block":{ "type":"math_number", "fields":{ "NUM":100, } }
                }
            }
        },
        { "kind":"block", "type":"math_random_float" },
        ]
    },
    {
        "kind":"category",
        "name":"Text",
        "categorystyle":"text_category",
        "contents":[
        { "kind":"block", "type":"text" },
        { "kind":"block", "type":"format_string",
            "inputs":{
                "FMT":{
                    "block":{ "type":"format_string_control" }
                }
            }
        },
        { "kind":"block", "type":"format_string_control" },
        { "kind":"block", "type":"text_join" },
        { "kind":"block", "type":"text_append" },
        { "kind":"block", "type":"text_length" },
        { "kind":"block", "type":"text_isEmpty" },
        { "kind":"block", "type":"text_indexOf" },
        { "kind":"block", "type":"text_charAt" },
        { "kind":"block", "type":"text_getSubstring" },
        { "kind":"block", "type":"text_changeCase" },
        { "kind":"block", "type":"text_trim" },
        { "kind":"block", "type":"text_print" },
        { "kind":"block", "type":"text_prompt_ext" },
        ]
    },
    {
        "kind":"category",
        "name":"Lists",
        "categorystyle":"list_category",
        "contents":[
        { "kind":"block", "type":"lists_create_with" },
        { "kind":"block", "type":"lists_repeat" },
        { "kind":"block", "type":"lists_length" },
        { "kind":"block", "type":"lists_isEmpty" },
        { "kind":"block", "type":"lists_indexOf" },
        { "kind":"block", "type":"lists_getIndex" },
        { "kind":"block", "type":"lists_setIndex" },
        { "kind":"block", "type":"lists_getSublist" },
        { "kind":"block", "type":"lists_split" },
        { "kind":"block", "type":"lists_sort" },
        ]
    },
    {
        "kind": "sep",
    },
    {
        "kind": "category",
        "name": "Variables",
        "custom": "VARIABLE"
    },
    {
        "kind": "category",
        "name": "Functions",
        "custom": "PROCEDURE"
    },
    {
        "kind":"category",
        "name":"Utils",
        "categorystyle":"text_category",
        "contents":[
        { "kind":"block", "type":"comment" },
        { "kind":"block", "type":"run_python" },
        ]
    },
    { "kind":"block", "type":"comment" },
    {
        "kind": "sep",
    },
    {
        "kind":"category",
        "name":"time",
        "categorystyle":"list_category",
        "contents":[
        { "kind":"block", "type":"time_monotonic" },
        { "kind":"block", "type":"time_sleep",
        "inputs":{
            "TIME":{
                "block":{ "type":"math_number", "fields":{ "NUM":1, } }
            },
        },
    },
        ]
    },
    {
        "kind":"category",
        "name":"digitalio",
        "categorystyle":"list_category",
        "contents":[
        { "kind":"block", "type":"board_digital_pin" },
        { "kind":"block", "type":"digitalio_init",
            "inputs":{
                "BOARDPIN":{
                    "block":{ "type":"board_digital_pin", "fields":{ "PIN":"board.LED", } }
                },
            },
        },
        { "kind":"block", "type":"digitalio_outputlevel" },
        { "kind":"block", "type":"digitalio_setval" ,
            "inputs":{
                "VAL":{
                    "block":{ "type":"digitalio_outputlevel", "fields":{ "STATE":"High", } }
                },
            },
        },
        { "kind":"block", "type":"digitalio_pindir" },
        { "kind":"block", "type":"digitalio_setdir",
            "inputs":{
                "DIR":{
                    "block":{ "type":"digitalio_pindir", "fields":{ "DIR":"Input", } }
                },
            },
        },
        { "kind":"block", "type":"digitalio_pinpull" },
        { "kind":"block", "type":"digitalio_setpull" ,
            "inputs":{
                "PULL":{
                    "block":{ "type":"digitalio_pinpull", "fields":{ "PULL":"DOWN", } }
                },
            },
        },
        { "kind":"block", "type":"digitalio_readval" },
        ]
    },
    {
        "kind":"category",
        "name":"analogio",
        "categorystyle":"list_category",
        "contents":[
        { "kind":"block", "type":"board_analog_pin" },
        { "kind":"block", "type":"analogio_in_init",
            "inputs":{
                "BOARDPIN":{
                    "block":{ "type":"board_analog_pin", "fields":{ "PIN":"board.A0", } }
                },
            },
        },
        { "kind":"block", "type":"analogio_out_init",
            "inputs":{
                "BOARDPIN":{
                    "block":{ "type":"board_analog_pin", "fields":{ "PIN":"board.A0", } }
                },
            },
        },
        { "kind":"block", "type":"analogio_setval",
            "inputs":{
                "VAL":{
                    "block":{ "type":"math_number", "fields":{ "NUM":65535, } }
                },
            },
        },
        { "kind":"block", "type":"analogio_readval" },
        { "kind":"block", "type":"analogio_reference_voltage" },
        ]
    },
    {
        "kind":"category",
        "name":"pwmio",
        "categorystyle":"list_category",
        "contents":[
        { "kind":"block", "type":"board_digital_pin" },
        { "kind":"block", "type":"pwmio_out_init",
            "inputs":{
                "BOARDPIN":{
                    "block":{ "type":"board_digital_pin", "fields":{ "PIN":"board.LED", } }
                },
                "FREQ":{
                    "block":{ "type":"math_number", "fields":{ "NUM":500, } }
                },
            },
        },
        { "kind":"block", "type":"pwmio_setdutycycle",
            "inputs":{
                "VAL":{
                    "block":{ "type":"math_number", "fields":{ "NUM":0x8000, } }
                },
            },
        },
        ]
    }
    ]
}