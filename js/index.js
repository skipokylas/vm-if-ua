$(".anim-slider").animateSlider({
    autoplay: true,
    interval: 5500,
    animations: {
        0: //Slide No1
        {
            li: {
                show: "fadeIn",
                hide: "fadeOutLeftBig",
                delayShow: "delay0-5s"
            }

        },
        1: //Slide No2
        {
            li: {
                show: "fadeInLeft",
                hide: "fadeOutLeftBig",
                delayShow: "delay0-5s"
            }


        },
        2: {
            li: {
                show: "fadeInUp",
                hide: "fadeOutDownBig",
                delayShow: "delay0-5s"
            }


        }
    }
});