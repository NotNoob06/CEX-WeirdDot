// chrome.action.onClicked.addListener((tab) => {

// });

var toggle = false;
chrome.action.onClicked.addListener(function (tab) {
  toggle = !toggle;
  if (toggle) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["point.js"],
    })
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["pointoff.js"],
    });
  }
});
