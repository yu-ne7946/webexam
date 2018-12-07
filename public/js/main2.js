/**배너 베가스 */

$('.full-banner').vegas({
    delay: 3000,
    timer: false,
    shuffle: true,
    autoplay: true,
    loop:true,
    transition: 'fade',
    valign: 'bottom',
    transitionDuration: 2000,

    slides: [
        {
            src:'../images/banner/lake.jpg',
            video: {
                src: '../images/banner/lake.mp4',
                loop: true,
                mute: true
            }
        },
        {
            src:'../images/banner/lake.jpg',
            video: {
                src: '../images/banner/lake.mp4',
                loop: true,
                mute: true
            }
        },
    ],
    animation: 'keyburns',
    animationDuration:"auto",
    overlay: '../css/overlays/03.png',
    walk: function (i, slideSettings) {
        $(".main-content").fadeOut(100);
        $(".main-content").eq(i).fadeIn(100);
    }
});


/**mobile nav*/
$(window).scroll(function () {
    var gap = $(window).scrollTop();
    if (gap > 150) {
        if (!$(".header").hasClass("dn_bg")) {
            $(".header").css({
                "top": "-60px"
            }).addClass("dn_bg");
            $(".header").stop().animate({
                "top": "0px"
            }, 500);
        }
    } else {
        $(".header").css({
            "top": "-60px"
        }).removeClass("dn_bg");
        $(".header").stop().animate({
            "top": "0px"
        }, 500);

    }
});
$(".fa-bars").click(function () {
    $(".gnb_sub").stop().slideToggle(100);
});
/* Ajax 구조 
{"result":[
    {"title":"best","data":[{},{}]},
    {"title":"","data":[{},{}]},
    {"title":"","data":[{},{}]},
    {"title":"","data":[{},{}]},
    {"title":"","data":[{},{}]},
    {"title":"","data":[{},{}]}
    
    ]
    }
 */
var port = new Ajax("../json/port.json");
port.send(resultFn);
var portNav ;


function resultFn(data) {
    console.log(data);
    var html = '';
    var li;
    for (var i = 0; i < data.result.length; i++) {
        html = '<ul class="port_list clear">';
        for (var j = 0; j < data.result[i].data.length; j++) {
            li = data.result[i].data[j];
            html += '<li class="bot bot768">';
            html += '<div class="pt_box">';
            html += '<img src="'+li.img+'" class="img">';
            html += '<div class="pt_black">';
            html += '<div class="pt_border">';
            html += '<div class="pt_table">';
            html += '<div class="pt_cell right">';
            html += '<h2>'+li.ho_title[0]+'<br/>'+li.ho_title[1]+'</h2>';
            html += '<p>'+li.cont[0]+'<span>'+li.cont[1]+'</span> </p>';
            html += '<p class="detail">자세히</p>';
            html += '<h3 class="cell_title">'+li.title+'</h3>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</li>';
        }
        html += '</ul>';
        $(".port_list_box").append(html);
    }
/**포트폴리오 nav hover,click */


$(".port_list").stop().css({"top":"5rem", "opacity":0, "display":"none"});
$(".port_nav > li").click(function () {
   
    $(".port_list").eq(portNav).stop().animate({"top":"5rem", "opacity":0}, 500, function(){
        $(this).css({"display":"none"});
    });
    portNav = $(this).index();
    $(".port_list").eq(portNav).css({"display":"block"}).stop().animate({"top":0, "opacity":1}, 500);
    $(".port_nav > li").css({
        "color": "#666"
    });
    $(".port_nav .nav_line").css({
        "width": 0
    })
    $(this).css({
        "color": "#222"
    });
    $(this).children(".nav_line").css({
        "width": "100%"
    });
});


$(".port_nav > li").hover(function () {
    if ($(this).index() != portNav) {
        $(this).css({
            "color": "#222"
        });
        $(this).children(".nav_line").stop().animate({
            "width": "100%"
        }, 100)
    }
}, function () {
    if ($(this).index() != portNav) {
        $(this).css({
            "color": "#666"
        });
        $(this).children(".nav_line").stop().animate({
            "width": "0"
        }), 100
    }
});
$(".port_nav > li").eq(0).trigger("click");


/**포트폴리오 박스들 */
$(".pt_box").hover(function () {
    $(this).find(".pt_black").stop().animate({
        "top": "0%",
        "height": "100%"
    }, 400);

    $(this).find(".pt_border").stop().animate({
        "height": "95%",
        "margin": "2% auto 1%"
    }, 400);
    $(this).find(".cell_title").css({
        "bottom": "-0.2rem",
        "font-size": "0.9em"
    });
    $(this).find(".pt_cell h2").css("display", "block");
    $(this).find(".pt_cell p").css("display", "block");
    $(this).find(".detail").css("display", "block");
    $(".detail").hover(function () {
        $(this).css({
            "color": "#fff",
            "background-color": "#bd80f2"
        })
    }, function () {
        $(this).css({
            "color": "#000",
            "background-color": "transparent"
        })
    })

}, function () {
    $(this).find(".pt_black").stop().animate({
        "top": "40%",
        "height": "20%"
    }, 400);
    $(this).find(".pt_border").stop().animate({
        "width": "95%",
        "height": "60%",
        "margin": "3% auto 2%"
    }, 400);
    $(this).find(".cell_title").css({
        "bottom": "0.2rem",
        "font-size": "1.3em"
    });
    $(this).find(".pt_cell h2").css("display", "none");
    $(this).find(".pt_cell p").css("display", "none");
    $(this).find(".detail").css("display", "none");
});
}













// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjStabE0pYryBrCwywPl-nlwxiRguU0lM",
    authDomain: "yune-webexam.firebaseapp.com",
    databaseURL: "https://yune-webexam.firebaseio.com",
    projectId: "yune-webexam",
    storageBucket: "yune-webexam.appspot.com",
    messagingSenderId: "818997460867"
};
firebase.initializeApp(config);


/**전역변수 */
var auth = firebase.auth();
var db = firebase.database();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var ref;
var user;
var key = '';


/**구글로그인 */
$(".head_but .login").on("click", function () {
    auth.signInWithPopup(googleAuth);
    // auth.signInWithRedirect(googleAuth);
});


/**로그아웃 */
$(".logout").click(function () {
    auth.signOut();
})

auth.onAuthStateChanged(function (result) {
    if (result) {
        $(".login").hide();
        $(".logout").show();
        $("#bt_save").show();
        user = result;
        init();
    } else {
        $(".login").show();
        $(".logout").hide();
        $("#bt_save").hide();
        $(".head_but .login").show();
        $(".lists").empty();
    }
});

/**구글 로그인 후 초기셋팅 */
function init() {
    $(".head_but .login").hide();
    $(".lists").empty();
    ref = db.ref("root/memos/");
    ref.on("child_added", onAdd);
    ref.on("child_removed", onRev);
}

/**데이터 추가되면  */
function onAdd(data) {
    var id = data.key;
    var val = data.val();
    var html = ''
    html += '<li id="' + id + '">';
    html += '<h4>' + val.content + '</h4>';
    html += '<h5>' + val.email + '</h5>';
    html += '<button onclick="revData(this)"><i class="fa fa-trash"></i></button>';
    html += '</li>';
    $(".lists").prepend(html);
}

/**데이터 지워지면 */
function onRev(data) {
    $("#" + data.key).remove();
}

/**저장 버튼 클릭 */
$("#bt_save").click(function () {
    var content = $("#content").val();
    if (content == "") {
        alert("내용을 입력해주세요");
        $("#content").focus();
    } else {
        ref = db.ref("root/memos/");
        ref.push({
            content: content,
            wdate: new Date().getTime(),
            email: user.email
        }).key;
        $("#content").val("");
    }
});

/**쓰레기통버튼 클릭했을 때 실행되는 함수 */
function revData(obj) {
    var id = $(obj).parent().attr("id");
    if ($(obj).parent().find("h5").html() == user.email) {
        ref = db.ref("root/memos/" + id);
        ref.remove();
    } else {
        alert("타인의 글은 삭제 할 수 없습니다.")
    }
};
/* $(".pt_cell").hover(function () {
    $(".pt_black").css({
        "background-color": "rgba(0,0,0,0.6)",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    });
    $(".pt_border").css({
        "border": "1.5px solid #fff",
        "width": "90%",
        "height": "90%",
        "margin": "4% auto 0"
    });
    $(".cell_title").css({
        "position": "absolute",
        "z-index": 11,
        "bottom": "-7%",
        "left": "50%",
        "transform": "translate(-50%,7%)",
        "font-size": "1.5625em"
    });
    $(".pt_cell h2").css("display", "block");
    $(".pt_cell p").css("display", "block");
    4(".detail").css("display", "block");
}, function () {
    $(".pt_black").css({
        "background-color": "rgba(0,0,0,0.6)",
        "position": "absolute",
        "top": "50%",
        "left": 0,
        "width": "100%",
        "height": "20%"
    });
    $(".pt_border").css({
        "border": "1.5px solid #fff",
        "width": "90%",
        "height": "50%",
        "margin": "4% auto 0"
    });
    $(".cell_title").css({
        "position": "absolute",
        "bottom": "-25%",
        "left": "50%",
        "transform": "translate(-50%,25%)",
        "font-size": "1.5625em"
    });
    $(".pt_cell h2").css("display", "none");
    $(".pt_cell p").css("display", "none");
    4(".detail").css("display", "none");

}); */

/*
.pt_black{top:0; height:100%;}
.pt_border{height:90%;}
*/


var data = [{
        datasets: [{
            data: [100],
            backgroundColor: [
                'rgba(121, 72, 163, 1)'
            ],

        }]
    }, {
        datasets: [{
            data: [100],
            backgroundColor: [
                'rgba(121, 72, 163, 1)'
            ],

        }]
    }, {
        datasets: [{
            data: [100],
            backgroundColor: [
                'rgba(121, 72, 163, 1)'
            ],
        }]
    },
    {
        datasets: [{
            data: [100],
            backgroundColor: [
                'rgba(121, 72, 163, 1)'
            ],
        }]
    },
    {
        datasets: [{
            data: [100],
            backgroundColor: [
                'rgba(121, 72, 163, 1)'
            ],
        }]
    },
    {
        datasets: [{
            data: [100],
            backgroundColor: [
                'rgba(121, 72, 163, 1)'
            ],
        }]
    }
];

var option = [{

        cutoutPercentage: 70,
        rotation: 1.5 * Math.PI,
        circumference: 1.4 * Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        },
        layout: {
            padding: 0
        },
        aspectRatio: 1
    },
    {

        cutoutPercentage: 70,
        rotation: 1.5 * Math.PI,
        circumference: 1.4 * Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        },
        layout: {
            padding: 0
        },
        aspectRatio: 1
    },
    {

        cutoutPercentage: 70,
        rotation: 1.5 * Math.PI,
        circumference: 1.8 * Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        },
        layout: {
            padding: 0
        },
        aspectRatio: 1
    },
    {

        cutoutPercentage: 70,
        rotation: 1.5 * Math.PI,
        circumference: 1.8 * Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        },
        layout: {
            padding: 0
        },
        aspectRatio: 1
    },
    {

        cutoutPercentage: 70,
        rotation: 1.5 * Math.PI,
        circumference: 1.6 * Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        },
        layout: {
            padding: 0
        },
        aspectRatio: 1
    },
    {

        cutoutPercentage: 70,
        rotation: 1.5 * Math.PI,
        circumference: 1.6 * Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        },
        layout: {
            padding: 0
        },
        aspectRatio: 1
    },
];

var chart = [];
var ctx = $(".chart");
var chartChk = true;
function chartInit() {
    if(chartChk) {
        ctx.each(function (i) {
            chart[i] = new Chart($(this), {
                type: 'doughnut',
                data: data[i],
                options: option[i]
            });
        });
        chartChk = false;
    }
}

var spaAni = new SpaAni(".pages", ".chart_ani", 300, chartInit);
