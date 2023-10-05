const fileSystem = require('fs');
const pathUtil = require('path');

const logDir = pathUtil.join(__dirname, 'LAB-TEST-1/question-3/logs');
const numLogs = 10;

fileSystem.mkdirSync(logDir, { recursive: true });

process.chdir(logDir);

for (let i = 0; i < numLogs; i++) {
  const logFileName = `log${i}.txt`;
  const logFilePath = pathUtil.join(logDir, logFileName);
  const logMessage = `This is log file ${i}.`;

  fileSystem.writeFileSync(logFilePath, logMessage);
}


const logFileNames = fileSystem.readdirSync(logDir);
console.log(logFileNames.join('\n'));
