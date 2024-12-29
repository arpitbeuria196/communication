import React from 'react'
import AccordianItems from './AccordianItems';
import { useState } from 'react';

const accordionData = [
    {
      id: 1,
      title: "Introduction to React",
      description: "React is a JavaScript library for building user interfaces. Learn the basics of components, props, and state.",
      content: "React allows developers to create large web applications that can update and render efficiently in response to data changes."
    },
    {
      id: 2,
      title: "Getting Started with Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      content: "Node.js enables developers to use JavaScript for server-side programming, offering event-driven, non-blocking I/O."
    },
    {
      id: 3,
      title: "Understanding JavaScript Promises",
      description: "Promises are used to handle asynchronous operations in JavaScript.",
      content: "A promise represents a value that may be available now, or in the future, or never. Promises simplify handling of asynchronous code."
    },
    {
      id: 4,
      title: "CSS Flexbox and Grid",
      description: "Learn how to layout your web pages using modern CSS techniques.",
      content: "Flexbox and Grid provide powerful ways to design web layouts with greater flexibility and control over spacing, alignment, and distribution."
    },
    {
      id: 5,
      title: "Introduction to APIs",
      description: "APIs (Application Programming Interfaces) enable communication between software applications.",
      content: "Understanding APIs is crucial for modern development. Learn how to consume RESTful APIs and integrate third-party services."
    }
  ];
  
const Accordion = () => {
    const [indexAccordian,setIndexAccordian] = useState(0);
    const[isOpen,setIsOpen] = useState(false);
  return (
    <div>
      {accordionData.map((acc,index)=>
    (
        <AccordianItems
        key={index}
        acc={acc}
        isOpen={indexAccordian == index}
        setIsOpen={
            ()=>
            {
                indexAccordian == index ? setIndexAccordian(null) :  setIndexAccordian(index);
            }
         }
        />
    ))}
    </div>
  )
}

export default Accordion
