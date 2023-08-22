const text = "#2A2A2A";
const regex =
    /(^#)([0-9{1}][a-zA-Z{1}])([0-9{1}][a-zA-Z{1}])([0-9{1}][a-zA-Z{1}])/g;

const matches = text.match(regex);

const index = text.search(regex);

const replaced = text.replace(regex, "#000000");

const testing = regex.test(text);

console.log(matches, index, replaced, testing);

debugger;
