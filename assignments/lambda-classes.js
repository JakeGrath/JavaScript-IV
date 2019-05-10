// CODE here for your Lambda Classes
const faker = require('faker');

//Person class//
class person{
    constructor(persAttr){
        this.name = persAttr.name;
        this.age = persAttr.age;
        this.location = persAttr.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

//Instructor class, inherits Person
class instructor extends person{
    constructor(insAttr){
    super(insAttr)
    this.specialty = insAttr.specialty;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
    }
    demo(subject){
        console.log(`Today, we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`Student ${student.name} receives a perfect score on ${subject}.`)
    }
    evalStudent(student){
        let change = Math.floor(Math.random() * Math.floor(20));
        let addReduce = Math.floor(Math.random() * Math.floor(2));
        if (addReduce <= 1){
            student.grade = (student.grade - change);
        }
        else {
            student.grade = (student.grade + change);
        }
        if (student.grade < 0) {
            student.grade = 0;
        }
        else if (student.grade > 100){
            student.grade = 100;
        }
        console.log(`${this.name} grades ${student.name}'s work, bringing their grade to ${student.grade}`)
    }
}

//Define instructors//
const DanLevy = new instructor({
    name : 'Dan Levy',
    age : Infinity,
    location : 'Colorado',
    specialty : 'Back-End',
    favLanguage : 'JavaScript',
    catchPhrase : 'we\'re geting a bit out of scope here...'
})

DanLevy.speak();
DanLevy.demo('JavaScript classes');

console.log(`That's an excellent question, but ${DanLevy.catchPhrase}`)

const GrannySmith = new instructor({
    name : 'Granny Smith',
    age : 314,
    location : 'California',
    specialty : 'iOS development',
    favLanguage : 'C++',
    catchPhrase : 'Easy as pie.'
})

GrannySmith.speak();
GrannySmith.demo('Pi');

const TABithaIndents = new instructor({
    name : 'TABitha Indents',
    age : 42,
    location : 'Salem, Massachusetts',
    specialty : 'Data sciences',
    favLanguage : 'Python',
    catchPhrase : 'Your anaconda don\'t want none unless you got tabs, hun.'
})

TABithaIndents.speak();
TABithaIndents.demo('proper indentation');
console.log(TABithaIndents.catchPhrase);

const CofinaBean = new instructor({
    name : 'Cofina Bean',
    age: 63,
    location : 'Cuba',
    specialty : 'Android Development',
    favLanguage : 'Java',
    catchPhrase : 'Check yourself before you espresso youreself, otherwise you won\'t get me Embed'
})

CofinaBean.speak();
CofinaBean.demo('the dangers of installing homebrew applications to your devices.');
console.log(CofinaBean.catchPhrase);

//End instructor definitions//

//Student class, inherits Person//
class student extends person{
    constructor(studAttr){
        super(studAttr)
        this.previousBackground = studAttr.previousBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
        this.grade = studAttr.grade;
    }
    listSubjects(){
        console.log(`Student ${this.name}'s favorite subjects are;`);
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssesment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(){
        if (this.grade === 100){
            console.log(`${this.name} has graduated from Lambda School!`)
        }
        else {
            console.log(`${this.name} did not gradute from Lambda Scool, their grade is ${this.grade}.`)
        }
    }
}

//Define students//

const SamuelEaton = new student({
    name : 'Samuel Eaton',
    age : Math.floor(Math.random() * Math.floor(100)),
    location : 'Virginia',
    previousBackground : 'I used to be a Lyft driver.',
    className : 'DS34',
    favSubjects : ['Python','Ruby'],
    grade : Math.floor(Math.random() * Math.floor(100))
});

SamuelEaton.speak();
SamuelEaton.listSubjects();
console.log(`Samuel Eaton is ${SamuelEaton.age} years old.`);

const ZacharyFowler = new student({
    name : 'Zachary Fowler',
    age : Math.floor(Math.random() * Math.floor(100)),
    location : 'New York',
    previousBackground : 'I used to be a pizza delivery guy.',
    className : 'CS124',
    favSubjects : ['C++','Go'],
    grade : Math.floor(Math.random() * Math.floor(100))
});

ZacharyFowler.speak();
ZacharyFowler.PRAssesment('JavaScript Fundamentals IV');

const SkyeHopper = new student({
    name : 'Skye Hopper',
    age : Math.floor(Math.random() * Math.floor(100)),
    location : 'Washington',
    previousBackground : 'I was a police officer.',
    className : 'Web17',
    favSubjects : ['JavaScript','Java'],
    grade : Math.floor(Math.random() * Math.floor(100))
});

SkyeHopper.speak();
SkyeHopper.sprintChallenge('JavaScript Fundamentals IV');

//end student definitions//

//PM class, inherits instructors//

class ProjectManager extends instructor{
    constructor(pmAttr){
        super(pmAttr)
        this.gradClassName = pmAttr.className,
        this.favInstructor = pmAttr.favInstructor
    }
    standup(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}​​​​​`)
    }
}

const PM1 = new ProjectManager({
    name : faker.name.findName(),
    age : Math.floor(Math.random() * Math.floor(100)),
    location : 'Texas',
    specialty : 'Back-End',
    favLanguage : 'JavaScript',
    catchPhrase : 'Don\'t be afraid to reach out if you need help.',
    gradClassName : 'Web20',
})

PM1.debugsCode(ZacharyFowler, 'JavaScript IV');

const PM2 = new ProjectManager({
    name : faker.name.findName(),
    age : Math.floor(Math.random() * Math.floor(100)),
    location : 'Missouri',
    specialty : 'Front-End',
    favLanguage : 'LESS',
    catchPhrase : 'LESS is more.',
    gradClassName : 'Web19',
})

PM2.standup('Web19- Sprint4');

PM2.evalStudent(ZacharyFowler);
ZacharyFowler.graduate();

PM1.evalStudent(SamuelEaton);
SamuelEaton.graduate();

CofinaBean.evalStudent(SkyeHopper);
SkyeHopper.graduate();