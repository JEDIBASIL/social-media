import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 4000,
        amt: 2400,
    },
    {
        name: "Feb",
        uv: 3000,
        amt: 2210,
    },
    {
        name: "Mar",
        uv: 2000,
        amt: 2290,
    },
    {
        name: "Ap",
        uv: 2780,
        amt: 2000,
    },
    {
        name: "May",
        uv: 1890,
        amt: 2181,
    },
    {
        name: "Jun",
        uv: 2390,
        amt: 2500,
    },
    {
        name: "Jul",
        uv: 3490,
        amt: 2100,
    },
    {
        name: "Aug",
        uv: 3490,
        amt: 2100,
    },
    {
        name: "Sep",
        uv: 3490,
        amt: 2100,
    },
    {
        name: "Oct",
        uv: 3490,
        amt: 2100,
    },
    {
        name: "Nov",
        uv: 3490,
        amt: 2100,
    },
    {
        name: "Dec",
        uv: 3490,
        amt: 2100,
    }
];

const MonthlyChart = () => {
    return (
        <div className="dailyIncomeChart">
            <h2 className='subHeading'>Monthly income</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor:'rgb(13, 13, 13)'}}/>
                        {/* <Legend /> */}
                        <Bar  dataKey="uv"  fill={'skyblue'} radius={50}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
export default MonthlyChart;
