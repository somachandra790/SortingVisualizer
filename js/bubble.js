let bubblebtn = document.getElementById('bubble');
bubblebtn.addEventListener('click', async function () {
    disablebtn();
    await bubble();
    enablebtn();
})
// if we are not going to use async/await function then all the functions called will be working on the same time and we cannot see the animations, to analyse the animations we need the functions working in a asynchronous way(not occuring at the same time),this is possible with await keyword which can be used in async function
async function bubble(){
    console.log('in bubble func')
    const ele = document.querySelectorAll('.bars');
    let len = ele.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            ele[j].style.backgroundColor='blue';
            ele[j+1].style.backgroundColor='blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await wait();
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.backgroundColor='cyan';
            ele[j+1].style.backgroundColor='cyan';
        }
        ele[len-i-1].style.backgroundImage='linear-gradient(to bottom,palevioletred,purple';
    }
}
