import React from 'react'
import RecipeList from '../components/RecipeList'
import TodayRecipe from '../components/TodayRecipe'
function All() {
  return (
    <>
    <div className="slate-800 h-screen w-screen overflow-hidden">
        <h1 className="w-full p-1 slate-800 flex items-center justify-center fixed border-b-2 border-blue-50 text-lg font-bold">LeetCook's Recipes</h1>

        <div className="content w-full h-full flex flex-col items-start p-2 justify-start">
    <TodayRecipe />
    <div className="gap-2 w-full h-full overflow-hidden mt-3 pt-1 glass" name="all_content">
        <nav className="w-full pr-2">
            <ol className="flex flex-row items-start justify-around mb-2 gap-2">
                <li className="glass p-1 cursor-pointer text-green-400 font-semibold ">Batch Cook</li>
                <li className="glass p-1 cursor-pointer">Noodles Bowls</li>
                <li className="glass p-1 cursor-pointer">Salmon Suppers</li>
            </ol>
        </nav>
        <div className="w-full mt-1 h-full overflow-x-scroll pl-1 pb-12 pr-1">
            <RecipeList />
            <div className="w-full flex flex-row items-center justify-around text-2xl">
                <i className="p-2 rounded-full flex items-center justify-center glass w-10 h-10 ri-github-fill"></i>
                <i className="p-2 rounded-full flex items-center justify-center glass w-10 h-10 ri-instagram-fill"></i>
                <i className="p-2 rounded-full flex items-center justify-center glass w-10 h-10 ri-arrow-up-circle-line"></i>
            </div>
        </div>
    </div>
        </div> 
        </div> 

    </>
  )
}

export default All