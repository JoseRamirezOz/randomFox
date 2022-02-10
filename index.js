/*----------------------------------------------------
DESARROLLO APP JAVASCRIPT 
------------------------------------------------------*/
const $imgApp = document.querySelector('.imgApp') 
const min = 1
const max = 123
const random = () => Math.floor(Math.random()*(max-min))+min
/*--End Global--*/


const addImg = ()=>{
    const $verificador = document.querySelector('.contenedorImg')
    let $containImgs;

    let loadImg = document.createElement('div')
    loadImg.className=`waitImg`

    if($verificador == null){
        $containImgs = document.createElement('div') 
        $containImgs.className='contenedorImg'
        $imgApp.appendChild($containImgs)
        $containImgs.append(loadImg)
    } else if($containImgs == undefined){
        $verificador.append(loadImg)
    }
}
const $addImgDom = document.querySelector('.btnObtener')
$addImgDom.addEventListener('click', addImg)



//FUNCIONALIDAD PARA ELIMINAR
const fnEliminarNodo = ()=>{
    let $nodoImgs = document.querySelector(".contenedorImg");    
   
    if($nodoImgs != undefined){
        $nodoImgs.remove()
    }
    
}
const $btnEliminar = document.querySelector(".btnClean")
$btnEliminar.addEventListener("click", fnEliminarNodo)




/*L A Z Y ---- L O A D I N G*/
//Funcion generadora de imagenes 
const generateImg = ()=>{
    const $imagen = document.createElement('img')    
    $imagen.src=`https://randomfox.ca/images/${random()}.jpg`
    $imagen.className='mx-auto'
    $imagen.width='320'
    $imagen.style.setProperty('margin-bottom','10px')
    $imagen.id=`foxImg` 
    $imagen.style.setProperty('transition','.1 ease-in-out all')
    return $imagen
}

//Accion
function remplazar(entradas, observador){
    entradas.forEach((e)=>{
        if(e.isIntersecting){  
            const $bloqueImgs = document.querySelector('.contenedorImg')
            const $toReplace = document.querySelector('.waitImg')
            $toReplace.replaceWith(generateImg())
        }
    })

}




function escuchando(){    
    const watch = document.querySelector('.waitImg') 
    //OBSERVADOR
    const observador = new IntersectionObserver(remplazar,{
        root:null,
        rootMargin:'0px',
        threshold:1   
    })
    
    observador.observe(watch)
}


$addImgDom.addEventListener('click',escuchando)







//Testing


