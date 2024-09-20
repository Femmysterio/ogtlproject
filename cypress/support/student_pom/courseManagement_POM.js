/// <reference types="cypress" />

class courseManagement  {

    elements = {
        courseManagmtBtn: () => cy.contains('Course Management').click(),
        createCourse: () => cy.contains('Create Course').click(),
        assertCreateCoursePage: () => cy.get('.card .justify-content-between').should('contain.text', 'Create Course')
    }

    name(val) {
        cy.get('#name').type(val)
    }

    code(val) {
        cy.get('#code').type(val)
    }

    createcourseBtn() {
        cy.get('#create_subj').click()
    }

    courseToEdit() {
        cy.contains('MathS').click()
    }

    assertCourseInfo(val) {
        cy.get('.list-group > :nth-child(1)').should('include.text', val)
    }

    updCourseName(val) {
        cy.get('#name').clear().type(val)
    }

    updCourseCode(val) {
        cy.get('#code').clear().type(val)
    }

    editCourseBtn() {
        cy.get('#edit_course').click()
    }

    updateCourseBtn() {
        cy.get('#update_btn').click()
    }

    courseToDel() {
        cy.contains('dump').click()
    }

    delCourseBtn() {
        cy.get('#delete_course').click()
    }
}

module.exports = new courseManagement