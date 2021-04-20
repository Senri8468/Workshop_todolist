document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll("li").forEach(function(i){
    i.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    })
  })
  document.querySelectorAll(".close").forEach(function(x){
    x.addEventListener("click", function(p){
      p.target.parentNode.remove();
    })
  })
  const ul = document.querySelector('ul')
  const btn = document.querySelector('#addBtn')
  btn.addEventListener('click', function(){
    const li = document.createElement('li')
    const inputContent = document.createTextNode(input.value)
    const newClose = document.createElement('span')
    
    li.addEventListener('click', function(l){
      l.target.classList.toggle('checked')
    })
    newClose.addEventListener('click', function(c){
      c.target.parentNode.remove();
    })

    li.appendChild(inputContent)
    newClose.setAttribute('class','close')
    newClose.appendChild(document.createTextNode('x'))
    
    li.appendChild(newClose)
    ul.appendChild(li)
  })




})
