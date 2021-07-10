import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const Meal_planContext =  React.createContext();

export const Meal_planConsumer = Meal_planContext.Consumer;

const Meal_planProvider = ({ children }) => {

    const [meal_plans, setMeal_plans] = useState([])
    const getAllMeal_plans = () => {
        axios.get('/api/meal_plans')
        .then( res => setMeal_plans(res.data))
        .catch(err => console.log(err))
    }

   const addMeal_plan = (meal_plan) => {
       axios.post('/api/meal_plans', { meal_plan })
        .then( res => {
            setMeal_plans([...meal_plans, res.data])
        })
        .catch( err => console.log(err))
   }

   const updateMeal_plan = (id, meal_plan, history) => {
       axios.put(`/api/meal_plans/${id}`, { meal_plan })
        .then(res => {
            const updatedMeal_plans = meal_plans.map( m => {
                if (m.id === id) {
                    return res.data
                }
                return m
            })
            setMeal_plans(updatedMeal_plans)
            history.push("/meal_plans")
        })
        .catch( err => console.log(err) )
   }

   const deleteMeal_plan = (id, history) => {
       axios.delete(`/api/meal_plans/${id}`)
        .then( res => {
            setMeal_plans(meal_plans.filter(m => m.id !== id))
            alert(res.data.message)
            history.push("/meal_plans")
        })
        .catch( err => console.log(err) )

   }
   
    return (
        <Meal_planContext.Provider value={{
            meal_plans, 
            getAllMeal_plans: getAllMeal_plans,
            addMeal_plan: addMeal_plan,
            updateMeal_plan: updateMeal_plan,
            deleteMeal_plan: deleteMeal_plan,


        }}>
            { children }
        </Meal_planContext.Provider>
    )
}
export default Meal_planProvider;