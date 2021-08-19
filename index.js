const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const submit = document.querySelector('#submit');
const cathing = document.querySelector('#cathing');

submit.addEventListener('click',function(e){
    e.preventDefault;
    if (title.value == "" && author.value == "" && year.value== ""){
        alert(' incorrect ')

    }
    else{
        const NewRow = document.createElement('tr')

        
        const NewTitle = document.createElement('td');
        NewTitle.innerHTML= title.value
        NewRow.appendChild(NewTitle)

        
        const NewAuthor = document.createElement('td');
        NewAuthor.innerHTML= author.value
        NewRow.appendChild(NewAuthor)
        
       
        const NewYear = document.createElement('td');
        NewYear.innerHTML= year.value
        NewRow.appendChild(NewYear)


        cathing.appendChild(NewRow)

        
        
        
        
    }

});

