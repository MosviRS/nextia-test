function ordenAsc(list) {
    if(list.length === 1) return true;
    for (let i = 0; i < list.length-1; i++) {
        if(list[i] > list[i+1]) {
            return false;
        }
    }
    return true;
}
console.log(ordenAsc([1,2,3,6,7,19]));
console.log(ordenAsc([12,2,9,6,7,19]));
console.log(ordenAsc([4]));
