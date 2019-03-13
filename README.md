# PupilPath Plus
[![GitHub Release](https://img.shields.io/github/release/DeathHackz/PupilPathPlus.svg?longCache=true&style=for-the-badge)](https://github.com/DeathHackz/PupilPathPlus/blob/master/CHANGELOG.md)
[![GitHub Issues](https://img.shields.io/github/issues/DeathHackz/PupilPathPlus.svg?longCache=true&style=for-the-badge)](https://github.com/DeathHackz/PupilPathPlus/issues)
[![GitHub license](https://img.shields.io/github/license/DeathHackz/PupilPathPlus.svg?style=for-the-badge)](https://github.com/DeathHackz/PupilPathPlus/blob/master/LICENSE)
[![Install](https://img.shields.io/badge/Install-red.svg?longCache=true&style=for-the-badge)](#installation)

Description
-----------
This UserScript calculates your cumulative average, allows you to convert your percent average to a letter grade, and also calculates your GPA. A visual grade changer is also included.

Features
--------
* Average Calculator
* Average Converter
* Grade Converter
* GPA Calculator
* Grade Changer ***(visual only)***
* Bookmarklet Available

If you do not want to install this userscript, but you want average conversion functionality you can use a bookmarklet instead. If you do not know what a bookmarklet is it is a snippet of JavaScript code that can be ran as a bookmark in your browser ([more info](https://en.wikipedia.org/wiki/Bookmarklet))

Just drag this link up to your bookmarks bar

<a href="javascript:(function(){'use strict';if(!('https://pupilpath.skedula.com'===window.location.origin))alert('This Only Works On PupilPath');else if(null!==document.getElementById('progress-card')){document.getElementsByClassName('notification information')[0].insertAdjacentHTML('afterbegin',`<span id='averageContainer'><a id='averageParent' style='color: #585b66; position: static; float: right; padding-top: 10px; padding-right: 10px;'>Total Average: <img id='averageIcon' /> <span id='totalAverage'></span></a></span>`);const a=document.querySelectorAll('table#progress-card > tbody > tr > td > span'),b=[];a.forEach(a=>{b.push(parseFloat(a.innerText))});const c=b.reduce((c,a)=>c+a),d=b.length,e=Math.round(100*(c/d))/100;let f,g,h;90<=e?(f='/img/ico/star.png',g='#0087FF',h='Honors'):80<=e?(f='/img/ico/tick.png',g='#1FBA24',h='Passing'):65<=e?(f='/img/ico/error.png',g='#AA9901',h='Borderline'):64>=e&&(f='/img/ico/exclamation.png',g='#CF1920',h='Failing'),document.getElementById('totalAverage').style.color=g,document.getElementById('averageIcon').src=f,document.getElementById('totalAverage').dataset.gtype=h,document.getElementById('totalAverage').innerText=`${e}%`}})();
"><b>DRAG ME</b></a>

This only works on PupilPath!!
Now all you have to do is go to pupilpath and click on the new bookmark you just made and you should see your average displayed above your grades.

**NOTE**: The grade changer button is found in your userscript managers menu (example below)

Screenshots
-----------
> **Total Average**
![Total Average](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/total_average.png?raw=true "Total Average")

> **Average Converter**
![Average Converter](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/average_conversion.png?raw=true "Average Converter")

> **Grade Changer Button**
![Grade Changer Button](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/grade_changer_button.png?raw=true "Grade Changer Button")

> **Grade Changer**
![Grade Changer](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/grade_changer_interface.png?raw=true "Grade Changer")

> **Multiple Grade Types**
![Multiple Grade Types](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/multi_grade_views.png?raw=true "Multiple Grade Types")

Installation
------------
You **must** have a userscript manager installed such as

* [Tampermonkey](https://tampermonkey.net) (Recomended)
* [Violentmonkey](https://violentmonkey.github.io/)
* [Greasemonkey](https://www.greasespot.net)

Then just click on one of the links below and install

* [Greasy Fork](https://greasyfork.org/en/scripts/368390)
* [OpenUserJs](https://openuserjs.org/###)

#### Userscript manager compatibility guide

|         | Tamper Monkey | Violent Monkey | Grease Monkey |
|:-------:|:------------:|:-------------:|:------------:|
|  Chrome |      YES     |      YES      |      NO      |
| FireFox |      YES     |      YES      |      YES     |
|   Edge  |      YES     |       NO      |      NO      |
|  Safari |      YES     |       NO      |      NO      |
|  Opera  |      YES     |       NO      |      NO      |

([Source](https://openuserjs.org/about/Userscript-Beginners-HOWTO))

Check [HERE](https://openuserjs.org/about/Userscript-Beginners-HOWTO) for a more detailed compatibility guide.

Permissions
-----------
* **NONE :)**

External Libraries
------------------
* **NONE :)**

Changelog
---------
* Version 4.0.0 (March 12, 2019):
  - Complete Re-Write Of All Code.
  - Removed All External Libraries.
  - Removed All Unnecessary Permissions.
  - Removed All Unnecessary Code.
  - Removed All Unnecessary Features.
  - Improved Speed Drastically.
  - Converted Code To Use ES6/ECMAScript 2015 Standards.
  - Documented Code With Comments.
  - Beautified Code.
  - Improved Grade Changer.
  - New Icon.
  - New Bookmarklet Available.
  - New Script Homepage.
  - New Support For Multiple Grade Types.

[View Full Changelog](https://github.com/DeathHackz/PupilPathPlus/blob/master/CHANGELOG.md)
