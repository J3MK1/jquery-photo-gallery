$(document).ready(function(){
    // console.log(document.querySelector('body button'));
    // console.log($('#cancel-button'));

    $('body button').click(function(){
        $('.add-image-wrapper').slideDown();
    })

    $('#cancel-button').click(function(){
        $('.add-image-wrapper').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageAddress = $('#new-image-address').val();
        // console.log(newImageAddress);
        const newItem = $('<li style="display:none"></li>');
        $(`<img src="${newImageAddress}" alt="/">`).appendTo(newItem);
        $(`<a href="${newImageAddress}" target="_blank">
            See High Res Image
        </a>`).appendTo(newItem);
        $(newItem).appendTo($("ul:odd"));

        $('#new-image-address').val('');
    })
})