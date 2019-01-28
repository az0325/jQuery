$(document).ready(function () {
    $(".guess_box").click(checkForCode);

    function getRandom(num) {
        var my_num = Math.floor(Math.random() * num);
        return my_num;
    }

    var hideCode = function aa() {
        var numRand = getRandom(4);
        $(".guess_box").each(function (index, value) {
            if (numRand == index) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }

    hideCode();

    function checkForCode() { //할인 코드 체크
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) { 
            //contains : 매개변수가 가리키는 것을 포함하는지 확인하는 jQuery 메소드
            var my_num = getRandom(100);
            discount = "<p>" + my_num + "% 할인되었습니다 </p>";
        } else {
            discount = "<p>할인이 종료되었습니다</p>";
        }

        $(".guess_box").each(function () { //루프
            if ($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            } else {
                $(this).addClass("no_discount");
            }
            $(this).unbind(); //이벤트 전체 제거
        });

        $("#result").append(discount); //메시지를 정해진 위치에 표시
    }; //checkForCode 함수 끝

    $(".guess_box").hover(function () {
        //mouseenter 이벤트 핸들러
        $(this).addClass("my_hover");
    }, function () {
        $(this).removeClass("my_hover");
    }); //End Hover

}); //document.ready() 끝