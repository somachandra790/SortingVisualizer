const selectionbtn = document.getElementById('selection');
selectionbtn.addEventListener('click', async function () {
    disablebtn();
    await selection();
    enablebtn();
})
async function selection() {
    console.log('In selection function')
    const ele = document.querySelectorAll('.bars');
    let len = ele.length;
    let min_index;
    for (let i = 0; i < len - 1; i++) {
        min_index = i;
        ele[i].style.backgroundColor = 'blue';
        for (let j = i + 1; j < len; j++) {
            ele[j].style.backgroundColor = 'blueviolet';
            await wait();
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                if(min_index!=i)
                ele[min_index].style.backgroundColor = 'cyan';
                min_index = j;
                ele[min_index].style.backgroundColor = 'blueviolet';
            }
            else
                ele[j].style.backgroundColor = 'cyan';
        }
        await wait();
        swap(ele[i], ele[min_index]);
        ele[min_index].style.backgroundColor = 'cyan';
        ele[i].style.backgroundImage = 'linear-gradient(to bottom,palevioletred,purple';
    }
    ele[len-1].style.backgroundImage = 'linear-gradient(to bottom,palevioletred,purple';

}