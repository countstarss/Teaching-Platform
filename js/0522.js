// $(function() {
//     $(window).scroll(function() {
//         if ($(window).scrollTop() >= 500) {
//             $(".backtop").fadeIn(100)
//             console.log("niaho");
//         }
//         if ($(window).scrollTop() < 500) {
//             $(".backtop").fadeOut(100)
//         }
//     })
//     $(".backtop").click(function() {
//         $("html").animate({
//             screenTop: 0,
//         }, 300)
//     })
// }())


//自执行函数 ：js作用域是函数级别的
$(function() {

    //什么时候回到顶部
    $("window").scroll(function() {
        //滑动一定距离时，再出现
        if ($("window").scrollTop() >= 500) {
            $(".backtop").fadeIn(100)
        }
        if ($("window").scrollTop() < 500) {
            $(".backtop").fadeOut(100)
        }
    })
    $(".backtop").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 300)
    })
}())