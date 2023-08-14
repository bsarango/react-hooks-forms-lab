import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [selectedCategory,setSelectedCategory] = useState("Produce")
  const [inputItem, setInputItem] = useState("") //set initial state

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value)
  }

  function handleItemInput(event){
    setInputItem(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id:uuid(),
      name:inputItem,
      category:selectedCategory,
    }

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemInput} value={inputItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
