javascript: (function () {
  "use strict";
  // Only Work On PupilPath
  if (window.location.origin === "https://pupilpath.skedula.com") {
    // Only Work If Progress Card Exists
    if (document.getElementById('progress-card') !== null) {
      // Console Warning Message
      // SetTimeout Is Used To Remove The Source Link
      setTimeout(
        console.warn.bind(
          // Styling Is Used Within The Console Message
          console,
          "%c \n %c You Are Using PupilPath Plus %c \n %c Follow %c@DeathHackz%con GitHub ",
          "",
          "background: #383b3e; color: #bada55; padding: 3.8px; padding-right: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px;",
          "",
          "background: #383b3e; color: #bada55; padding: 4px; padding-left: 0px; border-bottom-left-radius: 2px;",
          "background: #383b3e; color: #C8FF19; padding-top: 4px; padding-bottom: 4px;",
          "background: #383b3e; color: #bada55; padding: 4px; padding-right: 0px; padding-left: 8px; border-bottom-right-radius: 2px;",
          "\nDeathHackz: https://github.com/DeathHackz",
          "\nHomepage:   https://deathhackz.github.io/PupilPathPlus",
          "\nGitHub:     https://github.com/DeathHackz/PupilPathPlus",
          "\nSupport:    https://github.com/DeathHackz/PupilPathPlus/issues\n ",
        )
      );
      // Creating The Average Container HTML
      document.getElementsByClassName("notification information")[0].insertAdjacentHTML("afterbegin", `<span id="averageContainer"><a id="averageParent" style="color: #585b66; position: static; float: right; padding-top: 10px; padding-right: 10px;">Total Average: <img id="averageIcon" /> <span id="totalAverage"></span></a></span>`);
      // Selects All The Grade Container Elements
      const gradeSpan = document.querySelectorAll("table#progress-card > tbody > tr > td > span");
      // All The Original Grades Are Pushed Into This Array
      const allOriginalGrades = [];
      // Push All Original Grades Into Above Array
      gradeSpan.forEach(e => {
        // Make Sure To Use ParseFloat NOT ParseInt B/C ParseFloat Leaves Decimals Intact
        allOriginalGrades.push(parseFloat(e.innerText));
      });
      const gradesTotal = allOriginalGrades.reduce((a, b) => a + b);
      const totalGrades = allOriginalGrades.length;
      // Returns The Average Of All The Original Grades, In Some Cases As A Float
      const rawAverage = gradesTotal / totalGrades;
      // Rounds Ths RawAverage In Case It Is A Float To The Hundredths Place (2 After Decimal)
      // NOTE DO NOT USE ParseFloat WITH ToFixed AS IT WILL LEAVE TRAILING ZEROS IF A WHOLE NUMBER IS PASSED
      const average = Math.round(rawAverage * 100) / 100;
      // Define Initial NULL Variables
      let gradeIcon;
      let gradeColor;
      let gradeType;
      // Set Variable Value Through Conditionals
      if (average >= 90) {
        gradeIcon = "/img/ico/star.png";
        gradeColor = "#0087FF";
        gradeType = "Honors";
      } else if (average >= 80) {
          gradeIcon = "/img/ico/tick.png";
          gradeColor = "#1FBA24";
          gradeType = "Passing";
        } else if (average >= 65) {
            gradeIcon = "/img/ico/error.png";
            gradeColor = "#AA9901";
            gradeType = "Borderline";
          } else if (average <= 64) {
              gradeIcon = "/img/ico/exclamation.png";
              gradeColor = "#CF1920";
              gradeType = "Failing";
            }
      // Set All Data
      document.getElementById("totalAverage").style.color = gradeColor;
      document.getElementById("averageIcon").src = gradeIcon;
      document.getElementById("totalAverage").dataset.gtype = gradeType;
      document.getElementById("totalAverage").innerText = `${average}%`;
    }
  } else {
    // If Not Not On PupilPath
    alert("This Only Works On PupilPath");
  }
})();
