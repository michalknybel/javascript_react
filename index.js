function sayHello() {
    for (let i=0; i<5; i++) {
        console.log(i);
    }
    console.log(i);
}
sayHello();

const person = {
    name:'Michal',
    walk() {
        console.log(this);
    }
};
person.walk();
const walk = person.walk.bind(person);
walk();


const square = number => number*number;

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
];
const activeJobs = jobs.filter(job => job.isActive);


const person2 = {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log('self', self);
        }, 1000);
        
    }
};
person2.talk();

const colors = ['red','green', 'blue'];
const items = colors.map(color => '<li>' + color +'</li>');
console.log(items);

const address = {
    street: '',
    city: '',
    country: ''
}
const {street: st, city, country} = address;


const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first,'a',  ...second, 'b'];
const clone = [...first];
console.log(first);
console.log(clone);

const jmeno = {name: 'Michal'};
const prace = {job: 'Instructor'};
const combo = {...jmeno, ...prace, location: 'Czechia'};
console.log(combo);
const copy = {...jmeno};






import Teacher, {promote} from './teacher';
const teacher = new Teacher('Michal', 'MSc');
teacher.teach();





