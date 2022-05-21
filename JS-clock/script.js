 function startTime(){

var d = new Date()
var hrs =  d.getHours();

var min = d.getMinutes();

var sec =  d.getSeconds();
min = checkTime(min);
sec=checkTime(sec);

document.getElementById("time").innerHTML= hrs +":"+ min +":"+sec;
var t = setTimeout(startTime, 500);

}
function checkTime(i){
    if(i<10){
        i ="0" + i
    };
    return i;
}

