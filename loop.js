data=parseInt(prompt("데이터 입력",0))
let sum = 0;
for(let i=1; i <=data; i++){
    sum += i;
    
}
console.log("합은=>"+sum);

const a =[40,70,90,100,30];
let hap=0;
for(let val of a){
    hap+=val;
}
console.log('결과:'+hap);

let i=1;
let hap=0;
while(i<=data){
    hap+=i;
    i++;
}
console.log('1~${data}까지 합 = ${hap}')

i=1;
hap=0;
while(i<=data){
    hap+=i;
    if(hap>=50)
i++;
}
console.log('합이 50 넘는 ${i}값 합=${hap}')
