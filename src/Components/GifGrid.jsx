
import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    const { imagen, isLoading } = useFetchGifs(category)

    return (

        <>

            <h3>{category}</h3>

            {
                isLoading ? <h2>Cargando</h2> : null
            }

            <div className="card-grid">
                {/* {   
                    Si te preguntas por que son () en vez de {} es por que con () indicamos
                    implicitamente que solo va a retornar */}
                {
                    imagen.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }

            </div>


        </>
    )
}
