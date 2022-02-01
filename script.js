var inputText=document.querySelector('input');
var addButton=document.querySelector('button');
var addCountTodo=document.querySelector('.todos');
var count=0;
addButton.addEventListener('click',function(){
    var data=inputText.value;
    var pTag=document.createElement('p');
    pTag.setAttribute('key',count);
    pTag.append(data);
    addCountTodo.append(pTag);
    inputText.value=" ";
    count+=1
    pTag.addEventListener('click',function(){
        pTag.remove();
        count-=1;
    })
}) 