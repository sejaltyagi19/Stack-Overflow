import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  const location = useLocation()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionsReducer)
  // console.log(questionList)

  // var questionList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   QuestionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   QuestionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,                      
  //   }]
  // },{
  //   _id: 3,
  //   upVotes: 1,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   QuestionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }]
  // }]


  // const redirect = () => {
  //     alert("login or signup to ask a question")
  //     navigate('/Auth')
  // }

  const checkAuth = () => {
    if(User === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        {/* <Link to={ user === null ? redirect() : '/AskQuestion'} className='ask-btn'>Ask Question</Link> */}
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ?
          <h1>Loading...</h1> :
          <>
              <p>{ questionList.data.length } questions</p>
              <QuestionList questionList={questionList.data} />
          
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
