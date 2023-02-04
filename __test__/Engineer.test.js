const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const { test } = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer1');

    expect(typeof(engineer)).toBe('object');
});

test('gets github username', () => {
    const engineer = new Engineer('Manager', '1', 'Test@example.com', 'Github1');

    expect(engineer.github).toBe('Github1');
});

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('Manager1');

    expect(engineer.getRole()).toBe('Engineer');
});