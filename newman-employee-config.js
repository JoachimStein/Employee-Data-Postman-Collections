const newman = require('newman');

newman.run({
    collection: require('./Employee Data.postman_collection.json'),
    environment: require('./Employee.postman_environment.json'),
    iterationData: "./data.csv",
    reporters: ['htmlextra'],
    reporter: {
        htmlextra: {
            export: './reports/employee-report.html',
            title: 'Employee Data - REST API Report'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
