const palindromes = function (palindrome) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const normalString = palindrome
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join();

        const reversedString = normalString.split("").reverse().join("");
        return normalString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
