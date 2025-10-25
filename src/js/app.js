import "./config/odometr.min.js"
import { updateScroll } from "./common/scroll.js"
import initOdometr from "./common/InitOdometr.js"
import scrollTo from "./common/scrollTo.js"
import scrollVisibility from "./common/scrollVisibility.js"
import loadContent from "./common/loadContent.js"
import splitText from "./common/splitText.js"
import stickyHeader from "./common/stickyHeader.js"
import filterTabs from "./common/filterTabs.js"
import moveFromMouse from "./common/moveFromMouse.js"
import burger from "./common/burger.js"
import follower from "./common/follower.js"
import animateWaveText from "./common/waveText.js"
import formValidation from "./common/formValidation.js"
import initStickyBlock from "./common/stickyBlock.js"

scrollTo()
scrollVisibility()
splitText()
stickyHeader()
initStickyBlock()
filterTabs()
moveFromMouse()
initOdometr()
animateWaveText()
loadContent()
burger()
follower()
updateScroll()
formValidation()
