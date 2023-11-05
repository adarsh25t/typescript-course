// Code goes here

/*
    - private - use private the value never get outside the object
    ex : employee work addEmployee function but if you add new 
    department1.employee.push("new") this is not work

    - public get outside of the object ( default value is public )
    - readonly - when initalize the value that value never change its only read
*/

class Department {
    name: string;
    private employee: string[] = []

    constructor(private readonly id: string,name: string) {
        this.name = name;
        this.id = id
    }

    describe() {
        console.log(this.id,this.name);
    }

    addEmployee(newemployee: string) {
        this.employee.push(newemployee)
    }

    printEmployee() {
        console.log(this.employee);
    }
}

let department1 =  new Department('12edeed','computer');
console.log(department1);
//department1.describe()
department1.addEmployee("adam");
department1.addEmployee("josh");

department1.printEmployee()

