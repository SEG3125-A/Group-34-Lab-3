// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic:true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic:false,
		price: 10.00
	},
	{
		name:"carrot",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 3.00
	},
	{
		name:"noodles",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 6.00
	},
	{
		name:"chicken poutine",
		vegetarian: false,
		glutenFree: false,
		organic:true,
		price: 14.00
	},
	{
		name:"tomato",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 5.00
	},
	{
		name:"fries",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 7.00
	},
	{
		name:"sunflower oil",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 4.60
	},
	{
		name:"garlic parmasean fries",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = []; // An array to hold the names of products that meet the restriction criteria

    // Loop through each product in the provided array
	for (let i=0; i<prods.length; i+=1) {
        // Check if the product meets the dietary restriction and add its name to the list

		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "Non-organic") && (prods[i].organic == false)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "Organic")&&(prods[i].organic == false)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names; // Return the list of product names that meet the restriction
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