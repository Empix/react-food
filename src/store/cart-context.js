import React, { useState } from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: (data) => {},
  removeItem: (id, amount) => {},
});

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItem(data) {
    const itemExists = items.find((item) => item.id === data.id);

    if (itemExists) {
      setItems((prevItems) => {
        return prevItems.map((item) => {
          if (item.id === data.id) {
            item.quantity += data.amount;
          }
          return item;
        });
      });
    } else {
      setItems((prevItems) => {
        const newItem = {
          id: data.id,
          name: data.name,
          price: data.price,
          quantity: data.amount,
        };

        return [...prevItems, newItem];
      });
    }
  }

  function removeItem(id, amount) {
    const item = items.find((item) => item.id === id);
    if (!item) return;

    setItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === id) {
            item.quantity -= amount;
          }

          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  }

  const values = {
    items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
}

export default CartContext;
