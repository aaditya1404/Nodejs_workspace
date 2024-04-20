// OS module - Operating system module
import os from "os";

console.log(os.platform()); // Returns a string identifying the opearting system platform for which the Node.js binary was complied.

console.log(os.arch()); // This will return the arhietecture of the my operating system. In my case since I am using windows-64 bit so it will return x64.   

console.log(os.cpus()); // This will give us information of the CPU in which the code is complied.

console.log(os.hostname()); // This will give us the host of the system.

console.log(os.homedir()); // This will return us the info of the home directory.

console.log(os.networkInterfaces()); // This will show usinformation about the network.

console.log(os.freemem()); // This will give us the information about how much free memory we have left in bits.

console.log(os.totalmem()); // This will tell us about the total memory in terms of bit.    