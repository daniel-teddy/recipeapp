import React from "react";
import { Link } from "react-router-dom";
//import datas
import Data from "../assets/cook";

function RecipeList() {
  const Shuffled = Data.sort(() => Math.random() -0.5);
  //console.log(Shuffled);
  const ItemsWithId = Shuffled.map((item, index) => {
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
 // console.log(ItemsWithId);

  return (
    <ol
      id="RecipeList"
      className="flex flex-col items-start justify-start gap-1 pb-12"
    >
      {ItemsWithId.map((item, index) => {
        return (
          <Link to={`/recipes/${item.id}`} key = {index}>
          <article>
            <li id="singleRecipeCard" className="glass p-1">
              <img
                src={item.image}
                className="rounded mb"
                alt="img"
              ></img>
              <h2
                id="dailyCookTitle"
                className="border-b-2 border-blue-50 font-semibold text-lg"
              >
                "{item.name}"
              </h2>
            </li>
          </article>
          </Link>
        );
      })}
    </ol>
  );
}

export default RecipeList;
