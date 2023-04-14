import React from 'react'

function main() {
  return (
    
    <>
    <h1 className="w-full p-1 bg-blue-800 flex items-center justify-center fixed border-b-2 border-blue-50 text-lg font-bold">LeetCook's Recipes</h1>

<div className="content w-full h-full flex flex-col items-start p-2 justify-start">
    <div name="special_today" className="h-2/4 flex flex-col items-start justify-start gap-2">
        <h2 className="font-semibold text-lg ">Today's Special</h2>
        <div name="card" className="content-today glass w-full p-1">
            <img id="dailyCookImg"
                src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg"
                alt="img" className="mb-1 rounded"></img>
            <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
            <p id="dailyCookDescription" className="h-24 overflow-x-scroll pr-2 text-sm mt-1 ">In this salmon stir-fry, the fish is
                lightly coated in sesame seeds and served with lemony stir-fried vegetables, for a delicious, quick
                and healthy supper. \nEach serving provides 510 kcal, 32g protein, 16g carbohydrates (of which 10g
                sugars), 33g fat (of which 6g saturates), 8g fibre and 0.6g salt.</p>
        </div>
    </div>
    <div className="gap-2 w-full h-full overflow-hidden mt-3 pt-1 glass" name="all_content">
        <nav className="w-full pr-2">
            <ol className="flex flex-row items-start justify-around mb-2 gap-2">
                <li className="glass p-1 cursor-pointer text-green-400 font-semibold ">Batch Cook</li>
                <li className="glass p-1 cursor-pointer">Noodles Bowls</li>
                <li className="glass p-1 cursor-pointer">Salmon Suppers</li>
            </ol>
        </nav>
        <div className="w-full mt-1 h-full overflow-x-scroll pl-1 pb-12 pr-1">
            {/* <ol id="RecipeList" className="flex flex-col items-start justify-start gap-1 pb-12">
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
                <li id="singleRecipeCard" className="glass p-1">
                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/salmon_stir-fry_63266_16x9.jpg" className="rounded mb" alt="img">
                    <h2 id="dailyCookTitle" className="border-b-2 border-blue-50 font-semibold text-lg">Salmon stir-fry</h2>
                </li>
            </ol> */}
            <div className="w-full flex flex-row items-center justify-around text-2xl">
                <i className="p-2 rounded-full flex items-center justify-center glass w-10 h-10 ri-github-fill"></i>
                <i className="p-2 rounded-full flex items-center justify-center glass w-10 h-10 ri-instagram-fill"></i>
                <i className="p-2 rounded-full flex items-center justify-center glass w-10 h-10 ri-arrow-up-circle-line"></i>
            </div>
        </div>
    </div>
</div> 

    </>
  )
}

export default main