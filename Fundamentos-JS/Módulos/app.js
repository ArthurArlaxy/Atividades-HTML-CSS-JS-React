import { calculate } from "./calculate.js"
import { clear } from "./clear.js"
import { themeSwitcher } from "./theme.js"

export const main = document.querySelector("main")
export const root = document.querySelector(":root")
export const input = document.getElementById("input")
export const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
    })
})

document.getElementById("clear").addEventListener("click", clear)

input.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
    }
    if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
    calculate()
    }
})

document.getElementById("equal").addEventListener("click", calculate)


document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
    } else {
    button.innerText = "Copy"
    button.classList.remove("success")
    }
})

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)