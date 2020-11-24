const apiManager= new APImanagerFront
const renderer = new Renderer



let previousText = ''
$("#search-input").on('keypress',function(e) {
    if(e.key == 'Enter') {
        renderer.loading()
        const text =$('#search-input').val()
            $('#search-input').val('')
        const dataPromise=apiManager.getDataSearch(text,0)
        console.log(dataPromise);
        dataPromise.then(function () {
            renderer.renderSearchData(apiManager.loadData())
            
        })

        
     previousText=text     
    }
});

$('#contentContainer').on('click','.bookImg',function () {

const ISBN= $(this).closest('.bookContainer').data('isbn_13')
console.log(ISBN);
const book = apiManager.getBookByISBN(ISBN)
renderer.renderShowRoom(book)
})

// $("#mainContainer").on('click','.pageNumbers',function() {
//           $('#pages').empty()
//         renderer.loading()
//         const index =$(this).data('val')
//         apiManager.getDataSearch(previousText,index,renderer.renderSearchData)  
    
// });
