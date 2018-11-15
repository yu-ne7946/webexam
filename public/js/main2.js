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