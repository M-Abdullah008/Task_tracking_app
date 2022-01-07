import { Link } from 'react-router-dom';
import { FcAlarmClock } from "react-icons/fc";
//1.GiAtomicSlashes

const About = () => {
  return (
    <div>
      <div className="abtSection" style={{width: "23%",display: "flex",alignItems: "center",flexDirection: "column"}}>
      <FcAlarmClock style={{ color: 'green', fontSize:"2.5em"}}/>
      <h4>Version 1.0.0</h4>
      
      </div>
      <div style={{}}>
      <Link to='/' style={{float: "left"}}>Go Back</Link>
      </div>
    </div>
  )
}

export default About