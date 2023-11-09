const x = document.getElementById("demo");
function getLocation() {
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}
function showPosition (position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +"<br> Longitude" + position.coords.longitude;
}
function myFunction(){
    const inp0bj = document.getElementById("id1");
    if (!inp0bj.checkValidity()){
        document.getElementById("demo2").innerHTML = inp0bj.validationMessage;
    }
}
function myFunction() {
    let text; 
    if(document.getElementById("id2").validity.rangeOverflow) {
        text = "value too large";
    } else {
        text = "input OK";
    }
    document.getElementById("demo3").innerHTML = text;
    }
    function myFunction() {
        let text; 
        if(document.getElementById("id3").validity.rangeUnderflow) {
            text = "value too small";
        } else {
            text = "input OK";
        }
        document.getElementById("demo4").innerHTML = text;
        }
        function myFunction () {
            window.history.back();
        }
        function myFunction () {
            window.history.go(-2);
        }
        localStorage.setItem("name","john doe");
        document.getElementById("demo5").innerHTML = localStorage.getItem("name");

        let w;
        function startWorker(){
            if (typeof (w) == "undefined") {
                w = new Worker ("demo_workers.js");
            }
            w.onmessage = function(event) {
                document.getElementById ("result").innerHTML = event.data;
            };
        }
        function stopWorker(){
            w.terminate();
            w = undefined;
        }
        let file ="fetch_info.txt"
        fetch (file)
        .then(x => x.text())
        .then(y => document.getElementById("demo6").innerHtml = y);
const xx = document.getElementById("demo7");
function getLocation (){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
x.innerHTML = "geolocation is not supported by this browser.";
}
    }
function showPosition(position){
    x.innerHTML = "latitude: " + position.coords.latitude +
    "<br>longitude: " + position.coords.longitude;
}