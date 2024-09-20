/// <reference types="cypress" />

import studentManagement from '../../support/student_pom/studentManagement_POM'

const fName = 'Oluwafemi'
const lName = 'Orungbeja'
const codeN = 23401

const comp304 = 7
const mechEng001 = 0
const introComp101 = 8
const math102 = 2

const stdToDelete = 'chuks mizy'

beforeEach(() => {
    cy.visit('https://qastudent-development.ogtlprojects.com/');
});

describe('validate Student Management functionality', () => {

    it('verify creating new student', () => {  

        studentManagement.elements.studentMangmntBtn();
        studentManagement.elements.createStudent();
        studentManagement.elements.assertCreateStudent()

        studentManagement.firstName(fName);
        studentManagement.lastName(lName);
        studentManagement.code(codeN);
        studentManagement.createstudnt();
        
    })

    it('verify adding Student Course', () => {  
        
        studentManagement.elements.studentMangmntBtn();
        studentManagement.elements2.student1();
        studentManagement.elements2.assertStudentInfo()

        //Add student course
        studentManagement.elements2.selectCourse(comp304)
        studentManagement.elements2.addBtn()

        studentManagement.elements2.selectCourse(mechEng001)
        studentManagement.elements2.addBtn()

        studentManagement.elements2.selectCourse(introComp101)
        studentManagement.elements2.addBtn()

        studentManagement.elements2.selectCourse(math102)
        studentManagement.elements2.addBtn()

    })

    it('verify Editing Student Info', () => {  
        
        studentManagement.elements.studentMangmntBtn();
        studentManagement.elements2.student1();

        //edit student info
        studentManagement.elements2.editbtn();
        cy.wait(2000)
        studentManagement.elements2.updFirstN();
        studentManagement.elements2.updLastN();
        studentManagement.code(17);
        studentManagement.elements2.updateStdBtn();
        studentManagement.elements2.bugFound1();

    })

    it('verify deleting Student from list', () => {  
        
        //input existing student name in the 'stdToDelete' const variable above before running this test case
        studentManagement.elements.studentMangmntBtn();
        studentManagement.elements2.student2(stdToDelete);

        //delete student info
        studentManagement.elements2.deleteBtn();
        studentManagement.elements2.assertDeleletedStudent(stdToDelete);

    })

    it('verify deleting Student Course', () => {  
        
        studentManagement.elements.studentMangmntBtn();
        studentManagement.elements2.student3();
        studentManagement.elements2.delCourseBtn();
    })
})