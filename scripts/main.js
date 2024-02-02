// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openMenu(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
	
	//since we have 3 inputs (list, radio, slider) we are going to make 3 arrays to hold the result of each.
	var optionArrayChoice1;
	var optionArrayChoice2;
	var optionArrayChoice3;
	var optionArray;
	// obtain a reduced list of products based on restrictions depending on where the changes were made.
	if (slct1=="dietSelect"){
		optionArrayChoice1 = restrictListProducts(products, s1.value);
	}
	if (slct1 =="organicChoice1"||slct1=="organicChoice2"||slct1=="organicChoice3"){
		optionArrayChoice2= restrictListProducts(products,s1.value);
	}
	if (slct1=="sliderID"){
		optionArrayChoice3= restrictListProducts(products,s1.value);
	}
	
	//then we are going to find the things thar's common in these list
	for (int i=0; i<optionArrayChoice1.length;i++){
		for (int j =0;j<optionArrayChoice1.length;j++){
			for (int k =0;k<optionArrayChoice1.length;k++){
				if (optionArrayChoice1[i].name ==optionArrayChoice2[j]){
					if (optionArrayChoice1[i].name == optionArrayChoice3[k].name){
						optionArray[i]= optionArrayChoice1[i];
					}
				}
			}
		}
	}
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var prodPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		//create an image variable and adding it to the html
		var imageProd = document.createElement('img');
		imageProd.src =optionArray[i].source;
		imageProd.alt = optionArray[i].alternateText;
		imageProd.classList.add('img-size');
		s2.append(imageProd);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}