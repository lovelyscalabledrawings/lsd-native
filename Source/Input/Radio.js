/*
---
 
script: Radio.js
 
description: Simple text input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Input.Radio
 
...
*/

LSD.Native.Input.Radio = new Class({
  Extends: LSD.Native.Input,

  options: {
    command: {
      type: 'radio'
    },
    events: {
      _checkbox: {
        self: {
          'click': 'check',
          'build': function() {
            if (this.element.checked) this.click();
            this.element.addListener('click', this.click.bind(this));
          },
          'check': function() {
            this.element.checked = true;
          },
          'uncheck': function() {
            this.element.checked = false;
          }
        }
      }
    }
  }
});

LSD.Native.Input.Radio.prototype.addState('checked');