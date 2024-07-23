import React,{useState} from 'react'
import './Experties.css'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";


const Experties = ({data}) => {

    const[slide, setSlide]= useState(0);
    const nextslilde=()=>{
        setSlide(slide===data.length-1?0: slide + 1)
    }
    const pervSlide=()=>{
        setSlide(slide===0?data.length-1: slide - 1)
    }
  return (
    <div>
        <div className='experties'>
            <h1>Our Expertes</h1>
        </div>
        <div className='container'>
        <div className='expertiesContent'>
            <BsArrowLeftCircleFill className='arrow arrow_left' onClick={nextslilde}/>
            {data.map((item, index) => (
                <div key={index} className={slide ===index?"silde":"slide slide_hidden"}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
            <BsArrowRightCircleFill className='arrow arrow_right' onClick={pervSlide}/>
            <span className='indicators'>
                {data.map((_,index)=>{
                    return <button key={index} onClick={()=>setSlide(index) } className={slide ===index?"indicator":"indicator indicator_inactive"}></button>
                })}
            </span>
        </div>
        </div>
        
    </div>
  )
}

export default Experties