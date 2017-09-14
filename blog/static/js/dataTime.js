function startTime(){
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    h = checkTime(h)
    m = checkTime(m)
    s = checkTime(s)
    document.querySelector('#id-time').innerHTML=h+":"+m+":"+s
    t = setTimeout(function(){startTime()}, 500)
}
function checkTime(i){
    if (i<10){
        i = "0" + i
    }
    return i
}