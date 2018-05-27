# PupilPath Plus
[![Version](https://img.shields.io/badge/Version-3.0-blue.svg?longCache=true&style=for-the-badge "Version 3.0")](https://github.com/DeathHackz/PupilPathPlus/blob/master/CHANGELOG.md)
[![Status](https://img.shields.io/badge/Status-Developing-yellow.svg?longCache=true&style=for-the-badge "Active Development")](https://github.com/DeathHackz/PupilPathPlus)
[![Contact](https://img.shields.io/badge/Requests-Open-red.svg?longCache=true&style=for-the-badge "DeathHackz")](https://github.com/DeathHackz/PupilPathPlus/issues)
[![Install](https://img.shields.io/badge/Install-GreasyFork-green.svg?longCache=true&style=for-the-badge "Install PupilPath Plus")](#installation)

Description
-----------
This UserScript calculates your average and shows it on the site, it also converts your percent average to letter, and 4.0 Scale; Also includes a visual grade changer.

Features
--------
* Average Calculator
* Average Converter
* Grade Changer ***(visual only)***

Screenshots
-----------
> **Total Average**
![Total Average](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Total_Average.png?raw=true "Total Average")

> **Average Converter**
![Average Converter](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Average_Conversion.png?raw=true "Average Converter")

> **Grade Changer & Info Buttons**
![Grade Changer & Info Buttons](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Buttons.png?raw=true "Grade Changer & Info Buttons")

> **Grade Changer Interface**
![Grade Changer Interface](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Grade_Changer.png?raw=true "Grade Changer Interface")

> **Changed Grades**
![Changed Grades](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Changed_Grades.png?raw=true "Changed Grades")

> **Info Popup**
![Info Popup](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Info_Popup.png?raw=true "Info Popup")

> **Update Changelog**
![Update Changelog](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Update_Changelog.png?raw=true "Update Changelog")

<a name="installation"></a>

Installation
------------
You **must** have a userscript manager installed such as

* [Tampermonkey](https://tampermonkey.net) (Recomended)
* [Violentmonkey](https://violentmonkey.github.io/)
* [Greasemonkey](https://www.greasespot.net) (FireFox Only)

Then just click the link below and click install

* [Greasy Fork](https://greasyfork.org/en/scripts/368390)

External Libraries
------------------
* [jQuery v1.5.1](https://blog.jquery.com/2011/02/24/jquery-151-released)
* [Toastr](https://codeseven.github.io/toastr)
* [Fancybox](http://fancybox.net)

Credits
-------
Average Calculation is done using [this](https://gist.github.com/cqfllp/1c2ccc83733fb1d4264a3785b14249d1) code, written by [cqfllp](https://github.com/cqfllp).

```javascript
  var links=document.querySelectorAll('tr[style="cursor: pointer"]');
  var text="";
  var num=0;
  var count=0;
  for(var i=0;i<links.length;i++){
    var str = links[i].innerText;
    text=str.split('MP1:  ')[1];
    text=parseFloat(text);
    text = text || 0;
    if (text==0){
    }else{
    num+=parseFloat(text);
    count++;
    }
  }
  var avg=num/count;
  alert("Total Average: "+Math.ceil(avg*100)/100);
```

Changelog
---------
* Version 3.0 (May 27, 2018):
    - New Icon.
    - Added Toastr.js.
    - Added Fancybox.js.
    - Added Average Converter.
    - Added info popup.
    - New grade changer design.
    - New update changelog toast.
* Version 2.3 (May 14, 2018):
    - Added styles to grade changer.
    - Fixed minor bugs.
* Version 2.2 (May 14, 2018):
    - Fixed major jQuery compatibility bug.
* Version 2.1 (May 13, 2018):
    - Removed useless code.
    - Fixed minor bugs.
* Version 2.0 (May 12, 2018):
    - Added in visual grade changer.
    - Fixed minor bugs.
* Version 1.3 (May 11, 2018):
    - Added support for more Marking Periods.
* Version 1.2 (May 9, 2018):
    - Added in jQuery.
* Version 1.0 (May 4, 2018):
	- Created userscript.
