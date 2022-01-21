function currentTime() {
  var date = new Date(); //Allows you to pull hours, minutes, and seconds
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  // nest the variables for updateTime in currentTime();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  console.log(currentTime());
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
