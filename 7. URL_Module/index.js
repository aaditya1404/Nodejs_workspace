// URL - Uniform Resource Locator module.

import { URL } from "url";

const url = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(url.hash); // It will give us only the hash part.

console.log(url.host); // This will give us the host of the URL with the port number.

console.log(url.hostname); // This will give us the host of the URL without the port number. 

console.log(url.port); // This will give us only the port number of our URL.

console.log(url.href); // This will give us entire url.

console.log(url.protocol); // This will only gives us the protocol example https.

console.log(url.search); // This will gives us the query which is been searched by us.

console.log(url.searchParams); // This will only give us the search params.

//Both of the below mentioned lines will give us the same output.
console.log(url.toString());
console.log(url.toJSON());