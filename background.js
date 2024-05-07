chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') {
    const alertUrl = 'https://app.sendgrid.com';
    if (tab.url && tab.url.startsWith(alertUrl)) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: showAlert
      })
    }
  }
})

function showAlert() {
  alert('ペアプロしなくて大丈夫？')
}
