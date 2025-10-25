import gsap from "gsap"
import { transition } from "../config/transitions.js"
import animateWaveText from "./waveText.js"

const loadContent = () => {
    const preloader = document.querySelector("#preloader")
    const header = document.querySelector("#header")
    const content = document.querySelectorAll("[data-load-order]")

    if (preloader) {
        /* preloader */
        gsap.fromTo(
            preloader,
            {
                height: "100%",
            },
            {
                height: 0,
                duration: transition.skew.duration,
                ease: transition.skew.ease,
                onComplete: () => {
                    preloader.remove()
                },
            }
        )

        /* header */
        if (header) {
            gsap.fromTo(
                header,
                {
                    yPercent: -200,
                },
                {
                    yPercent: 0,
                    delay: 0.3,
                    duration: transition.skew.duration,
                    ease: transition.skew.ease,
                }
            )
        }
    } else {
        animateWaveText()
    }

    /* content */
    if (content.length) {
        gsap.fromTo(
            content,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.8,
                stagger: 0.1,
                duration: transition.skew.duration,
                ease: transition.skew.ease,
            }
        )
    }
}

export default loadContent
