/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 31_EnhancedObjectLiteral.js para ver el resultado en la consola */


function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));