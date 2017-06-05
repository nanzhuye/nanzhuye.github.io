$(document).ready(function(){
    //通过手机屏幕dpr和手机宽度来确定font-size的值

    (function autorun() {

        //初始值
        var default_font_size = 20;//默认字号
        var default_wh_4v3 = 1.33;//默认屏宽高比Number((4/3).toFixed(2))
        var default_wh_16v9 = 1.78;//默认屏宽高比16/9
        var default_wh_21v9 = 2.33;//默认屏宽高比21/9
        var default_font_Hscale = 0.0417;//默认缩放比iphone4横
        var default_font_Pscale = 0.0625;//默认缩放比iphone4竖

        //dpr倍数
        var dpr = window.devicePixelRatio;

        //浏览器宽
        var win_width = parseInt($(window).width());

        //浏览器高
        var win_height = parseInt($(window).height());

        //实际屏宽高比
        var win_wh = Number((win_width/win_height).toFixed(2));

        //是否横屏
        var isH = win_wh>1?true:false;

        //Html样式
        var html_style = '';

        //Body样式
        var body_style = '';

        //计算
        if (isH) {//手机或PC横屏
            if (win_wh>=default_wh_4v3) {
                // console.log('手机或PC横屏A');
                var f = win_height*1.33*default_font_Hscale;
                html_style = 'font-size:' + f + 'px';
            } else {
                // console.log('手机或PC横屏B');
                var f = win_width*default_font_Hscale;
                html_style = 'font-size:' + f + 'px';
            }


        } else {//手机或PC竖屏
            // console.log('手机或PC竖屏');
            var f = win_width*default_font_Pscale;
            html_style = 'font-size:' + f + 'px';

        }


        //进行dom操作

        $("html").attr('style', html_style);

        //$("body").attr('style', body_style);

    })()

})