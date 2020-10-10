//кв уравненме 
function urav (a,b,c) {
    let D, x1, x2;
    
    D = b**2 - 4*a*c;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);
        alert('x1 = '+x1+'   x2 = '+x2);
    }
    else if (D == 0) {
        x1 = (-b)/(2*a);
        alert('x = '+x1);
    }
    else if (D < 0) {
        alert('Решений нет, так как дискриминант меньше нуля.');
    }
}
urav(5,3,7);
