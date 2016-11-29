var hammertime = new Hammer(myElement, myOptions);
hammertime.on('pan', function(ev) {
	console.log(ev);
});


$(document).ready(function () {
    $('#grinmil-carousel').hammer().on('swipeleft', function () {
        $(this).carousel('next');
    })
    $('#grinmil-carousel').hammer().on('swiperight', function () {
        $(this).carousel('prev');
    })
});
