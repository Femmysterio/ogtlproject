/// <reference types="cypress" />

class studentManagement  {

    elements = {
        studentMangmntBtn: () => cy.contains('Student Management').click(),
        createStudent: () => cy.get('[href="/students/create"]').click(),
        assertCreateStudent: () => cy.get('.card .justify-content-between').should('contain.text', 'Create Student')
    }

    firstName (val) {
        cy.get('#first_name').type(val)
    }

    lastName (val) {
        cy.contains('Last Name').type(val)
    }

    code (val) {
        cy.get('input[id="reg_no"]').type(val)
    }

    createstudnt () {
        cy.get('#create_std').click({force:true})
    }

    elements2 = {
        student1: () => cy.contains('Oluwafemi Orungbeja').click(),
        assertStudentInfo: () => cy.get('div > nav > ol > li').eq(2).should('exist')
        .and('include.text', 'Student Info'),

        selectCourse: (val) => cy.get('#course_id').select(val),
        addBtn: () => cy.contains('Add').click({force:true}),
        
        editbtn: () => cy.get('#edit_std').click(),
        updFirstN: () => cy.get('[name="first_name"]').clear().type('Femi'),
        updLastN: () => cy.get('[name="last_name"]').clear().type('Orun'),
        updateStdBtn: () => cy.contains('Update Student').click(),
        bugFound1: () => cy.get('.max-w-xl > .flex').should('contain.text', '404'),

        student2: (val) => cy.contains(val).click(),
        deleteBtn: () => cy.get('#delete_std').click(),
        assertDeleletedStudent: (val) => cy.get('.list-group').should('not.contain', val),

        student3: () => cy.contains('Gjjejwwb Jejebeb').click(),
        delCourseBtn: () => cy.get('[href*="/34/delete"]').click({force:true})
    }
}

module.exports = new studentManagement