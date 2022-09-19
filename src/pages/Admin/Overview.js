import IncomeOverview from "../../components/admin/IncomeOverview";
import DailyChart from "../../components/admin/DailyChart";
import MonthlyChart from "../../components/admin/MonthlyChart";
import UsersOverview from "../../components/admin/UsersOverview";
import RecentUsers from "../../components/admin/RecentUsers";
const Overview = () => {
    return (
        <>
            <IncomeOverview />
           <div className='overviewChart'>
                <DailyChart />
                <MonthlyChart />
            </div>
            <RecentUsers/>
        </>
    );
};

export default Overview;
