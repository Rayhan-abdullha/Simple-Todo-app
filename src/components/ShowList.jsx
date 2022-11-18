import React from "react";

export default function ShowList({
  items,
  editItem,
  deleteItem,
  handleComplete,
}) {
  return (
    <>
      {items.map((item) => (
        <div className="singleItem d-flex" key={item.id}>
          <li
            onClick={() => handleComplete(item.id)}
            style={{width: "70%", textDecoration: item.visible ? "line-through" : "none", color: item.visible && "green"}}
          >
            {item.text}
          </li>
          <div className="upadeIcon d-flex">
            <p className="editBtn" onClick={() => editItem(item.id)}>
              <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            </p>
            <p className="deleteBtn" onClick={() => deleteItem(item.id)}>
              <i class="fa-solid fa-trash"></i>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
