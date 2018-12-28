var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}



/** 메인 네비게이션 분기 **/
var pages = [];
var now = 0;
$(window).resize(function(){
    $(".pages").each(function(i){
        pages[i] = $(this).position().top;
    });
}).trigger("resize");

$(".gnb").children("li").click(function(){
    now = $(this).index();
    $("html, body").stop().animate({"scrollTop":pages[now]+"px"}, 300);
});

$(".gnb_sub").children("li").click(function(){
    now = $(this).index();
    $("html, body").stop().animate({"scrollTop":pages[now]+"px"}, 300, function(){
        $(".gnb_sub").stop().slideUp(100);
    });
});


/**배너 베가스 */

$('.full-banner').vegas({
    delay: 4000,
    timer: false,
    shuffle: false,
    autoplay: true,
    loop:true,
    transition: 'fade',
    valign: 'center',
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
        {  src:'../images/banner/business.jpg'},
        {  src:'../images/banner/media.jpg'},
        {  src:'../images/banner/Canada2.jpg'},
        {  src:'../images/banner/job_search.jpg'},
        {  src:'../images/banner/webp.jpg'}
    ],
    animation: 'kenburns',
    animationDuration:"auto",
    overlay: '../css/overlays/06.png',
    walk: function (i, slideSettings) {
        $(".main-content").fadeOut(100);
        $(".main-content").eq(i).fadeIn(100);
    }
});

/**************************/
/**quote animation  */
/**************************/
// Wrap every letter in a span
$('.ml3').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: function(el, i) {
        return 150 * (i+1)
      }
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
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

var port = new Ajax("../json/port.json");
var nowPage = 1;
var divPage = 9;
if(isMobile) divPage = 6;
var stPage = (nowPage - 1) * divPage;
var edPage = stPage + divPage;
var portNum = 0;

$(".port_nav > li").click(function(){
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
    portNum = $(this).index();
    nowPage = 1;
    stPage = (nowPage - 1) * divPage;
    edPage = stPage + divPage;
    port.send(resultFn);
});
$(".port_nav > li").eq(0).trigger("click");

$(".port_nav >li").mouseenter(function(){
    if ($(this).index() != portNum) {
        $(this).css({
            "color": "#222"
        });
        $(this).children(".nav_line").stop().animate({
            "width": "100%"
        }, 100)
    }
});

$(".port_nav >li").mouseleave(function(){
    if ($(this).index() != portNum) {
        $(this).css({
            "color": "#666"
        });
        $(this).children(".nav_line").stop().animate({
            "width": "0"
        }), 100
    }
})


function resultFn(data) {
    //console.log(data);
    var html = '';
    var li;
    var forEnd = 0;    
    $(".port_bt").empty();
    for(var i=0; i<Math.ceil(data.result[portNum].data.length/divPage); i++){
        html += '<i class="fa fa-circle" aria-hidden="true"></i>';
    }
    $(".port_bt").append(html);
    $(".port_bt > i").click(function(){
        nowPage = $(this).index()+1;
        stPage = (nowPage - 1) * divPage;
        edPage = stPage + divPage;
        port.send(resultFn);
    });


    $(".port_list_box").empty();
    if(data.result[portNum].data.length > edPage) forEnd = edPage;
    else forEnd = data.result[portNum].data.length;

    html = '<ul class="port_list clear">';
    for (var j = stPage; j < forEnd; j++) {
        li = data.result[portNum].data[j];
        html += '<li class="bot bot768">';
        if(li.target == "modal") html += '<a onclick="modalOpen(this);" data-modal="'+li.address+'">';
        else if(li.target == "link") html += '<a href="'+li.address+'" target="_blank">';
        html += '<div class="pt_box">';
        html += '<img src="'+li.img+'" class="img">';
        html += '<div class="pt_black">';
        html += '<div class="pt_border">';
        html += '<div class="pt_table">';
        html += '<div class="pt_cell">';
        html += '<h2>'+li.ho_title[0]+'<br/>'+li.ho_title[1]+'</h2>';
        html += '<p>'+li.cont[0]+'<span>'+li.cont[1]+'</span> </p>';
        // html += '<p class="detail">자세히</p>';
        html += '<h3 class="cell_title">'+li.title+'</h3>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        if(li.target == "modal") html += '</a>';
        else if(li.target == "link") html += '</a>';
        html += '</li>';
    }
    html += '</ul>';
    $(".port_list_box").append(html);
    $(".port_list").css({"margin-top":"5rem", "opacity":0, "display":"none"});
    $(".port_list").css({"display":"block"}).stop().animate({"margin-top":0, "opacity":1}, 500);
/**포트폴리오 nav hover,click */
/*
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
*/


/**포트폴리오 박스들 */


$(".pt_box").mouseenter(function(){
    $(this).find(".pt_black").stop().animate({
        "top": "0%",
        "height": "100%"
    }, 400);

    $(this).find(".pt_border").stop().animate({
        "height": "95%",
        "margin": "2% auto 1%"
    }, 400);
    $(this).find(".cell_title").css({
        "top": "90%",
        "font-size": "0.9em"
    });
    $(this).find(".pt_cell h2").css("display", "block");
    $(this).find(".pt_cell p").css("display", "block");
});


$(".pt_box").mouseleave(function(){
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
        "top": "50%",
        "font-size": "1.3em"
    });
    $(this).find(".pt_cell h2").css("display", "none");
    $(this).find(".pt_cell p").css("display", "none");
})
};

function modalOpen(obj) {
    console.log("떠라");
    var src = $(obj).data("modal");
    $(".modal_cont").children("img").attr("src", src);
    $(".modal_wrap").css({"display":"table"});
    /* $(".modal_cont").css({"margin-top":"200px", "opacity":0});
    $(".modal_cont").stop().animate({"margin-top":0, "opacity":1}, 200); */
}

function modalClose() {
    $(".modal_wrap").css({"display":"none"});
}


$(".modal_wrap, .modal_cont").on('mousewheel DOMMouseScroll', function(e){
    window.event.stopPropagation();
});








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
$(".login").on("click", function () {
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