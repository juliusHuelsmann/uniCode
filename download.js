// ==UserScript==
// @name        Downloadall
// @namespace   Downloadall
// @description Download all
// @include     file:///C:/Users/juliu_000/
// @include     file://*
// @include     https://www.google.de/?gws_rd=ssl
// @version     1
// @grant       none
// ==/UserScript==


//
// Ein einfaches script was alle bilder von einem bestimmten datum von einem vom smartphone gehosteten 
// ftp server runterlaed.


var r = confirm("wirklich den ganzen kram runterladen?");
if (r == true) {
  
  var id = document.getElementsByClassName("file");
  for (var i = 0; i < id.length; i++) {
    var item = id[i];
    var filename = item.href;
    
    
    // check if the file is to be downloaded
    if (filename.endsWith('.jpg')) {
      var startindex = 42;
      var endindex = 8 + startindex;//filename.length;
      var imageidentifier = filename.substring(startindex, endindex)
      var imagename = filename.substring(startindex, filename.length)
     
      // so wegen replacement...
   //   var str = "Mr Blue has a blue house and a blue car";
   //   var res = str.replace(/blue/g, "red")
      var reference = 20160627;
      console.log(imageidentifier + "expected " + reference);
      if (imageidentifier ==  reference) {
    console.log("spottet item " + item.href);
        //downloadURL(filename, imagename);
        item.download=imagename;
        item.click();
      }
    }
  }
  console.log("hier nach loop");
  
} else {
  alert("Okay, habe ich abgebrochen!")
}
