import styled from 'styled-components';
import { useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

dayjs.extend(utc)
ChartJS.register(ArcElement, Tooltip, Legend);

type TokenomicItem = {
    color: string,
    name: string,
    value: number
}

const Tokenomic = () => {
    const [data, setData] = useState<TokenomicItem[]>([
        {
            color: "#7FB0B2",
            name: "Fairlaunch",
            value: 30
        },
        {
            color: "#0F8558",
            name: "DEXs listing",
            value: 13.77
        },
        {
            color: "#FFA421",
            name: "Game drops",
            value: 33
        },
        {
            color: "#D15B8F",
            name: "Marketing",
            value: 15.23
        },
        {
            color: "#7E8B92",
            name: "Team",
            value: 7
        },
        {
            color: "#FF0000",
            name: "Audit",
            value: 1
        }
    ])

    return (
        <Wrap className='frame'>
            <span className="text-22 color-white">Quyen Kec tokenomics</span>
            <div className="token-main">
                <Doughnut
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        cutout: 25
                    }}

                    data={{
                        datasets: [{
                            label: "",
                            data: data.map(item => item.value),
                            borderWidth: 0,
                            backgroundColor: data.map(item => item.color),
                        }]
                    }}
                />
                <div className="tm-labels">
                    {
                        data.map((item, index) => <div key={index} className='tml-item'>
                            <div className="" style={{ backgroundColor: item.color }}></div>
                            <span className="text-12 color-white">{item.name} ({item.value}%)</span>
                        </div>)
                    }
                </div>
            </div>

        </Wrap>
    );
}

export default Tokenomic;

const Wrap = styled.div`
    width: 100%;
    gap: 20px;
    canvas {
        width: 220px !important;
        height: 220px !important;
    }
    .token-main {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        .tm-labels {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .tml-item {
                display: flex;
                align-items: center;
                gap: 10px;
                > div {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                  
                }
            }
        }
    }
`
