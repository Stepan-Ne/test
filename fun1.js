function isFriendlyNum(num1, num2) {
    let sum1 = getSumDivisors(getOwnDivisors(num1));
    let sum2 = getSumDivisors(getOwnDivisors(num2));

    if (sum1 == num2 && sum2 == num1) {
        return true;
    } else {
        return false;
    }

}
function getOwnDivisors(num) {

}
function getSumDivisors(arr) {

}