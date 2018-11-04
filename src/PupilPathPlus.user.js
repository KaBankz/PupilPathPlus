// ==UserScript==
// @name          PupilPath Plus
// @namespace     https://github.com/DeathHackz
// @homepageURL   https://github.com/DeathHackz/PupilPathPlus
// @supportURL    https://github.com/DeathHackz/PupilPathPlus/issues
// @updateURL     https://raw.githubusercontent.com/DeathHackz/PupilPathPlus/master/src/PupilPathPlus.meta.js
// @downloadURL   https://raw.githubusercontent.com/DeathHackz/PupilPathPlus/master/src/PupilPathPlus.user.js
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/fancybox/1.3.4/jquery.fancybox-1.3.4.pack.min.js
// @icon          https://github.com/DeathHackz/PupilPathPlus/raw/master/icon.png
// @icon64        https://github.com/DeathHackz/PupilPathPlus/raw/master/icon.png
// @version       3.2
// @description   This script calculates and converts your average, it also has visual grade changer
// @author        DeathHackz
// @match         https://*.pupilpath.skedula.com/*
// @grant         GM_xmlhttpRequest
// @run-at        document-body
// ==/UserScript==

"use strict";
var version = "3.2";

$("head").append(
  '<link ' +
  'href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" ' +
  'rel="stylesheet" type="text/css">'
);

$("head").append(
  '<link ' +
  'href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/1.3.4/jquery.fancybox-1.3.4.css" ' +
  'rel="stylesheet" type="text/css">'
);

var url = "https://raw.githubusercontent.com/DeathHackz/PupilPathPlus/master/src/PupilPathPlus.meta.js";
$.get(url, function (data) {
  if (data.indexOf("// @version       " + version) != -1) {} else {
    var pk = data.split("\n");
    var results = pk.filter(function (value) {
      return value.indexOf("// @version") >= 0;
    });
    var ok = results[0].split(" ");
    var hh = ok.length - 1;
    var newversion = ok[hh];
    if (newversion > version) {
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: true,
        onclick: function () {
          window.open(
            "https://raw.githubusercontent.com/DeathHackz/PupilPathPlus/master/src/PupilPathPlus.user.js"
          );
        },
        showDuration: "300",
        hideDuration: "1000",
        timeOut: 0,
        extendedTimeOut: 0,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
        tapToDismiss: false
      };
      toastr.info("Click Here to Update Now!", "PupilPath Plus v" + newversion + " has been released!");
    }
  }
}, "text");

if (localStorage.length === 0) {
  localStorage.setItem('PupilPath Plus Version', "v" + version);
}

if (localStorage.getItem("PupilPath Plus Version") !== "v" + version) {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: function () {
      window.open(
        "https://github.com/DeathHackz/PupilPathPlus/blob/master/CHANGELOG.md"
      );
    },
    showDuration: "300",
    hideDuration: "1000",
    timeOut: 0,
    extendedTimeOut: 0,
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    tapToDismiss: false
  };
  toastr.info("View Changelog", "PupilPath Plus Updated to v" + version);
  localStorage.setItem('PupilPath Plus Version', "v" + version);
}

function getAverage() {
  if ($('#progress-card').length === 1) {

    if ($('#totalaverage').length === 0) {
      $('.information').prepend("<a href='#ginfo' id='averagep' style='color: #585b66;position: static;float: right;padding-top: 10px;padding-right: 10px;'>Total Average: <img id='avgimg' src='' /><span id='totalaverage'></span></a>");
    }
    $("a#averagep").fancybox({
      'type': 'inline',
      'autoScale': true,
      'autoDimensions': true,
      'overlayOpacity': 0,
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'padding': 20,
      'centerOnScroll': true
    });
    var links = document.querySelectorAll('tr[style="cursor: pointer"]');
    var One = "";
    var Two = "";
    var Three = "";
    var Four = "";
    var Five = "";
    var Six = "";
    var Seven = "";
    var Eight = "";
    var Nine = "";
    var num = 0;
    var count = 0;
    for (var i = 0; i < links.length; i++) {
      var str = links[i].innerText;
      One = str.split('MP1: ')[1];
      One = parseFloat(One);
      One = One || 0;
      if (One === 0) {} else {
        num += parseFloat(One);
        count++;
      }
      Two = str.split('MP2: ')[1];
      Two = parseFloat(Two);
      Two = Two || 0;
      if (Two === 0) {} else {
        num += parseFloat(Two);
        count++;
      }
      Three = str.split('MP3: ')[1];
      Three = parseFloat(Three);
      Three = Three || 0;
      if (Three === 0) {} else {
        num += parseFloat(Three);
        count++;
      }
      Four = str.split('MP4: ')[1];
      Four = parseFloat(Four);
      Four = Four || 0;
      if (Four === 0) {} else {
        num += parseFloat(Four);
        count++;
      }
      Five = str.split('MP5: ')[1];
      Five = parseFloat(Five);
      Five = Five || 0;
      if (Five === 0) {} else {
        num += parseFloat(Five);
        count++;
      }
      Six = str.split('MP6: ')[1];
      Six = parseFloat(Six);
      Six = Six || 0;
      if (Six === 0) {} else {
        num += parseFloat(Six);
        count++;
      }
      Seven = str.split('MP7: ')[1];
      Seven = parseFloat(Seven);
      Seven = Seven || 0;
      if (Seven === 0) {} else {
        num += parseFloat(Seven);
        count++;
      }
      Eight = str.split('MP8: ')[1];
      Eight = parseFloat(Eight);
      Eight = Eight || 0;
      if (Eight === 0) {} else {
        num += parseFloat(Eight);
        count++;
      }
      Nine = str.split('MP9: ')[1];
      Nine = parseFloat(Nine);
      Nine = Nine || 0;
      if (Nine === 0) {} else {
        num += parseFloat(Nine);
        count++;
      }
    }
    var avg = num / count;
    var finalavg = Math.ceil(avg * 100) / 100;
    var avgimg;
    var fcolor;
    var avgfix = Number(finalavg);

    if (avgfix >= 90) {
      avgimg = "/img/ico/star.png";
      fcolor = "#0087FF";
    } else {
      if (avgfix >= 80) {
        avgimg = "/img/ico/tick.png";
        fcolor = "#1FBA24";
      } else {
        if (avgfix >= 65) {
          avgimg = "/img/ico/error.png";
          fcolor = "#AA9901";
        } else {
          if (avgfix <= 64) {
            avgimg = "/img/ico/exclamation.png";
            fcolor = "#CF1920";
          }
        }
      }
    }
    var lettergrade;
    var collegegrade;
    if (avgfix >= 97) {
      lettergrade = "A+";
      collegegrade = "4.0";
    } else {
      if (avgfix >= 93) {
        lettergrade = "A";
        collegegrade = "4.0";
      } else {
        if (avgfix >= 90) {
          lettergrade = "A-";
          collegegrade = "3.7";
        } else {
          if (avgfix >= 87) {
            lettergrade = "B+";
            collegegrade = "3.3";
          } else {
            if (avgfix >= 83) {
              lettergrade = "B";
              collegegrade = "3.0";
            } else {
              if (avgfix >= 80) {
                lettergrade = "B-";
                collegegrade = "2.7";
              } else {
                if (avgfix >= 77) {
                  lettergrade = "C+";
                  collegegrade = "2.3";
                } else {
                  if (avgfix >= 73) {
                    lettergrade = "C";
                    collegegrade = "2.0";
                  } else {
                    if (avgfix >= 70) {
                      lettergrade = "C-";
                      collegegrade = "1.7";
                    } else {
                      if (avgfix >= 67) {
                        lettergrade = "D+";
                        collegegrade = "1.3";
                      } else {
                        if (avgfix >= 65) {
                          lettergrade = "D";
                          collegegrade = "1.0";
                        } else {
                          if (avgfix < 65) {
                            lettergrade = "E/F";
                            collegegrade = "0.0";
                          } else {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if ($('#avgi').length === 0) {
      $('body').append("<div id='avgi' style='display:none'><div id='ginfo'><h2>Average Conversion</h2><h4>Percent Grade: " + avgfix + "%</h4><h4>Letter Grade: " + lettergrade + "</h4><h4>4.0 Scale: " + collegegrade + "</h4><a target='_blank' href='https://pages.collegeboard.org/how-to-convert-gpa-4.0-scale'><p>More Info on College Board</p><a></div></div>");
    } else {
      $('#avgi').remove();
      $('body').append("<div id='avgi' style='display:none'><div id='ginfo'><h2>Average Conversion</h2><h4>Percent Grade: " + avgfix + "%</h4><h4>Letter Grade: " + lettergrade + "</h4><h4>4.0 Scale: " + collegegrade + "</h4><a target='_blank' href='https://pages.collegeboard.org/how-to-convert-gpa-4.0-scale'><p>More Info on College Board</p><a></div></div>");
    }
    if ($('#totalaverage').length === 1) {
      $('#totalaverage').text(" " + finalavg);
      $('#avgimg').attr("src", avgimg);
      document.getElementById('totalaverage').style.color = fcolor;
    }
  }
}
window.onload = getAverage();

if ($('#sidebar').length === 1) {
  $("<a style='position:absolute;top:20px;left:30px;' id='cred' href='#credit'>PupilPath Plus</a>").insertAfter('#CloseMenu');
  $('body').append("<div style='display:none'><div id='credit'><h2>Info</h2><p>Thanks for using PupilPath Plus!</p><p>Please leave a review on <a target='_blank' href='https://greasyfork.org/en/scripts/368390/feedback'>Greasy Fork</a></p><a target='_blank' href='https://github.com/DeathHackz/PupilPathPlus/issues'><p>Found a bug?<p></a>Made by <a target='_blank' href='https://github.com/DeathHackz'>DeathHackz</a></p><p>View on <a target='_blank' href='https://github.com/DeathHackz/PupilPathPlus'>GitHub</a></p></div></div>");
  $("a#cred").fancybox({
    'type': 'inline',
    'autoScale': true,
    'autoDimensions': true,
    'overlayOpacity': 0,
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'padding': 20,
    'centerOnScroll': true
  });
}

if ($('#progress-card').length === 1) {
  $('body').append("<div style='display:none'><div id='editgfloat'></div></div>");
  $('#profile-links').append("<br /><a href='#editgfloat' id='editg' style='margin-right:3px;'>Edit Grades</a>");
  $('#editgfloat').append("<form style='padding-bottom:10px;' id='modifygrades'></form>");

  $("a#editg").fancybox({
    'type': 'inline',
    'autoScale': true,
    'autoDimensions': true,
    'overlayOpacity': 0,
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'padding': 20,
    'centerOnScroll': true
  });

  var number = 0;
  var links = document.querySelectorAll('tr[style="cursor: pointer"]');

  for (var i = 0; i < links.length; i++) {
    var ck = $("#progress-card tr td:nth-child(5)")[i].innerHTML;
    if (ck == "-") {} else {
      number = number + 1;
      var newid = number + "active";
      var kk = links[i];
      kk.setAttribute("id", newid);
    }
  }
  var dop = 0;
  var aclass = [];
  for (var t = 0; t < number; t++) {
    dop = dop + 1;
    var dopid = dop + "active";
    var ioid = dop + "val";
    var jid = dop + "grade";
    var popo = document.getElementById(dopid).cells[1].innerText;
    var mopo = document.getElementById(dopid).cells[4].children[0];
    mopo.setAttribute("id", jid);
    var cholo = document.getElementById(dopid).cells[4].children[0].innerText.substring(1);
    $('#modifygrades').append(popo + "<input style='margin:5px;' id=" + ioid + " type='number' step='.01' value=" + cholo + " min='0' max='110'></input><br />");
    aclass.push(dop);

  }

  $('#modifygrades').append("<a class='btn btn-danger' id='rstbtn' style='margin-right:5px;'>Reset</a><a class='btn btn-warning' id='clearbtn' style='margin-right:5px;'>Clear</a><a style='margin-right:5px;' id='setbtn' class='btn btn-success'>Set</a><a style='float:right;margin-left:50px;' id='savebtn' class='btn btn-danger'>Save</a>");
}

function setsavedgrades() {
  if (sessionStorage.length === 1) {
    var check = JSON.parse(sessionStorage.getItem('SavedGrades'));
    if (check.length > 0) {
      $('#modifygrades').prepend("<p id='warningsave' style='background-color: #ffffa7;text-align: center;border-radius: 10px;'>These are not your real grades, click reset to see your actual grades</p>");
      for (var p = 0; p < aclass.length; p++) {
        var iop = aclass[p];
        var jj = check[p];
        var catag;
        var gimg;
        var ncolor;
        var ooid = iop + "active";
        var gid = iop + "grade";
        var nio = iop + "newgrades";
        var dopo = document.getElementById(ooid).cells[4].children[0];
        if (jj === "") {
          dopo.style.display = "initial";
        } else {
          if (jj >= 90) {
            gimg = "/img/ico/star.png";
            catag = "Honors";
            ncolor = "#0087FF";
          } else {
            if (jj >= 80) {
              gimg = "/img/ico/tick.png";
              catag = "Passing";
              ncolor = "#1FBA24";
            } else {
              if (jj >= 65) {
                gimg = "/img/ico/error.png";
                catag = "Borderline";
                ncolor = "#AA9901";
              } else {
                if (jj <= 64) {
                  gimg = "/img/ico/exclamation.png";
                  catag = "Failing";
                  ncolor = "#CF1920";
                }
              }
            }
          }
          dopo.style.display = "none";
          $("#" + nio).remove();
          $("<span id=" + nio + " style=color:" + ncolor + " data-gtype=" + catag + "><img src=" + gimg + "> " + jj + "</span>").insertBefore("#" + gid);
        }
      }
      getAverage();
    }
  }
}
window.onload = setsavedgrades();

if (sessionStorage.length === 1) {
  $("#savebtn").attr("disabled", true);
}

$("#savebtn").click(function () {
  if ($("#savebtn")[0].attributes.length === 3) {
    var SavedGrades = [];
    for (var o = 1; o < number + 1; o++) {
      var opop = o + "val";
      var oj = $("#" + opop).val();
      SavedGrades.push(oj);
    }
    sessionStorage.setItem('SavedGrades', JSON.stringify(SavedGrades));
    $("#savebtn").attr("disabled", true);
    setsavedgrades();
  }
});

$("#clearbtn").click(function () {
  $(':input', '#modifygrades').val('');
});

$("#rstbtn").click(function () {
  for (var q = 0; q < number; q++) {
    $("#" + noo).remove();
    $("#" + number + "newgrades").remove();
    var ioq = aclass[q];
    var noo = ioq + "newgrades";
    var kid = ioq + "grade";
    document.getElementById(kid).style.display = "initial";
    $("#modifygrades")[0].reset();
  }
  $('#warningsave').remove();
  $("#savebtn").removeAttr("disabled");
  sessionStorage.clear();
  getAverage();
});

$("#setbtn").click(function () {
  for (var p = 0; p < aclass.length; p++) {
    var iop = aclass[p];
    var mmm = iop + "val";
    var jj = $("#" + mmm).val();
    var catag;
    var gimg;
    var ncolor;
    var ooid = iop + "active";
    var gid = iop + "grade";
    var nio = iop + "newgrades";
    var dopo = document.getElementById(ooid).cells[4].children[0];
    if (jj === "") {
      dopo.style.display = "initial";
    } else {
      if (jj >= 90) {
        gimg = "/img/ico/star.png";
        catag = "Honors";
        ncolor = "#0087FF";
      } else {
        if (jj >= 80) {
          gimg = "/img/ico/tick.png";
          catag = "Passing";
          ncolor = "#1FBA24";
        } else {
          if (jj >= 65) {
            gimg = "/img/ico/error.png";
            catag = "Borderline";
            ncolor = "#AA9901";
          } else {
            if (jj <= 64) {
              gimg = "/img/ico/exclamation.png";
              catag = "Failing";
              ncolor = "#CF1920";
            }
          }
        }
      }
      dopo.style.display = "none";
      $("#" + nio).remove();
      $("<span id=" + nio + " style=color:" + ncolor + " data-gtype=" + catag + "><img src=" + gimg + "> " + jj + "</span>").insertBefore("#" + gid);
    }
  }
  getAverage();
});
