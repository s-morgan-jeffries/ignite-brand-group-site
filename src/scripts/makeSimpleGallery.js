/* global simpleGallery: true */
// jshint unused: false

var makeSimpleGallery = function (imageFiles) {
  'use strict';

  var imageArray = [], i, len;

  for (i = 0, len = imageFiles.length; i < len; i++) {
    imageArray.push([imageFiles[i], '', '', '']);
  }

  new simpleGallery({
    wrapperid: 'simplegallery1',
    dimensions: [1000, 500],
    imagearray: imageArray,
    autoplay: [true, 2500, 2],
    persist: false,
    fadeduration: 500,
    oninit: function () {},
    onslide: function (/*curslide, i*/) {}
  });
};