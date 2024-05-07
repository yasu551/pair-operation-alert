chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') {
    chrome.storage.local.get('url').then((data) => {
      if (tab.url && tab.url.startsWith(data.url)) {
       chrome.scripting.executeScript({
         target: { tabId: tabId },
         function: showAlert
       })
      } 
    })
  }
})

function showAlert() {
  alert('ペアプロしなくて大丈夫？')
}
