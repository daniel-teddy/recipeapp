import React from 'react'
import Data from '../assets/cook'
//import useParams
import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import ingredientImg from '../assets/ingredientsIcon.png'
import methodsImg from '../assets/methodIcon.png'

function PopUp() {
    const ItemsWithId = Data.map((item, index) => {
        return {
          id: index + 1,
          name: item.title,
          pTagText: item.pTagText,
          image: item.imgSrc,
          PrepTime: item.PrepTimeText,
          CookingTime: item.CookingTimeText,
          Serves: item.ServesText,
          ingredients: item.ingredientsItems,
          Methods: item.Method,
          ChefsTips: item.Tips,
    
        }
      })
    const { id } =useParams();
    const item = ItemsWithId.find((item) => {
        return item.id === parseInt(id);
    });
   // console.log(item);
    
  return (
    <div className="pop_up slate-800 fixed h-full w-full glass">
    <div className=" w-full h-full flex flex-col items-start justify-start mt-2 p-2">
        <h2 id="RecipeTitle" className="border-b-2 border-slate-50 font-semibold text-lg mb-2"><span>Recipe :</span> {item.name} </h2>
        <img className="rounded" id="RecipeImage" src={item.image} alt=""></img>
        <p id="RecipeDescription" className="h-18 overflow-x-scroll text-sm mt-1 border-b-2 border-green-300 pb-3">{item.pTagText}</p>
        <div className="w-full h-full flex flex-col items-start justify-start overflow-x-scroll mt-1 gap-3">
            <ul className="list-disc w-full h-fit flex flex-col items-start justify-start">
                <li> Preparation time: <span id="prepTimeItem">{item.PrepTime.substring(0, item.PrepTime.length / 2)}</span></li>
                <li> Cooking time: <span id="cookTimeItem">{item.CookingTime.substring(0, item.CookingTime.length / 2)}</span></li>
                <li> Portions: <span id="servesItem">{item.Serves.substring(0, item.Serves.length / 2)}</span></li>
            </ul>
            <div className="ingredients w-full flex flex-col items-start justify-center">
                <div className="w-fit flex flex-row items-start justify-start gap-2 text-lg font-semibold border-b-2 border-green-300 pr-1 pl-1">
                    <img src={ingredientImg} alt=""></img>
                    <h1>Ingredients :</h1> 
                </div>
                <ul className="list-decimal">
                    
                        {ItemsWithId[item.id].ingredients.map((ingredient, index) => {
                            return (
                                <article>
                                    <li key={index}>
                                    <span role='img'>➡️</span>{ingredient.item}
                                    </li>
                                </article>
                            )
                        }) }
                </ul>
            </div>
            <div className="methods w-full flex flex-col items-start justify-center">
                <div className="w-fit flex flex-row items-start justify-start gap-2 text-lg font-semibold border-b-2 border-green-300 pr-1 pl-1">
                    <img src={methodsImg} alt=""></img>
                    <h1>Methods :</h1> 
                </div>
                <ul className="list-decimal">
                {ItemsWithId[item.id].Methods.map((Method, index) => {
                            return (
                                <article>
                                    <li key={index}>
                                       {index + 1}. {Method.steps}
                                    </li>
                                </article>
                            )
                        }) }
                </ul>
            </div>
            
        </div>
    </div>
</div>
  )
  
}

export default PopUp