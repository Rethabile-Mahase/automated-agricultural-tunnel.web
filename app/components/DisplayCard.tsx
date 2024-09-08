
import { twMerge } from "tailwind-merge"

interface DisplayCardProps {
    title: string,
    sensorData: number,
    className?: any
}

export default function DisplayCard({ title, sensorData, className }: DisplayCardProps) {
    return (
        <div className={twMerge("w-[350px] bg-blue-300 border rounded-xl h-[150px] text-white p-4", className)}>
            <h1>{title}</h1>
            <h1 className="font-bold text-[80px]">{sensorData}</h1>
        </div>
    )
}