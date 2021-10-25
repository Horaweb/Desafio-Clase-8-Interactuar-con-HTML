let prodId = 0;
class Producto{
    constructor(tipo, marca, precio, talle, año, color){
        this.tipo =  tipo;
        this.marca =  marca;
        this.precio =  precio;
        this.talle = talle;
        this.año =  año;
        this.color = color;
        this.id = prodId;
        }  
        showDetail(){
            return "Tipo de producto: " + this.tipo + ", Marca: " + this.marca +  ", Precio: " + this.precio + ", Talle: " + this.talle + ", Año: " + this.año + ", Color: " + this.color
        }
}
let productos = [];
for(let i = 0; i <= 0; i++){
    let prod = prompt("Ingrese el tipo de producto")
    let prodmarca = prompt("Ingrese la marca del producto")
    let prodprecio = prompt("Ingrese el precio del producto")
    let prodtalle = prompt("Ingrese el talle del producto")
    let prodaño = prompt("Ingrese el año del producto")
    let prodcolor = prompt("Ingrese el color del producto")

    alert("A continuación, ingrese los datos de un nuevo producto:")
    productos.push(new Producto(prod, prodmarca, prodprecio, prodtalle, prodaño, prodcolor))
    prodId = prodId +1
}



for(let i = 0; i < productos.length; i++){
    console.log(productos[i].showDetail())
}






function filtro ( ) {

    let orden = parseInt (prompt(" Tipea 1, si preferís ordenar por precio. Tipea 2, si preferís alfabeticamente "))
 

    if ( orden == 1) {

        console.log("Elegiste por precio") 
        
        productos.sort(  function (precio1,precio2  ) {

            if (precio1.precio > precio2.precio) { 
              return 1;
            } else if (precio1.precio < precio2.precio) {
              return -1;
            } else {
                return 0;
            }

          }); console.log(productos);


    } else if ( orden == 2) {

        console.log("Elegiste alfabeticamente")

        productos.sort(function (a, b) {
            if ( a.nombre > b.nombre )
              return 1;
            if ( a.nombre < b.nombre )
              return -1;
            return 0
        });  console.log(productos);

    } else {
        console.log("error")
    }
}


filtro()


let productosContainer = document.getElementById("productos")
for (let producto of productos){ 
    let titulo = document.createElement("h1")
    titulo.textContent = producto.tipo
    productosContainer.append(titulo)
}
