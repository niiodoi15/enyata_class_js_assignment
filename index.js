class student {
    constructor(name, age, score, course){
        this.name = name;
        this.age = age;
        this.score = score;
        this.course = course;
    }
    getname = () => {
        return this.name;
    };
    getage = () => {
        this.age += 1
        return this.age;
    };
    getcourse = () => {
        this.course = this.course.push(course);
        return this.course;
    };
    getscore = () => {
        return this.score;
    };
}

const steve = new student('Steven', 12, 70, ['math', 'english', 'science']);
console.log(steve.course.push('history'));
console.log(steve);

