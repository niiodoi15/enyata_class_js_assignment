class student {
    constructor(name, age, score, course){
        this.name = name;
        this.age = age;
        this.score = score;
        this.course = course;
    }
    name() {
        return this.name;
    };
    age() {
        return this.age;
    };
    increaseAge() {
        this.age += 1
        return this.age;
    };
    addCourse(courses)  {
        this.course = this.course.push(courses);
        return this.course;
    };
}

const steve = new student('Steven', 12, 70, ['math', 'english', 'science']);
console.log(steve);
