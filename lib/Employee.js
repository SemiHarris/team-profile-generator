class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    typeIs(type) {
        this.type = type;
    }

    iconIs(icon) {
        return `<i class="ri-${icon}"></i>`;
    }
}

module.exports = Employee;