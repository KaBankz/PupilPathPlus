// ==UserScript==
// @name         PupilPath Plus
// @namespace    https://github.com/DeathHackz
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @icon         http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Calculator-icon.png
// @version      2.1
// @description  Appends total average to PupilPath, and includes a grade changer feature (visual only)
// @author       DeathHackz
// @include      https://pupilpath.skedula.com/*
// @grant        none
// ==/UserScript==

function getAverage() {
    if ($('#progress-card').length === 1) {
  
      if ($('#totalaverage').length === 0) {
        $('.information').prepend("<p style='color: #585b66;position: static;float: right;padding-top: 10px;padding-right: 10px;'>Total Average: <img id='avgimg' src='' /><span id='totalaverage'></span></p>");
      }
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
        One = str.split('MP1:  ')[1];
        One = parseFloat(One);
        One = One || 0;
        if (One == 0) {} else {
          num += parseFloat(One);
          count++;
        }
        Two = str.split('MP2:  ')[1];
        Two = parseFloat(Two);
        Two = Two || 0;
        if (Two == 0) {} else {
          num += parseFloat(Two);
          count++;
        }
        Three = str.split('MP3:  ')[1];
        Three = parseFloat(Three);
        Three = Three || 0;
        if (Three == 0) {} else {
          num += parseFloat(Three);
          count++;
        }
        Four = str.split('MP4:  ')[1];
        Four = parseFloat(Four);
        Four = Four || 0;
        if (Four == 0) {} else {
          num += parseFloat(Four);
          count++;
        }
        Five = str.split('MP5:  ')[1];
        Five = parseFloat(Five);
        Five = Five || 0;
        if (Five == 0) {} else {
          num += parseFloat(Five);
          count++;
        }
        Six = str.split('MP6:  ')[1];
        Six = parseFloat(Six);
        Six = Six || 0;
        if (Six == 0) {} else {
          num += parseFloat(Six);
          count++;
        }
        Seven = str.split('MP7:  ')[1];
        Seven = parseFloat(Seven);
        Seven = Seven || 0;
        if (Seven == 0) {} else {
          num += parseFloat(Seven);
          count++;
        }
        Eight = str.split('MP8:  ')[1];
        Eight = parseFloat(Eight);
        Eight = Eight || 0;
        if (Eight == 0) {} else {
          num += parseFloat(Eight);
          count++;
        }
        Nine = str.split('MP9:  ')[1];
        Nine = parseFloat(Nine);
        Nine = Nine || 0;
        if (Nine == 0) {} else {
          num += parseFloat(Nine);
          count++;
        }
      }
      var avg = num / count;
      var finalavg = Math.ceil(avg * 100) / 100;
      var avgimg;
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
  
      if ($('#totalaverage').length === 1) {
        $('#totalaverage').text(" " + finalavg);
        $('#avgimg').attr("src", avgimg);
        document.getElementById('totalaverage').style.color = fcolor;
      }
    }
  }
  window.onload = getAverage();
  
  if ($('#progress-card').length === 1) {
    $('#profile-links').append("<br /><a href='#' onClick=$('#modifygrades').toggle()>Edit Grades</a>");
    $("<form style='display:none;padding-bottom:10px;' id='modifygrades'></form>").insertBefore(".notification");
  
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
      $('#modifygrades').append(popo + "<input style='margin:5px;' id=" + ioid + " type='number' min='0' max='100'></input><br />");
      aclass.push(dop);
  
    }
  
    $('#modifygrades').append("<a class='btn' style='margin-right:5px;' onClick=$('#modifygrades').toggle()>Close</a><a class='btn' id='rstbtn' style='margin-right:5px;'>Reset</a><a class='btn' id='clearbtn' style='margin-right:5px;'>Clear</a><a style='margin-right:5px;' id='setbtn' class='btn'>Set</a>");
  }
  
  $("#clearbtn").click(function() {
    $(':input', '#modifygrades').val('');
  });
  
  $("#rstbtn").click(function() {
    for (var q = 0; q < number; q++) {
      $("#" + noo).remove();
      $("#" + number + "newgrades").remove();
      var ioq = aclass[q];
      var noo = ioq + "newgrades";
      var kid = ioq + "grade";
      document.getElementById(kid).style.display = "initial";
    }
    getAverage();
  });
  
  $("#setbtn").click(function() {
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
      var pio = document.getElementById(nio);
      var dopo = document.getElementById(ooid).cells[4].children[0];
      if (jj == "") {
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
