$(document).ready(function () {

    //페이지를 불러왔을 때
    goLightning();

    //타이머를 저장할 변수
    var int1, int2, int3;

    //벼락을 시작하는 코드
    window.onfocus = goLightning;
    function goLightning() {

        //벼락 애니메이션에 타이머 설정
        int1 = setInterval(function () {
            lightning_one();
        }, 4000); //4초 후

        int2 = setInterval(function () {
            lightning_two();
        }, 5000); //5초 후

        int3 = setInterval(function () {
            lightning_three();
        }, 7000); //7초 후
    };

    //벼락을 멈추는 코드
    window.onblur = stopLightning;
    function stopLightning() {
        window.clearInterval(int1);
        window.clearInterval(int2);
        window.clearInterval(int3);
    };

    //벼락 함수 정의
    function lightning_one() {
        $("#container #lightning1").fadeIn(250).fadeOut(250);
    };
    function lightning_two() {
        $("#container #lightning2").fadeIn(250).fadeOut(250);
    };
    function lightning_three() {
        $("#container #lightning3").fadeIn(250).fadeOut(250);
    };

    //chapter5 공통 함수
    var clix = [0, 0, 0, 0] //head, eyes, nose, mouth
    $("#head").click(function () {
        moveMe(0, this);
    });
    $("#eyes").click(function () {
        moveMe(1, this);
    });
    $("#nose").click(function () {
        moveMe(2, this);
    });
    $("#mouth").click(function () {
        moveMe(3, this);
    });
    function moveMe(i, obj) {
        if (clix[i] < 9) {
            $(obj).animate({ left: "-=367px" }, 500);
            clix[i] = clix[i] + 1;
        } else {
            clix[i] = 0;
            $(obj).animate({ left: "0px" }, 500);
        }
    }

    //랜덤
    var w = 367; //몬스터 얼굴 이미지 조각의 넒이
    var m = 10; //현재 이미지 조각의 번호

    $("#btnRandom").click(randomize);
    $("#btnReset").click(reset);

    function getRandom(num) {
        var my_random_num = Math.floor(Math.random() * num);
        return my_random_num;
    }

    function randomize() {
        //몬스터 얼굴의 각 부분을 랜덤하게 움직이게
        $(".face").each(function (index) { 
            var target_position = getRandom(m);
            var current_position = clix[index];
            clix[index] = target_position; //몬스터 얼굴을 랜덤하게 만든 후에도 사용자가 조작할 수 있도록 clix[index] 업데이트

            if(target_position > current_position){
                var move_to = (target_position - current_position) * w;
                $(this).animate({ left: "-=" + move_to + "px" }, 500); //이미지를 왼쪽으로 움직임
            } else if(target_position < current_position){
                var move_to = (current_position - target_position) * w;
                $(this).animate({ left: "+=" + move_to + "px" }, 500); //이미지를 오른쪽으로 움직임
            } else {
                //둘이 같을 때에는 움직이지 않음
            }
        });
    };

    function reset(){
        $(".face").each(function(index){
            $(this).animate({left:"0px"}, 500);
        });
    }

});