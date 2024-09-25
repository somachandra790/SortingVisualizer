const quickbtn=document.getElementById('quick');
quickbtn.addEventListener('click',async function(){
    let ele=document.querySelectorAll('.bars');
    let len=parseInt(ele.length);
    disablebtn();
    await quicksort(ele,0,len-1);
    enablebtn();
})
async function quicksort(ele,low,high){
    if(low<high){
        console.log('In quicksort function');
        console.log(low,high);
        let pi=await partition(ele, low, high);
        console.log(pi);
        await quicksort(ele,low,pi-1);
        await quicksort(ele,pi+1,high);
    }
    else{
        for(let k=low;k<=high;k++){
            console.log(low,high);
            ele[k].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
        }
    }
}
async function partition(ele,low,high){
    console.log('In partition');
    let pivot=ele[high].style.height;
    ele[high].style.backgroundColor='blue';
    console.log(pivot);
    let i=low-1,j;

    for(j=low;j<=high-1;j++){
        ele[j].style.backgroundColor='blueviolet';
        await wait();
        if(parseInt(ele[j].style.height)<parseInt(pivot)){
            i++;
            swap(ele[i],ele[j]);
            ele[i].style.backgroundColor='palevioletred';
        }
    }
    swap(ele[i+1],ele[high]);
    ele[i+1].style.backgroundColor='blue';
    if(i+1!=high)
    ele[high].style.backgroundColor='blueviolet';
    await wait();
    for(let k=0;k<ele.length;k++){
        if(ele[k].style.backgroundColor == 'blue'){
            ele[k].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
        }
        else
        ele[k].style.backgroundColor='cyan';
    }
    return i+1;
}