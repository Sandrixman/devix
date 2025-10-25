function formValidation() {
    document.querySelector(".contact-us-form").addEventListener("submit", function (e) {
        e.preventDefault()

        let isValid = true

        this.querySelectorAll(".field").forEach(function (field) {
            const input = field.querySelector(".field-item")
            const errorMessage = field.querySelector(".field-message.__error")

            field.classList.remove("__error")

            if (input.type === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(input.value.trim())) {
                    field.classList.add("__error")
                    errorMessage.textContent = "Please enter a valid email"
                    isValid = false
                }
            } else if (input.tagName === "TEXTAREA" || input.type === "text") {
                if (input.value.trim() === "") {
                    field.classList.add("__error")
                    errorMessage.textContent = "This field is required."
                    isValid = false
                }
            }
        })

        if (isValid) {
            console.log("good")
        }
    })
}

export default formValidation
