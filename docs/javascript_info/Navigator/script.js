// alert(location.href); // shows current URL
// if (confirm("Go to Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // redirect the browser to another URL
// }

// Can redirect to another page by changing location.href
// location.href="https://wikipedia.org"

// alert(location.reload(""));



function showLoc() {
  var oLocation = location, aLog = ["Property (Typeof): Value", "location (" + (typeof oLocation) + "): " + oLocation ];
  for (var sProp in oLocation){
  aLog.push(sProp + " (" + (typeof oLocation[sProp]) + "): " + (oLocation[sProp] || "n/a"));
  }
  alert(aLog.join("\n"));
}
showLoc();