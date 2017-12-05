'use strict';

function enumAllSymbols(obj) {
  /* istanbul ignore if */
  if (typeof Symbol !== 'function') {
    return [];
  }

  switch (typeof obj) {
    case 'object': {
      obj = obj || {};
      break;
    }
    case 'function': {
      break;
    }
    default: {
      return [];
    }
  }

  var ret = [];
  while (obj) {
    var symbols = Object.getOwnPropertySymbols(obj);
    for (var i = symbols.length - 1; i >= 0; i--) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, symbols[i]);
      if (!descriptor.enumerable) {
        symbols.splice(i, 1);
      }
    }
    ret = ret.concat(symbols);

    obj = Object.getPrototypeOf(obj);
  }
  return ret;
}

module.exports = enumAllSymbols;
