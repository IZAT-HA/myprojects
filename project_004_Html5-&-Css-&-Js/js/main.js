//start slide image
var image1=document.getElementById("image1"),
 image2=document.getElementById("image2"),
 image3=document.getElementById("image3"),
 image4=document.getElementById("image4"),
 image5=document.getElementById("image5")
 mask=document.getElementById("mask");
var myfunctionimg1=function slide_img1(){
    "use strict";
    mask.style="background-color: #679ff35c;transition: 1s all;opacity:.5;";
    image1.style="opacity:1;z-index: 99999;transition: 1s all;";
    image2.style="opacity:0;z-index: -1;transition: 1s all;";
    image3.style="opacity:0;z-index: -1;transition: 1s all;";
    image4.style="opacity:0;z-index: -1;transition: 1s all;";
    image5.style="opacity:0;z-index: -1;transition: 1s all;";


};
var myfunctionimg2=function slide_img2(){
    "use strict";
    mask.style="background-color:#c1b0b06b;transition: 1s all;opacity:.5";
    image1.style="opacity:0;z-index: -1;transition: 1s all;";
    image2.style="opacity:1;z-index: 99999;transition: 1s all;";
    image3.style="opacity:0;z-index: -1;transition: 1s all;";
    image4.style="opacity:0;z-index: -1;transition: 1s all;";
    image5.style="opacity:0;z-index: -1;transition: 1s all;";
  

};
var myfunctionimg3=function slide_img3(){
    "use strict";
    mask.style="background-color: #3a39369c;transition: 1s all;opacity:.5";
    image1.style="opacity:0;z-index: -1;transition: 1s all;";
    image2.style="opacity:0;z-index: -1;transition: 1s all;";
    image3.style="opacity:1;z-index: 99999;transition: 1s all;";
    image4.style="opacity:0;z-index: -1;tra#9e8542nsition: 1s all;";
    image5.style="opacity:0;z-index: -1;transition: 1s all;";


};
var myfunctionimg4=function slide_img4(){
    "use strict";
    mask.style="background-color:#dfa26491;transition: 1s all;opacity:.5";
    image1.style="opacity:0;z-index: -1;transition: 1s all;";
    image2.style="opacity:0;z-index: -1;transition: 1s all;";
    image3.style="opacity:0;z-index: -1;transition: 1s all;";
    image4.style="opacity:1;z-index: 9999;transition: 1s all;";
    image5.style="opacity:0;z-index: -1;transition: 1s all;";
  

};
var myfunctionimg5=function slide_img5(){
    "use strict";
    image1.style="opacity:0;z-index: -1;transition: 1s all;opacity:.3";
    image2.style="opacity:0;z-index: -1;transition: 1s all;";
    image3.style="opacity:0;z-index: -1;transition: 1s all;";
    image4.style="opacity:0;z-index: -1;transition: 1s all;";
    image5.style="opacity:1;z-index: 99999;transition: 1s all;";
    mask.style="background-color: #fc010059;transition: 1s all";

};

        setInterval( myfunctionimg1,4000);
        setInterval( myfunctionimg2,8000);
        setInterval( myfunctionimg3,12000);
        setInterval( myfunctionimg4,16000);
        setInterval( myfunctionimg5,20000);
   

        //END SLIDE IMAGE 
        



    //start slide in box right 

    var 
    PhotoBox=document.getElementById("photo-box"),
    GallBox=document.getElementById("gall-box"),
    GroupsBox=document.getElementById("groups-box"),
    AboutBox=document.getElementById("about-box"),
    followers=document.getElementById("followers"),
    Foll=document.getElementById("foll");

    function ph() {
        PhotoBox.style="opacity:1;z-index: 3;transition: 1s all;",
        GallBox.style="opacity:0;z-index: -1;transition: 1s all;"
        GroupsBox.style="opacity:0;z-index: -1;transition: 1s all;",
        AboutBox.style="opacity:0;z-index: -1;transition: 1s all;"

    }
    function gall() {
        PhotoBox.style="opacity:0;z-index: -1;transition: 1s all;",
        GallBox.style="opacity:1;z-index: 3;transition: 1s all;"
        GroupsBox.style="opacity:0;z-index: -1;transition: 1s all;",
        AboutBox.style="opacity:0;z-index: -1;transition: 1s all;"

    }
    function group() {
        PhotoBox.style="opacity:0;z-index: -1;transition: 1s all;",
        GallBox.style="opacity:0;z-index: -1;transition: 1s all;"
        GroupsBox.style="opacity:1;z-index: 3;transition: 1s all;",
        AboutBox.style="opacity:0;z-index: -1;transition: 1s all;"

    }
    function about() {
        PhotoBox.style="opacity:0;z-index: -1;transition: 1s all;",
        GallBox.style="opacity:0;z-index: -1;transition: 1s all;"
        GroupsBox.style="opacity:0;z-index: -1;transition: 1s all;",
        AboutBox.style="opacity:1;z-index: 3;transition: 1s all;"

    }
    console.log(followers.textContent)
    console.log(typeof(parseInt(followers.textContent,10)));


    var x=parseFloat(followers.textContent,10);
    console.log(typeof(x));
    function foollowe() {
        followers.textContent=x +0.001 ;
        Foll.style="background-color: white;border-color:#ba07bd ;color: black";


        console.log(followers.textContent)
    }
    console.log(followers.textContent)


        