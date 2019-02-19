// jshint esversion: 6

updateFromCookie();

function save(){
  console.log("save");

  var x = "firstnme="+document.getElementById("fninput").value + ";" +
                  "lastname="+document.getElementById("lninput").value;
  // console.log(x);

  document.cookie = x;
  updateFromCookie();
}

function updateFromCookie(){
  // console.log("updateFromCookie");
  var x = decodeURIComponent(document.cookie);

  document.getElementById("cookiedata").innerHTML=x;
}
