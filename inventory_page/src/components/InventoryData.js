import "./main.css"
import "./InventoryGrid2"
import { color } from "@mui/system"

//HOUSEHOLD
export const house_items = [
    "Soap",
    "Towels",
    "Napkins",
    "Silverware"
]

export const house_quantity_left=[
    "6", 
    "10",
    "4",
    "9"
]

export const house_quantity_needed=[
    "15",
    "10",
    "100",
    "12"
]

//FOOD
export const food_items=[
    "Ketchup",
    "Eggs",
    "Mustard",
    "Cheese",
    "Bread"
]

export const food_quantity_left=[
    "20",
    "3",
    "4",
    "10",
    "100"
]

export const food_quantity_needed=[
    "50",
    "4",
    "5",
    "10",
    "211"
]

export let inventory_list = [];

export let more = [];




export const much_more = () => {
    more = []
    for (let index = 0; index < y.length; ++index) {
        more.push(z[index] - y[index])
    }
    
}

let x = house_items
let y = house_quantity_left
let z = house_quantity_needed

//sorts by amount needed
export const needed_amount = () => {
    //combine arrays
    var list = [];
    for (var j = 0; j < y.length; j++) 
    list.push({'needed': z[j], 'left': y[j], 'food': x[j], 'more': more[j], 'color': color_list[j]});

    //sort 
    list.sort(function(a, b) {
    return((a.needed - b.needed));
    })

    //seperate 
    for (var k = 0; k < list.length; k++) {
        z[k] = list[k].needed;
        more[k] = list[k].more;
        color_list[k] = list[k].color
        y[k] = list[k].left;
        x[k] = list[k].food;
        
    }

    list_maker()
}

//sorts by amount left
export const left_amount = () => {
        //combine arrays
        var list = [];
        for (var j = 0; j < y.length; j++) 
        list.push({'food': x[j], 'left': y[j], 'needed': z[j], 'more': more[j], 'color': color_list[j]});
    
        //sort 
        list.sort(function(a, b) {
        return((a.left - b.left));
        })
    
        //seperate 
        for (var k = 0; k < list.length; k++) {
            x[k] = list[k].food;
            y[k] = list[k].left;
            z[k] = list[k].needed;
            more[k] = list[k].more;
            color_list[k] = list[k].color
        }
    
        list_maker()
}

//sorts by items
export const alphabatize = () => {
    //combine arrays
    var list = [];
    for (var j = 0; j < x.length; j++) 
    list.push({'food': x[j], 'left': y[j], 'needed': z[j], 'more': more[j], 'color': color[j]});

    //sort 
    list.sort(function(a, b) {
    return((a.food < b.food) ? -1 : ((a.food === b.food) ? 0 : 1));
    })

    //seperate 
    for (var k = 0; k < list.length; k++) {
        x[k] = list[k].food;
        y[k] = list[k].left;
        z[k] = list[k].needed;
        more[k] = list[k].more;
        color_list[k] = list[k].color;
    }

    list_maker()
}

export const quantity_more = () => {
    //combine arrays
    var list = [];
    for (var j = 0; j < more.length; j++) 
    list.push({'needed': z[j], 'left': y[j], 'food': x[j], 'more': more[j], 'color': color_list[j]});

    //sort 
    list.sort(function(a, b) {
    return((b.more - a.more));
    })

    //seperate 
    for (var k = 0; k < list.length; k++) {
        more[k] = list[k].more;
        color_list[k] = list[k].color;
        z[k] = list[k].needed;
        y[k] = list[k].left;
        x[k] = list[k].food;
        
    }

    list_maker()
}

//Make list
function list_maker() {
    inventory_list = []
    for (let index = 0; index < x.length; ++index) {
    const element = x[index];
    const element2 = y[index];
    const element3 = z[index];
    const element4 = more[index];
    inventory_list.push(element)
    inventory_list.push(element2)
    inventory_list.push(element3)
    inventory_list.push(element4)
    }
}

export const house = () => {
    x = house_items
    y = house_quantity_left
    z = house_quantity_needed
}
  
export const food = () => {
    x = food_items
    y = food_quantity_left
    z = food_quantity_needed
}

export let color_list = []

export const getColor = () => {
    color_list = []
    let color;
    for (let index = 0; index < more.length; ++index) {
        const element = more[index]
        if (element < 10 && element > 5) {
            color = "orange";
            color_list.push(color)
           }
        if (element > 10) {
            color = "red";
            color_list.push(color)
           }
        if (element < 5){
            color = "green";
            color_list.push(color)
           }
           
    }

   return color;
};


//Notification Bar
let low_list = []
export const find_low = () => {
    much_more()
    low_list = []
    for (let index = 0; index < more.length; ++index) {
        const element = more[index]
        if (element > 10) {
            let k = index;
            low_list.push(k)
           }

        }
}

export let low_item = []
export const find_low_item = () => {
    low_item = []
    for (let index = 0; index < low_list.length; ++index) {
        let l = low_list[index]
        let p = x[l]
        let u = p.toString()
        low_item.push("Low on " + u)
    }
}


export default list_maker;