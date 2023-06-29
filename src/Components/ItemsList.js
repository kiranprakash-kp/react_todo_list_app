import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItem
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            key={item.id} 
          />
        );
      })}
    </ul>
  );
};

export default ItemsList;
