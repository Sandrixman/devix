import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

function animateWaveText() {
    gsap.registerPlugin(ScrollTrigger)

    document.querySelectorAll(".wave-text").forEach((el) => {
        const nodes = Array.from(el.childNodes)

        // processing text nodes with visible text
        nodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
                const text = node.textContent
                const fragment = document.createDocumentFragment()

                text.split("").forEach((char) => {
                    if (char === " ") {
                        fragment.appendChild(document.createTextNode(" "))
                    } else {
                        const span = document.createElement("span")
                        span.textContent = char
                        span.classList.add("flip-char")
                        span.style.display = "inline-block"
                        fragment.appendChild(span)
                    }
                })

                el.replaceChild(fragment, node)
            }
        })

        // additional processing .indent
        const indentSpan = el.querySelector(".indent")
        if (indentSpan) {
            const text = indentSpan.textContent
            const fragment = document.createDocumentFragment()

            text.split("").forEach((char) => {
                const span = document.createElement("span")
                span.textContent = char
                span.classList.add("flip-char")
                span.style.display = "inline-block"
                fragment.appendChild(span)
            })

            indentSpan.textContent = ""
            indentSpan.appendChild(fragment)
        }

        // animation
        gsap.fromTo(
            el.querySelectorAll(".flip-char"),
            {
                opacity: 0,
                y: 100,
                rotationX: 60,
                rotationY: -30,
                transformOrigin: "center center",
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                duration: 0.3,
                ease: "power4.out",
                stagger: {
                    each: 0.03,
                    from: "start",
                },
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        )
    })
}

export default animateWaveText
