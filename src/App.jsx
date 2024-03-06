import './App.css'
import Header from './components/Header'
import Mainbtn from './components/Mainbtn'
import Question from './components/Question'
import icon from './Images/arrow-left.png'

function App() {

  return (
    <div>
      <Header/>
      <div className='back-to-questions'>
        <div className='image-div'>
          <img src={icon} alt="" />
        </div>
        <div> 
          Back to Question 
        </div>
      </div>
      <Question />
      <Mainbtn className="hello" />
    </div>
  )
}

export default App
