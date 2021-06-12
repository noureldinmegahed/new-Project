var num1 = 1;
var num2 = 1;
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
    var xe = (event.clientX/2.6).toFixed(0);
    var ye = (event.clientY/2.6).toFixed(0);
    console.log(x)
    document.getElementById("anyid").style.paddingLeft= xe;
    document.getElementById("anyid").style.paddingTop= ye;
  
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
    var xe = (event.clientX/2.6).toFixed(0);
    var ye = (event.clientY/2.6).toFixed(0);
    console.log(x)
    document.getElementById("anyid").style.paddingLeft= xe;
    document.getElementById("anyid").style.paddingTop= ye; 
  }
var box = document.querySelector('#cube');
setInterval(function () {
    var elmnt = document.getElementById("cube");
    var txt = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
    txt += "Width with padding and border: " + elmnt.offsetWidth + "px";
    var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed(0);
    var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(0);
    var area= document.getElementById("areaData").innerHTML=parseFloat(widthShape * heightShape).toFixed(0);
  }, 300)
  function hide(a){
    num1 = num1+1;
    document.getElementById("hideB").click=sj;
    var sj = document.getElementById("changedAreaData").style="display: none;";
    document.getElementById("hideB").style.border = "blue solid 2px";
    var x = document.getElementsByClassName("imge");
    for (let i = 0; i < x.length; i++) {
      x[i].style.border="0"
    }
    a.style.border="blue solid 2px"
  }
  function axb(a){
    var elmnt = document.getElementById("cube");
    var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed();
    var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(0);
    var area= document.getElementById("areaData").innerHTML=parseFloat(widthShape * heightShape).toFixed(0);
    document.getElementById("hideB").click=sj;
    var sj = document.getElementById("changedAreaData").style="display: block;";
    document.getElementById("changedArea").innerText=widthShape + " x " + heightShape
    // document.getElementById("hideB").click();
    var x = document.getElementsByClassName("imge");
    for (let i = 0; i < x.length; i++) {
      x[i].style.border="0"
    }
    a.style.border="blue solid 2px"
  num2 = num2+1
  }
  function a(a){
    var elmnt = document.getElementById("cube");
    var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed(0);
    var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(0);
    var area= document.getElementById("areaData").innerHTML=parseFloat(widthShape * heightShape).toFixed(0);
    document.getElementById("hideB").click=sj;
    var sj = document.getElementById("changedAreaData").style="display: block;";
    document.getElementById("changedArea").innerText=area
    var x = document.getElementsByClassName("imge");
    for (let i = 0; i < x.length; i++) {
      x[i].style.border="0"
    }
    a.style.border="blue solid 2px"
  }
  function hideData(a){
    document.getElementById("hideB").click=sj;
    var sj = document.getElementById("advancedData").style="display: none;";
    var x = document.getElementsByClassName("imga");
    for (let i = 0; i < x.length; i++) {
      x[i].style.border="0"
    }
    a.style.border="blue solid 2px"
  }
  function showData(a){
    var elmnt = document.getElementById("cube");
    var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed(0);
    var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(0);
    var area= document.getElementById("areaData").innerHTML=parseFloat(widthShape * heightShape).toFixed(0);
    
    document.getElementById("dis1Thing").click=sj;
    var sj = document.getElementById("advancedData").style="display: block;";
    document.getElementById("numbers").innerText=widthShape + " x " + heightShape
    document.getElementById("total").innerText=area
    document.getElementById("total").style="color: grey;"
    var x = document.getElementsByClassName("imga");
    for (let i = 0; i < x.length; i++) {
      x[i].style.border="0"
    }
    a.style.border="blue solid 2px"
  }
  function displayData(a){
    $(document).ready(function(){
      $("#disAllThings").click(function(){
        $("#advancedData").show();
      });
    });
    var elmnt = document.getElementById("cube");
    var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed(0);
    var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(0);
    var area= document.getElementById("areaData").innerHTML=parseFloat(widthShape * heightShape).toFixed(0);
    document.getElementById("numbers").innerText=widthShape + " x " + heightShape
    document.getElementById("total").innerText=area
    document.getElementById("total").style="color: black;"
    var x = document.getElementsByClassName("imga");
    for (let i = 0; i < x.length; i++) {
      x[i].style.border="0"
    }
    a.style.border="blue solid 2px"
  }
  function hideBack(a){
    num1 = num1+1;
    if ( num1 % 2 == 0   ) {
      document.getElementById("containerOfShape").style="background: none;"
      a.src = "assets/images/selected.png";
    }
    else{
      document.getElementById("containerOfShape").style="background: assets/images/background.png"
      a.src = "assets/images/notselected.png";
    }
}
 function hideColor(a){
   num2 = num2+1;
   if ( num2 % 2 == 0   ) {
     document.getElementById("cube").style="background: grey;"
     a.src = "assets/images/selected.png";
   }
   else{
     document.getElementById("cube").style="background-color: #dfd877;"
     a.src = "assets/images/notselected.png";
   }
 }
// function changeEyeColor(event) {
//   document.getElementById("hideDeye").src = "assets/images/eyeHover.png";
// }
// function back() {
//   document.getElementById("hideDeye").src = "assets/images/eye.png";
// }
// function changeEyeColor2(event) {
//   document.getElementById("left").src = "assets/images/styleLeftHover.png";
// }
// function back2() {
//   document.getElementById("left").src = "assets/images/styleLeft.png";
// }
// function changeEyeColor3(event) {
//   document.getElementById("left2").src = "assets/images/styleLeft2Hover.png";
// }
// function back3() {
//   document.getElementById("left2").src = "assets/images/styleLeft2.png";
// }
// function changeEyeColor4(event) {
//   document.getElementById("ey1").src = "assets/images/eyeHover.png";
// }
// function back4() {
//   document.getElementById("ey1").src = "assets/images/eye.png";
// }

// function changeEyeColor5(event) {
//   document.getElementById("axbimg").src = "assets/images/axbHover.png";
// }
// function back5() {
//   document.getElementById("axbimg").src = "assets/images/axb.png";
// }
// function changeEyeColor6(event) {
//   document.getElementById("aimg").src = "assets/images/aHover.png";
// }
// function back6() {
//   document.getElementById("aimg").src = "assets/images/a.png";
// }