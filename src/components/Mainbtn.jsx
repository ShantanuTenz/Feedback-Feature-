import icon from '../Images/feedback.png'
import './Styles/mainbtn.css'

import issue from '../Images/issue.png'
import like from '../Images/Like.png'
import suggestion from '../Images/suggestion.png'
import contact from '../Images/contact.png'
import attach from '../Images/attach-file.png'
import Cross from '../Images/cross.png'
import arrow from '../Images/arrow-down.png'
import { useState } from 'react'

const Mainbtn = () => {

  const [cross, setCross] = useState(false);
  const [bigMenu, setBigMenu] = useState("toggle-main-box-pop");
  const [sideMenu, setSideMenu] = useState("main-box-pop-copy");
  const [issues, setIssue] = useState("issue-main-div");
  const [feedback, setFeedback] = useState("feedback-main-div");
  const [suggestions, setSuggestion] = useState("suggestion-main-div");
  const [queiry, setQueiry] = useState("Query-main-div");


  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };


  function crossClickPopUp(check){
    if(check == false){
      setBigMenu("toggle-main-box-pop");
    }
    else{
      setBigMenu("main-box-pop");
    }
  }

  const crossClick = () => {
    setCross(!cross); 
    crossClickPopUp(!cross);
    setSideMenu("main-box-pop-copy");
    setIssue("issue-main-div");
    setFeedback("feedback-main-div");
    setSuggestion("suggestion-main-div");
    setQueiry("Query-main-div");
  }

  const issueClick = () => {
    setSideMenu("toggle-main-box-pop-copy");
    setBigMenu("toggle-main-box-pop");
    setIssue("issue-main-div-pop-up")

    setFeedback("feedback-main-div");
    setSuggestion("suggestion-main-div");
    setQueiry("Query-main-div");
  }

  const feedBackClick = () => {
    setSideMenu("toggle-main-box-pop-copy");
    setBigMenu("toggle-main-box-pop");
    setFeedback("feedback-main-div-pop-up");

    setIssue("issue-main-div");
    setSuggestion("suggestion-main-div");
    setQueiry("Query-main-div");
  }
  const SuggestionClick = () => {
    setSideMenu("toggle-main-box-pop-copy");
    setBigMenu("toggle-main-box-pop");
    setSuggestion("suggestion-main-div-pop-up")

    setIssue("issue-main-div");
    setFeedback("feedback-main-div");
    setQueiry("Query-main-div");
  }
  const QueriesClick = () => {
    setSideMenu("toggle-main-box-pop-copy");
    setBigMenu("toggle-main-box-pop");
    setQueiry("Query-main-div-pop-up")

    setIssue("issue-main-div");
    setFeedback("feedback-main-div");
    setSuggestion("suggestion-main-div");
  }

  return (
    <>
    <div>

      {/* 
      suggestions
      feedback
      report an issue 
      */}

      {/* Issue */}
      <div className={issues}>
        <div className='header-text'>
          Let us know about the Issue you are facing right now!
        </div>

        <div className='body-content'>
          <div className='first-section'>
            <label>Choose a section</label>
            <img src={arrow} width={"20px"} alt="" />
            <select className="cars">
              <option className='section'>Interview Questions</option>
              <option className='section'>Question not clear</option>
              <option className='section'>Bug</option>
              <option className='section'>Not a good explaination</option>
            </select>
          </div>
          <div className='last-section'>
            <label>Describe the issue in detail<span className='star'>*</span></label>
            <textarea onChange={handleInputChange} className='main-text-issue' cols="1" rows="1" placeholder='Write here...'></textarea>
            <div className='chota-box'>
              <img src={attach} width={"20px"} height={"20px"} alt="" />
              <p>Attach</p>
              {/* <input style={{visibility: "hidden"}} type="file" id="attach-issue"/> */}
            </div>
          </div>
        </div>

        <div className='btn-issue-div'>
          <button disabled={!textInput} className='issue-btn'>Submit</button>
        </div>
      </div>

      {/* Feedback */}
      <div className={feedback}>
        <div className='header-text'>
          Let us know about your Feedback about us!
        </div>

        <div className='body-content'>
          <div className='last-section'>
            <label>Describe your feedback in detail<span className='star'>*</span></label>
            <textarea onChange={handleInputChange} className='main-text-issue' cols="1" rows="1" placeholder='Write here...'></textarea>
            <div className='chota-box'>
              <img src={attach} width={"20px"} height={"20px"} alt="" />
              <p>Attach</p>
              {/* <input style={{visibility: "hidden"}} type="file" id="attach-issue"/> */}
            </div>
          </div>
        </div>

        <div style={{display: "flex"}}>
          <input type="checkbox" name="" id="" />
          <p style={{marginLeft: "5px"}}>Send feedback anonymously</p>
        </div>

        <div className='btn-issue-div'>
          <button disabled={!textInput} className='issue-btn'>Submit</button>
        </div>
      </div>

      {/* Suggestions */}
      <div className={suggestions}>
        <div className='header-text'>
          Share your Suggestions with us for a chance to earn rewards!
        </div>

        <div className='body-content'>
          <div className='first-section'>
            <label>Select</label>
            <img src={arrow} width={"20px"} alt="" />
            <select className="cars">
              <option className='section'>Add more Interview Questions</option>
              <option className='section'>Question not clear, improve</option>
              <option className='section'>Bug when submit answer</option>
              <option className='section'>remove fake answer</option>
            </select>
          </div>
          <div className='last-section'>
            <label>Describe the suggestion in detail<span className='star'>*</span></label>
            <textarea onChange={handleInputChange} className='main-text-issue' cols="1" rows="1" placeholder='Write here...'></textarea>
            <div className='chota-box'>
              <img src={attach} width={"20px"} height={"20px"} alt="" />
              <p>Attach</p>
              {/* <input style={{visibility: "hidden"}} type="file" id="attach-issue"/> */}
            </div>
          </div>
        </div>

        <div className='btn-issue-div'>
          <button disabled={!textInput} className='issue-btn'>Submit</button>
        </div>
      </div>

      {/* Queries */}
      <div className={queiry}>
        <div className='header-text'>
          Let us know what your queries are!
        </div>

        <div className='body-content'>
        <div className='first-section'>
            <label>Your Name</label>
            <textarea className='cars' cols="1" rows="1" placeholder='Write here...'></textarea>
          </div>

          <div className='last-section'>
            <label>What would you like to ask?<span className='star'>*</span></label>
            <textarea onChange={handleInputChange} className='main-text-issue' cols="1" rows="1" placeholder='Write here...'></textarea>
          </div>
        </div>

        <div className='btn-issue-div'>
          <button disabled={!textInput} className='issue-btn'>Submit</button>
        </div>
      </div>

      {/* side down bar */}
      <div className={sideMenu}>
        <div className="grid-pop-up-copy">
          <div onClick={QueriesClick} className='shan'>
            <img className='iconsss' src={contact} alt="" />
          </div>
          <div onClick={SuggestionClick} className='shan'>
            <img className='iconsss' src={suggestion} alt="" />
          </div>
          <div onClick={feedBackClick} className='shan'>
            <img className='iconsss' src={like} alt="" />
          </div>
          <div onClick={issueClick} className='shan'>
            <img className='iconsss' src={issue} alt="" />
          </div>            
        </div>
      </div>    

        {/* bigger bar  */}
      <div className={bigMenu}>
        <div className="grid-pop-up">
              <div className='boxes'>
                <div>
                <button onClick={issueClick} style={{padding: "8px 16px", backgroundColor:"white", color: "black", fontFamily: "poppins", fontWeight: "500", borderRadius: "2px", border: "none"}}>Report an Issue</button>
                </div>
                <div  className='shan'>
                  <img className='iconsss' src={issue} alt="" />
                </div>
              </div>
              <div className='boxes'>
                <div>
                <button onClick={feedBackClick} style={{padding: "8px 16px", backgroundColor:"white", color: "black", fontFamily: "poppins", fontWeight: "500", borderRadius: "2px", border: "none"}}>Share Feedback</button>
                </div>
                
                <div className='shan'>
                  <img className='iconsss' src={like} alt="" />
                </div>
              </div>
              <div className='boxes'>
                <div>
                <button onClick={SuggestionClick} style={{padding: "8px 16px", backgroundColor:"white", color: "black", fontFamily: "poppins", fontWeight: "500", borderRadius: "2px", border: "none"}}>Give Suggestion</button>
                </div>
                
                <div className='shan'>
                  <img className='iconsss' src={suggestion} alt="" />
                </div>
              </div>
              <div className='boxes'>
                <div>
                <button onClick={QueriesClick} style={{padding: "8px 16px", backgroundColor:"white", color: "black", fontFamily: "poppins", fontWeight: "500", borderRadius: "2px", border: "none"}}>Contact Us</button>
                </div>

                <div className='shan'>
                  <img className='iconsss' src={contact} alt="" />
                </div>
              </div>
        </div>
      </div>

        {/*cross button  */}
      <div className='helper'>
        <div onClick={crossClick} className='feed-img-box'>
        {cross == true ? (
        <>
          <img className='feed-img' src={Cross} alt="" />
        </>
        ) :
        <>
          <img className='feed-img' src={icon} alt="" /> 
        </>
        }
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Mainbtn
