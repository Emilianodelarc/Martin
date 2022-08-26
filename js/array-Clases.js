// ARRAY DE OBJETOS
class Producto {
    constructor(nombre, importe, talle, id) {
        this.nombre = nombre
        this.importe = importe
        this.talle = talle
        this.id = id
    }
    precioFinal() {
        return "$ " + parseFloat((this.importe * IVA).toFixed(2))
    }
}
const productos = []; 

productos.push(new Producto("Buzo Trasher", 4800, "XL", 1))
productos.push(new Producto("Pantalon de jean clasico", 5000, "XXl", 2))
productos.push(new Producto("Zapatilla Negra New Air 3.0", 15800, "43", 3))
productos.push(new Producto("Remera Mc Lovin", 2700, "L", 4))
productos.push(new Producto("Camiseta deportiva negra", 3123, "M", 5))
productos.push(new Producto("Gorro Nike", 5600, "38", 6))
productos.push(new Producto("Medias fogosas", 2300, "40", 7))
productos.push(new Producto("Pantalon Nike Babucha", 4900, "XL", 8))
console.table(productos);