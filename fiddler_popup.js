var htmlCode = document.getElementById("id_code_html"); //subject to change, loads HTML element from webpage
var cssCode = document.getElementById("id_code_css"); //subject to change, loads CSS element from webpage
var jsCode = document.getElementById("id_code_js"); //subject to change, loads JS element from webpage
var jQueryElement = document.getElementById("jQuery"); //allows script to load jQuery, ability to add other libraries is needed
var htmlElement1 = document.getElementById("html1"); //begins html, head, and style tags
var htmlElement2 = document.getElementById("html2"); //ends style tag
var htmlElement3 = document.getElementById("html3"); //ends head tag, begins body tag
var htmlElement4 = document.getElementById("html4"); //begins script tag
var htmlElement5 = document.getElementById("html5"); //ends script, body, and html tags
document.getElementById("demo").innerHTML = htmlElement1.innerHTML +
  cssCode.innerHTML + htmlElement2.innerHTML + jQueryElement.innerHTML + htmlElement3.innerHTML + htmlCode.innerHTML +
  htmlElement4.innerHTML + jsCode.innerHTML + htmlElement5.innerHTML;

  function saveTextAsFile()
  {
  var textToSave = document.getElementById("demo").value;
  var textToSaveAsBlob = new Blob([textToSave], {type:"text/html"});
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
  }

  function destroyClickedElement(event)
  {
      document.body.removeChild(event.target);
  }
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});
