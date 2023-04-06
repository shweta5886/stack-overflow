import React from 'react'

const WidgetTags = () => {
  const tags=['html','C#','java','vb','xml','c++','node']
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
            tags.map((tag)=>(
              <p key={tag}>{tag}</p>
            ))
        }
      </div>
    </div>
  )
}

export default WidgetTags   