import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

dayjs.extend(utc)
ChartJS.register(ArcElement, Tooltip, Legend);

type PoolData = {
    startTime: number,
    endTime: number,
    claimTime: number
}

const PoolDetail = () => {
    const [data, setData] = useState<PoolData>({
        startTime: Date.now() - 123124,
        endTime: Date.now() + 546688,
        claimTime: Date.now() + 5346688,
    })

    const [timeState, setTimeState] = useState(0)

    const currentState = () => {
        let now = Date.now();
        if (now < data.startTime) {
            return 0;
        }
        if (now < data.endTime) {
            return 1;
        }
        if (now < data.claimTime) {
            return 2;
        }
        return 3
    }

    useEffect(() => {
        let newState = currentState();
        setTimeState(newState)
    }, [data])

    return (
        <Wrap className='frame'>
            <div className="pool-range">
                <div className="pr-value" style={{ width: `${(timeState / 4) * 100}%` }}>
                    <div className="prv-track"></div>
                </div>
            </div>
            
        </Wrap>
    );
}

export default PoolDetail;

const Wrap = styled.div`
    gap: 20px;
    .pool-range {
        width: 100%;
        display: flex;
        background: #000;
        border-radius: 10px;
        height: 6px;
        padding: 1px;
        .pr-value {
            height: 100%;
            border-radius: 10px;
            background-color: rgb(8, 187, 8);
            transition: 1s;
            position: relative;
            > div {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(2px,-50%);
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: rgb(8, 187, 8);
                border: 2px solid black;
            }
        }
    }
`
