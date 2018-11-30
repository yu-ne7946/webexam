


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
  
  /**전역함수 */


  /**구글로그인 */
  $(".login button").on("click", function(){
	// auth.signInWithPopup(googleAuth);
	auth.signInWithRedirect(googleAuth);
});

/**로그아웃 */
$(".logout").click(function(){
    auth.signOut();
})

auth.onAuthStateChanged(function(result){
    
    if(result){ /**user값이 있으면  */
        user = result;
        init();
    }
    else{
        $(".login").show();
        $(".wrap").hide();
        $(".lists").empty();
    }
});

/**구글 로그인 후 초기셋팅 */
function init(){
    $(".login").hide();
    $(".wrap").show();
    $(".lists").empty();
    ref = db.ref("root/memos/"); /**memos는 방금 생성함 */
    ref.on("child_added",onAdd);
    ref.on("child_removed",onRev);
}

function onAdd(data){
    var id = data.key;
    var val = data.val();
    var html = '';
    
    html += '<li id = "'+ id+'">';
    html += '<h4>'+val.content+'</h4>'
    html +='<h5>'+val.email+'</h5>';
    html +='<button onclick="revData(this)"><i class="fa fa-trash"></i></button>';
    html +='</li>';
    $(".lists").prepend(html);
}

function onRev(data){
$("#" + data.key).remove();
}

$("#bt_wr").click(function(){
    var content = $("#content").val();
    if(content == ""){
        alert("내용을 입력하세요.");
        $("#content").focus();
    }
    else{
        ref = db.ref("root/memos/");
        ref.push({
			content: content,
            wdate: new Date().getTime(),
        email : user.email}).key;
        $("#content").val("");
    }
});

function revData(obj){
    var id = $(obj).parent().attr("id");
    if($(obj).parent().find("h5").html() == user.email){
    ref = db.ref("root/memos/" + id);
    ref.remove();}
    else{
        alert("타인의 글은 삭제할 수 없습니다.")
    }
};