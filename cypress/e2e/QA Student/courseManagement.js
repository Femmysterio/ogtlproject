/// <reference types="cypress" />

import courseManagement from '../../support/student_pom/courseManagement_POM'

const courseName = 'Cypress'
const courseCode = 301

const updateCourseN = 'Postman Cypress'
const updateCourseC = 204

const courseToAssert = 'MathS'

beforeEach(() => {
    cy.visit('https://qastudent-development.ogtlprojects.com/');
});

describe('validate Course Management functionality', () => {

    it('Verify Creating New Course', () => {  

        courseManagement.elements.courseManagmtBtn();
        courseManagement.elements.createCourse();
        courseManagement.elements.assertCreateCoursePage();

        courseManagement.name(courseName);
        courseManagement.code(courseCode);
        courseManagement.createcourseBtn();
    });

    it('Verify Editing Course info', () => {  

        //ensure course to be edited still exists on the course dashbaord else update on POM file

        courseManagement.elements.courseManagmtBtn();
        courseManagement.courseToEdit();
        courseManagement.assertCourseInfo(courseToAssert);
        courseManagement.editCourseBtn();

        courseManagement.updCourseName(updateCourseN);
        courseManagement.updCourseCode(updateCourseC);
        courseManagement.updateCourseBtn();
    });

    it('Verify Deleting Course', () => {  

        //ensure to update course to be deleted by updating 'courseToDel' in POM file before running test

        courseManagement.elements.courseManagmtBtn();
        courseManagement.courseToDel();
        courseManagement.delCourseBtn()
        
    });

    
})