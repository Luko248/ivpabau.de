import {navInit} from "./nav"
import {fancyBoxInit} from "./fancyBox"

document.addEventListener("DOMContentLoaded", () => {
    navInit();
    fancyBoxInit();

    document.querySelector('#Year').innerHTML = new Date().getFullYear().toString()
})