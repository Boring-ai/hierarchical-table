import { useMemo } from "react";

type Props = {
    value: number;
    total: number;
    color?: string;
}

function ProgressBarCell({ value, total, color = '#F04438' }: Props) {

    const percentage = Math.min(Math.max(value / total * 100, 0), 100);
    const progressBarstyle = useMemo(() => ({
        width: `${percentage}%`,
        backgroundColor: color === 'red' ? '#F04438' : '#5C37EB'
    }), [percentage, color]);

    return (
        <div className="w-full flex items-center gap-3">
            <div className="w-[120px] relative overflow-hidden rounded-full bg-[#F5F6FA] h-2">
                <div
                    className="h-full bg-[#5C37EB] rounded-full transition-all duration-300 ease-out"
                    style={progressBarstyle}
                />
            </div>
            <div className="text-sm">
                {value} {`(${percentage}%)`}
            </div>
        </div>
    );
}

export default ProgressBarCell;