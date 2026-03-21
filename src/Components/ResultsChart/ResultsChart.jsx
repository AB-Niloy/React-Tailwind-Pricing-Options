import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis,ResponsiveContainer } from 'recharts';

const resultData = [
  { "id": 1, "name": "Rahim", "phy": 85, "che": 80, "math": 90 },
  { "id": 2, "name": "Karim", "phy": 78, "che": 75, "math": 82 },
  { "id": 3, "name": "Ayesha", "phy": 92, "che": 89, "math": 95 },
  { "id": 4, "name": "Nusrat", "phy": 88, "che": 84, "math": 91 },
  { "id": 5, "name": "Tanvir", "phy": 74, "che": 70, "math": 76 },
  { "id": 6, "name": "Sohan", "phy": 81, "che": 79, "math": 85 },
  { "id": 7, "name": "Mim", "phy": 69, "che": 65, "math": 72 },
  { "id": 8, "name": "Arif", "phy": 95, "che": 93, "math": 97 },
  { "id": 9, "name": "Jannat", "phy": 87, "che": 83, "math": 89 },
  { "id": 10, "name": "Rafi", "phy": 76, "che": 73, "math": 80 }
]

const ResultsChart = () => {
    return (
            <div className="w-full h-[250px] md:h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={resultData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />

                      <Line type="monotone" dataKey="math" />
                      <Line type="monotone" dataKey="phy" stroke="red" />
                      <Line type="monotone" dataKey="che" stroke="green" />
                    </LineChart>

                  </ResponsiveContainer>
            </div>

        // <div>
        //     <LineChart width={800} height={500} data={resultData}>
        //         <XAxis dataKey={'name'}></XAxis>
        //         <YAxis></YAxis>
        //         <Line dataKey={'math'}></Line>
        //         <Line dataKey={'phy'} stroke='red'></Line>
        //         <Line dataKey={'che'} stroke='green'></Line>
        //         <Tooltip></Tooltip>
        //     </LineChart>
        // </div>
    );
};

export default ResultsChart;