'use strict';

module.exports.register = function (Handlebars)  {
  Handlebars.registerHelper('withProp', function (obj, propName, options)  {
    return options.fn(obj[propName]);
  });
};