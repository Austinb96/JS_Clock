function currentTime() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date();
    let dayOfWeek = weekday[date.getDay()];
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    
    var militaryTimeToggle = document.getElementById("militaryTimeToggle");
    
    
    if(hh===0){
        hh = 12;
    }
    
    if(hh > 12 && militaryTimeToggle[i].checked) {
        hh = hh - 12;
        session = "PM";
    }
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = hh + ":" + mm + ":" + ss + " " + session;
    
    document.getElementById("clock").innerHTML = time;
    document.getElementById("dayOfWeek").innerHTML = dayOfWeek;
    let t = setTimeout(function(){currentTime()}, 1000);
}

currentTime();