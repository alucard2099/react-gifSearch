import { useState, useEffect } from 'react'
import { getGift } from '../helpers/getGif'

export const useFetchGifs = (category) => {

    const [image, setImagen] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImagen = async () => {

        const newImagen = await getGift(category);
        setImagen(newImagen)
        setIsLoading(false)
    }

    useEffect(() => {

        getImagen();

    }, [])

    return {

        imagen: image,
        isLoading
    }

}
