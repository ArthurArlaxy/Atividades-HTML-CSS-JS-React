import { input } from "./app.js";

export function clear() {
    input.value = ""
    input.focus()
}