import "./main.css"
import "./InventoryGrid2"


export let food_items=[
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

function alpha() {

for (let i = 0; i = food_items.length; i++) {
    food_items.sort()
    inventory_list.push(food_items.shift())
    inventory_list.push(quantity_left.shift())
    inventory_list.push(quantity_needed.shift())
    var t = inventory_list[inventory_list.length - 1]
    inventory_list.push(t - inventory_list[inventory_list.length - 2])
    console.log(inventory_list)
    


}

}

export default alpha;