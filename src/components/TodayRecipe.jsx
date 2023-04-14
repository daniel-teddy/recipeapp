import React from 'react'
import Data from '../assets/cook'
//import { Link } from 'react-router-dom'

//const Shuffled = Data.sort(() => Math.random() -0.5);
  //console.log(Shuffled);
  
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
      Tips: item.Tips,

    }
  })
  const randomIndex = Math.floor(Math.random() * ItemsWithId.length);
  const item = ItemsWithId.find((item) => {
    return item.id === randomIndex;
});

//console.log(item)


function TodayRecipe() {

  return (
    <div name="special_today" className="h-2/4 pt-8 flex flex-col items-start justify-start gap-2">
        <h2 className="font-semibold text-lg ">Today's Special</h2>
        <div name="card" className="content-today glass w-full p-1">
            <img id="dailyCookImg"
                src={item.image}
                alt="img" className="mb-1 rounded"></img>
            <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">{item.name}</h2>
            <p id="dailyCookDescription" className="h-16 overflow-x-scroll pr-2 text-sm mt-1 ">{item.pTagText}</p>
        </div>
    </div>
  )
}

export default TodayRecipe