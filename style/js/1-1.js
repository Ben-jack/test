$(function() {
    // alert(11);

    $(window).scroll(function() {
            // toggleTool();
            // 页面滚动到某个内容区域，左侧导航小li相应的添加和删除current类名
            $(".box_1").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $(".nav-1 ul li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        })
        // 电梯导航页面可以滚动到相应的内容区域
    $(".nav-1 ul li").on("click", function() {
        // console.log($(this).index());
        var current = $(".box_1").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        });
        // 点击之后，让当前的小li添加current类名，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })

});