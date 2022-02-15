const Employee = require('../lib/Employee');

test('Create a employee object', () => {
    const employee = new Employee('Semi','5','Semiharris3@gmail.com');

    expect(employee.name).toBe('Semi');
    expect(employee.id).toBe('5');
    expect(employee.email).toBe('Semiharris3@gmail.com')
});

test('Add type based on input', () => {
    const employee = new Employee('Semi','5','Semiharris3@gmail.com');
    employee.typeIs('Manager')

    expect(employee.type).toBe('Manager')
})

test('Create icon base on type', () => {
    const employee = new Employee('Semi','5','Semiharris3@gmail.com');

    expect(employee.iconIs('body-scan-fill')).toEqual(expect.stringContaining('<i class="ri-body-scan-fill"></i>'))
})