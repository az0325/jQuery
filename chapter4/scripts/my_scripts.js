$(document).ready(function () {
    var v = false;
    var $f, $m;

    //채식
    $("button#vegOn").click(function () {
        if (v == false) {

            //fish 클래스를 떼어내어 f변수에 저장
            $f = $(".fish").parent().parent().detach();
            //변수 앞에 $기호를 붙이면, jQuery에서 반환하는 요소를 저장하는 변수라는 뜻

            //햄버거를 버섯으로 바꿈
            $('.hamburger').replaceWith('<li class="portobello"<em>Portobello Mushroom</em></li>');

            //두부를 고기 다음으로 넣음
            $(".meat").after('<li class="tofu"><em>Tofu</em><li>');

            //meat 클래스를 떼어내어 m변수에 저장
            $m = $('.meat').detach();

            //채식 메뉴 표시하는 아이콘 생성
            $('.tofu').parent().parent().addClass("veg_leaf");

            v = true;
        }

    });

    //육식
    $("button#restoreMe").click(function () {
        if (v == true) {

            //채식 메뉴 표시하는 아이콘 제거
            $('.portobello').parent().parent().removeClass("veg_leaf");

            //버섯을 햄버거로 바꿈
            $('.portobello').replaceWith('<li class="hamburger"<em>Hamburger</em></li>');

            //menu_entrees 아래에 있는 첫 번째 메뉴 앞으로 돌려 놓음
            $(".menu_entrees li").first().before($f);

            //채식 메뉴 표시하는 아이콘 제거
            $('.tofu').parent().parent().removeClass("veg_leaf");
            
            //두부를 고기로 바꿈
            $('.tofu').each(function (i) {
                $(this).after($m[i]);
            });

            $(".tofu").remove();

            v = false;
        }
    });
});