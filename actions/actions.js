export function getFood() {
    return {
        type:'GET_FOOD',
        payload: cards
    }
}



export function markLikedFood(food) {
    return{
        type: 'MARK_LIKED_FOOD',
        food: food
    }
}




const cards = [
    {name: 'Tacos', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?h=350&auto=compress&cs=tinysrgb',
    info: 'Es una preparación mexicana que en su forma estándar consiste en una tortilla que contiene algún alimento dentro. Es considerado como uno de los platillos más representativos de la comida mexicana'},
    {name: 'Food salad healthy', image: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'Delicious salad recipes including fruit salads, chicken, egg and potato salads, and healthy salad dressings. Healthier Recipes, from the food and nutrition experts at EatingWell'},
    {name: 'Panqueque', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'Es un pan plano redondo salado o dulce, cuya masa base contiene usualmente leche, mantequilla, huevos, harina, levadura, azúcar, sal y opcionalmente, una especia, esencia o extracto'},
    {name: 'Pizza', image: 'https://images.pexels.com/photos/710916/pexels-photo-710916.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'SUPER SUPREMA. Queso mozzarella, pepperoni, jamón, salchicha italiana, champiñones, cebolla, pimiento y aceitunas. Mediana $22.00. Familiar $26.00'},
    {name: 'Salmon', image: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'Jugoso lomo de salmón al horno con un toque agridulce muy agradable, con el que conseguiremos un plato muy completo desde el punto de vista nutriciona'},
    {name: 'Hamburguer', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'Hamburguesas 100% carne de res, los exclusivos vaqueros, y las frescas ensaladas.'},
    {name: 'Fruit salad', image: 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Spaguetti', image: 'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Alitas', image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Chicken salad', image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Met Salad', image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Cake', image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Donas', image: 'https://images.pexels.com/photos/273773/pexels-photo-273773.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
    {name: 'Vegetables', image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    info: 'info'},
  ]
