/*Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a.

Sample Input 1:

5 6
Sample Output 1:

5 6
Sample I
*/

function testCycle(a, b) {
    var x;
    a = 5;
    b = 6;
    do {
        x+= " " + "i";
        i++;
    } while (i <= b);
    x.trim();
    console.log(x);
    return x;
}