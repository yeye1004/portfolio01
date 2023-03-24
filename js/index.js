$(document).ready(function(){
    
    let custumList = $('.custom-list > ul > li');
    let customBox = $('.custom-box > ul > li')
    custumList.on('click',onclick)
    listNum = 0;
    // console.log(custumList)

    function onclick(){
        let listNum = custumList.index($(this))
        console.log(this)
        custumList.removeClass("selected")
        $(this).addClass("selected")

        customBox.hide();
        customBox.eq(listNum).show();
    }

})