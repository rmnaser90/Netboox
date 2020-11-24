class APImanagerFront {
    constructor() {
        this.data = []
    }

    getDataSearch(text,index){
        return $.ajax({
            method: "GET",
            url: `/booksearch/${text}/?index=${index}`,
            success: (res) =>{
                this.data=res
                console.log(this.data);
                
            }
        })



    }
    getBookByISBN(ISBN){
        console.log(ISBN);
        const book = this.data.items.find(b=>{
            for (const identifier of b.volumeInfo.industryIdentifiers) {
                if (identifier.identifier == ISBN) {
                    return true
                }
                
            }
        })
        console.log(book);
        return book
    }




    loadData(){
        return this.data
    }




}