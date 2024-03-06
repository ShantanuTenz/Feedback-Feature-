import './Styles/header.css'
import logo from '../Images/SignIn.png'
import drop from '../Images/arrow-down.png'

const Header = () => {
  return (
    <div className='main'>
      <div>
        <span>THE <span style={{color: 'black', backgroundColor: "whitesmoke"}} >PRODUCT</span> PLATFORM</span>
      </div>
      <div className='left-main'> 
        <div style={{color: 'gray'}}>
            Learn
            <img style={{marginLeft: '5px', paddingTop: '5px'}} className='dorp' src={drop} alt="" />
        </div>
        <div style={{color: 'gray'}}>
            Practice
            <img style={{marginLeft: '5px', paddingTop: '5px'}} className='dorp' src={drop} alt="" />
        </div>
        <div>
            <img className='image' src= {logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
