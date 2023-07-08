window.addEventListener(
    "wheel",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);

var isScrolling = false; // 추가된 변수

$(window).on("wheel", function (e) {
    console.log(e.originalEvent.deltaY);
    if ($html.is(":animated")) {
        console.log("stop");
        return;
    }

    if (isScrolling) {
        // 추가된 조건문
        return;
    } else {
        if (e.originalEvent.deltaY > 0) {
            if (page == 4) return; // 수정된 조건문
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        // console.log(posTop);

        isScrolling = true; // 추가된 코드

        $html.animate({ scrollTop: posTop }, function () {
            isScrolling = false; // 추가된 코드
        });
    }
});
