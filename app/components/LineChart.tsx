import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartProps {
    labels?: string[];
    label?: string;
    data?: number[];
    borderColor?: string
}

const LineChart = ({ label, labels, data, borderColor }: ChartProps) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!chartRef?.current) return;
        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels || ["1", "2", "3", "4", "5", "6"],
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: borderColor,
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default LineChart;
