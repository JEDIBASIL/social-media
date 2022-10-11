import profileImg2 from "../../static/images/lolita.jpg";
import { Button } from "@mantine/core";
import { Link as A } from "react-router-dom"
const SuggestedToFollow = () => {
    return (
        
        <div className="ActivityAndTrendingBar SuggestedToFollow">
          <h3 className="heading">People also follow</h3>
    
             <div className="activityContainer">
        <div className="activityBox">
        <div className="notificationDetails">
          <img src={profileImg2} alt="" />
          <div>
            <p><A to="/">Kingsley</A></p>
          </div>
          </div>
          
          <Button size={"xs"} radius={50}>Follow</Button>
        </div>
      </div>
        </div>
      );
}

export default SuggestedToFollow