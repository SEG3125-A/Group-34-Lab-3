// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

//UPDATE: each food now has pictures.
var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 1.99,
		source: 'pictures/brocoli.jpg',
		alternateText: 'Brocoli picture',
		category: 'Vegetable'
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic:true,
		price: 2.35,
		source: 'pictures/bread.jpg',
		alternateText: 'Bread picture',
		category: 'Carbs'
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic:false,
		price: 10.00,
		source: 'pictures/fish.jpg',
		alternateText: 'Salmon picture',
		category: 'Fish'
	},
	{
		name:"Carrot",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 3.00,
		source: 'pictures/carrot.jpg',
		alternateText: 'Carrot picture',
		category: 'Vegetable'
	},
	{
		name:"Noodles",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 6.00,
		source: 'pictures/noodles.jpg',
		alternateText: 'Noodles picture',
		category: 'Carbs'
	},
	{
		name:"Chicken Poutine",
		vegetarian: false,
		glutenFree: false,
		organic:true,
		price: 14.00,
		source: 'pictures/chickenPoutine.jpg',
		alternateText: 'Chicken poutine picture',
		category: 'Meal'
	},
	{
		name:"Tomato",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 5.00,
		source: 'pictures/tomato.jpg',
		alternateText: 'Tomato picture',
		category: 'Fruit'
	},
	{
		name:"Fries",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 7.00,
		source: 'pictures/fries.jpg',
		alternateText: 'Fries picture',
		category: 'Meal'
	},
	{
		name:"Sunflower Oil",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 4.60,
		source: 'pictures/sunflowerOil.jpg',
		alternateText: 'Sunflower oil picture',
		category: 'Oil'
	},
	{
		name:"Garlic Parmasean Fries",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 10.00,
		source: 'pictures/gpf.jpg',
		alternateText: 'Garlic parm picture',
		category: 'Meal'
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_holder = []; // An array to hold the products that meet the restriction criteria

    // Loop through each product in the provided array
	for (let i=0; i<prods.length; i+=1) {
        // Check if the product meets the dietary restriction and add the specific product to the list

		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_holder.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_holder.push(prods[i]);
		}
		else if((restriction == "Non-organic") && (prods[i].organic == false)){
			product_holder.push(prods[i]);
		}
		else if((restriction == "Organic")&&(prods[i].organic == false)){
			product_holder.push(prods[i]);
		}
		else if (restriction == "None"){
			product_holder.push(prods[i]);
		}
	}
	return product_holder; // Return the list of products that meet the restriction
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;

    // Loop through the global products array
	for (let i=0; i<products.length; i+=1) {
        // If the product is in the list of chosen products, add its price to the total
        
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}