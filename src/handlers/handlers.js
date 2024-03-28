import { data } from "../data/data.js";
import { domMonupulation } from "../components/domMonipulation.js";

export const incrimentHandler = () =>{
        data.counter++
        domMonupulation(data.counter);
}

export const decrimentHandler = () =>{
        data.counter--;
        domMonupulation(data.counter);
}

export const resetHandler = () =>{
        data.counter = 0;
        domMonupulation(data.counter);
}