'use client'
import { useEffect, useState } from "react";
import DisplayCard from "./components/DisplayCard";
import LineChart from "./components/LineChart";

export default function Data() {

    const [data, setData] = useState<any>({
        humidity: 60,
        temperature: 20,
        soilMoisture: 35,
        waterFlow: 1.25,
        fanStatus: false,
        heatingElement: false,
    });

    const [humidity, setHumidity] = useState<number[]>([2, 1, 30, 7, 8, 9]);
    const [temperature, setTemperature] = useState<number[]>([35, 20, 18, 10, 7, 1]);
    const [soilMoisture, setSoilMoisture] = useState<number[]>([10, 20, 14, 21, 25, 30]);
    const [waterFlow, setWaterFlow] = useState<number[]>([1, 8, 10, 15, 20, 20]);
    const [sensorData, setSensorData] = useState<any>({});
    const [actuatorData, setActuatorData] = useState<any>({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/v1/sensor`);
                const result = await response.json();
                setSensorData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [sensorData]);

    return (
        <main className="flex justify-center h-screen">
            <div>
                <div className="grid grid-cols-4 gap-4 mt-4 mb-10">
                    <DisplayCard className="bg-[#76c7c0]" sensorData={sensorData.humidity} title="Humidity" />
                    <DisplayCard className="bg-[#f28c28]" sensorData={sensorData.temperature} title="Temperature" />
                    <DisplayCard className="bg-[#4caf50]" sensorData={sensorData.soilMoistureContent} title="Soil moisture content" />
                    <DisplayCard className="bg-[#2196f3]" sensorData={sensorData.waterFlow} title=" Water flow" />
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <LineChart label="Humidity" data={humidity} borderColor="#76c7c0" />
                    </div>
                    <div>
                        <LineChart label="Temperature" data={temperature} borderColor="#f28c28" />
                    </div>
                    <div>
                        <LineChart label="Soil moisture content" data={soilMoisture} borderColor="#4caf50" />
                    </div>
                    <div>
                        <LineChart label="Water flow" data={waterFlow} borderColor="#2196f3" />
                    </div>
                    <div></div>
                </div>
            </div>

        </main>
    );
}