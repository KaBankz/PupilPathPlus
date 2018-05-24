// ==UserScript==
// @name         PupilPath Plus
// @namespace    https://github.com/DeathHackz
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @icon         http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Calculator-icon.png
// @version      1.2
// @description  Appends Total Average to PupilPath
// @author       DeathHackz
// @include      https://pupilpath.skedula.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ($('#progress-card').length === 1) {

        if ($('#totalaverage').length === 0) {
            $('.information').prepend("<a id='avgli' href='#'><p style='position: static;float: right;padding-top: 10px;padding-right: 10px;'>Total Average: <img id='avgimg' src='' /><span id='totalaverage'></span></p></a>");
        }
        
        var links = document.querySelectorAll('tr[style="cursor: pointer"]');
        var One = "";
        var Two = "";
        var Three = "";
        var Four = "";
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
        }
        
        var avg = num / count;
        var finalavg = Math.ceil(avg * 100) / 100;
        var avgimg;
        var avgfix = Number(finalavg);

        if (avgfix >= 90) {
            avgimg = "/img/ico/star.png";
        } else {
            if (avgfix >= 80) {
                avgimg = "/img/ico/tick.png";
            } else {
                if (avgfix >= 70) {
                    avgimg = "/img/ico/error.png";
                } else {
                    if (avgfix < 65) {
                        avgimg = "/img/ico/exclamation.png";
                    }
                }
            }
        }

        if ($('#totalaverage').length === 1) {
            $('#totalaverage').text(" " + finalavg);
            $('#avgimg').attr("src", avgimg);
        }

    }

})();
