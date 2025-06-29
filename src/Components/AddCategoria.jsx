import { useState } from "react";

export const AddCategoria = ({ onNewCategory }) => {
    //const [categories, setcategories] = AddCategory
    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (event) => {
        setInputValue(event.target.value)

    }


    const onSubmit = (event) => {

        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        setInputValue("")
    }


    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChanged}
            />

        </form>

    )
}
