function eventFunction() {
    alert(event.target.nodeName);
}
// create event
function eventFunction() {
    var x = document.createEvent('MouseEvent');
    x.initMouseEvent('mouseover', true, true,  window);
    document.getElementById('myDiv');
}
var x = 12;
