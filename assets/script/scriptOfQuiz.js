var score = 0;
var wrongs = 0;
function showCoords(event) {
    var x = (event.clientX/37.7952755906).toFixed(0);
      var y = (event.clientY/37.7952755906).toFixed(0);
    var numX = document.getElementById("cube").style.width = x +"cm";
    var numY = document.getElementById("cube").style.height = y +"cm";
    if(x>10){
      document.getElementById("cube").style.width = "10cm";
    }if (y>10){
      document.getElementById("cube").style.height = "10cm";
    }if (x>10 && y>10){
      document.getElementById("cube").style.width = "10cm";
      document.getElementById("cube").style.height = "10cm";
    }
    
    var coords = "X coords: " + x + ", Y coords: " + y;
  }
  function dragendfun(event){
      var x = (event.clientX/37.7952755906).toFixed(0);
      var y = (event.clientY/37.7952755906).toFixed(0);
      var numX = document.getElementById("cube").style.width = x +"cm";
      var numY =document.getElementById("cube").style.height = y +"cm";
      if(x>10){
        document.getElementById("cube").style.width = "10cm";
      }if (y>10){
        document.getElementById("cube").style.height = "10cm";
      }if (x>10 && y>10){
        document.getElementById("cube").style.width = "10cm";
        document.getElementById("cube").style.height = "10cm";
      }
      
    }
      
    var elmnt = document.getElementById("cube");
    //   var txt = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
    //   txt += "Width with padding and border: " + elmnt.offsetWidth + "px";
    //   var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed(0);
    //   var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(0);
    //   var area= document.getElementById("areaData").innerHTML=parseFloat(widthShape * heightShape).toFixed(0);

    function submitanswer1() {
        console.log(elmnt.offsetHeight)
        console.log(elmnt.offsetWidth)
        if (elmnt.offsetWidth== "265" && elmnt.offsetHeight == "189") {
          alert("Success")
          score = score +1;
          console.log(score)
        }else{
          alert("No")
          wrongs = wrongs +1
        }
      }
      function submitanswer2() {
        console.log(elmnt.offsetHeight)
        console.log(elmnt.offsetWidth)
        if (elmnt.offsetWidth== "151" && elmnt.offsetHeight == "340") {
          alert("Success")
          score = score +1;
          console.log(score)
        }else{
          alert("No")
          wrongs = wrongs +1
        }
      }
      function submitanswer3() {
        console.log(elmnt.offsetHeight)
        console.log(elmnt.offsetWidth)
        if (elmnt.offsetWidth== "265" && elmnt.offsetHeight == "265") {
          alert("Success")
          score = score +1;
          console.log(score)
        }else{
          alert("No")
          wrongs = wrongs +1
        }
      }
      if (score == 3) {
        alert("دماغ شغالة مش بتنام")
      }
      function check() {
        var txt;
        if (confirm("Are You Sure End The Quiz")) {
          document.getElementById("rightScore").innerText= score;
          document.getElementById("wrongScore").innerText= wrongs;
          document.getElementById("ScoreBox").style.display="block";
          $(':button').prop('disabled', true);
        } else {
          txt = "You pressed Cancel!";
        }
        
     }
