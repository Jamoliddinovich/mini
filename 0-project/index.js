const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
let miq = 0


let a = parseInt(data)
let str = '2'.repeat(a)
for (let i = 0; i <= parseInt(str, 3); i++) {
        let z = rem(rem(i.toString(3)))
        let bool = true;
        for (let j = 0; j < a; j++) {
                if (!isavail(z, j)) {
                        bool = false
                        break;
                }
        }
        if (bool) {
                miq++;
        }

}

function rem(st) {
        for (let i = 0; i < a - st.length; i++) {
                st = "0" + st;
        }
        return st

}
function isavail(s, i) {
        if (i == 0 || i == s.length - 1) {
                if (s[i] == 2) {
                        return false
                }
                else {
                        if (i == 0) {
                                if (s[i] == 0) {
                                        if (s[i + 1] == 1 || s[i + 1] == 2) {
                                                return true
                                        }
                                } if (s[i] == 1) {
                                        if (s[i + 1] == 0 || s[i + 1] == 2) {
                                                return true
                                        }
                                }
                                return false
                        }
                        if (i == s.length - 1) {
                                if (s[i] == 0) {
                                        if (s[i - 1] == 1 || s[i - 1] == 2) {
                                                return true
                                        }
                                } if (s[i] == 1) {
                                        if (s[i - 1] == 0 || s[i - 1] == 2) {
                                                return true
                                        }
                                }
                                return false
                        }
                }
        }
        if (s[i] == 0) {
                if ((s[i - 1] == 1 || s[i - 1] == 2) && (s[i + 1] == 1 || s[i + 1] == 2)) {
                        return true
                }
        }
        if (s[i] == 1) {
                if ((s[i - 1] == 0 || s[i - 1] == 2) && (s[i + 1] == 0 || s[i + 1] == 2)) {
                        return true
                }
        }
        if (s[i] == 2) {
                if ((s[i - 1] == 1 && s[i + 1] == 0) || (s[i - 1] == 0 && s[i + 1] == 1)) {
                        return true
                }
        }


        return false

}

fs.writeFileSync('output.txt', `${miq}`, 'utf8');
