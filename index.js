// Your code here
function createEmployeeRecord (firstname,familyname,title,payrateperhour){
employee = {};
employee.firstname = firstname;
employee.familyname = familyname;
employee.title = title;
employee.payrateperhour = payrateperhour;
return employee;

}
 function createEmployeeRecords (employee,createEmployeeRecord) {
newemployee[employee] = employee.createEmployeeRecord;
return newemployee;
 }

function createTimeInEvent(employee,datestamp){
    employeeRecord:
    type:  TimeIn;
    hour: datestamp
    date: datestamp
    return employeeRecord;
}
   function createTimeOutEvent (employee,datestamp){
        employeeRecord:
        type:  TimeOut;
        hour: datestamp
        date: datestamp
        return employeeRecord;
}
function hoursWorkedOnDate (employee,datestamp){
    hoursWorked:
    type: Int;
    let hoursLapsed = TimeOut - TimeIn;
    return hoursLapsed;

}
function wagesEarnedOnDate (employee,datestamp){
    let payOwed = hoursWorkedOnDate * recordsPayRate;
    return payOwed;

}

function allWagesFor (employee,payOwed){
    let totalpayOwed = wagesEarnedOnDate * payOwed;
return totalpayOwed;
}

function calculatePayroll (newemployee){
   let totalWages =  wagesEarnedOnDate * totalpayOwed;
   return totalWages;
}