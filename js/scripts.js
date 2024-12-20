/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("sportIcon").addEventListener("click", function sported() {
   window.location.href= "Sport.html";
});


document.getElementById("cultureIcon").addEventListener("click", function cultured() {
    window.location.href= "blog.html#HeritageDees";
 });

 document.getElementById("academicsIcon").addEventListener("click", function academicsed() {
    window.location.href= "Academics.html";
 });
 
 document.getElementById("rclIcon").addEventListener("click", function rcled() {
    window.location.href= "RCL.html";
 });

 document.getElementByClass("headerLogo").addEventListener("click", function toHome() {
    window.location.href= "index.html";
 });

document.getElementById("fbIcon").addEventListener("click", function referToFB(){
   window.location.replace= "https://www.facebook.com/p/Suncrest-Sunspot-100057459520420/"
});

document.getElementById("VRs").addEventListener("click", function erform(){
   alert("hi");
});

$('.carousel').carousel();

$('.carousel').carousel({
   interval: 2000
 });




 sported(); cultured();academicsed();rcled(); toHome(); referToFB();rToFB();erform();



function performer(){
if(document.getElementById("blogVshow").style.display = "block"){
alert("Display Block");
}
else{
alert("coming");
};
};





 


