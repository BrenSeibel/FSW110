var rainbow = document.getElementsByTagName("form")[0]
console.log(rainbow)
rainbow.addEventListener("submit", (event) => {
event.preventDefault()
    console.log(rainbow.children)
    console.log(rainbow.children[1].value)
    console.log(rainbow.children[3].value)
    console.log(rainbow.children[5].value)
    
    var values = {
        firstName:rainbow.children[1].value,
        lastName:rainbow.children[3].value,
        age:rainbow.children[5].value,
    }

    alert(JSON.stringify(values))
})

