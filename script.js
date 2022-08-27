const books = [
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const container = document.getElementById("mainContainer")
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
                 <button>Удалить</button>
            </div>  
            </div>                    
        `
    })