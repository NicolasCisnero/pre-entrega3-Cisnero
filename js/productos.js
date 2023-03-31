const productos = [
    {id:1, nombre: "Milanesa Napolitana", descripcion: "Milanesa de ternera con muzzarella, tomate y un toque magico de condimentos donde pueden comer 2 personas", precio: 1800, imagen:"milanesa-napolitana.webp", categoria: "milanesas" },
    {id:2, nombre: "Suprema Napolitana", descripcion: "Milanesa de Pollo con muzzarella, tomate y un toque magico de condimentos donde pueden comer 2 personas", precio: 1800, imagen:"suprema-napo.webp", categoria: "milanesas"},
    {id:3, nombre: "Pizza de Muzzarella", descripcion: "La mejor Pizza casera del condado, el sabor de la mejor masa sumado a la muzzarella hacen de nuestras pizzas un sabor único", precio: 1500, imagen:"piza-muzzarella.webp", categoria: "pizzas"},
    {id:4, nombre: "Pizza de Jamón y Morrón", descripcion: "Si fuera poco y queres explorar mas sabores de nuestras mejores pizzas, le sumamos una gran cantidad de Jamón y Morrón para que sigas disfrutando", precio: 1850, imagen:"piza-jym.webp", categoria: "pizzas"},
    {id:5, nombre: "Pizza Napolitana", descripcion: "Si fuera poco y queres explorar mas sabores de nuestras mejores pizzas, le sumamos una gran cantidad de muzzarella, tomates y los mejores condimentos para que sigas disfrutando", precio: 1850, imagen:"piza-napo.webp", categoria: "pizzas"},
    {id:6, nombre: "Empanadas Criollas de Carne", descripcion: "Empanadas Criollas de Carne cortadas a Cuchillo, no podes comer una sola, si la probas no podes parar ", precio: 500, imagen:"empanada_carnecuch.webp", categoria: "empanadas"},
    {id:7, nombre: "Empanadas de Pollo", descripcion: " También tenemos nuestra variedad de Empanadas de pollo, no podes comer una sola, si la probas no podes parar ", precio: 500, imagen:"empanada_pollo.webp", categoria: "empanadas"},
    {id:8, nombre: "Hamburguesa Completa", descripcion: "Hamburguesa de Carne 100% vacuna con queso cheddar, lechuga, tomate , huevo y panceta, acompañado con papas, sabor único ", precio: 2000, imagen:"hamburguesa completa.webp", categoria: "hamburguesas"},
    {id:9, nombre: "Hamburguesa Con Cheddar", descripcion: "Hamburguesa de Carne 100% vacuna con queso cheddar acompañado con papas, sabor único ", precio: 1800, imagen:"hamburguesa cheddar.webp", categoria: "hamburguesas"},
    {id:10, nombre: "Sanguche de Bondiola Braseada", descripcion: "Sanguche de Bondiola Braseada, Queso Dambo y Salsa Barbacoa, acopañadas con papas. Insuperable", precio: 2500, imagen:"bondiola braseada.webp", categoria: "sanguches"},
    {id:11, nombre: "Pancho con Salsa y Papas Fritas", descripcion: "Si sumamos el mejor Pan y la mejor Salchicha alemana, mas las mejores salsas a elección y nuetras famosas papas, esto da como resultado el mejor pancho del mundo", precio: 1000, imagen:"pancho.webp", categoria: "panchos"},
    {id:12, nombre: "Papas Fritas", descripcion: "Nuestras mejores papas fritas tambien las podes pedir solas, para que tengan la exclusividad y no se pongan celosas,pueden comer hasta 3 personas tranqui", precio: 1000, imagen:"papas-fritas.webp", categoria: "papas"},
]

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);

console.log(productos)