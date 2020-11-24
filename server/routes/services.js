const urllib = require('urllib')
class APImanager {
    constructor() {
        this.data = []
    }

    getBookSearch(text,index) {
        urllib.request(`https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=40&startIndex=${index}`, (err, data, res) => {
            const books = JSON.parse(data)
            
            this.data =  books
        })
    }

    
    loadBooks(){
        return this.data
    }
}

module.exports = APImanager

