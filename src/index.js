module.exports = function check(str, bracketsConfig) {
    let array = [];
    str = str.split("");
    brackets = bracketsConfig;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0, ln = brackets.length; j < ln; j++) {
            if (str[i] === brackets[j][0] || str[i] === brackets[j][1]) {

                if (brackets[j][0] === brackets[j][1]) {
                    if (array[array.length - 1] === brackets[j][0]) {
                        array.pop();
                        break;
                    }
                    array.push(str[i]);
                    break;
                }

                if (str[i] === brackets[j][0]) {
                    array.push(str[i]);
                    break;
                }

                if (array[array.length - 1] !== brackets[j][0] || array.length === 0) {
                    return false;
                }
                array.pop();
            }
        }
    }
    if (array.length === 0) return true;
    else return false;
};
