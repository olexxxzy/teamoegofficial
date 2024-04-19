const shirtadd = document.querySelector('[data-action="shirt1"]')

window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-action')){
        const shirtbuy = event.target.closest('.merchselect');
        console.log(shirtbuy);


    

    const productInfo = {
        title: shirtbuy.querySelector('.shirtname').innerText,
        cost: shirtbuy.querySelector('.price').innerText,

    }
    console.log(productInfo)
    }

})