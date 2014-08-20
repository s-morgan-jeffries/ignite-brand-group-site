(function ($) {
  'use strict';
//  console.log('This is happening!');

  // Don't really need to save this as a variable, but I feel like the name makes its role clearer
  var $searchButton = $('a[rel*=facebox]');

  // This calls the jQuery facebox plugin function on the $searchButton element.
  $searchButton
    .facebox({
      loadingImage : '/bower_components/facebox/src/loading.gif',
      closeImage   : '/bower_components/facebox/src/closelabel.png'
    });

  // This function will actually configure Swiftype. It can't be run at page load because the element it's using
  // doesn't exist yet.
  var configureSearch = function () {
    var swiftypeKey = '7tzN3t4DExDi-NZ8Hy1f';
//    console.log('configuring search');

    $('#st-search-input').swiftype({
      engineKey: swiftypeKey
    });
    // set up search
    $('#st-search-input').swiftypeSearch({
      engineKey: swiftypeKey,
      resultContainingElement: '#st-results-container'
    });
  };

  // This is how we attach the event. Not sure how efficient it is attaching a listener to the body like this, but
  // there's no other parent element that exists at this point.
  $('body')
    .one('focus', '#st-search-input', function () {
      configureSearch();
    });
}(jQuery));