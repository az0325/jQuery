$(document).ready(function () {
    var headclix = 0, eyesclix = 0, noseclix = 0, mouthclix = 0;

    //번개 함수
    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);

    $("#head").click(function () {
        if (headclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            headclix += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            headclix = 0;
        }
    });

    $("#eyes").click(function () {
        if (eyesclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            eyesclix += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            eyesclix = 0;
        }
    });

    $("#nose").click(function () {
        if (noseclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            noseclix += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            noseclix = 0;
        }
    });

    $("#mouth").click(function () {
        if (mouthclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            mouthclix += 1;
        } else {
            $(this).animate({ left: "0px" }, 500);
            mouthclix = 0;
        }
    });

    //fade effect
    function lightning_one(t) {
        $('#lightning1').fadeIn(250).fadeOut(250);
        setTimeout(function () {
            lightning_one(t);
        }, t);
    }

    function lightning_two(t) {
        $('#lightning2').fadeIn(250).fadeOut(250);
        setTimeout(function () {
            lightning_two(t);
        }, t);
    }

    function lightning_three(t) {
        $('#lightning3').fadeIn(250).fadeOut(250);
        setTimeout(function () {
            lightning_three(t);
        }, t);
    }

});