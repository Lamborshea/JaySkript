function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName = newClassName + "";
    newClassName = newClassName + value;
    element.className = newClassName;
  }
}

function highlightPage() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  var headers = document.getElementsByTagName("header");
  if (headers.length == 0) return false;
  var navs = headers[0].getElementsByTagName("nav");
  if (navs.length == 0) return false;
  var links = navs[0].getElementsByTagName("a");
  var linkurl;
  for (var i = 0; i < links.length; i++) {
    linkurl = links[i].getAttribute("href");
    //indexOf方法用于在字符串中寻找子字符串的位置。如果没有匹配到，indexOf方法将返回-1.如果返回其他值，则表示匹配了。
    if (window.location.href.indexOf(linkurl) != -1) {
      links[i].className = "here";
      var linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("id",linktext);
    }
  }
}

addLoadEvent(highlightPage);







//
