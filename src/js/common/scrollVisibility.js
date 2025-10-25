function scrollVisibility() {
    const hidden = document.querySelector(".contact-us-hidden")
    const trigger = document.querySelector(".contact-us-visible")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    hidden.classList.add("is-visible")
                }
            })
        },
        {
            threshold: 0.8,
            rootMargin: "0px 0px -200px 0px",
        }
    )

    observer.observe(trigger)
}

export default scrollVisibility
