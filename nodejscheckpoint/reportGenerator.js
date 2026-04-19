// reportGenerator.js

function generateReport(name, scores) {
    // Calculate average score
    if (!scores || scores.length === 0) {
        return {
            studentName: name,
            average: 0,
            status: 'fail',
            message: `Student: ${name}\nAverage Score: 0\nStatus: FAIL (No scores available)`
        };
    }
    
    const sum = scores.reduce((total, score) => total + score, 0);
    const average = sum / scores.length;
    const status = average >= 10 ? 'pass' : 'fail';
    
    // Create formatted report
    const report = {
        studentName: name,
        average: average.toFixed(2),
        status: status,
        message: `Student: ${name}\nAverage Score: ${average.toFixed(2)}\nStatus: ${status.toUpperCase()} ${status === 'pass' ? '✅' : '❌'}`
    };
    
    return report;
}

module.exports = { generateReport };