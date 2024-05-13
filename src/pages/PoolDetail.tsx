import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DataContext } from 'contexts/DataContext';
import numeral from 'numeral';

dayjs.extend(utc)
ChartJS.register(ArcElement, Tooltip, Legend);

const PoolDetail = () => {
    const { data } = useContext(DataContext)
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

    const dataRoad = [{
        text1: "Waiting for pool start",
        text2: "No one can purchase"
    }, {
        text1: "Pool Start",
        text2: `Pool starts at ${dayjs(data.startTime).utc(true).format("HH:mm MM/DD/YYYY")} (UTC)`
    }, {
        text1: "Pool Ended",
        text2: `Pool ends at ${dayjs(data.endTime).utc(true).format("HH:mm MM/DD/YYYY")} (UTC)`
    }, {
        text1: "Claim tokens",
        text2: `Claim at ${dayjs(data.claimTime).utc(true).format("HH:mm MM/DD/YYYY")} (UTC)`
    }]

    const titleState = ["Not start", "Started", "Ended", "Finished"]

    return (
        <Wrap className='frame'>
            <div className="pool-range">
                <div className="pr-value" style={{ width: `${(timeState / 4) * 100}%` }}>
                    <div className="prv-track"></div>
                </div>
            </div>
            <div className="pool-road">
                {dataRoad.map((item, index) => <div key={index} className={`pr-item ${timeState >= index && "pr-item-active"}`}>
                    <span className="text-2">{item.text1}</span>
                    <span className="text-1 color-gray">{item.text2}</span>
                </div>)}
            </div>
            <div className="pool-detail">
                <div className="dt-row">
                    <span className="text-1 color-gray">Status</span>
                    <span className="text-1 color-white">{titleState[timeState]}</span>
                </div>
                <div className="dt-row">
                    <span className="text-1 color-gray">Sale Type</span>
                    <span className="text-1 color-green">Public</span>
                </div>
                <div className="dt-row dt-col">
                    <span className="text-1 color-gray">Current Rate</span>
                    <span className="text-1 color-gray">1 QKK = 0.000100165 TON</span>
                </div>
                <div className="dt-row">
                    <span className="text-1 color-gray">Total Contributors</span>
                    <span className="text-1 color-white">{numeral(467457).format("0,0")}</span>
                </div>
                <div className="dt-row">
                    <span className="text-1 color-gray">Your Contribution</span>
                    <span className="text-1 color-white">{numeral(657.4343).format("0,0.[0000]")} TON</span>
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
    .pool-road {
        display: flex;
        flex-direction: column;
        .pr-item {
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding-left: 26px;
            gap: 2px;
            &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 10px;
                height: 10px;
                background-color: #000;
                border-radius: 50%;
                z-index: 1;
            }
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 4px;
                transform: translateY(-50%);
                width: 2px;
                height: 100%;
                background-color: #000;
                border-radius: 5px;
            }
            &:first-child {
                &::after {
                    display: none;
                }
            }
        }
        .pr-item-active {
            &::before,
            &::after {
                background-color: rgb(8, 187, 8);
            }
        }
    }
    .pool-detail {
        display: flex;
        flex-direction: column;
        border: 1px solid #444448;
        border-radius: 8px;
        padding: 14px;
        gap: 10px;
        .dt-row {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        .dt-col {
            flex-direction: column;
        }
    }
`
