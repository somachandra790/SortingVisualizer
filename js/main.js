// Action on  newarray button
const newarr = document.querySelector('#newarray');
newarr.addEventListener('click', function () {
    let len = parseInt(document.getElementById('sizebtn').value);
    createnewarray(len);
})

// Function for creating new array
const createnewarray = (len) => {
    console.log('createnewarray getting called');
    deleteChild();
    let arr = document.getElementById('mainbody');
    for (let i = 0; i < len; i++) {
        const arrelem = document.createElement('div');
        arrelem.className = 'bars';
        arrelem.id = 'bar' + (i + 1);
        let arrheight = Math.floor((Math.random() * (500 - 200)) + 200);
        arrelem.style.height = arrheight + 'px';
        arr.appendChild(arrelem);
    }
}

// Function for deleting prev arrays 
const deleteChild = () => {
    const childbars = document.querySelector('#mainbody');
    childbars.innerHTML = '';
}

// Function for creating new array each time size has been changed
const sizebtn = document.getElementById('sizebtn');
sizebtn.addEventListener('input', function () {
    const arrsize = parseInt(sizebtn.value);
    createnewarray(arrsize);
})

const speedbtn = document.getElementById('speedbtn');
speedbtn.addEventListener('input', function () {
    let delay = parseInt(speedbtn.value);
})

// Function to swap elements
const swap = (ele1, ele2) => {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

// Function to show animations
function wait() {
    let delay=parseInt(speedbtn.value);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 270-delay);
    });
}

const enablebtn = () => {
    console.log('Enabling buttons');
    document.querySelector('#newarray').disabled = false;
    document.querySelector('#sizebtn').disabled = false;
    document.querySelector('#speedbtn').disabled = false;
    document.querySelector('#bubble').disabled = false;
    document.querySelector('#insertion').disabled = false;
    document.querySelector('#selection').disabled = false;
    document.querySelector('#quick').disabled = false;
    document.querySelector('#merge').disabled = false;
    newarr.style.backgroundColor='rgb(41, 41, 51)';
    newarr.style.border='2px solid cyan';
    document.querySelector('#bubble').style.backgroundColor = 'rgb(41, 41, 51)';
    document.querySelector('#insertion').style.backgroundColor = 'rgb(41, 41, 51)';
    document.querySelector('#selection').style.backgroundColor = 'rgb(41, 41, 51)';
    document.querySelector('#quick').style.backgroundColor = 'rgb(41, 41, 51)';
    document.querySelector('#merge').style.backgroundColor = 'rgb(41, 41, 51)';
    document.querySelector('#bubble').style.border='2px solid cyan';
    document.querySelector('#insertion').style.border='2px solid cyan';
    document.querySelector('#selection').style.border='2px solid cyan';
    document.querySelector('#quick').style.border='2px solid cyan';
    document.querySelector('#merge').style.border='2px solid cyan';
}

const disablebtn = () => {
    console.log('Disabling buttons');
    document.querySelector('#newarray').disabled = true;
    document.querySelector('#sizebtn').disabled = true;
    document.querySelector('#speedbtn').disabled = true;
    document.querySelector('#bubble').disabled = true;
    document.querySelector('#insertion').disabled = true;
    document.querySelector('#selection').disabled = true;
    document.querySelector('#quick').disabled = true;
    document.querySelector('#merge').disabled = true;
    newarr.style.backgroundColor='gray';
    newarr.style.border='2px solid gray';
    document.querySelector('#bubble').style.backgroundColor = 'gray';
    document.querySelector('#insertion').style.backgroundColor = 'gray';
    document.querySelector('#selection').style.backgroundColor = 'gray';
    document.querySelector('#quick').style.backgroundColor = 'gray';
    document.querySelector('#merge').style.backgroundColor = 'gray';
    document.querySelector('#bubble').style.border='2px solid gray';
    document.querySelector('#insertion').style.border='2px solid gray';
    document.querySelector('#selection').style.border='2px solid gray';
    document.querySelector('#quick').style.border='2px solid gray';
    document.querySelector('#merge').style.border='2px solid gray';
}

