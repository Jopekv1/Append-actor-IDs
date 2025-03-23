function getActorPage(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    parser = new DOMParser();
    return parser.parseFromString(request.responseText,"text/html"); 
}
var castList = document.getElementsByClassName("ipc-link ipc-link--base name-credits--title-text name-credits--title-text-big")
  console.log("Found " + castList.length + " entries");
for (let i = 0; i < castList.length; i++) {
  console.log("Start processing " + i);
  
  let actorElement = castList[i];
  
  var actorPage = getActorPage(actorElement.href);
  console.log("Downloaded actor page");
  
  var info = actorPage.getElementsByClassName("hero__primary-text-suffix");
  console.log("Obtain suffix");
  
  if(info.length == 0){
    console.log("Finished processing " + i + " no suffix found");
    continue;
  }
  
  actorElement.innerText+=info[0].innerText;
  console.log("Finished processing " + i + " suffix added");
}