const jwt = require("jsonwebtoken");

//decode, verify, generate

const value = {
    name : "himanshu",
    accNumber: 8302929
}

//sign not generate
const token = jwt.sign(value, "secret");
console.log(token);

//this token has been generated using this secret, and hence this token can only verified using this seceret 

//token => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGltYW5zaHUiLCJhY2NOdW1iZXIiOjgzMDI5MjksImlhdCI6MTc1ODMxNTcyNH0.Usa
//TuiUQfIoxdLvw0IYGFtR9BR1o4xkoQWGcS3fgudk

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGltYW5zaHUiLCJhY2NOdW1iZXIiOjgzMDI5MjksImlhdCI6MTc1ODMxNTcyNH0.UsaTuiUQfIoxdLvw0IYGFtR9BR1o4xkoQWGcS3fgudk", "secret");

console.log(verifiedValue);
