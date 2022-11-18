import {
    BsStarFill,
    BsLightningChargeFill,
    BsFillMoonFill,
} from "react-icons/bs";
const IncomeOverview = () => {
    return (
        <>
            <h2 className="heading overviewHeading">Overview</h2>
            <div className="incomeOverview">
            <div className="background"><p>Welcome Back <span>Smith</span></p> </div>
                <div className="incomeOverviewCardContainer">
                    <div className="card">
                        <i>
                            <BsStarFill />
                        </i>
                        <p>Total income</p>
                        <h1>133M</h1>
                    </div>
                    <div className="card">
                        <i>
                            <BsFillMoonFill />
                        </i>
                        <p>Monthly income</p>
                        <h1>133M</h1>
                    </div>
                    <div className="card">
                        <i>
                            <BsStarFill />
                        </i>
                        <p>Weekly income</p>
                        <h1>133M</h1>
                    </div>
                    <div className="card">
                        <i>
                            <BsLightningChargeFill />
                        </i>
                        <p>Today income</p>
                        <h1>133M</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IncomeOverview;
