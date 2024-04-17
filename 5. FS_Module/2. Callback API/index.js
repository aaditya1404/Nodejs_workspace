// In callback api we does use any promises instead we use callback function.
import * as fs from "fs";


fs.mkdir("C:\\Users\\aadit\\OneDrive\\Desktop\\Nodejs - workspace\\5. FS_Module\\1. Promise API\\nodejs", (error) => {
    if (error) {
        throw error;
    }
    console.log("Directory is created...");
})

// All of the functions which are used in promise api can be used in callback api by using a callback function istead of a promise and try and catch block.