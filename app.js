let table = document.querySelector('#table');

let employees = [
    {name: 'Irina', age: 30, salary: 400},
    {name: 'Sergey', age: 31, salary: 500},
    {name: 'Church', age: 32, salary: 600},
];


let th1 = document.createElement('th');
th1.textContent = 'name';
table.appendChild(th1);

let th2 = document.createElement('th');
th2.textContent = 'age';
table.appendChild(th2);

let th3 = document.createElement('th');
th3.textContent = 'salary';
table.appendChild(th3);


for (let employee of employees) {
    let tr = document.createElement('tr');

    let employeeName = document.createElement('td');
    employeeName.textContent = employee.name;
    tr.appendChild(employeeName);

    let employeeAge = document.createElement('td');
    employeeAge.textContent = employee.age;
    tr.appendChild(employeeAge);

    let employeeSalary = document.createElement('td');
    employeeSalary.textContent = employee.salary;
    tr.appendChild(employeeSalary);

    table.appendChild(tr);


    employeeAge.addEventListener('click', function () {
        employeeAge.textContent++;
    })

    employeeSalary.addEventListener('click', function () {
        let salary = Number(employeeSalary.textContent * 0.1) + Number(employeeSalary.textContent);
        employeeSalary.textContent = salary.toFixed(2);
    })
}