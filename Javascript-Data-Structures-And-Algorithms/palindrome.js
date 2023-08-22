function palindrome(str) {
    const lowerStr = str.toLowerCase();
    const regex = /[^a-zA-Z0-9]/g;

    const replaced = lowerStr.replace(regex, "");
    let length = replaced.length;
    console.log(replaced);

    for (let i = 0; i < length / 2; ++i) {
        if (replaced[i] != replaced[length - i - 1]) return false;
    }
    return true;
}

console.log(palindrome("madam*(* "));
