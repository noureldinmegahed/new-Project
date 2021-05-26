function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById("cube").style.width = x;
  document.getElementById("cube").style.height = y;
  
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}
function dragendfun(event){
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("cube").style.width = x;
    var any =document.getElementById("cube").style.width = x;
    document.getElementById("cube").style.height = y;
    console.log(any)
}
var box = document.querySelector('#cube');
setInterval(function () {
    var elmnt = document.getElementById("cube");
    var txt = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
    txt += "Width with padding and border: " + elmnt.offsetWidth + "px";
    var widthShape =document.getElementById("widthData").innerHTML=parseFloat((elmnt.offsetWidth) * 0.0264583333).toFixed(2);
    var heightShape =document.getElementById("heightData").innerHTML=parseFloat((elmnt.offsetHeight) * 0.0264583333).toFixed(2);
  }, 200);
  