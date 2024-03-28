const firm = new Company();
addPerson.onclick = function () {
    const employee = new Employee(employeeId.value.trim(), firstName.value.trim(),
        lastName.value.trim(), date.value, salary.value);
    if(firm.addEmployee(employee)){
        const li = employee.createEmployeeDOMElement ('li');
        const delButton = createButtonDelete();
        delButton.addEventListener('click', function (){
            const index = firm._employees.findIndex(e => e.id === employee.id);
            if (index >=0) {
                firm._employees.splice(index,1);
                employeesList.removeChild(li);
            }
        })


        li.appendChild(delButton);
        employeesList.appendChild(li);
        employeeId.value = '';
        firstName.value = '';
        lastName.value = '';
        date.value = '';
        salary.value = '';

    }else{
        alert(`Employee with id = ${employee.id} exists`);
    }
}


calcStats.onclick = function () {
    firm.getStats();
}
