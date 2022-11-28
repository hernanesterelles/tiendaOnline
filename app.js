



let carrito 

if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}
else{
    carrito=[]
}
console.log('carrito:', carrito);
// selectores
const classcontainer = document.querySelector('#classcontainer') 
const verCarrito =document.getElementById('ver-carrito')
const modalContainer = document.getElementById('modal-container')
const cantidadCarrito = document.getElementById('cantidadCarrito')




    relojArrays.forEach((relojArrays) =>{
        const nuevaCard = document.createElement('div')
        nuevaCard.className = 'card'
        nuevaCard.innerHTML =  `    
                    <h3>Reloj</h3>                    
                    <img src="${relojArrays.img}" alt="">
                    <p class="vistas">${relojArrays.reloj} </p>
                    <p> Precio $ ${relojArrays.precio}</p>
                                     
                    `;
                    classcontainer.append(nuevaCard) ;

                    let comprar = document.createElement('button') 
        comprar.innerText ='Comprar';
        comprar.className = 'comprar'
        nuevaCard.append(comprar)

        comprar.addEventListener('click', () =>{
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === relojArrays.id)

if(repeat) {
    carrito.map((prod) => {
        if(prod.id === relojArrays.id){
            prod.cantidad ++;
        }
    })
}else{
            carrito.push({
                id : relojArrays.id,
                reloj :relojArrays.reloj,
                img :relojArrays.img,
                precio : relojArrays.precio,
                cantidad :relojArrays.cantidad

            })
            
        }
        console.log(carrito);
        carritoCouter();
        })
             
        })
        //carrito
         const pintarCarrito = () => {
            modalContainer.innerHTML = '';
            modalContainer.style.display = 'flex'
            const modalHeader = document.createElement('div');
            modalHeader.className = 'modal-header';
            modalHeader.innerHTML =  `  
            <h1 class ='modal-header-title'>Carrito </h1>
            `

            modalContainer.append(modalHeader);
            
            const modalButton= document.createElement('h1');            
            modalButton.className ='modal-header-button';
            modalButton.innerText='x';
            modalButton.addEventListener('click',() =>{
                modalContainer.style.display = 'none'
            }) ;

            modalHeader.append(modalButton);


            carrito.forEach((relojArrays) => {
                let carritoContent = document.createElement('div')
                carritoContent.className ='modal-content'
                carritoContent.innerHTML = ` 
                <img src="${relojArrays.img}" alt="">
                <p class="vistas">${relojArrays.reloj} </p>
                <p> precio   $ ${relojArrays.precio}</p>
                <p>cantidad ${relojArrays.cantidad}</p>
                <p>Total : ${relojArrays.cantidad * relojArrays.precio}</p>
                
                ` 
    
                modalContainer.append(carritoContent)
                console.log(carritoContent)

                let eliminar = document.createElement('span')
                eliminar.innerText = '❌'
                eliminar.className = 'delete-product'
                carritoContent.append(eliminar)

                eliminar.addEventListener('click', eliminarProducto );
            });

            const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad ,0);          
            

            const totalReloj = document.createElement('div')
            totalReloj.className ='total-content'
            totalReloj.innerHTML = `total a pagar: ${total} $ `;

            modalContainer.append(totalReloj);
            
           }
           verCarrito.addEventListener('click', pintarCarrito)
           const eliminarProducto = ()=>{
            const foundid = carrito.find((element) => element.id)

            carrito = carrito.filter((carritoid) => {
                return carritoid !== foundid;
            })
            carritoCouter()
            pintarCarrito()
           }
        const carritoCouter = () =>{
            cantidadCarrito.style.display = 'block';
            cantidadCarrito.innerText = carrito.length;
        };
        
                

