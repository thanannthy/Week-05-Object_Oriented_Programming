// Coding Steps:
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.


class Coffee {
    constructor(name, price) {
        // set the name of coffee drinks
        this.name = name; 
        // set the price for coffee
        this.price = price;
    }
describe(){
    return `${this.name} - $${this.price}`; // set this function to return to coffee
 }

}

class  CoffeeMenu {
    constructor() {
        this.menuItems = []; // create this function to store coffee item, will add elements later on
    }
    addCoffee(coffee) {
        this.menuItems.push(coffee); //element added to the array name menuItems
        console.log(`${coffee.name} has been added to the menu.`); // show the message the item is added to the menu. 
    }
    viewMenu () {
        if(this.menuItems.length > 0) {
            console.log("coffee Menu:");
            this.menuItems.forEach((coffee) => {
                console.log(coffee.describe()); // log the description of each coffee.
            }); 
        } else { 
            console.log ("The menu is empty."); // log a message if menu is empty. 
        }
    }
    deletedCoffee(coffeeName) {
        const index = this.menuItems.findIndex(
            (coffee) => coffee.name.toLowerCase() === coffeeName.toLowerCase() ); // find index of the coffee with matching name in lower cases.
            if (index !== -1) { // it is used to check if valid index is found in the deletedCoffee.
                const deletedCoffee = this.menuItems.splice(index,1)[0]; // remove the coffee item from the menuItems array
            } else {
                console.log("Coffee is not found in the menu.")
            }
    
    }
    getTotalPrice() {
        let total = 0;
        this.menuItems.forEach((coffee) => {
            total += coffee.price;
        });
        return total;
    }
}

const icecoffee = new Coffee("Ice Cofee", 5);
const latte = new Coffee("Latte", 4);
const menu = new CoffeeMenu();




menu.addCoffee(icecoffee);
menu.addCoffee(latte);
menu.viewMenu();
menu.deletedCoffee("latte");
menu.viewMenu();





