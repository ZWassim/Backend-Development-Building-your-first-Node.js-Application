// main.js

const { generateReport } = require('./reportGenerator');

// Example data
const studentName = "John Doe";
const testScores = [15, 8, 12, 10, 14];

// Generate the report
const report = generateReport(studentName, testScores);

// Print the report to console
console.log("\n📊 STUDENT PERFORMANCE REPORT 📊");
console.log("=".repeat(35));
console.log(report.message);
console.log("=".repeat(35));

// Additional examples to test the module
console.log("\n📝 Additional Examples:\n");

// Pass example
const passExample = generateReport("Alice Johnson", [18, 15, 17, 16]);
console.log(passExample.message);

// Fail example
const failExample = generateReport("Bob Smith", [5, 7, 8, 6]);
console.log(failExample.message);