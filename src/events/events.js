import { dom } from "../dom/dom.js";
import { incrimentHandler, decrimentHandler, resetHandler } from "../handlers/handlers.js";


export const incriment = () => {
    dom.incrementBtn.addEventListener('click', incrimentHandler)
}

export const decriment = () => {
    dom.decrementBtn.addEventListener('click', decrimentHandler)
}

export const reset = () => {
    dom.resetBtn.addEventListener('click', resetHandler)
}


 
