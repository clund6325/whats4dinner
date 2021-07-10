import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const IngredientContext =  React.createContext();

export const IngredientConsumer = IngredientContext.Consumer;

const IngredientProvider = ({ children }) => {

    const [ingredients, setIngredients] = useState([])
    useEffect( () => {
        axios.get(`/api/recipes/${recipe_id}/ingredients`)
        .then( res => setIngredients(res.data))
        .catch(err => console.log(err))
    }, [])

   const addIngredient = (ingredient) => {
       axios.post(`/api/recipes/${recipe_id}/ingredients`, { ingredient })
        .then( res => {
            setIngredients([...ingredients, res.data])
        })
        .catch( err => console.log(err))
   }

   const updateIngredient = (id, ingredient, history) => {
       axios.put(`/api/recipes/${recipe_id}/ingredients/${id}`, { ingredient })
        .then(res => {
            const updatedIngredients = ingredients.map( i => {
                if (i.id === id) {
                    return res.data
                }
                return i
            })
            setIngredients(updatedIngredients)
            history.push("/recipes/:recipe_id/ingredients")
        })
        .catch( err => console.log(err) )
   }

   const deleteIngredient = (id, history) => {
       axios.delete(`/api/recipes/${recipe_id}/ingredients/${id}`)
        .then( res => {
            setIngredients(ingredients.filter(i => i.id !== id))
            alert(res.data.message)
            history.push("/ingredients")
        })
        .catch( err => console.log(err) )

   }
   
    return (
        <IngredientContext.Provider value={{
            ingredients, 
            addIngredient: addIngredient,
            updateIngredient: updateIngredient,
            deleteIngredient: deleteIngredient,
        }}>
            { children }
        </IngredientContext.Provider>
    )
}

export default IngredientProvider;