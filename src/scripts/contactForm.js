// jshint unused: false
(function ($) {
  'use strict';

//  var useAjax = true;

  $(function () {
    // Serialize form to an object
    $.fn.serializeObject = function () {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
        } else {
          o[this.name] = this.value || '';
        }
      });
      return o;
    };

    // Validate the name field
    var validateName = function ($form) {
      var name = $form.serializeObject().name,
        err;
      if (!((typeof name === 'string') && name.length)) {
        err = 'Name must not be blank';
      }
      console.log(err);
      return err;
    };

    // Validate the email field
    var validateEmail = function ($form) {
      var email = $form.serializeObject()._replyto,
        err;
      if (!((typeof email === 'string') && email.length)) {
        err = 'Email must not be blank';
      }
      console.log(err);
      return err;
    };

    // Validate the phone field
    var validatePhone = function ($form) {
      var phone = $form.serializeObject().phone,
        err;
      if (!((typeof phone === 'string') && phone.length)) {
        err = 'Phone must not be blank';
      }
      console.log(err);
      return err;
    };

    // Validate the form
    var validateForm = function ($form) {
      var nameError = validateName($form),
        emailError = validateEmail($form),
        phoneError = validatePhone($form),
        errors;

      if (nameError) {
        errors = errors || {};
        errors.name = nameError;
      }
      if (emailError) {
        errors = errors || {};
        errors.email = emailError;
      }
      if (phoneError) {
        errors = errors || {};
        errors.phone = phoneError;
      }
      return errors;
    };

    // Set the error on a single field
    var setErrorOnField = function ($form, fieldName, errMsg) {
      var $field = $form.find('[name="' + fieldName + '"]'),
        errHtml = '<small class="error">' + errMsg + '</small>';
      $field.after(errHtml);
    };

    // Set all errors
    var setFormErrors = function ($form, errors) {
      $.each(errors, function (fieldName, errMsg) {
        setErrorOnField($form, fieldName, errMsg);
      });
    };

    // Grab the elements
    var $contactForm = $('#contact-us');

    // The submit handler
    var submitHandler = function (e) {
      // Get a jQuerified reference to the current object
      var $this = $(this);
      // Stop the default action for the event (submission)
      e.preventDefault();
      // Check the form for errors
      var formErrors = validateForm($this);
      // If there are errors, set those on the form
      if (formErrors) {
        // If there are any form errors, set them on the form
        setFormErrors($this, formErrors);
      } else {
        // If there are no errors, we submit the form. Currently, this is built under the assumption that we'll be
        // submitting the form via a POST request. The logic for Ajax would be a little different, but Brace doesn't
        // currently accept Ajax requests.
        // Remove the event handler. We can't just use one to attach the handler, since we only want to detach it if
        // there aren't any errors. If we don't do this, we get an infinite loop.
        $this.off('submit', submitHandler);
        // Now just continue with the form submission
        $this.submit();
      }
    };

    // Attach the event handler
    $contactForm.on('submit', submitHandler);

  });
}(jQuery));