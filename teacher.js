import {Person3} from './person3';

export function promote() {}

export default class Teacher extends Person3{
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}