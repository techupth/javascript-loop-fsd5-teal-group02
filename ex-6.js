let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for (let i = companyName.length - 1; i >= 0; i = i - 1) {
  reversedCompanyName = reversedCompanyName + companyName[i];
}

console.log(reversedCompanyName);
