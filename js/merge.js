const mergebtn=document.getElementById('merge');
mergebtn.addEventListener('click',async function(){
    const ele=document.querySelectorAll('.bars');
    let len=parseInt(ele.length);
    disablebtn();
    await sort(ele,0,len-1);
    enablebtn();
});
async function sort(ele,low,high){
    console.log('In sort function');
    if(low<high){
        let mid=Math.floor((low+high)/2);
        await sort(ele,low,mid);
        await sort(ele,mid+1,high);
        await merge(ele,low,mid,high);
    }
}
async function merge(ele,low,mid,high){
    console.log('In merge function');
    console.log(low,mid,high);
    if(low<=high){
        let i,j,k;
        const n1=(mid-low)+1;
        const n2=high-mid;
        let left=new Array(n1);
        let right=new Array(n2);
        for(i=0;i<n1;i++){
            left[i]=ele[low+i].style.height;
            ele[low+i].style.backgroundColor='blueviolet';
        }
        for(j=0;j<n2;j++){
            right[j]=ele[j+mid+1].style.height;
            ele[j+mid+1].style.backgroundColor='blue';
        }
        i=0;j=0;k=low;
        await wait();
        while(i<n1 &&  j<n2){
            await wait();
            if(parseInt(left[i]) <= parseInt(right[j]))
            {
                if((n1+n2)==ele.length){
                    ele[k].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
                }
                else{
                    ele[k].style.backgroundColor='cornflowerblue';
                }
                ele[k].style.height=left[i];
                i++;
            }
            else{
                console.log(right[j]);
                ele[k].style.height=right[j];
                if((n1+n2)==ele.length){
                    ele[k].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
                }
                else{
                    ele[k].style.backgroundColor='cornflowerblue';
                }
                j++;
            }
            k++;
        }
        while(i<n1){
            await wait();
            if((n1+n2)==ele.length){
                ele[k].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
            }
            else{
                ele[k].style.backgroundColor='cornflowerblue';
            }
            ele[k].style.height=left[i];
            i++;k++;
        }
        while(j<n2){
            await wait();
            if((n1+n2)==ele.length){
                ele[k].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
            }
            else{
                ele[k].style.backgroundColor='cornflowerblue';
            }
            ele[k].style.height=right[j];
            j++;k++;
        }
    }
}
