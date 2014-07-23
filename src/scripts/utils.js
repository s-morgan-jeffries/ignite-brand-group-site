function validate() {
  'use strict';

  if (document.getElementById('name').value === '') {
    alert('Name is required!');
    return false;
  } else if (document.getElementById('email').value === '') {
    alert('Email is required');
    return false;
  } else if (document.getElementById('phone').value === '') {
    alert('Phone is required!');
    return false;
  } else {
    document.getElementById('contact-us').submit();
  }
}

function setFormWidth() {
  'use strict';

  if (window.innerWidth <= 500) {
    //For form sheet modal
    document.getElementById('form_table').height = window.innerWidth;
  } // ... etc..
}

// Set up facebox
(function ($) {
  'use strict';

  $('a[rel*=facebox]').facebox({
    loadingImage : '/bower_components/facebox/src/loading.gif',
    closeImage   : '/bower_components/facebox/src/closelabel.png'
  });
}(jQuery));


function updatePage($page) {
  'use strict';

  document.getElementById('page').value = $page;
}

function doIt($pageIncrement) {
  'use strict';

  var tx = jQuery.noConflict();
  var $page = document.getElementById('page').value * 1.0 + $pageIncrement;

  tx.ajax({
    url     : 'search_res.php?page=' + $page,
    type    : 'POST',
    data    : tx('#search_form').serialize(),
    success : function (data) {
      tx('#search_result').html('<h1>' + data + '</h1>');
      updatePage($page);
    },
    error   : function (xhr, err) {
      alert('Error :: Service not available right now!');
    }
  });
  return false;
}

function resetPage() {
  'use strict';

  document.getElementById('page').value = 0;
}