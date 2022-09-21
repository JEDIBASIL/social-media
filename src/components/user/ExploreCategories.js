import {BiJoystick, BiMusic} from 'react-icons/bi'
import {FaFire,FaGamepad,FaMusic,FaRobot} from 'react-icons/fa'
const ExploreCategories = () => {

  return (
    <div className="ExploreCategories">
         <div className="card">
            <FaFire style={{fill:"orange",}}  />
            <h3>Entertainment</h3>
        </div>
        <div className="card">
            <FaGamepad  style={{fill:"green",}} />
            <h3>Games</h3>
        </div>
        <div className="card">
            <FaMusic  style={{fill:"crimson",}} />
            <h3>Music</h3>
        </div>
        <div className="card">
            <FaRobot  style={{fill:"royalblue",}} />
            <h3>Technologies</h3>
        </div>
        <div className="card">
            <FaRobot />
            <h3>Technologies</h3>
        </div>
    
    </div>
  )
}

export default ExploreCategories