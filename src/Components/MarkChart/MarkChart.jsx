import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const MarkChart = ({markPromise}) => {
    const markDataRes = use(markPromise);
    const markData = markDataRes.data;
    console.log(markData);

    // Data processing for the chart
    const markChartData = markData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.phy,
            chemistry: studentData.marks.che,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    } )

    console.log(markChartData);

    return (
            <div className="w-full h-[250px] md:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={markChartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />

                      <Bar dataKey="avg" fill="blue" />
                      <Bar dataKey="math" fill="red" />
                    </BarChart>

                  </ResponsiveContainer>
            </div>

        // <div>
        //     <BarChart width={800} height={400} data={markChartData}> 
        //         <XAxis dataKey="name"></XAxis>
        //         <YAxis></YAxis>
        //         <Tooltip></Tooltip>
        //         <Legend></Legend>
        //         <Bar dataKey="avg" fill='yellow'></Bar>
        //         <Bar dataKey="math" fill='red'></Bar>
        //     </BarChart>
        // </div>
    );
};

export default MarkChart;