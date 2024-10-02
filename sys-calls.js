const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});

fs.writeFile('output.txt', 'This is some sample data.', (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to output.txt');
    }
    });

    const os = require('os');

    const os = require('os');
const fs = require('fs');

const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

// Logging the information to the console
console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus.length);

// Writing the information to a file
const fileInfo = `
Hostname: ${hostname}
Platform: ${platform}
CPU Cores: ${cpus.length}
`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Information written to os_info.txt file.');
});

const fs = require('fs').promises;
const os = require('os');

async function readFileAndLogOSInfo() {
 try {
   const data = await fs.readFile('output.txt', 'utf8');
   console.log('Data from file:', data);

   const platform = os.platform();
   console.log('OS Platform:', platform);
 } catch (error) {
   console.error('Error:', error);
 }
}

readFileAndLogOSInfo();