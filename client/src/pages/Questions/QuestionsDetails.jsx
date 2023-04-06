import React from 'react'
import { useParams,Link , useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../Assets/sort-up.svg'
import downvote from '../../Assets/sort-down.svg'
import './Questions.css'

import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import{ postAnswer, deleteQuestion, voteQuestion} from '../../actions/question'
const QuestionsDetails = () => {
    const {id}=useParams()
    const questionsList = useSelector(state => state.questionsReducer)
   // console.log(id)
//     var questionsList=[{
//         _id:'1',
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
//         _id:'2',
//         upVotes:3,
//         downVotes:2,
//          noOfanswers:2,
//          questionTitle:"what is a function ",
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
//         _id:'3',
//         upVotes:3,
//         downVotes:2,
//          noOfanswers:2,
//          questionTitle:"what is a function?",
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
const [Answer, setAnswer] = useState(' ')
const Navigate= useNavigate()
const dispatch = useDispatch()
const User = useSelector((state) => (state.currentUserReducer))
const location=useLocation()
const url = 'https://stack-overflow-cloneproduct.onrender.com'

const handlePostAns = (e, answerLength) =>{
    e.preventDefault()
    if(User=== null){
        alert ('Login or Signup to answer a question')
        Navigate('/Auth')
    }
    else{
        if(Answer === ''){
            alert('Enter an answer before submitting')
        }
        else{
            //console.log({ id, noOfanswers: answerLength+1, answerBody: Answer, userAnswered: User.result.name})
            dispatch(postAnswer({ id, noOfAnswers: answerLength+1, answerBody: Answer, userAnswered: User.result.name,userId: User.result._id}))
        }
    }
}

const handleShare = () => {
    copy(url+location.pathname)
    alert('copied url: '+url+location.pathname)
}

const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
}

const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
}

const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', User.result._id))
}

  return (
    <div className='question-details-page'>
{
    questionsList.data=== null ?
    <h1>Loading.....</h1>:
    <>
    {
        questionsList.data.filter(question=>question._id===id).map(question=>(
            <div key={question._id}>
              
<section className='question-details-container'>
<h1>{question.questionTitle}</h1>
<div className='question-details-container-2'>
<div className='question-votes'>
    <img src={upvote} alt="upvote" width="18" className='votes-icon' onClick={handleUpVote}/>
    <p>{ question?.upVote.length - question?.downVote.length || 0}</p> 
    <img src={downvote} alt="downvote" width="18" className='votes-icon' onClick={handleDownVote}/>
</div>
<div style={{width:"100%"}}>
    <p className='question-body'>{question.questionBody}</p>
    <div className='question-details-tags'>
        {
            question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
            ))
        }
    </div>
    <div className='question-actions-user'>
        <div>
            <button type="button" onClick={handleShare}>Share</button>
            {
                User?.result?._id === question?.userId && (
                <button type="button" onClick={handleDelete}>Delete</button>
                )
            }
            
        </div>
        <div>
            <p>asked {moment(question.askedOn).fromNow()}</p>
            <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                <Avatar backgroundColor="orange" px="8px" py="10px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                <div>{question.userPosted}</div>
            </Link>
        </div>
    </div>
</div>
</div>
</section>
{
    question.answer.length !== 0 && (
        <section>
            <h3>{question.answer.length} Answers</h3>
            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
        </section>
    )
}
<section className='post-ans-container'>
    <h3>Your Answer</h3>
    <form onSubmit={ (e) => {handlePostAns(e, question.answer.length)}}>
        <textarea id="" name="" cols="30" rows="10" onChange={(e) => {setAnswer(e.target.value)}}></textarea><br/>
        <input type="submit" className='post-ans-btn' value="post your answer"/>
    </form>
    <p>Browse other Question tagged
        {
            question.questionTags.map((tag) => (
                <Link to="/Tags" key={tag} className='ans-tags'> {tag} </Link>
            ))
        } or 
        <Link to="/AskQuestion" style={{textDecoration:"none",color:"#009dff"}}> Ask your own question.</Link>
    </p>
</section>

            </div>
        ))
    }
    </>
}
    </div>
  )
}

export default QuestionsDetails
