$("#search-input").on('keypress',function(e) {
    if(e.which == 13) {
     
            alert($('#search-input').val())
            $('#search-input').val('')

    }
});
