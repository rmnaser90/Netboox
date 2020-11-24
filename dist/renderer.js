class Renderer {

    loading() {
        const contentContainer = $('#contentContainer')
        contentContainer.empty()
        contentContainer.append($(`
            <img src="loading.gif" alt="" class="loadingGif">
                `))
    }

    renderShowRoom(book){
        $('#showRoom').empty()
        const source =$('#showRoom-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(book)
        $('#showRoom').append(newHTML)
    }

    renderSearchData(data) {
        this.renderShowRoom(data.items[0])
        const source = $('#book-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(data)
        const contentContainer = $('#contentContainer')
        contentContainer.empty()
        contentContainer.append(newHTML)
        console.log(data.totalItems);
    }
}