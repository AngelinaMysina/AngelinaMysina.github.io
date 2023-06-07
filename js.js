const mainSlideBlock = "info2";
const mainSlidersBlock = "buttons";
const slidersBlock = "line_buttons";
const slideContentBlock = "img-slider";
const sliderClass = "circle";
const activeSlide = "img-slider_active";
const hidenSlide = "img-slider_hide";
const notActiveSwithcer = "circle-2";
const activeSwithcer = "circle-1";
const arrowLeft = "arrow-left";
const arrowRight = "arrow-right";


checkSliderPosition();
function checkSliderPosition() {
    document.querySelectorAll("." + activeSwithcer).forEach(slider => {
        slider.className = notActiveSwithcer + " " + sliderClass;
    });
    document.querySelectorAll("." + mainSlideBlock).forEach(slider => {
        let slider_id = slider.getAttribute("data-slider-id");
        let slide_count = check_cr_slide(slider);
        let get_slide_swither = document.querySelector("div[data-for-slider='" + slider_id + "']");
        get_slide_swither.querySelector("." + slidersBlock);
        get_slide_swither.querySelectorAll("." + notActiveSwithcer)[slide_count].className = activeSwithcer + " " + sliderClass;

    });

}
document.querySelectorAll("." + mainSlidersBlock).forEach(sliderS => {
    let slider_id = sliderS.getAttribute("data-for-slider");
    let pr_btn = sliderS.querySelector("." + arrowLeft);
    let nx_btn = sliderS.querySelector("." + arrowRight);
    let get_slider = document.querySelector("div[data-slider-id='" + slider_id + "']");
    pr_btn.onclick = function e() {
        let pr_slide = check_cr_slide(get_slider) - 1;
        if (pr_slide < 0) {
            pr_slide = get_slider.querySelectorAll("." + slideContentBlock).length - 1;
        }
        change_Slide(get_slider, pr_slide);
    }
    nx_btn.onclick = function e() {
        let next_slide = check_cr_slide(get_slider) + 1;
        if (next_slide > get_slider.querySelectorAll("." + slideContentBlock).length - 1) {
            next_slide = 0;
        }
        change_Slide(get_slider, next_slide);
    }
    let switch_to = 0;
    sliderS.querySelectorAll("." + sliderClass).forEach(sliderSwitcher => {
        sliderSwitcher.setAttribute("switch-to", switch_to);
        sliderSwitcher.onclick = function e() {
            change_Slide(get_slider, sliderSwitcher.getAttribute("switch-to"));
        }
        switch_to += 1;
    });
});
function change_Slide(slider, slide) {
    let slide_hide = slider.querySelector("." + activeSlide);
    let slide_show = slider.querySelectorAll("." + slideContentBlock)[slide];
    const hide_anim = [
        { transform: "rotateY(0deg)" },
        { transform: "rotateY(90deg)" },
    ];
    const show_anim = [
        { transform: "rotateY(90deg)" },
        { transform: "rotateY(360deg)" },
    ];
    const anim_t = 300;
    slide_hide.animate(hide_anim, anim_t);
    setTimeout(function e() {
        slide_hide.classList.remove(activeSlide);
        slide_hide.classList.add(hidenSlide);
        slide_show.classList.remove(hidenSlide);
        slide_show.classList.add(activeSlide);
        slide_show.animate(show_anim, anim_t);
        checkSliderPosition();
    }, 300);
}
function check_cr_slide(slider) {
    let slide_count = 0;
    let stop = false;
    slider.querySelectorAll("." + slideContentBlock).forEach(slide => {
        if (!(slide.classList.contains(activeSlide)) && !stop) {
            slide_count += 1;
        } else {
            stop = true;
        }
    });
    return slide_count;
}

// tabs
document.querySelectorAll(".section4").forEach(tab => {
    tab.querySelectorAll(".sbt").forEach(tab_btn => {
        const hide_anim = [
            { opacity: "1" },
            { opacity: "0" },
        ];
        const show_anim = [
            { opacity: "0" },
            { opacity: "1" },
        ];
        const anim_t = 200;
        tab_btn.onclick = function e() {
            tab.querySelectorAll(".sbt").forEach(tab_btn2 => {
                tab_btn2.className = "section_text_ops sbt";
            });
            tab_btn.className = "section_text sbt";
            tab.querySelectorAll(".section_block").forEach(tab_p => {

                tab_p.animate(hide_anim, anim_t);
                setTimeout(function e() {
                    tab_p.className = "section_block section_block-hide";
                }, 200);
            });
            setTimeout(function e() {
                tab.querySelectorAll(".section_block")[Number(tab_btn.getAttribute("data-slide")) - 1].animate(show_anim, anim_t);
                tab.querySelectorAll(".section_block")[Number(tab_btn.getAttribute("data-slide")) - 1].className = "section_block";
            }, 200);

        }
    });
    // category

    document.querySelectorAll(".section1").forEach(tab => {
        tab.querySelectorAll(".cb").forEach(tab_btn => {
            tab_btn.onclick = function e() {
                tab.querySelectorAll(".cb").forEach(tab_btn2 => {
                    tab_btn2.className = "p-c cb";
                });
                tab_btn.className = "p-c1 cb";
                tab.querySelectorAll(".pb").forEach(tab_p => {
                    if (tab_p.getAttribute("data-to-ct") == tab_btn.getAttribute("data-ct") || tab_btn.getAttribute("data-ct") == 1) {
                        tab_p.className = "photo-block pb";
                        const hide_anim = [
                            { opacity: "1" },
                            { opacity: "0" },
                        ];
                        const show_anim = [
                            { opacity: "0" },
                            { opacity: "1" },
                        ];
                        const anim_t = 200;
                        tab_p.animate(show_anim, anim_t);
                    } else {
                        tab_p.className = "photo-block_h pb";
                        const hide_anim = [
                            { opacity: "1" },
                            { opacity: "0" },
                        ];
                        const show_anim = [
                            { opacity: "0" },
                            { opacity: "1" },
                        ];
                        const anim_t = 200;
                        tab_p.animate(hide_anim, anim_t);
                    }
                });

            }
        });
    });
});

//accordion
document.querySelectorAll(".head-text").forEach(accordion => {
    accordion.onclick = function e() {
        let ac_ad = accordion.querySelector(".mt");
        ac_ad.classList.toggle('mtext_h');
    }

});

//modal 

document.querySelectorAll(".values_button").forEach(btn => {
    btn.onclick = function e() {
        let modal = document.querySelector(".modal_w");
        if (modal.classList.contains("modal_closed")) {
            modal.className = "modal modal_w";
        } else {
            modal.className = "modal_closed modal_w";
        }
    }
});

document.querySelector(".modal_w").onclick = function e() {
    document.querySelector(".modal_w").className = "modal_closed modal_w";
}

//burger menu
document.querySelector(".menu").onclick = function e() {
    document.querySelector(".burger").classList.toggle("burger_show");
}
