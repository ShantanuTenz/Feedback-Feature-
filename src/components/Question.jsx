import icon from '../Images/rocket.png'
import './Styles/question.css'
import eye from '../Images/eye.png'

const Question = () => {
  return (
    <div className='qiestion-main'>

      <div className='first'>
        <div>
            <button className='btn'>Design</button>
            <button className='btn'>Technology</button>
        </div>
        <div>
            <div>
                <img style={{height: '25px', width: '25px', marginLeft: "10px"}} src={icon} alt="" />
            </div>
            <p style={{fontSize: '16px'}}>Startup</p>
        </div>
      </div>

      <div className='second'>
        <div>
            <p style={{fontFamily: "poppins", color: "black", fontWeight: "500", marginBottom: '10px'}}>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? </p>
        </div>
        <div>
            <p style={{fontFamily: "poppins", color: "black"}}>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se?</p>
        </div>
      </div>

      <div className='third' style={{fontFamily: "poppins", color: "#2A2A2A", fontSize: '12px', marginTop: '40px', fontWeight: '500'}}>
        <div className='left-eye'>
            <div>
                <img width={'20px'} height={'20px'} src={eye} alt="" />
            </div>
            <div>
                100 Views
            </div>
        </div>
        <div className='right-eye'>
            <p>
                How should you word your answer?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Question