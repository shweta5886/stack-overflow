import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind"
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and"
    },{
        id: 3,
        tagName: "java",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind"
    },{
        id: 4,
        tagName: "c#",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind"
    },{
        id: 5,
        tagName: "php",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind"
    },{
        id: 6,
        tagName: "android",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind"
    },{
        id: 7,
        tagName: "html",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind"
    
    }]


  return (
    <div className='home-container-1'> 
    <LeftSidebar/>
    <div className='home-container-2'> 
    <h1 className='tags-h1'>Tags</h1>
    <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
    <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
    
    <div className='tags-list-container'>
        {
            tagsList.map((tag) => (
                <TagsList tag = {tag} key={tagsList.id}/>
  ))
            }
        
         </div>
    </div>
    </div>
  )
}

export default Tags