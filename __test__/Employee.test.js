//  const { expect } = require('@jest/globals');
    const Employee = require('../lib/Employee');

    test('creates an employee object', () => {
        const employee = new Employee();

        expect(typeof(employee)).toBe('object');
    });

    test('gets employee name', () => {
        const employee = new Employee('Employee1');
        

        expect(employee.getName()).toBe('Employee1');
    });

    test('gets employee id', () => {
        const employee = new Employee('Employee1', '1');

        expect(employee.getId()).toBe('1');
    });

   test('gets employee email', () => {
        const e = new Employee('Employee1', '1', 'Test@example.com');

        expect(e.getEmail()).toBe('Test@example.com');
    });

   test('gets employee role', () => {
        const employee = new Employee('Employee1');

        expect(employee.getRole()).toBe('Employee');
    });

