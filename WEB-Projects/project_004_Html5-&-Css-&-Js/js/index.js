//function darck(){
//    var amountSun  = document.getElementById("sun").style="display: block", 
//        amountDarck = document.getElementById("darck").style="display: none",   mainStyle=document.getElementById("main-all").style=" border-bottom-left-radius: 0%;border-bottom-right-radius: 00%;background-image: url(https://assets.codepen.io/1462889/web-app-back.svg);",     
//        borderContinar=document.getElementById("continar").style=" border: 0px solid #e6e6e6;",   borderContinar=document.getElementById("home").style=" border: 0px solid #e6e6e6;";
//   
//}
//function sun(){
//    var amountSun = document.getElementById("darck").style=
//        "display: block", 
//        mainStyle=document.getElementById("main-all").style=
//        "background-image: url(https://assets.codepen.io/1462889/back-page.svg);", amountDarck= document.getElementById("sun").style="display: none;",
//         borderContinar=document.getElementById("continar").style=" border: 1px solid #e6e6e6;",
//        borderContinar=document.getElementById("home").style="border: 1px solid #e6e6e6;"; 
//  
//}
//--------------------------------------------------------------------------------------------------



 var spanLinel=document.getElementById("line-left"),
         spanLiner=document.getElementById("line-right"),
         underlineSpan=document.getElementById("underline"),
         closeNone=document.getElementById("none"),
         clsDiv=document.getElementById("cls"),
         test=document.getElementById("test"),
         valueInput=document.getElementById("enter");

function menu(){
    "use strict";
     var a = spanLinel,
         b = spanLiner,
         c = underlineSpan,
         d = closeNone,
         e = clsDiv,
         f =  test;    
        f.style="transition: 1s all;transform:rotate(0deg);opacity: 1;"
        a.style="transform:rotate(50deg);top: 12px;background-color: red";
        b.style=" transform:rotate(-50deg);position:absolute;top: 0px;background-color: red";
        c.style=" width: 5px;background-color: #fff";
        e.style=";z-index:9999; opacity:1";
    
   var func = function g(){
            "use strict";  
        a.style="transform:rotate(0deg);top: 12px;background-color: #000";
        b.style=" transform:rotate(0deg);position: absolute;top:17px;;background-color: #000";   f.style="transition: 1s all;opacity: 0;"
        c.style="opacity:1;  transition: 1s all;";
        e.style=" opacity:0";
   };

   e.onclick = func;
    
} 



//------------------------------------------------------------------------------------



