# CircuitBlockPython
Program CircuitPython microcontrollers using a block-based programming enviornment.

Check it out at https://orangeben.dev/circuitblockpython/

Built on [Blockly](https://developers.google.com/blockly) by Google

## Supported Microcontrollers
* Raspberry pi pico
## Supported Libraries
* [time](https://docs.python.org/3/library/time.html)
* [digitalio](https://docs.circuitpython.org/en/latest/shared-bindings/digitalio/index.html)
* [analogio](https://docs.circuitpython.org/en/latest/shared-bindings/analogio/index.html)
* [pwmio](https://docs.circuitpython.org/en/latest/shared-bindings/pwmio/index.html) (output only at preset frequency)
* [board](https://docs.circuitpython.org/en/latest/shared-bindings/board/index.html) (digital and analog pin names for Raspberry Pi Pico only)

## Want something that doesn't exist?
You could open an issue and hope I get to it someday, but it's not hard to add new stuff yourself.
* New blocks can be created easily using the [Blockly Developer Tools](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html).
  Add or edit the `blocks/*.js` with your new blocks.
  If you add new files, be sure to also add them in a script tag in `index.html`.
  Also add them somewhere in `toolbox.js` to actually make them available.
* Supporting a different microcontroller would probably only require changing the pin names in `blocks/board.js`
* Change the default setup by createing the desired setup in the editor, saving as JSON, then putting that JSON into `defaultsetup.js`
