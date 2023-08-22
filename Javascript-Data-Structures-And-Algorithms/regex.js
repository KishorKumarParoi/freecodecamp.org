// const text2 = "#2A2A2A";
// const regex2 = /#+([\da-fA-F]{2}){3}/g;

const text = "+88-01724714159";
const regex = /(\+)(8{2})(-?)(0{1})(1{1})([1-9]{1})([0-9]{8})/g;

const matches = text.match(regex);

const index = text.search(regex);

const replaced = text.replace(regex, "#000000");

const testing = regex.test(text);

console.log(matches, index, replaced, testing);

debugger;
