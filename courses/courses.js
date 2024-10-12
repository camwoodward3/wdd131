const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections : [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    
    ],
    enrollStudent: function (sectionNum, add = true) {
        console.log(this.sections);
        const section = this.sections.find(
            (section) => section.sectionNum === sectionNum
        );
        if (section) {
            if (add) {
                this.sections[section].enrolled++;
            } else {
                this.sections[section].enrolled--;
            }
            renderSections(this.sections);
        }
    },

};

// aCourse.sections.find(item => item.roomNum == "STC 347")
// aCourse.sections.find(function(item) { return item.roomNum == "STC 347"})

function setCourseInfo(course) {
    const courseNameEl = document.querySelector("#courseName");
    const courseCodeEl = document.querySelector("#courseCode");
    courseNameEl.innerHTML = course.name;
    courseCodeEl.innerText = course.code;
}

function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`
}

function renderSections(sections) {
    const sectionListEl = document.querySelector("#sections");
const html = sections.map(sectionTemplate);
sectionListEl.innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener('click', function () {
    const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
    aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener('click', function () {
    const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
    aCourse.enrollStudent(sectionNum);
})
// aCourse.enrollStudent(1);