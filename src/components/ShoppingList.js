import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
 

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(""); //We set state to null because it should be blank at first
  // const [inputItem, setInputItem] = useState("") //set initial state

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){ //Function to set item input to state variable 
    setSearch(event.target.value)
  }

  // function handleItemInput(event){
  //   setInputItem(event.target.value);
  // }

  function onItemFormSubmit(newItem){ //Complete callback for submit
    console.log(newItem)
    const newList = [...items, newItem]
    setItems(newList)
  }


  const itemsToDisplay = items.filter((item) => {
    if(search!==""){
      const splitItem = item.name.split(" ")
      for(const word of splitItem){
        if(search===word){
          return true;
        }
      }
      return false
    }

    else{
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    }
  });




  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
