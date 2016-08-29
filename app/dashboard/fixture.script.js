$(function(){

    $("#slider-1").ionRangeSlider({
        min: 0,
        max: 100,
        from: 30,
        step: 33,
        grid: true,
        grid_num: 3
    });

    $("#slider-2").ionRangeSlider();


    $("#slider-3").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        from_min: 10,
        from_max: 30,
        from_shadow: true,
        to: 80,
        to_min: 70,
        to_max: 90,
        to_shadow: true,
        grid: true,
        grid_num: 10
    });

    $("#slider-4").ionRangeSlider({
        from: 30,
        to: 60,
        type: 'double'
    });

    var cssAnimationData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        series: [
        [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
        [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
        [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8]
        ]
    },
    cssAnimationResponsiveOptions = [
    [{
        axisX: {
            labelInterpolationFnc: function(value, index) {
                return index % 2 !== 0 ? !1 : value
            }
        }
    }]
    ];

    new Chartist.Line(".chart-css-animations", cssAnimationData, {
        plugins: [
        Chartist.plugins.tooltip()
        ]}, cssAnimationResponsiveOptions);


});
function buttonClick(){
    if( $('#button').hasClass('btn-success')){
        $('#button').removeClass('btn-success');
        $('#button').addClass('btn-danger');
    }
    else{
        $('#button').removeClass('btn-danger');
        $('#button').addClass('btn-success');
    }
};