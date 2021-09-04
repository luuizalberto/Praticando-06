$(function(){

    $('nav.mobile i').click(function(){
        $('nav.mobile ul').slideToggle()
    })

    $('nav.mobile i.fa-bars').click(function(){
        $(this).css("display","none")
        $('nav.mobile i.fa-times').fadeIn()
            $('nav.mobile i.fa-times').click(function(){
                $(this).css("display","none")
                $('nav.mobile i.fa-bars').fadeIn()
            })
    })
})

