'use strict'

const entries =
  obj =>
    Object.keys(obj).map(key => [key, obj[key]])

    

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      // TODO
      return Array(count).fill(itemName);
    }
    
/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      // TODO
      let arrOfItems = [];  //an array of items for every customer
      let arrOfCarts = [];
      
      
      //iterates through the array of customers retrieves every customers shoping list
      //sends them to the repeater function to create an array  of item names for the customer
      //and the create and object of customer name and customer shoping list as an array and
      //pushes it to the array of carts
      for(let i = 0; i < customers.length; i++){
        
        //creates an array of arrays of customer items
        arrOfItems = entries(customers[i].shoppingList);
        //goes through the array of arrays and makes the array of repeated items
        //for the given customer
        const arrOfAllItems = arrOfItems.reduce((prevItem, currItem) =>{
      
        
            return prevItem.concat(itemRepeater(currItem[0])(currItem[1]));
      },[])
      //creates cart object
      arrOfCarts.push({
        customer: customers[i].name, 
        items: arrOfAllItems
      });
    }
      //returns the array of all carts
      return arrOfCarts;
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
