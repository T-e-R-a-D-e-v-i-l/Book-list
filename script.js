let bookId = 1
let books = [
    {
      id: bookId++,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: bookId++,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: bookId++,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: bookId++,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
]
    const openAddMenu = document.getElementById('openAddMenu') //модальное окно
    const closeMenuButton = document.getElementById('buttonClose')//кнопка закрыть
    const openMenuButton = document.getElementById('addBook')//кнопка добавить книгу
                   
    function closeMenu () {
        openAddMenu.style.display = 'none'
    }

    function openMenu () {
        openAddMenu.style.display = 'flex'
    }

    closeMenuButton.addEventListener('click', closeMenu)
    openMenuButton.addEventListener('click', openMenu)
    
    
    const container = document.getElementById('mainContainer')
    
    function renderBooks() {
        container.innerHTML = ""
        books.forEach((book) => {
            container.innerHTML += `
                <div class="bookContainer">
                  <div class="image">
                     <img src=${book.image}></img>
                  </div>              
                  <h3>${book.title}</h3> 
                  <div class="text">
                     <p class="textYear">${book.year}</p>          
                     <p class="textAuthors">${book.authors}</p>
                  </div>               
                  <div class="button">
                     <button id ="changingButton${book.id}">Изменить</button>
                     <button id="deleteBook${book.id}">Удалить</button>
                </div>  
                </div>                    
            `
        })

        books.forEach((book) => {
            document.getElementById(`deleteBook${book.id}`).addEventListener('click',() =>{
                deleteBook(book.id)
            })
        })

        books.forEach((book) => {
            document.getElementById(`changingButton${book.id}`).addEventListener('click',() => {
                openUpdateMenu(book.id)
            })
        })
    }
     
    function clearForm() {
        document.getElementById('name').value = ""
        document.getElementById('author').value = ""
        document.getElementById('year').value = ""
        document.getElementById('link').value = ""
    }

    function saveToLocalStorage() {
        const booksJson = JSON.stringify(books)
        localStorage.setItem('books', booksJson)
    }
    
    function saveBook() {
        const nameValue = document.getElementById('name').value
        const authorValue = document.getElementById('author').value
        const yearValue = document.getElementById('year').value
        const linkValue = document.getElementById('link').value
                
        const book = {
            id: bookId++,
            title: nameValue,
            authors: authorValue,
            year: yearValue,
            image: linkValue
        }

            books.push(book)
            renderBooks()              
            clearForm()
            closeMenu()
            saveToLocalStorage()        
    }

    function deleteBook(id) {
        const book = books.find((s) => {
            return s.id === id
        })

        const bookIndex = books.indexOf(book)
        books.splice(bookIndex,1)
        renderBooks()  
        saveToLocalStorage()
    }   

    const saveButton = document.getElementById('saveBook')
    saveButton.addEventListener('click',saveBook)

    const booksJson = localStorage.getItem('books')
    if (booksJson) {
        books = JSON.parse(booksJson)
    } 

    const changingMenu = document.getElementById('openChangingMenu')
    const closeChanging = document.getElementById('buttonCloseChanging')
    const saveBookChanging = document.getElementById('saveBookChanging')

    closeChanging.addEventListener('click', closeChangingMenu)

    function closeChangingMenu() {
        openChangingMenu.style.display = 'none'
    }

    function openUpdateMenu(id) {        
        changingMenu.style.display = 'flex'

        const currentBook = books.find(b => b.id === id)

        document.getElementById('nameChanging').value = currentBook.title
        document.getElementById('authorChanging').value = currentBook.authors
        document.getElementById('yearChanging').value = currentBook.year
        document.getElementById('linkChanging').value = currentBook.image

        const makeUpdate = () => updateBook(id, makeUpdate)

        saveBookChanging.addEventListener('click', makeUpdate)

        function updateBook(id, makeUpdate) {           
            const oldBook = books.find(b => b.id === id)

            const newBook = {
                id,
                title: document.getElementById('nameChanging').value,
                authors: document.getElementById('authorChanging').value,
                year: document.getElementById('yearChanging').value,
                image: document.getElementById('linkChanging').value
            }

            const bookIndex = books.indexOf(oldBook)
            books.splice(bookIndex, 1, newBook)

            saveBookChanging.removeEventListener('click', makeUpdate)

            renderBooks()
            saveToLocalStorage()
            closeChangingMenu()
        }
    }

    renderBooks()

    
        
        


