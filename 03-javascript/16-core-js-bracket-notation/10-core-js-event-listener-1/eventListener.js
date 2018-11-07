//This is my event listener JavaScript page
document.onkeydown = function(event) {
    var key_press = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;
    document.getElementById("kp").innerHTML = key_press;
    document.getElementById("kc").innerHTML = key_code;
    var status = document.getElementById("status");
    status.innerHTML = "Down Event Fired For : " + key_press;
}

document.onkeyup = function(event) {
    var key_press = String.fromCharCode(event.keyCode);
    var status = document.getElementById("status");
    status.innerHTML = "Up Event Fired For : " + key_press;

}