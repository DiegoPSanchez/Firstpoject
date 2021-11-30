const menus=document.querySelector('.menus');
const menu=document.querySelector('.menu-navegacion');

//console.log(menus)
//console.log(menu)

menus.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target !=menu && e.target !=menus){

        menu.classList.toggle("spread")

    }
})
