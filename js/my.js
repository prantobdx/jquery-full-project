//navbar background color change section start


$(window).scroll(function () {
    $(".navbar").toggleClass('scrolled',$(this).scrollTop()>200);
});

//navbar background color change section end


//text effect starts here

var typed = new Typed('.title', {
    strings: ["Learn with me", "Web developer", "Software Engineer"],
    typeSpeed: 50,
    backSpeed: 80,
    showCursor: true,
    loop:true,
});

//text effect ends here


// to-do app start 

$(".btn").click(function () {
    var input = $(".input").val();
    var newText = $("#todoUl").append('<li>' + '<p>' + input + '<i class="fas fa-trash-alt"></i>' + '</p>' + '</li>')
});

$("#todoUl").on('click', 'p', function () {
    $(this).parent().hide();
});
// to-do app ends here

//chart section starts here

window.onload = function (){
    
    var option = {
        title:{
            text:"bar chart last 10 years"
        },
        axisY: {
            title:"yearly value persent %"
        },
        axisX: {
            title:"Year with month"
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "january 2010", y: 65 },
                    { label: "january 2011", y: 90 },
                    { label: "january 2012", y: 80 },
                    { label: "january 2013", y: 70 },
                    { label: "january 2014", y: 75 },
                    { label: "january 2015", y: 60 }
            
                ]
            }
        ]
    }
    $("#barchartContainer").CanvasJSChart(option);

    }

//chart section endss here


//counter js starts here

$(".count").counterUp({
    time: 2000,
    delay:10
})

//counter js ends here


// jquery project bangla tutorial | part:08| 