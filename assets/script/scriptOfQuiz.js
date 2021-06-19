var score = 0;
var wrongs = 0;
function showCoords(event) {
    var x = (event.clientX/37.7952755906).toFixed(0);
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
    function submitanswer1() {
        var x = (elmnt.offsetHeight/37.7952755906).toFixed(0);
        var y = (elmnt.offsetWidth/37.7952755906).toFixed(0);
        var numX = document.getElementById("cube").style.width = x +"cm";
        var numY =document.getElementById("cube").style.height = y +"cm";
        if (numX== "5cm" && numY == "7cm") {
          alert("Success")
          score = score +1;
          console.log(score)
          var q1 =document.getElementById("q1");
          q1.parentNode.removeChild( q1 );
        }else{
          alert("No")
          wrongs = wrongs +1
        }

      }
      function submitanswer2() {
        var x = (elmnt.offsetHeight/37.7952755906).toFixed(0);
        var y = (elmnt.offsetWidth/37.7952755906).toFixed(0);
        var numX = document.getElementById("cube").style.width = x +"cm";
        var numY =document.getElementById("cube").style.height = y +"cm";
        if (numX== "9cm" && numY == "4cm") {
          alert("Success")
          score = score +1;
          console.log(score)
          var q2 =document.getElementById("q2");
          q2.parentNode.removeChild( q2 );
        }else{
          alert("No")
          wrongs = wrongs +1
        }

      }
      function submitanswer3() {
      var x = (elmnt.offsetHeight/37.7952755906).toFixed(0);
      var y = (elmnt.offsetWidth/37.7952755906).toFixed(0);
      var numX = document.getElementById("cube").style.width = x +"cm";
      var numY =document.getElementById("cube").style.height = y +"cm";
        if (numX== "7cm" && numY == "7cm") {
          alert("Success")
          score = score +1;
          console.log(score)
          var q3 =document.getElementById("q3");
          q3.parentNode.removeChild( q3 );
        }else{
          alert("No")
          wrongs = wrongs +1
        }
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
     function skipanswer3() {
      if (confirm("Are You Sure Skip This Question You can't go back to the question")) {
        var q3 =document.getElementById("q3");
        q3.parentNode.removeChild( q3 );
      } else {
        txt = "You pressed Cancel!";
      }
     }
     function skipanswer2() {
      if (confirm("Are You Sure Skip This Question You can't go back to the question")) {
        var q2 =document.getElementById("q2");
        q2.parentNode.removeChild( q2 );
      } else {
        txt = "You pressed Cancel!";
      }
     }