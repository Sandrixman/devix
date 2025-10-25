import { lenis } from "./scroll.js"

export default function burger() {
    const burger = document.getElementById("burger")
    const menu = document.getElementById("mobile-menu")

    burger.addEventListener("click", () => {
        const isOpening = !burger.classList.contains("active")

        if (menu) {
            menu.classList.toggle("active")
        }

        if (isOpening) {
            burger.classList.add("active")
            setTimeout(() => burger.classList.add("cross"), 300)
            lenis.stop()
        } else {
            burger.classList.remove("cross")
            setTimeout(() => burger.classList.remove("active"), 300)
            lenis.start()
        }
    })
}
