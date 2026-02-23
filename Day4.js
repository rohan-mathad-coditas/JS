/*

 Arrays are basically objects in Desgusie!!
 in arrays its not necessary that the values are stored as just... array = [1,2,3, "x", "y", "zzz"]... and so on...
 we can also do...
 - array[100] = "element"; // Out... [1,2,3, "x", "y", "zzz", empty95, "element"];
 - array[mykey] = "myvalue" // Out... [1,2,3, "x", "y", "zzz", empty95, "element", "myvalue"]; // but here key of myvalue will be mykey!!
 - REMEMBER ARRAYS ARE BASICALLY OBJECTS, BUT THEY HAVE SOME EXTRA METHODS THAN OBJECTS HENCE WE CAN USE THEM WHEN ITS REQUIRED!
Array methods... ??
if we do... arr1 = [1,2,3] //
splice method use... //for cloning

 Shallow copy.
 Deepcopy - > types??

nullish coalescing (??) operator -> It returns the second value only if the first is null or undefined.



 Destructuring -> rest and spread operator
 1] rest
 const array1 = ["levono", 32, {//object},  "Intel Processor"]
 const [companyName, ram, ...ExtraDetails] = array1;
 it will store as...
 const companyName = "levono";
 const ram = 32;
 const ExtraDetails = [{//object},  "Intel Processor"] 
 // Remember the object will be stored as reference and not as exact value... so the reference in array1 will be copied
 // hence any changes made to the //object will be reflected EVERYWHERE AS ITS A REFERENCE!!!

2] spread
const oddNumbers = [3, 73, 99];
const evenNumbers = [2,4,6,8,10];
const mergeNumbers = [...oddNumbers, ...evenNumbers] 
// Output -> [3, 73, 99, 2,4,6,8,10];



 
 */