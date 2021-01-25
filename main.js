window.onload = () => {
    createElements(100);
     cliptest();
    setTimeout(() => {
       
    }, 3000);
}
var body = document.querySelector('.main');
var index = 0
function createElements(noOfElements1) {
    let noOfElements = index+noOfElements1;
  
    for (index; index < noOfElements; index++) {
        if (index >300) {
       break;
        
    }
        var element = document.createElement('div');
        let thisColor = color();
        element.className += 'basicStyle';
        element.style.backgroundColor = thisColor;
        let para = document.createElement('span');
        let text = document.createTextNode(index);
        para.className += 'number';
        let para1 = document.createElement('span');

        let text1 = document.createTextNode(thisColor);
        para1.className += 'color';
        para1.appendChild(text1);
        para.appendChild(text);
        let clipboard = document.createElement('input');
        clipboard.className= 'clipboard';
        clipboard.type= 'text';
        clipboard.style.opacity=0;
        //clipboard.disabled = true
        clipboard.value = thisColor;
        element.appendChild(para);

        element.appendChild(para1);
        element.appendChild(clipboard);
        body.appendChild(element);
    }
}
function color() {
    let a = ["1", "2", '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
    var x = "#";
    for (let index = 0; index < 6; index++) {
            x += a[Math.ceil(Math.random() * 15)];
    }
    return x;
}      
function cliptest() {
    let clipboard = document.querySelectorAll('.basicStyle');
    clipboard.forEach(element =>{
        element.addEventListener('click', (e)=>{
            let mainElement = e.target;
            let childElement = mainElement.children[1];
            let text = childElement.innerHTML;
           // window.alert("color succesfully copied to clipboard "+text);
            let aux = document.createElement('input');
            aux.setAttribute('value',text);
            let body = document.querySelector('body');
            body.appendChild(aux);
            aux.select();
            document.execCommand('copy');
            body.removeChild(aux);
        })
    });
    
}

window.onscroll =(e)=>{
    var ch = window.pageYOffset/e.target.body.clientHeight*100;
    //console.log(window.pageYOffset, e.target.body.clientHeight);
    if (ch>95) {
    createElements(100);
    }
}



