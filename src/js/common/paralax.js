import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import { lenis } from "./scroll.js"

gsap.registerPlugin(ScrollTrigger)

export default function initParallaxImages() {
    ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            return arguments.length ? lenis.scrollTo(value) : lenis.scroll
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
    })
    lenis.on("scroll", ScrollTrigger.update)
    ScrollTrigger.addEventListener("refresh", () => lenis.resize())
    ScrollTrigger.refresh()

    document.querySelectorAll("img[data-parallax]").forEach((img) => {
        const speed = parseFloat(img.dataset.speed) || 30

        // Отримуємо фактичні розміри перед маніпуляціями
        const computed = getComputedStyle(img)
        const width = computed.width
        const height = computed.height

        // створюємо структуру
        const mask = document.createElement("div")
        mask.classList.add("parallax-mask")
        mask.style.width = width
        mask.style.height = height

        const inner = document.createElement("div")
        inner.classList.add("parallax-inner")

        img.classList.add("parallax-img")

        // вставляємо
        img.parentNode.insertBefore(mask, img)
        inner.appendChild(img)
        mask.appendChild(inner)

        // анімація
        gsap.fromTo(
            img,
            { yPercent: -speed },
            {
                yPercent: speed / 2,
                ease: "none",
                scrollTrigger: {
                    trigger: mask,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        )
    })
}
