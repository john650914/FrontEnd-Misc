document.getElementById("openTabs").addEventListener("click", () => {
  const textarea = document.getElementById("urls");
  const urls = textarea.value.split("\n").map(url => url.trim()).filter(url => url);

  for (const url of urls) {
    chrome.tabs.create({ url });
  }
});