document.getElementById('div').innerHTML = '<p>Hello</p>'



let a = document.createElement('a');
a.setAttribute('href', 'https://google.com');
a.setAttribute('target', '_blank');
a.textContent = 'HELLO WORLD'
a.style.backgroundColor = 'red';
document.querySelectorAll('.wraper-box')[0].appendChild(a);


//events
document.getElementById('send').addEventListener('click',function(){
    console.log('connected');
})

document.getElementById('send').addEventListener('mouseover',function(){
    send.style.backgroundColor = 'yellow';
})


document.getElementById('send').addEventListener('mouseout',function(){
    send.style.color = 'red';
})

document.getElementById('send').addEventListener('mousemove',function(){
    console.log('move');
})


document.getElementById('send').addEventListener('click',function(){
    document.body.classList.toggle('newclass');
})

document.getElementById('input').addEventListener('keydown',(event) => {
    if(event.which === 13) {
        alert('you pressed enter');
    }else {
        console.log('connected');
    }
    
})
document.getElementById('a-tag').addEventListener('click',(event) => {
    event.preventDefault();
    console.log('hello');
})







