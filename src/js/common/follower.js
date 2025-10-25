import gsap from "gsap"

function follower() {
    document.querySelectorAll(".cases-element-wrapper").forEach((container) => {
        const follower = container.querySelector(".follower")

        let mouseX = 0
        let mouseY = 0
        let currentX = 0
        let currentY = 0
        let isActive = false

        gsap.set(follower, {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
            transformOrigin: "center center",
            position: "absolute",
            pointerEvents: "none",
        })

        function animate() {
            if (!isActive) return

            currentX += (mouseX - currentX) * 0.1
            currentY += (mouseY - currentY) * 0.1

            gsap.set(follower, {
                x: currentX,
                y: currentY,
            })

            requestAnimationFrame(animate)
        }

        container.addEventListener("mouseenter", (e) => {
            const rect = container.getBoundingClientRect()
            mouseX = e.clientX - rect.left - follower.offsetWidth / 2
            mouseY = e.clientY - rect.top - follower.offsetHeight / 2
            currentX = mouseX
            currentY = mouseY

            gsap.set(follower, {
                x: currentX,
                y: currentY,
            })

            gsap.to(follower, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            })

            isActive = true
            animate()
        })

        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect()
            mouseX = e.clientX - rect.left - follower.offsetWidth / 2
            mouseY = e.clientY - rect.top - follower.offsetHeight / 2
        })

        container.addEventListener("mouseleave", () => {
            isActive = false

            gsap.to(follower, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            })
        })
    })
}

export default follower
