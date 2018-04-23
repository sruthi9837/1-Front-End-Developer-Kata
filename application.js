/*/**
 * Created by sruthi on 04/21/18.
 */

var data = [
    {
        "name": "Test Task #1",
        "date": "12/01/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #2",
        "date": "12/02/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #3",
        "date": "12/03/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #4",
        "date": "12/04/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #5",
        "date": "12/05/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #6",
        "date": "12/06/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #7",
        "date": "12/07/2012",
        "assigned": "John Doe"
    }
];

(function () {
    'use strict'

    function appendTask(task) {
        var table = document.querySelector('table')
        var row   = table.insertRow()

        for (var property in task) {
            var val   = task[property]
            var child = document.createTextNode(val)

            row.insertCell().appendChild(child)
        }
    }

    function clearFormValues(form) {
        for (var i in [0, 1, 2]) {
            form.elements[i].value = ''
        }
    }
    

    function isFullyPopulatedTask(task) {
        return (task.name && task.date && task.assigned)
    }

    function isValidDate(date) {  
        
        console.log(date,"=== This is from validation method");
        
        var dateRegEx       = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
    
        if(date.match(dateRegEx)){
            return true;
        }
        else{
            return false;
        }
        
    }

    function mapFormElements(form) {
        return {
            name:     form.elements[0].value,
            date:     form.elements[1].value,
            assigned: form.elements[2].value
        }
    }

    function prependTask(task) {
        var table = document.querySelector('table')
        var row   = table.insertRow(0)

        for (var property in task) {
            var val   = task[property]
            var child = document.createTextNode(val)
            row.insertCell().appendChild(child)     }
    }

   
    data.forEach(appendTask)

    document.querySelector('button').addEventListener('click', function () {
        var task = mapFormElements(this.form);
        console.log(task);
        var dateSplit = task.date.split("-");
        dateSplit[3] = dateSplit[0];
        dateSplit.splice(0, 1);
        var e = task['date'] = dateSplit.join('/');

        if (!isFullyPopulatedTask(task)) {
            alert('All form fields must be populated.')

            return false
        }

        if (!isValidDate(e)) {
            alert('The "Date" must be in `mm/dd/yyyy` format.')
            return false
        }

        prependTask(task)
        clearFormValues(this.form)
    })
})();
