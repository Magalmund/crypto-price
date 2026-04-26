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
                    stroke="#7f7f7f"
                    style={{fontSize: "12px"}}
                />
                <YAxis
                    stroke="#7f7f7f"
                    style={{fontSize: "12px"}}
                    domain={["auto", "auto"]}
                />
                <Tooltip
                    contentStyle={{
                        background: "linear-gradient(145deg, #171717, #101010)",
                        border: "1px solid rgba(255, 255, 255, 0.04)",
                        borderRadius: "18px",
                        color: "#f5f5f5",
                        boxShadow: "12px 12px 24px rgba(0, 0, 0, 0.68), -12px -12px 24px rgba(28, 28, 28, 0.72)",
                    }}
                    labelStyle={{color: "#9a9a9a"}}
                />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#f1f1f1"
                    strokeWidth={2.5}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CoinPriceChart;
