import React from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useFetchPriceChart} from "../model/useFetchPriceChart.js";
import ErrorMessage from "../../../shared/ui/error/ErrorMessage.jsx";
import Loader from "../../../shared/ui/loader/Loader.jsx";


const CoinPriceChart = ({coinId}) => {
    const {priceChart, isLoading, error, retry} = useFetchPriceChart(coinId);

    if(isLoading) return <Loader />

    if (error) {
        return (
            <ErrorMessage
                title="Chart is unavailable"
                message={error?.message ?? "We couldn't load chart data."}
                onRetry={retry}
                variant="section"
            />
        );
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={priceChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)"/>
                <XAxis
                    dataKey="time"
                    stroke="#9ca3af"
                    style={{fontSize: "12px"}}
                />
                <YAxis
                    stroke="#9ca3af"
                    style={{fontSize: "12px"}}
                    domain={["auto", "auto"]}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(20, 20, 40, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        color: "#e0e0e0",
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#ADD8E6"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CoinPriceChart;
