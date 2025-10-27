import { lenis } from "./scroll.js"

let lastScrollTop = 0
const header = document.getElementById("header")

const stickyHeader = () => {
    if (!header) return
    let scheduled = false

    lenis.on("scroll", () => {
        if (scheduled) return

        scheduled = true
        requestAnimationFrame(() => {
            scheduled = false

            const currentScroll = lenis.scroll
            const hero = document.querySelector(".hero")
            const heroHeight = hero?.offsetHeight ?? header.offsetHeight

            if (currentScroll > lastScrollTop && currentScroll > heroHeight) {
                header.style.top = "-100rem"
            } else if (currentScroll < lastScrollTop) {
                header.style.top = "40rem"
            }

            lastScrollTop = currentScroll
        })
    })
}

export default stickyHeader
