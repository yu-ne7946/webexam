

$(".pt_box").hover(function(){
    $(this).find(".pt_black").stop().animate({"top":"0%", "height":"100%"}, 400);
  
    $(this).find(".pt_border").stop().animate({"height":"95%","margin":"2% auto 1%"}, 400);
    $(this).find(".cell_title").css("bottom","-15px");
    $(this).find(".pt_cell h2").css("display","block");
    $(this).find(".pt_cell p").css("display","block");
    $(this).find(".detail").css("display","block");

}, function(){
    $(this).find(".pt_black").stop().animate({"top":"40%", "height":"20%"}, 400);
    $(this).find(".pt_border").stop().animate({"width":"95%","height":"60%","margin":"3% auto 2%"}, 400);
    $(this).find(".cell_title").css("bottom","-12px");
    $(this).find(".pt_cell h2").css("display","none");
    $(this).find(".pt_cell p").css("display","none");
    $(this).find(".detail").css("display","none");
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
  var auth=firebase.auth();
  var db= firebase.database();
  var googleAuth = new firebase.auth.GoogleAuthProvider();
  var ref;
  var user;
  var key = '';


    /**구글로그인 */
    $(".head_but .login").on("click", function(){
        // auth.signInWithPopup(googleAuth);
        auth.signInWithRedirect(googleAuth);
    });


/**로그아웃 */
$(".out .logout").click(function(){
    auth.signOut();
})

auth.onAuthStateChanged(function(result){
    if(result){
        user = result;
        init();
    }
    else{
        $(".head_but .login").show();
        $(".lists").empty();
    }
});

/**구글 로그인 후 초기셋팅 */
function init(){
    $(".head_but .login").hide();
    $(".lists").empty();
    ref = db.ref("root/memos/");
    ref.on("child_added",onAdd);
    ref.on("child_removed",onRev);
}

/**데이터 추가되면  */
function onAdd(data){
    var id =data.key;
    var val = data.val();
    var html = ''
    html += '<li id="'+ id +'">';
    html += '<h4>'+ val.content +'</h4>';
    html += '<h5>'+ val.email +'</h5>';
    html += '<button onclick="revData(this)"><i class="fa fa-trash"></i></button>';
    html += '</li>';
    $(".lists").prepend(html);
}

/**데이터 지워지면 */
function onRev(data){
    $("#" + data.key).remove();
}

/**저장 버튼 클릭 */
$("#bt_save").click(function(){
    var content = $("#content").val();
    if(content == ""){
        alert("내용을 입력해주세요");
        $("#content").focus();
    }
    else{
        ref = db.ref("root/memos/");
        ref.push({
            content : content,
            wdate : new Date().getTime(),
            email : user.email
        }).key;
        $("#content").val("");
    }
});

/**쓰레기통버튼 클릭했을 때 실행되는 함수 */
function revData(obj){
  var id = $(obj).parent().attr("id");
  if($(obj).parent().find("h5").html() == user.email){
      ref = db.ref("root/memos/" + id);
      ref.remove();
  }
  else{
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
