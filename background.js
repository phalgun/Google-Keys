/**
 * Handles requests sent by the content script.  Shows an infobar.
 */
function onRequest(request, sender, sendResponse) {
  
  console.log("hellllllloooooooo");
  window.open("www.google.com");
  alert("tried to open :( ");

  // Return nothing to let the connection be cleaned up.
  sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);