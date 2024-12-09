/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const CustomBarShape = (props) => {
    const { x, y, width, height, fill } = props;
    const path = `
        M${x},${y + height}
        L${x + width / 2},${y}
        L${x + width},${y + height}
        Z
    `;
    return <path d={path} fill={fill} />;
};

const ReadPages = () => {
    const [data, setData] = useState([]);

    // Fetch data from local storage
    useEffect(() => {
        const readBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        const chartData = readBooks.map((book) => ({
            name: book.bookName,
            pages: book.totalPages,
        }));
        setData(chartData);
    }, []);

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Read Pages Bar Chart</h2>
            {data.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            interval={0}
                            angle={-30}
                            textAnchor="end"
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar
                            dataKey="pages"
                            fill="#82ca9d"
                            shape={<CustomBarShape />}
                            label={{ position: "top", fill: "#000", fontSize: 12 }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-gray-600">No data available to display.</p>
            )}
        </div>
    );
};


export default ReadPages;
