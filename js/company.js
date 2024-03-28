class Company {
    constructor() {
        this._employees = [];
    }


    get employees() {
        return [...this._employees];
    }

    addEmployee (employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index<0;
    }

    removeEmployee (id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >=0) {
            this._employees.splice(index,1);
        }
        return index>=0;
    }


    getStats () {
        if (this._employees.length === 0) {
            console.log("No employees to calculate stats");
            return;
        }

        const totalSalary = this._employees.reduce((sum,employee) => sum + +employee.salary, 0);
        const avgSalary = totalSalary/this._employees.length;

        const minAge = this._employees.reduce((youngest, employee) => {
            return (employee.age < youngest ? employee.age : youngest)
        }, this._employees[0].age);
        const maxAge = this._employees.reduce((oldest, employee) => {
            return (employee.age > oldest ? employee.age : oldest)
        }, this._employees[0].age);
        const avgAge = (this._employees.reduce((sum, employee) => sum + employee.age, 0))/this._employees.length;
        const totalStats = `The total salary at the firm is ${totalSalary} <br>
                            The average salary at the firm is ${avgSalary} <br>
                            The average age of the employees is ${avgAge} <br>      
                            The youngest employee is ${minAge} <br>
                            The oldest employee is ${maxAge}`;
        const myStats = document.createElement('p');
        myStats.innerHTML = (totalStats);
        stats.innerHTML = '';
        stats.appendChild(myStats);
    }

}

