window.ClientSideValidations.validators.local['web_address'] = function(element, options) {
  if (!/^[a-zA-Z0-9]*$/i.test(element.val())) {
    // When the value fails to pass validation you need to return the error message.
    // It can be derived from validator.message
    return options.message;
  }
}