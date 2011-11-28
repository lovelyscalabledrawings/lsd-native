/*
---
 
script: Number.js
 
description: A number input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Input.Number
 
...
*/

LSD.Native.Input.Number = new Class({
  Extends: LSD.Native.Input,
  
  options: {
    attributes: {
      type: 'number'
    }
  },
  
  processValue: function(value) {
    return parseInt(value)
  }

});
