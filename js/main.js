/**
 * Created by Administrator on 2017/3/9 0009.
 */
$(function(){

    $('.nav').singlePageNav({
        offset:50
    });
    $('.nav a').click(function(){
        $('#navbar').collapse('hide');
    });
    //模块动画效果
    new WOW().init();

});