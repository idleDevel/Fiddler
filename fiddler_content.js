/*Copyright (c) 2016 Jakob Edwards
See License file for re-use permissions
I couldn't find a license for the code I barrowed and modified,
so I included a link to it. Anyone can see the differences now*/
if(location.hostname == "jsfiddle.net"){
location.protocol = "https:";
location.hostname = "fiddle.jshell.net";
reload();
}

/*Yeah, so, long story short the iframes are hosted here, and
it's vital to be in the same domain for things to work.*/
//Is it poor-form to not have an else statement? Seemed unneccessary.

var menuDiv = document.createElement("div");
  menuDiv.setAttribute('class', 'actionItem');
var menuAnchor = document.createElement("a");
  menuAnchor.setAttribute('class', 'aiButton');
  menuAnchor.setAttribute('id','menuBTN');
  menuAnchor.setAttribute('href', '#');

var menuText = document.createTextNode("Download");
  menuAnchor.appendChild(menuText);
  menuDiv.appendChild(menuAnchor);
  
//I can't add to the properties after it's appended
var nav = document.getElementById("actions");
  nav.appendChild(menuDiv);

var code = document.createElement("textarea");
  code.setAttribute('style','visibility = hidden;');
  code.setAttribute('id','code');
var body = document.getElementsByTagName("body")[0];
  body.appendChild(code);


document.getElementById("menuBTN").addEventListener("click", saveFile);
//Had a massive crash so, this'll stay. Wish I had comitted this to github earlier so that
//my revision history would be available.

/*Begin Code Modified from:
https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
In case anyone wants to check out their work (it's awesome!)*/
function saveFile()
  {
    //To Reduce Headache, I'm encapsulating my specific code in here
    var iframe = document.getElementsByTagName("IFRAME")[0];
    var result = iframe.contentWindow.document.getElementsByTagName("html")[0];
    var node = document.importNode(result, true).innerHTML;
    document.getElementById("code").value = node;
      // I just don't want to deal with global variables. Okay?
    //Rest of this has had names and the like adjusted.
    var saveTextValue = document.getElementById("code").value;

    var saveTextValueBlob = new Blob([saveTextValue], {type:"text/html"});

    var saveTextValueURL = window.URL.createObjectURL(saveTextValueBlob);
    var saveFileName = "myFiddle";
    
    var downloadLink = document.createElement("a");
    downloadLink.download = saveFileName;
    downloadLink.href = saveTextValueURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
}

function destroyClickedElement(event)
  {
    document.body.removeChild(event.target);
}
/*End Copied Code
I would like to find a more concise way in which to write it,
but it works for now and as of about 4AM I think I figured out how it works.
Things can only be done so many ways, anyhow.*/