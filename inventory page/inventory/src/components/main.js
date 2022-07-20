/*

import { Button } from '@mui/material';
import './InventoryGrid2';


const list = document.querySelector('.list');

const sort_name_btn = document.querySelector('.sort-options .sort-name');
const sort_left_btn = document.querySelector('.sort-options .sort-left');
const sort_needed_btn  = document.querySelector('.sort-options .sort-needed');
const sort_more_btn = document.querySelector('.sort-options .sort-more');
console.log(list);

const list_items = [
    {
        name: 'Ketchup',
        left: '3',
        needed: '5',
        more: '2'
    },
    {
        name: 'Onions',
        left: '2',
        needed: '5',
        more: '3'
    },
    {
        name: 'Flour',
        left: '5',
        needed: '3',
        more: '-2'
    },
    {
        name: 'Eggs',
        left: '90',
        needed: '5',
        more: '-85'
    },
    {
        name: 'kk',
        left: '3',
        needed: '5',
        more: '2'
    }
 ];


function displayList (array = []) {
    list.dangerouslySetinnerHTML = "";
    
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('div');
        item_element.classList.add('list-item');

        let left = document.createElement('div');
        left.classList.add('item-left');
        left.innerText = item.left;

        item_element.appendChild(left);

        let needed = document.createElement('div');
        needed.classList.add('item-needed');
        needed.innerText = item.needed;

        item_element.appendChild(needed);

        let more = document.createElement('div');
        more.classList.add('item-more');
        more.innerText = item.more;

        item_element.appendChild(more);

        list.appendChild(item_element);
    }
    
}

displayList(list_items)

//export default displayList;


/*
<Button
onClick={displayList(List_items)}>
</Button>
*/
