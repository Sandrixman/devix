import Splitting from "splitting"

const splitText = () => {
    const splitText = document.querySelectorAll("[data-split-text]")
    for (let i = 0; i < splitText.length; i++) {
        Splitting({
            target: splitText[i],
            by: "lines",
        })
    }
}

export default splitText
