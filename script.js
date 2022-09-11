const books = [
    {
      id: 1,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: 3,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
]

    const container = document.getElementById("mainContainer")
    
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
                     <button>Изменить</button>
                     <button onclick="deleteBook(${book.id})">Удалить</button>
                </div>  
                </div>                    
            `
        })
    }

    function clearForm() {
        document.getElementById("name").value = ""
        document.getElementById("author").value = ""
        document.getElementById("year").value = ""
        document.getElementById("link").value = ""
    }
    

    let isOpen = false
        function addBook() {
            const menu = document.getElementById("openAddMenu")
            
            if (isOpen) {
                menu.style.display = "none"
                isOpen = false
            } else {
                menu.style.display = "flex"
                isOpen = true
            }            
        }

    function saveBook() {
        const nameValue = document.getElementById("name").value
        const authorValue = document.getElementById("author").value
        const yearValue = document.getElementById("year").value
        const linkValue = document.getElementById("link").value
        const menu = document.getElementById("openAddMenu")

       let isOpen = true
       
       if (isOpen) {
        menu.style.display = "none"
        isOpen = false
       }
        
        const book = {
            title: nameValue,
            authors: authorValue,
            year: yearValue,
            image: linkValue
        }

            books.push(book)
            renderBooks()              
            clearForm()
    }

    function deleteBook(id) {
        const book = books.find((s) => {
            return s.id === id
        })

        const bookIndex = books.indexOf(book)
        books.splice(bookIndex,1)
        renderBooks()        
    }
   
    renderBooks()
        
        


