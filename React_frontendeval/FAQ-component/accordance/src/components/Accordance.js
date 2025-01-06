import React, { useState } from 'react'
import AccordanceItems from './AccordanceItems';

const data = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ]

const Accordance = () => {

    const [accord,setAccord] = useState(data);
    const [indexSetter,setIndexSetter] = useState(0);


  return (
    <div>
      {
        accord.length >0 && (
            accord.map((acc,index)=>(
                <AccordanceItems
                key={index}
                {...acc}
                isVisible={index == indexSetter}
                handleVisibility = {()=>{

                    index == indexSetter ? setIndexSetter(null) : setIndexSetter(index);
                }}
                />
            ))
        )
      }
    </div>
  )
}

export default Accordance
