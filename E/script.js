let one = 1;
let two = 1;
let three = 1;
let four = 1;
let five = 1;
let six = 1;
let seven = 1;
let eight = 1;
let nine = 1;

$('.one').click(function () {
    if (one == 1) {
        $(".one").attr("src", "1/2.jpg");
        one += 1;
    } else if (one == 2) {
        $(".one").attr("src", "1/3.jpg");
        one += 1;
    } else if (one == 3) {
        $(".one").attr("src", "1/4.jpg");
        one += 1;
    } else if (one == 4) {
        $(".one").attr("src", "1/5.jpg");
        one += 1;
    } else {
        $(".one").attr("src", "1/1.jpg");
        one = 1;
    }
})

$('.two').click(function () {
    if (two == 1) {
        $(".two").attr("src", "2/2.jpg");
        two += 1;
    } else if (two == 2) {
        $(".two").attr("src", "2/1.jpg");
        two = 1;
    }
})

$('.three').click(function () {
    if (three == 1) {
        $(".three").attr("src", "3/2.jpg");
        three += 1;
    } else if (three == 2) {
        $(".three").attr("src", "3/3.jpg");
        three += 1;
    } else if (three == 3) {
        $(".three").attr("src", "3/4.jpg");
        three += 1;
    } else if (three == 4) {
        $(".three").attr("src", "3/5.jpg");
        three += 1;
    } else if (three == 5) {
        $(".three").attr("src", "3/6.jpg");
        three += 1;
    } else if (three == 6) {
        $(".three").attr("src", "3/1.jpg");
        three = 1;
    }
})

$('.four').click(function () {
    if (four == 1) {
        $(".four").attr("src", "4/2.jpg");
        four += 1;
    } else if (four == 2) {
        $(".four").attr("src", "4/3.jpg");
        four += 1;
    } else if (four == 3) {
        $(".four").attr("src", "4/3.jpg");
        four = 1;
    }
})

$('.five').click(function () {
    if (five == 1) {
        $(".five").attr("src", "5/2.jpg");
        five += 1;
    } else if (five == 2) {
        $(".five").attr("src", "5/1.jpg");
        five = 1;
    }
})

$('.six').click(function () {
    if (six == 1) {
        $(".six").attr("src", "6/2.jpg");
        six += 1;
    } else if (six == 2) {
        $(".six").attr("src", "6/1.jpg");
        six = 1;
    }
})



$('.seven').click(function () {
    if (seven == 1) {
        $(".seven").attr("src", "7/2.jpg");
        seven += 1;
    } else if (seven == 2) {
        $(".seven").attr("src", "7/3.jpg");
        seven += 1;
    } else if (seven == 3) {
        $(".seven").attr("src", "7/4.jpg");
        seven += 1;
    } else if (seven == 4) {
        $(".seven").attr("src", "7/5.jpg");
        seven += 1;
    } else {
        $(".seven").attr("src", "7/1.jpg");
        seven = 1;
    }
})

$('.eight').click(function () {
    if (eight == 1) {
        $(".eight").attr("src", "8/2.jpg");
        eight += 1;
    } else if (eight == 2) {
        $(".eight").attr("src", "8/1.jpg");
        eight = 1;
    }
})


$('.nine').click(function () {
    if (nine == 1) {
        $(".nine").attr("src", "9/2.jpg");
        nine += 1;
    } else if (nine == 2) {
        $(".nine").attr("src", "9/3.jpg");
        nine += 1;
    } else if (nine == 3) {
        $(".nine").attr("src", "9/4.jpg");
        nine += 1;
    } else if (nine == 4) {
        $(".nine").attr("src", "9/5.jpg");
        nine += 1;
    } else if (nine == 5) {
        $(".nine").attr("src", "9/1.jpg");
        nine = 1;
    }
})
