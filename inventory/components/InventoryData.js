import "./main.css"
import "./InventoryGrid2"



const food_items=[
    "Ketchup",
    "Eggs",
    "Mustard"
]

const quantity_left=[
    "2",
    "3",
    "4"
]

const quantity_needed=[
    "50",
    "4",
    "5"
]

export let inventory_list = [];

//for loop that adds each one item from each category

export const alpha = () => {
    food_items.sort() 
    inventory_list = []
    for (let index = 0; index < food_items.length; ++index) {
    const element = food_items[index];
    const element2 = quantity_left[index];
    const element3 = quantity_needed[index];
    inventory_list.push(element)
    inventory_list.push(element2)
    inventory_list.push(element3)
    var t = inventory_list[inventory_list.length - 1]
    inventory_list.push(t - inventory_list[inventory_list.length - 2])
    console.log(inventory_list)
        
    }
}


for (let index = 0; index < food_items.length; ++index) {
    const element = food_items[index];
    const element2 = quantity_left[index];
    const element3 = quantity_needed[index];
    inventory_list.push(element)
    inventory_list.push(element2)
    inventory_list.push(element3)
    var t = inventory_list[inventory_list.length - 1]
    inventory_list.push(t - inventory_list[inventory_list.length - 2])
    console.log(inventory_list)
    
}



//export default alpha;