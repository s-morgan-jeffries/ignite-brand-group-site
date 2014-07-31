//var mVisible = false;
//
//var showModal = function () {
//  'use strict';
//
//  var overlay = document.getElementById('overlay');
//  var modal = document.getElementById('modal');
//
//  overlay.style.display = 'block';
//  overlay.style.opacity = '1';
//  modal.style.display = 'block';
//  modal.style.opacity = '1';
//  mVisible = true;
//};
//
//var hideModal = function () {
//  'use strict';
//
//  var overlay = document.getElementById('overlay');
//  var modal   = document.getElementById('modal');
//  overlay.style.display = 'none';
//  overlay.style.opacity = '0';
//  modal.style.display = 'none';
//  modal.style.opacity = '0';
//  mVisible = false;
//};
//
//var reloadCaptcha = function () {
//  'use strict';
//  document.getElementById('captcha').src = 'securimage/securimage_show.php?sid=' + Math.random();
//};
//
//// jshint unused: false
//var startUpload = function () {
//  // jshint unused: true
//  'use strict';
//
//  if (document.getElementById('resume').value === '') {
//    alert('You must upload a resume!');
//    return 0;
//  }
//  if (document.getElementById('cover_letter').value === '') {
//    alert('You must upload a cover_letter!');
//    return 0;
//  }
//
//  document.getElementById('application_form').submit();
//  showModal();
//
//  return true;
//};
//
//// jshint unused: false
//var stopUpload = function (error, errorMsg) {
//  // jshint unused: true
//  'use strict';
//
//  hideModal();
//  if (error === 0) {
//    document.getElementById('apply_here').innerHTML = '<h3>Thank You</h3><br/><p>We have received your application for our Verbal Strategist position. We will review your materials and will contact you if we\'d like to continue forward with your application. A confirmation of your application has been sent to your inbox. If you have any questions or concerns, please drop us a line at <a href="mailto:info@ignitebrandgroup.com">info@ignitebrandgroup.com</a>.</p><br/><p><a href="work-with-us.php">&#8592; Return to main Work With Us webpage</a></p>';
//    scrollTo(0, 0);
//  }
//  else {
//    reloadCaptcha();
//    errorMsg = errorMsg.replace('<br>', '\n');
//    alert(errorMsg);
//  }
//};