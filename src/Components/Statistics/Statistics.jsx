import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../Utilities/localStorage";
import { Cell, Pie, PieChart } from "recharts";
import { Helmet } from "react-helmet";

const Statistics = () => {
  const donationData = useLoaderData();
  const donations = donationData.donations;
  const [donated, setDonated] = useState([]);
  useEffect(() => {
    const donateTotal = getDonations();
    setDonated(donateTotal);
  }, []);

  const selectedItem = donated.length;
  const totalItemCount = donations.length;
  const selectedPercentage = (selectedItem / totalItemCount) * 100;
  const unselectedPercentage = 100 - selectedPercentage;

  const data = [
    { name: 'Selected Items', value: selectedPercentage },
    { name: 'Unselected Items', value: unselectedPercentage },
  ];


  const COLORS = ['#00C49F', '#FF444A'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <div className='flex justify-center items-center mt-40 mb-10'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 mb-20'>
        <div className='flex gap-3'>
          <p>Your Donation</p>
          <div className='flex items-center'>
            <div style={{ backgroundColor: '#00C49F' }} className='w-20 h-3 rounded-sm'></div>
          </div>
        </div>
        <div className='flex gap-3'>
          <p>Total Donation</p>
          <div className='flex items-center'>
            <div style={{ backgroundColor: '#FF444A' }} className='w-20 h-3 rounded-sm'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
