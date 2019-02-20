// jshint esversion: 6

updateFromCookie();

function save(){
  document.cookie = "firstnme="+document.getElementById("fninput").value;
  document.cookie = "lastname="+document.getElementById("lninput").value;
  updateFromCookie();
}

function updateFromCookie(){
  document.getElementById("cookiedata").innerHTML = decodeURIComponent(document.cookie);
}
