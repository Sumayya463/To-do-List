const noteColor = ['rgb(255, 224, 113)' , 'pink' , 'rgb(182, 242, 166)', 'rgb(255, 186, 125)' , 'rgb(179, 233, 255)'];
const img = document.getElementById('colorImage');
img.addEventListener('click' , function(){
    const randomValue = getRandomValue();
    document.getElementById('to-doList').style.backgroundColor = noteColor[randomValue];
})

function getRandomValue(){
    return Math.floor(Math.random() * noteColor.length);
} 

function addItem(){
    
   const addItem = document.createElement('li');
   
   
   var itemText = document.createTextNode(document.getElementById('input').value);

   addItem.appendChild(itemText);

  
   

   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'X';
   deleteButton.classList.add('btn');
   deleteButton.onclick = function (){
         deleteItem(addItem);
   };

   addItem.appendChild(deleteButton);

   const div = document.getElementById('my-list');
   div.appendChild(addItem);


   const list = document.querySelectorAll('li');
   list.forEach(item => {
    item.addEventListener('click' , () => {
        item.classList.toggle('Completed')
    })
   });
   

   document.getElementById('input').value = '';

   
   

    
}


function deleteItem(item){
    item.remove();
}



