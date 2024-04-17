import * as fs from "fs/promises"; // * is used to import everything.

// Creating Directory or folder
try {
    // await fs.mkdir('C:\\Users\\aadit\\OneDrive\\Desktop\\Nodejs - workspace\\5. FS_Module\\1. Promise API\\nodejs'); // fs.mkdir is used to create a folder. This line will create a folder named node.js.

    // await fs.mkdir('C:\\Users\\aadit\\OneDrive\\Desktop\\Nodejs - workspace\\5. FS_Module\\1. Promise API\\nodejs\\index.js'); // If the node folder does not exits it will give us an error and it will also not create a file called index.js

    // So to remove this error we use recursive: true
    // await fs.mkdir('C:\\Users\\aadit\\OneDrive\\Desktop\\Nodejs - workspace\\5. FS_Module\\1. Promise API\\nodejs\\index.js', {recursive: true}); 

    // console.log("Folder Created ...");
} catch (error) {
    console.log(error);
}

// Reading the contents of the directory
try {
    // const files = await fs.readdir("C:\\Users\\aadit\\OneDrive\\Desktop\\Nodejs - workspace\\5. FS_Module\\1. Promise API\\nodejs");
    // for (const file of files) {
    //     console.log(file);
    // }
    // console.log(files);  
} catch (error) {
    console.log(error);
}

// Remove folder or directory
// For removing a folder or directory the folder should be empty 
try {
    // await fs.rmdir("C:\\Users\\aadit\\OneDrive\\Desktop\\Nodejs - workspace\\5. FS_Module\\1. Promise API\\nodejs"); // It will the file or directory.
} catch (error) {
    console.log(error);
}

// Create and Write files
try {
    // await fs.writeFile("README.md", "Hello Node.js"); // It will create a file named README.md in the root directory and inside that file it will wirte Hello Node.js
} catch (error) {
    console.log(error);
}

// Read files
try {
    // const data = await fs.readFile("README.md"); // This line will read the data inside the README.md file and it will return a Buffer.
    // To resolve the buffer we need to use "utf-8" which will convert the buffer to an actual data stored inside the file.
    // const data = await fs.readFile("README.md", "utf-8");
    // console.log(data);
} catch (error) {
    console.log(error);
}

// Append the files or adding data into the file
try {
    // await fs.appendFile("README.md", "\nNode.js is the best tool ever to be used by the programmers."); // This code is going to add the data into the README.md file. In this case the
} catch (error) {
    console.log(error);
}

// Copy file
try {
    // await fs.copyFile("README.md", "info.txt"); // This line will copy all the content of the README.md file to info.txt file. If the info.txt file is not craeted then this code will create a info.txt file and then copy all the contents.
} catch (error) {
    console.log(error);
}


// Get file Information
try {
    const info = await fs.stat("info.txt"); // This code will give all of the stats of the file. such as dev, uid ,gid etc.
    console.log(info.isDirectory()); // This code will tell if this file is a folder or a file.
    console.log(info.isFile()); // This code will tell is this file is a file or folder.
    console.log(info);  
} catch (error) {
    console.log(error);
}