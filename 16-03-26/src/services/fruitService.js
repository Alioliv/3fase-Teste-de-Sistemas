const fruits = [
    { id: 1, name: 'banana' },
    { id: 2, name: 'maçã' },
    { id: 3, name: 'laranja' }

]

class FruitService {
    getAllFruits() {
        return fruits;
    }       

    getFruitById(id) {
        return fruits.find(fruit => fruit.id === id);
    }
    
}