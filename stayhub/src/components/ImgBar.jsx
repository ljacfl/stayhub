import { apartments } from "../assets/data"

export const ImgBar = () => {
    return(
        <>
            <div className="images-bar-container">
                {
                    apartments.map((key) => {
                        return (
                        
                            <img className = "images-bar" src={key.pictures[0].imgUrl}  />
                        )
                    })
                }      
            </div>
             
        </>
    )
    
}