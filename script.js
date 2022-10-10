const bookgrid = document.querySelector('.newgrid')

const overlay = document.querySelector(".overlay")

let myLibrary = []



class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
       

        
    }
}




document.querySelector('.addbookbutton').addEventListener("click", (e) => {

    const card = document.querySelectorAll(".card")


    card.forEach((elem, ind, arr) => {
        elem.classList.toggle('none')
    })




    overlay.classList.toggle('none')

    bookgrid.appendChild(overlay)


    let addbutton = document.querySelector('.addbookbutton')

    if (addbutton.textContent == "Add New Book!") { addbutton.textContent = "Cancel" }
    else {
        addbutton.textContent = "Add New Book!"
    }

    document.querySelectorAll('.overlay1').forEach((elem, ind, arr) => {
        elem.value = ""
        elem.checked = false
    })




    if (document.querySelector('.removep').textContent == "Remove") {
        document.querySelector('.removep').textContent = "Submit"
    }
    else {
        document.querySelector('.removep').textContent = "Remove"
    }

})

const title = document.querySelector('.titleinput')
console.log(title)
const author = document.querySelector('.authorinput')
const pages = document.querySelector('.pagesinput')
const read = document.querySelector('.readinput')

const submit = document.querySelector('.submit')

submit.addEventListener("click", (e) => {


if (title.value == "") {alert("please enter a title")}
else if (author.value == "") {alert("please enter a author")}
else if (pages.value == "") {alert("please enter the number of pages")}
else 

{
    
    overlay.classList.toggle('none')

    const card = document.querySelectorAll(".card")


    card.forEach((elem, ind, arr) => {
        elem.classList.toggle('none')
    })
    let addbutton = document.querySelector('.addbookbutton')

    addbutton.textContent = "Add New Book!"

    
    let book = new Book(title.value, author.value, pages.value, read.checked, index)
    index++

    myLibrary.push(book)
    console.log(myLibrary.indexOf(book))

    Addbook()
    readStatus()

}


    


})

let index = 0











let counter = 0

function Addbook() {

    counter++

    for (let i = counter-1; i < counter; i++) {

        const card = document.createElement('div')
        card.classList.add('card')
        bookgrid.appendChild(card)


        const title = document.createElement('p')
        title.textContent = myLibrary[i].title
        title.classList.add("title")
        title.classList.add('datafield')
        title.setAttribute("data", `${counter - 1}`)
        card.appendChild(title)

        const author = document.createElement('p')
        author.textContent = myLibrary[i].author
        author.classList.add("author")
        card.appendChild(author)

        const pages = document.createElement('p')
        pages.textContent = myLibrary[i].pages
        pages.classList.add("pages")
        card.appendChild(pages)

        const readbuttonadd = document.createElement('input')
        readbuttonadd.setAttribute("type", "checkbox")
        readbuttonadd.classList.add("read")
        

       


        card.appendChild(readbuttonadd)

        if (myLibrary[i].read) {readbuttonadd.checked = true}
        else {}
    
        console.log(myLibrary)


        const removebuttonadd = document.createElement('button')
        removebuttonadd.textContent = "Remove"
        removebuttonadd.classList.add("remove")
        card.appendChild(removebuttonadd)





 
    }
    removeScript()
  

}







function removeScript() {
    const remove = document.querySelectorAll('.remove')


    remove.forEach((elem, ind, arr) => {
        elem.addEventListener('click', (e) => {

            
            const removeindex = e.target.parentNode.querySelector('[data]').getAttribute('data')
         
            // here we cut the value out of the array as well
            
  
            // now we must loop through the cards and decrease all data values by 1!
            const data = document.querySelectorAll('[data]')
            

            document.querySelector('.newgrid').removeChild(e.target.parentNode)
            
            data.forEach((elem,ind,arr) => {
             
         
                if (elem.getAttribute('data') > removeindex) {
                    elem.setAttribute('data', elem.getAttribute('data') - 1) 
                    console.log(elem.getAttribute('data'), "adjusted down")
                }

            })
            removed(removeindex)

            console.log(myLibrary)



        })

    

    })


}

function removed(index) {
    
    
    myLibrary.splice(index, 1)

    counter--
return;
}



function readStatus(){

const readbutton = document.querySelectorAll('.read')





    readbutton[counter - 1].addEventListener('change', (e) => {
    const index = e.target.parentNode.querySelector('[data]').getAttribute('data')
    changeRead(index)

} )





}


function changeRead(index) {
   
    myLibrary[index].read = !myLibrary[index].read 


}

