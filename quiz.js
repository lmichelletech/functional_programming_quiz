// Functional Programming Quiz
// The ReadyMart is doing their payroll. They want you as a developer to create a few functions, packaged in a class, 
//that they can streamline the process. The class will take in an array of objects. Have at least 3 objects. Each object should 
//contain the following properties and values.
// 	Properties
// 	1)	Name
// 	2)	Hourly Rate
// 	3)	Hours Worked

// 	Values
// 	1)	Must be full name written as one string.
// 	2)	Must be a number with decimal of two places.
// 	3)	Must be an integer no larger than 80 and no less than 20.

// Next name the class Payroll and add the following methods inside of the class.

// Q1)
// 	Make a function named getNames that returns an array using the map function that orders alphabetically the names of the items. 
//To do this, you need to get an array from the map function that grabs all the names of the items and then apply the sort function.
// return newarray.sort()	
// (i.e. [].sort())

// Q2)
// 	Make a method called getFullTime that returns an array using the filter function that returns all the employees that have 
//worked longer than 60 hours.

// Q3)
// 	Make a function called getTotalLabor that returns a value using the reduce function that returns the total cost for all employees. To do this you must add to the accumulator the product of the hours worked multiplied by the hourly rate.

const currentPayroll = [
    { name: "John Smith", rate: 2.00, hours: 30 },
    { name: "Mary Mayworth", rate: 8.00, hours: 20 },
    { name: "Kevin Baxter", rate: 6.00, hours: 40 }
]

class Payroll {
    constructor(payrollArray) {
    }

    getNames(nameArray) {
        let newNameArray = nameArray.map(function (arr) {
            //   console.log("hello " + arr.name)
            return arr.name
        })
        return newNameArray.sort()
    }

    getFullTime(hoursArray) {
        let newHoursArray = hoursArray.filter(function (arr) {
            return arr.hours
        })
        return (newHoursArray > 60 ? true : false)
    }


    getTotalLabor(newArray) {
        console.log(newArray)
        var x = getNames(newArray)
        return getFullTime(newArray) * newArray.hours
    }

}

user = new Payroll()
user.getTotalLabor(currentPayroll)
