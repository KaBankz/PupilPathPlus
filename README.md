# PupilPath Plus
[![Version](https://img.shields.io/badge/Version-2.3-blue.svg?longCache=true&style=for-the-badge "Version 2.3")](https://github.com/DeathHackz/PupilPathPlus/#changelog)
[![Status](https://img.shields.io/badge/Status-Developing-yellow.svg?longCache=true&style=for-the-badge "Active Development")](https://github.com/DeathHackz/PupilPathPlus)
[![Contact](https://img.shields.io/badge/Contact-DeathHackz-red.svg?longCache=true&style=for-the-badge "DeathHackz @GitHub")](https://github.com/DeathHackz)
[![Install](https://img.shields.io/badge/Install-GreasyFork-green.svg?longCache=true&style=for-the-badge "Install PupilPath Plus")](https://github.com/DeathHackz/PupilPathPlus/#installation)


Description
-----------
A userscript which calculates and shows your total average; This also includes a visual grade changer.

Features
--------
* Average Calculator
* Grade Changer ***(visual only)***

Screenshots
-----------
> **Total Average Appended to Website**
![Total Average Appended to Website](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Total_Average.png?raw=true "Total Average Appended to Website")

> **Grade Changer Button**
![Grade Changer Button](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Grade_Changer_Btn.png?raw=true "Grade Changer Button")

> **Grade Changer Interface**
![Grade Changer Interface](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Grade_Changer.png?raw=true "Grade Changer Interface")

> **Changed Grades**
![Changed Grades](https://github.com/DeathHackz/PupilPathPlus/blob/master/screenshots/Changed_Grades.png?raw=true "Changed Grades")

Installation
-------
You **must** have a userscript manager installed such as

* [Tampermonkey](https://tampermonkey.net/)
* [Greasemonkey](https://www.greasespot.net/) (FireFox Only)

Then just click the link below and click install

* [Greasy Fork](https://greasyfork.org/en/scripts/368390)

External Libraries
------------------
* [jQuery v1.5.1](https://blog.jquery.com/2011/02/24/jquery-151-released/)

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
