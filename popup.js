// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	console.log(message);
	document.getElementById('pagetitle').innerHTML = message;
	console.log('hellow orld');
});

function onButtonClicked (){
  console.log('btnComment worked');
}

document.getElementById('autoFillBtn').addEventListener('click', onButtonClicked());

// chrome.runtime.onMessage.addListener(function(message, callback) {
// 	if (message == "runContentScript"){
// 		chrome.tabs.executeScript({
// 			file: 'payload.js'
// 		});
// 	}
// });