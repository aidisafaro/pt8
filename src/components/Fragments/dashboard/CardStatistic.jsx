import React from "react";
import { expensesStatistics } from "../../../data/expenses";
import BarsDataset from "../../Elements/BarChart";
import Card from "../../Elements/Card";

const CardStatistic = () => {
    // Debugging: memastikan struktur data
    console.log("Expenses Statistics:", expensesStatistics);

    return (
        <Card
            variant="md:col-span-2 min-h-max"
            title="Statistics"
            desc={
                <div className="h-72">
                    <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                        <option>Weekly Comparison</option>
                    </select>
                    {/* Pastikan `desc` diteruskan sesuai kebutuhan `BarsDataset` */}
                    <BarsDataset desc={expensesStatistics} />
                </div>
            }
        />
    );
};

export default CardStatistic;
