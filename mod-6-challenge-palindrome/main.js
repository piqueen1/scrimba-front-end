function caseInsensitivePalindrome(str) {
    const insensitiveStr = str.toLowerCase();
    const reversedInsensitive = insensitiveStr.split('').reverse().join('')
    if (insensitiveStr === reversedInsensitive) {
        return true
    } else {
        return false
    }
}

console.log(caseInsensitivePalindrome("aabaa"))