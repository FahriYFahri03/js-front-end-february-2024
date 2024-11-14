function solve(inStock, delivered) {
    let products = {};

    for (let i = 0; i < inStock.length; i += 2) {
        products[inStock[i]] = Number(inStock[i + 1]);
    }

    for (let i = 0; i < delivered.length; i += 2) {
        if (!products[delivered[i]]) {
            products[delivered[i]] = 0;
        }
        
        products[delivered[i]] += Number(delivered[i + 1]);
    }

    Object
        .entries(products)
        .forEach(([key, value]) => console.log(`${key} -> ${value}`));
}