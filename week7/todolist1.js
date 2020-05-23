let submit = document.querySelector('#submit')
let form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let title = document.querySelector('#title').value 
    let descrip = document.querySelector('#description').value
    
    // Todo title
    let todoTitle = document.createElement('li')
    todoTitle.setAttribute('class', 'todo-title')
    todoTitle.innerHTML = `<strong>Title:</strong> ${title}`
    let ol = document.querySelector('#ol')
    ol.prepend(todoTitle)
    
    // Todo description
    let todoDescrip = document.createElement('p')
    todoDescrip.setAttribute('class', 'todo-descrip')
    todoDescrip.innerHTML = `<strong>Description:</strong> ${descrip}`
    todoTitle.append(todoDescrip)

    //delete button
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'delete-button')
    deleteButton.textContent = 'Remove To-Do'
    todoTitle.append(deleteButton)

    //delete function 
    deleteButton.addEventListener('click', function(e) {
        todoTitle.remove()
        todoDescrip.remove()
    })

    // Remove the input field after submission
    if (title && descrip) {
        document.querySelector('#title').value = ''
        document.querySelector('#description').value = ''
    } else {
        console.log('broke')
    }
    

})