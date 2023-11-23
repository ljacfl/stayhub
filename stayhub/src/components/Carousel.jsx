import React,{useRef,useState,useEffect} from "react";
import { beachApartment } from "../assets/data";

export const Carousel = () =>{
    const listRef = useRef();
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect (() =>{
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img") [currentIndex];

        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth"
            })
        }
    },[currentIndex])

    const scrollToImage = (direction) => {
        if(direction ==='prev'){
            setCurrentIndex( curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1
            })
        }else{
            const isLastSlide = currentIndex === beachApartment.length - 1;
            if(!isLastSlide){
                setCurrentIndex(curr => curr + 1);
            }

        }
    }

    return(
        <>
            <div className="main-container">
                <div className="slider-container">
                    <div className="leftArrow" onClick={() => scrollToImage("prev")}><img src="images/izquierda.png"/></div>
                    <div className="rightArrow" onClick={() => scrollToImage("next")}><img src="images/derecha.png"/></div>
                    <div className="container-images">
                        <ul ref={listRef}>
                            {
                                beachApartment.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgUrl} width={500} height={280}/>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}