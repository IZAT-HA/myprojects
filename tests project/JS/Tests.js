// تغيير الخلفية 


var landingpage = document.querySelector('.Body');

var imgsArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
];

setInterval(() => {
    var randomNamber = Math.floor(Math.random() * imgsArray.length);
    landingpage.style.backgroundImage = 'url("../image/' + imgsArray[randomNamber] + '")';
}, 5000);

var currentLeft = 0;
var slider = document.getElementById('slide-track');
var minLeft = -300;



// تحريك السلايد يمين يسار


function nextSlide() {
    if (currentLeft > minLeft) {
        currentLeft = currentLeft - 100;
        slider.style.left = currentLeft + '%';

    }


}

function prevSlide() {
    if (currentLeft < 0) {
        currentLeft = currentLeft + 100;
        slider.style.left = currentLeft + '%';

    }
}

//  كود الألف سطر تخبيص يبدأ من هنا 


// slide 1
function yes1() {
    document.getElementById("yes1").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no1").style = " background-color: #fff;";
}

function yes2() {
    document.getElementById("yes2").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no2").style = " background-color: #fff;";

}

function yes3() {
    document.getElementById("yes3").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no3").style = " background-color: #fff;";

}

function yes4() {
    document.getElementById("yes4").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no4").style = " background-color: #fff;";

}

function yes5() {
    document.getElementById("yes5").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no5").style = " background-color: #fff;";

}

function no1() {
    document.getElementById("no1").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes1").style = " background-color: #fff;";
}

function no2() {
    document.getElementById("no2").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes2").style = " background-color: #fff;";

}

function no3() {
    document.getElementById("no3").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes3").style = " background-color: #fff;";

}

function no4() {
    document.getElementById("no4").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes4").style = " background-color: #fff;";

}

function no5() {
    document.getElementById("no5").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes5").style = " background-color: #fff;";

}

// slide 2


function yes6() {
    document.getElementById("yes6").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no6").style = " background-color: #fff;";
}

function yes7() {
    document.getElementById("yes7").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no7").style = " background-color: #fff;";

}

function yes8() {
    document.getElementById("yes8").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no8").style = " background-color: #fff;";

}

function yes9() {
    document.getElementById("yes9").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no9").style = " background-color: #fff;";

}

function yes10() {
    document.getElementById("yes10").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no10").style = " background-color: #fff;";

}


function no6() {
    document.getElementById("no6").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes6").style = " background-color: #fff;";
}

function no7() {
    document.getElementById("no7").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes7").style = " background-color: #fff;";

}

function no8() {
    document.getElementById("no8").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes8").style = " background-color: #fff;";

}

function no9() {
    document.getElementById("no9").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes9").style = " background-color: #fff;";

}

function no10() {
    document.getElementById("no10").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes10").style = " background-color: #fff;";

}



// slide 3


function yes11() {
    document.getElementById("yes11").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no11").style = " background-color: #fff;";
}

function yes12() {
    document.getElementById("yes12").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no12").style = " background-color: #fff;";

}

function yes13() {
    document.getElementById("yes13").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no13").style = " background-color: #fff;";

}

function yes14() {
    document.getElementById("yes14").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no14").style = " background-color: #fff;";

}

function yes15() {
    document.getElementById("yes15").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no15").style = " background-color: #fff;";

}

function no11() {
    document.getElementById("no11").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes11").style = " background-color: #fff;";
}

function no12() {
    document.getElementById("no12").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes12").style = " background-color: #fff;";

}

function no13() {
    document.getElementById("no13").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes13").style = " background-color: #fff;";

}

function no14() {
    document.getElementById("no14").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes14").style = " background-color: #fff;";

}

function no15() {
    document.getElementById("no15").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes15").style = " background-color: #fff;";

}


// slide 4
function yes16() {
    document.getElementById("yes16").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no16").style = " background-color: #fff;";
}

function yes17() {
    document.getElementById("yes17").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no17").style = " background-color: #fff;";

}

function yes18() {
    document.getElementById("yes18").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no18").style = " background-color: #fff;";

}

function yes19() {
    document.getElementById("yes19").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no19").style = " background-color: #fff;";

}

function yes20() {
    document.getElementById("yes20").style = " background-color: #4A99E1;color: white;";
    document.getElementById("no20").style = " background-color: #fff;";

}

function no16() {
    document.getElementById("no16").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes16").style = " background-color: #fff;";
}

function no17() {
    document.getElementById("no17").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes17").style = " background-color: #fff;";

}

function no18() {
    document.getElementById("no18").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes18").style = " background-color: #fff;";

}

function no19() {
    document.getElementById("no19").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes19").style = " background-color: #fff;";

}

function no20() {
    document.getElementById("no20").style = " background-color: #4A99E1;color: white;";
    document.getElementById("yes20").style = " background-color: #fff;";

}