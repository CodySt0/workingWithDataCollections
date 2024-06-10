let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let newArray = csv.split("\n");
console.log(csv);

let dataArray = [];

for (let i = 0; i < newArray.length; i++) {
  let splitItem = newArray[i].split(",");
  dataArray.push(splitItem);
}

console.log(dataArray);

let cellHeaders = [];
