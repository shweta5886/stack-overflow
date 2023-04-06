import React from 'react'
import './HomeMainbar.css'
import {Link,useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'
import {useNavigate} from 'react-router-dom'
const HomeMainbar = () => {
    const location=useLocation()
    const user=1;
    const navigate=useNavigate();

const questionsList = useSelector(state => state.questionsReducer)

//     var questionsList=[{
//         _id:1,
//        upVotes:3,
//        downVotes:2,
//         noOfanswers:2,
//         questionTitle:"what is a function shgfdjfhj sfdg fhghhh jkjklk jkjk",
//         questionBody:"it meant to be",
//         questionTags:["java","css","Javascript","c#"],
//         userPosted:"mano",
//         userId:1,
//         askedOn:"1 jan",
//         answer:[{
//             answerBody:"Answer",
//             userAnswered:"kumar",
//             answeredOn:"jan 2",
//             userId:2,
//         }]
//     },{
//         _id:2,
//         upVotes:3,
//         downVotes:2,
//          noOfanswers:2,
//          questionTitle:"what is a function shgfdjfhj sfdg fhghhh jkjklk jkjk",
//          questionBody:"it meant to be",
//          questionTags:["java","css","Javascript","c#"],
//          userPosted:"mano",
//          userId:1,
//          askedOn:"1 jan",
//          answer:[{
//              answerBody:"Answer",
//              userAnswered:"kumar",
//              answeredOn:"jan 2",
//              userId:2,
//          }]
//     },{
//         _id:3,
//         upVotes:3,
//         downVotes:2,
//          noOfanswers:2,
//          questionTitle:"what is a function shgfdjfhj sfdg fhghhh jkjklk jkjk",
//          questionBody:"it meant to be",
//          questionTags:["java","css","Javascript","c#"],
//          userPosted:"mano",
//          userId:1,
//          askedOn:"1 jan",
//          answer:[{
//              answerBody:"Answer",
//              userAnswered:"kumar",
//              answeredOn:"jan 2",
//              userId:2,
    
//     }]
// }
// ]
    
    const checkAuth =()=>{
        if(user==null)
        {
            alert("login or signup to ask question")
             navigate('/Auth')
        }
        else
        {
            navigate('/AskQuestion')
        }
    }
  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
{
    location.pathname==='/'?<h1>Top Question</h1>:<h1>All Qusetion</h1>
}
<button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
</div>
<div>
    {
questionsList.data===null?
<h1>Loading....</h1>:
<>
<p>{questionsList.data.length} questions</p>

   <QuestionList questionsList={questionsList.data}/>

    


</>
    }

        </div>
    </div>
  )
}

export default HomeMainbar