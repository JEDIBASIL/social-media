import IncomeOverview from "../../components/admin/IncomeOverview";
import DailyChart from "../../components/admin/DailyChart";
import MonthlyChart from "../../components/admin/MonthlyChart";
import RecentUsers from "../../components/admin/RecentUsers";
import IncomeMap from "../../components/admin/IncomeMap";
const Overview = () => {
    return (
        < div className="overviewContainer">
            <IncomeOverview />
           <div className='overviewChart'>
                <DailyChart />
                <MonthlyChart />
            </div>
            <IncomeMap />
            <RecentUsers/>
        </div>
    );
};

export default Overview;
