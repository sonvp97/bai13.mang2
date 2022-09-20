let arr = ['-','^','-','#','-'];
for (let i = 0;i < arr.length; i++){
    if (arr[i] === '-'){
        arr.splice(i,1,'_');
    }
}
document.write(arr);