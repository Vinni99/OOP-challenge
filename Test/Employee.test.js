//  const { expect } = require('@jest/globals');
    const Employee = require('../lib/Employee');

    Describe('creates an employee object', () => {
        const employee = new Employee();

        expect(typeof(employee)).toBe('object');
    });

    Describe('gets employee name', () => {
        const employee = new Employee('Employee1');
        

        expect(employee.getName()).toBe('Employee1');
    });

    Describe('gets employee id', () => {
        const employee = new Employee('Employee1', '1');

        expect(employee.getId()).toBe('1');
    });

    Describe('gets employee email', () => {
        const employee = new Employee('Employee1', '1', 'Test@example.com ');

        expect(employee.getEmail()).toBe('Test@example.com');
    });

    Describe('gets employee role', () => {
        const employee = new Employee('Employee1');

        expect(employee.getRole()).toBe('Employee');
    });

