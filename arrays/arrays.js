const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>` 
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

listTemplate(steps[0]);

const grades = ['A', 'B', 'A'];
function convertGradesToPoints(grade) {
    let points = 0
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;   

}
const gpaPoints = grades.map(convertGradesToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortwords = words.filter(function (word) {
    return word.length < 6;
});

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);