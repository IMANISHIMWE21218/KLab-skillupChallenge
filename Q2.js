const items = [
	{ name: 'Bike',			price: 100	},
	{ name: 'TV',				price: 200	},
	{ name: 'Album',		price: 10		},
	{ name: 'Book',			price: 5		},
	{ name: 'Phone',		price: 500	},
	{ name: 'Computer',	price: 1000	},
]

// Filter and show the product that will be bought when you don't have much money I mean Cheap one

const CheapItems = items.filter((item) => {
	return item.price <= 100
})

///Calculate the full price of all product combined

let total = 0;
items.forEach(item => {
  total +=item.price;
});


/// Calculate the full price of all product combined and remove product that are under the 10 dollar
let higherTotal=0;


   items.forEach(item => {
     if( item.price> 10){
   higherTotal += item.price;
     }
});

// Filter and show the product that will be expensive in the array  every (all)

const ExpensiveItems =items.filter((item) => {
	return item.price
  
})


console.log('cheaper min:',Math.min(ExpensiveItems));

let maxItem = items.reduce((max, min) => max.price > min.price ? max : min);
console.log('---------maximum price------------')
console.log(maxItem.itemName) //Chromebook 2
console.log(maxItem) //Full object
////
let minItem = items.reduce((max, min) => max.price < min.price ? max : min);
console.log('-----------mimimum price----------')
console.log(minItem.itemName) //Chromebook 2
console.log(minItem) //Full object




////
console.log('Total if product that are under the 10 dollar removed:',higherTotal);
console.log('---------------------')
console.log('CheaperItems: ',CheapItems)
console.log('---------------------')
console.log('total price off all products: ',total)
