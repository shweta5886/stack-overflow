import React from 'react'
import "./RightSidebar.css"
import comment from "../../Assets/comment.svg"
import pen from "../../Assets/pen.svg";
import stack from "../../Assets/stack.svg"
const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow blog</h4>
      <div className='righ-sidebar-div-1'>
      <div className='righ-sidebar-div-2'>
       <div><img src={pen} alt="pen" width="18"/></div> 
       <div> <p>After crypto’s reality check, an investor remains cautiously optimistic (Ep....)</p>
       </div></div>
      <div className='righ-sidebar-div-2'>
        <img src={pen} alt="pen" width="18"/>
        <p>Your tech toolbox: The middle ground between tech chaos and rigidity</p>
      </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='righ-sidebar-div-1'>
      <div className='righ-sidebar-div-2'>
        <img src={comment} alt="comment" width="18"/>
        <p>Improving how we report updates and receive feedback on the Content Discovery...</p>
      </div>
      <div className='righ-sidebar-div-2'>
        <img src={comment} alt="comment" width="18"/>
        <p>Plagiarism flag and moderator tooling has launched to Stack Overflow!</p>
      </div>
      <div className='righ-sidebar-div-2'>
        <img src={stack} alt="stack" width="18"/>
        <p>The [rowname] and [columnname] tags are being burninated</p>
      </div>
      </div>
      <h4>Hot Meta Post</h4>
      <div className='righ-sidebar-div-1'>
      <div className='righ-sidebar-div-2'>
      <p>38</p>
        <p>After crypto’s reality check, an investor remains cautiously optimistic (Ep....)</p>
      </div>
      <div className='righ-sidebar-div-2'>
       <p>38</p>
        <p>Your tech toolbox: The middle ground between tech chaos and rigidity</p>
      </div>
      <div className='righ-sidebar-div-2'>
      <p>38</p>
        <p>Your tech toolbox: The middle ground  between tech chaos and rigidity</p>
      </div>
      </div>
    </div>
  )
}

export default Widget