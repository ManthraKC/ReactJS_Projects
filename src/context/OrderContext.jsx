import React, { useState, createContext, useContext } from 'react';
import Ingredient from '../Lists/Ingredient';

// Create a context for managing order state
const OrderContext = createContext();

// Order provider component
export  function OrderProvider({ children }) {
  const [orderItems, setOrderItems] = useState([
    {
      id: 0,
      name: "Base Burger(Bun + Patty)",
      price: 5.99,
      count: 1
    }
  ]);
   const [ingredientCounts, setIngredientCounts] = useState({});
  
  const updateItemCount = (id, count) => {
    setIngredientCounts(prev => ({
      ...prev,
      [id]: count
    }));
    setOrderItems(prev => {
      const existingItem = prev.find(item => item.id === id);
      
      if (count === 0) {
        // Remove item if count is 0
        return prev.filter(item => item.id !== id);
      } else if (existingItem) {
        // Update existing item
        return prev.map(item => 
          item.id === id ? { ...item, count } : item
        );
      } else {
        // Add new item
        const ingredientData = Ingredient.find(ing => ing.id === id);
        if (ingredientData) {
          return [...prev, { ...ingredientData, count }];
        }
      }
      return prev;
    });
  };

  const addPresetBurger = (preset) => {
    // Add preset burger items to order
    preset.ingre.forEach(ingredientName => {
      const ingredient = Ingredient.find(ing => ing.name === ingredientName);
      if (ingredient) {
         const currentCount = ingredientCounts[ingredient.id] || 0;
        updateItemCount(ingredient.id, currentCount + 1);
      }
    });
  };
  const getIngredientCount = (id) => {
    return ingredientCounts[id] || 0;
  };

  return (
    <OrderContext.Provider value={{ orderItems, updateItemCount, addPresetBurger, getIngredientCount,
      ingredientCounts  }}>
      {children}
    </OrderContext.Provider>
  );
}
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};