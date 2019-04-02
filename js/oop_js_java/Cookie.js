// jshint esversion: 6






class Cookie {

  bake(){ console.log("baking cookie..."); }
}

class ChocolateCookie{

}

var c = new Cookie();
c.bake();

var cc = new ChocolateCookie();
cc.prototype = new Cookie();
