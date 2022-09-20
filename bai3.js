let arr = [2,5,89,6,4,5,'g','t','j'];
let sum=0;
for (let i = 0 ; i < arr.length ; i++){
    if (typeof arr[i] === 'number'){
        sum+=1;
    }else {
        sum+=0;
    }
}document.write('Có '+sum+' ký tự số trong mảng');