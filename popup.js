document.getElementById('saveUrl').addEventListener('click', function () {
  const url = document.getElementById('inputUrl').value;
  chrome.storage.local.set({ url: url });
})
