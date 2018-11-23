var SpaAni = (function(){
    function SpaAni(_page,_elem,_gap){
        var obj = this;      
        this.page = $(_page);
        this.elem = _elem;
        this.scTop = 0;
        this.pos = [];
        this.now= 0;
        this.gap = _gap;
        
        $(window).resize(function(){
            for(var i=0; i<obj.page.length; i++){
                obj.pos[i] = $(obj.page[i]).position().top;
                }
                console.log(obj.pos);/*현재페이지가 위로부터 얼마나 떨어져 있는지 . 3개의 값 */
        }).trigger("resize");
        $(window).scroll(function(){
        obj.scTop = $(this).scrollTop();
        obj.init(obj);
        console.log(obj.scTop);
        }).trigger("scroll");
        
    }
    SpaAni.prototype.init = function(obj){
      for(var i=0; i<obj.page.length; i ++){
          if(obj.scTop+obj.gap>obj.pos[i])obj.now = i;
      }
     $(obj.page[obj.now]).find(obj.elem).each(function(){
         var cls = $(this).data("ani");
         $(this).addClass(cls);
     });
    };
    return SpaAni;
}());
       