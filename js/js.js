/**
 * Created by a on 2017/3/4.
 */

    $(function(){
        var div = $("#box");
        $('body').keydown(function(e){
            switch(e.keyCode){
                case 37:{
                    if(div.offset().left<=0){
                        $('#box').css('left',"0px");
                    }else{
                        $('#box').css('left',"-=20px");
                    }
                };break;

                case 38:{
                    if(div.offset().top<=0){
                        $('#box').css('top',"0px");
                    }else{
                        $('#box').css('top',"-=20px");
                    }
                };break;

                case 39:$('#box').css('left',"+=20px");break;

                case 40: $('#box').css('top',"+=20px");break;
            }
        }) ;
    });
