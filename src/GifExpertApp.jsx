import { useState } from 'react'
import { AddCategoria, GifGrid } from './Components'



export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['']);


    const onAddCategory = (newCatg) => {
        const newCatClean = newCatg.toLowerCase();
        if (categories.includes(newCatClean)) return;
        setcategories([newCatClean, ...categories])
    }

    return (
        <>
            <h1>Buscador de Gif :D</h1>


            <AddCategoria
                onNewCategory={(value) => { onAddCategory(value) }}
            />

            <ol>
                {
                    categories.map(categories => (
                        <GifGrid
                            key={categories}
                            category={categories} />
                    ))
                }
            </ol>

            {/* Gif Item */}
        </>
    )
}
