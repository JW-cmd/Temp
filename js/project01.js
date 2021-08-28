$(function(){
    $("#register").on("submit",function(e){
        e.preventDefault()
        let temp = $(this).serialize()
        console.log(temp)
    })
})