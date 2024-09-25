const insertionbtn = document.getElementById('insertion');
insertionbtn.addEventListener('click', async function () {
    disablebtn();
    await insertion();
    await final();
    enablebtn();
})
async function insertion() {
    console.log('In insertion function');
    let ele = document.querySelectorAll('.bars');
    let len = ele.length;
    let j, p;
    for (let i = 1; i < len; i++) {
        p = ele[i].style.height;
        j = i - 1;
        ele[i].style.backgroundColor = 'blue';
        await wait();
        while (j > -1 && parseInt(p) < parseInt(ele[j].style.height)) {
            // if(j+1!=i)
            ele[j].style.backgroundColor = 'blueviolet';
            ele[j + 1].style.height = ele[j].style.height;
            await wait();
            ele[j+1].style.backgroundColor = 'blueviolet';
            ele[j].style.backgroundColor = 'blue';
            j--;
        }
        ele[j+1].style.backgroundColor = 'blueviolet';
        ele[j + 1].style.height = p;
        if(j>-1)
        ele[j].style.backgroundColor = 'blueviolet';
        ele[i].style.backgroundColor = 'blueviolet';
    }
}
async function final(){
    let ele = document.querySelectorAll('.bars');
    let len = ele.length;
    for(let i=0;i<len;i++){
        ele[i].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
        await wait();
    }
}