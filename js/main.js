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
    //ģ�鶯��Ч��
    new WOW().init();

});