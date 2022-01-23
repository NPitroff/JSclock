// 24-Hour Clock JS
function currentTime() {
  var date = new Date(); //Allows you to pull hours, minutes, and seconds
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  // nest the variables for updateTime in currentTime();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  // display the time in the html
  document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
setTimeout(currentTime, 1000);

}
// append the time returned with a "0"
function updateTime(k){
  if(k<10){
    return "0"+ k;
  }
  else {
    return k;
  }
}

currentTime();

// 12-Hour CLock JS
function current12Time() {
  var date = new Date(); //Allows you to pull hours, minutes, and seconds
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  // nest the variables for updateTime in currentTime();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  // display the time in the html
  document.getElementById("secondClock").innerHTML = hour + " : " + min + " : " + sec;
setTimeout(current12Time, 1000);

//Varriable to describe am or pm
var mornEve = "AM";
mornEve = (hour >=12 ? "PM": "AM")
}
// append the time returned with a "0"
function updateTime(k){
  if(k<10){
    return "0"+ k;
  }
  else {
    return k;
  }
}

current12Time();
