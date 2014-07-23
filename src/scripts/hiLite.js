
// hide script from old browsers

//detect browser:
var browserName = navigator.appName;
var browserVer = parseInt(navigator.appVersion);
if (browserName === 'Netscape' && browserVer >= 3) {
  browserVer = 1;
} else if (browserName === 'Microsoft Internet Explorer' && browserVer === 4) {
  browserVer = 1;
} else {
  browserVer = 2;
}

//preload images:
if (browserVer === 1) {
  var mhom = new Image(170, 50);
  mhom.src = '/images/mhom.png';
  var mhomx = new Image(170, 50);
  mhomx.src = '/images/mhomx.png';

  var msr = new Image(40, 40);
  msr.src = '/images/msr.png';
  var msrx = new Image(40, 40);
  msrx.src = '/images/msrx.png';
  var mtw = new Image(40, 40);
  mtw.src = '/images/mtw.png';
  var mtwx = new Image(40, 40);
  mtwx.src = '/images/mtwx.png';
  var mfb = new Image(40, 40);
  mfb.src = '/images/mfb.png';
  var mfbx = new Image(40, 40);
  mfbx.src = '/images/mfbx.png';
  var mli = new Image(40, 40);
  mli.src = '/images/mli.png';
  var mlix = new Image(40, 40);
  mlix.src = '/images/mlix.png';
  var myt = new Image(40, 40);
  myt.src = '/images/myt.png';
  var mytx = new Image(40, 40);
  mytx.src = '/images/mytx.png';
  var mis = new Image(40, 40);
  mis.src = '/images/mis.png';
  var misx = new Image(40, 40);
  misx.src = '/images/misx.png';

  var hprt = new Image(300, 300);
  hprt.src = '/images/hprt.png';
  var hprtx = new Image(300, 300);
  hprtx.src = '/images/hprtx.png';
  var hsrv = new Image(300, 300);
  hsrv.src = '/images/hsrv.png';
  var hsrvx = new Image(300, 300);
  hsrvx.src = '/images/hsrvx.png';
  var htob = new Image(300, 300);
  htob.src = '/images/htob.png';
  var htobx = new Image(300, 300);
  htobx.src = '/images/htobx.png';

  var abt0 = new Image(150, 35);
  abt0.src = '/images/abt0.png';
  var abt0x = new Image(150, 35);
  abt0x.src = '/images/abt0x.png';
  var abt1 = new Image(150, 35);
  abt1.src = '/images/abt1.png';
  var abt1x = new Image(150, 35);
  abt1x.src = '/images/abt1x.png';
  var abt2 = new Image(150, 35);
  abt2.src = '/images/abt2.png';
  var abt2x = new Image(150, 35);
  abt2x.src = '/images/abt2x.png';
  var abt3 = new Image(150, 35);
  abt3.src = '/images/abt3.png';
  var abt3x = new Image(150, 35);
  abt3x.src = '/images/abt3x.png';
  var abt4 = new Image(150, 35);
  abt4.src = '/images/abt4.png';
  var abt4x = new Image(150, 35);
  abt4x.src = '/images/abt4x.png';

  var srv0 = new Image(150, 35);
  srv0.src = '/images/srv0.png';
  var srv0x = new Image(150, 35);
  srv0x.src = '/images/srv0x.png';
  var srv1 = new Image(150, 35);
  srv1.src = '/images/srv1.png';
  var srv1x = new Image(150, 35);
  srv1x.src = '/images/srv1x.png';
  var srv2 = new Image(150, 35);
  srv2.src = '/images/srv2.png';
  var srv2x = new Image(150, 35);
  srv2x.src = '/images/srv2x.png';
  var srv3 = new Image(150, 35);
  srv3.src = '/images/srv3.png';
  var srv3x = new Image(150, 35);
  srv3x.src = '/images/srv3x.png';

  var pabk = new Image(300, 200);
  pabk.src = '/images/pabk.png';
  var pabkx = new Image(300, 200);
  pabkx.src = '/images/pabkx.png';
  var plvg = new Image(300, 200);
  plvg.src = '/images/plvg.png';
  var plvgx = new Image(300, 200);
  plvgx.src = '/images/plvgx.png';
  var palm = new Image(300, 200);
  palm.src = '/images/palm.png';
  var palmx = new Image(300, 200);
  palmx.src = '/images/palmx.png';
  var pvbl = new Image(300, 200);
  pvbl.src = '/images/pvbl.png';
  var pvblx = new Image(300, 200);
  pvblx.src = '/images/pvblx.png';
  var pfvc = new Image(300, 200);
  pfvc.src = '/images/pfvc.png';
  var pfvcx = new Image(300, 200);
  pfvcx.src = '/images/pfvcx.png';
  var psld = new Image(300, 200);
  psld.src = '/images/psld.png';
  var psldx = new Image(300, 200);
  psldx.src = '/images/psldx.png';
  var pbvc = new Image(300, 200);
  pbvc.src = '/images/pbvc.png';
  var pbvcx = new Image(300, 200);
  pbvcx.src = '/images/pbvcx.png';
  var pfmc = new Image(300, 200);
  pfmc.src = '/images/pfmc.png';
  var pfmcx = new Image(300, 200);
  pfmcx.src = '/images/pfmcx.png';
  var pisa = new Image(300, 200);
  pisa.src = '/images/pisa.png';
  var pisax = new Image(300, 200);
  pisax.src = '/images/pisax.png';
  var pcgs = new Image(300, 200);
  pcgs.src = '/images/pcgs.png';
  var pcgsx = new Image(300, 200);
  pcgsx.src = '/images/pcgsx.png';
  var pwpv = new Image(300, 200);
  pwpv.src = '/images/pwpv.png';
  var pwpvx = new Image(300, 200);
  pwpvx.src = '/images/pwpvx.png';
  var pvva = new Image(300, 200);
  pvva.src = '/images/pvva.png';
  var pvvax = new Image(300, 200);
  pvvax.src = '/images/pvvax.png';

  var ctw = new Image(40, 40);
  ctw.src = '/images/ctw.png';
  var ctwx = new Image(40, 40);
  ctwx.src = '/images/ctwx.png';
  var cfb = new Image(40, 40);
  cfb.src = '/images/cfb.png';
  var cfbx = new Image(40, 40);
  cfbx.src = '/images/cfbx.png';
  var cli = new Image(40, 40);
  cli.src = '/images/cli.png';
  var clix = new Image(40, 40);
  clix.src = '/images/clix.png';
  var cyt = new Image(40, 40);
  cyt.src = '/images/cyt.png';
  var cytx = new Image(40, 40);
  cytx.src = '/images/cytx.png';
}

//image swapping function:
function hiLite(imgDocID, imgObjName, comment) {
  'use strict';

  if (browserVer === 1) {
    console.log('hiLiting!');
    document.images[imgDocID].src = eval(imgObjName + '.src');
    window.status = comment;
    return true;
  }
}
//end hiding -->