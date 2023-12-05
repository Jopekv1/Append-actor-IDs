function getActorPage(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    parser = new DOMParser();
    return parser.parseFromString(request.responseText,"text/html"); 
}
var castList = document.getElementsByClassName("cast_list")[0].children[0].children
for (let i = 0; i < castList.length; i++) {
  let photo = castList[i].getElementsByClassName("primary_photo")
  if(photo.length == 0){
    continue;
  }
  var actorPage = getActorPage(photo[0].children[0].href);
  var info = actorPage.getElementsByClassName("hero__primary-text-suffix");
  if(info.length == 0){
    continue;
  }
  castList[i].getElementsByTagName("td")[1].getElementsByTagName("a")[0].innerText+=info[0].innerText;
}

var producentList = document.getElementsByClassName("name")
for (let i = 0; i < producentList.length; i++) {  
  let producent = producentList[i].children[0]
  var actorPage = getActorPage(producent.href);
  var info = actorPage.getElementsByClassName("hero__primary-text-suffix");
  if(info.length == 0){
    continue;
  }
  producent.innerText+=info[0].innerText;
}