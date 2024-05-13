import styled from 'styled-components';
import imgProject from 'assets/images/x.jpg';
import { useContext, useMemo } from 'react';
import numeral from 'numeral';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { DataContext } from 'contexts/DataContext';

dayjs.extend(utc)

const Statistic = () => {
    const { data } = useContext(DataContext)

    const dataState = ["Not start yet", "Sale live", "Sale ended"]

    const state = useMemo(() => {
        let now = Date.now();
        if (now < data.startTime || !data.startTime || !data.endTime) {
            return 0
        }
        if (now > data.endTime) {
            return 2
        }
        return 1
    }, [data.startTime, data.endTime])


    return (
        <Wrap className='frame'>
            <div className="statis-title">
                <div className="st-img">
                    <img src={imgProject} alt="" />
                </div>
                <div className="st-text">
                    <div className="stt-name">
                        <span className="text-3 color-white">{data.name}</span>
                        <div className={`stt-state state-${state}`}>
                            <div></div>
                            <span className="text-1 color-green">{dataState[state]}</span>
                        </div>
                    </div>

                    <div className="st-socials">
                        {data.listContact.map((item, index) => <a key={index} href={item.link} target='_blank' rel='noreferrer' className='sts-item' >
                            {item.icon}
                        </a>)}
                    </div>
                </div>
            </div>
            <span className="text-1 color-gray">{data.desc}</span>
            <div className="statis-row">
                <span className="text-1 color-gray">Presale Address</span>
                <span className="text-1 color-green">{data.presaleAddress}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Token Name</span>
                <span className="text-1 color-white">{data.tokenName}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Token Symbol</span>
                <span className="text-1 color-white">{data.tokenSymbol}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Token Decimals</span>
                <span className="text-1 color-white">{data.tokenDecimal}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Token Address</span>
                <div>
                    <span className="text-1 color-green">{data.tokenAddress}</span>
                    <span className="text-1 color-gray-2">{"(Do not send TON to the token address!)"}</span>
                </div>

            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Total Supply</span>
                <span className="text-1 color-white">{numeral(data.totalSupply).format("0,0")} {data.tokenSymbol}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Tokens For Presale</span>
                <span className="text-1 color-white">{numeral(data.tokenForPresale).format("0,0")} {data.tokenSymbol}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Tokens For Liquidity</span>
                <span className="text-1 color-white">{numeral(data.tokenForLiqquid).format("0,0")} {data.tokenSymbol}</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Initial Market Cap (estimate)</span>
                <span className="text-1 color-white">{numeral(data.initMarketCap).format("0,0.[0000]")} TON</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Soft Cap</span>
                <span className="text-1 color-white">{numeral(data.softCap).format("0,0.[0000]")} TON</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Limit per user</span>
                <span className="text-1 color-white">{data.limitPerUser === null ? "∞" : numeral(data.limitPerUser).format("0,0.[0000]")} TON</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Presale Start Time</span>
                <span className="text-1 color-white">{dayjs(data.startTime).utc(true).format("HH:mm MM/DD/YYYY")} (UTC)</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Presale End Time</span>
                <span className="text-1 color-white">{dayjs(data.endTime).utc(true).format("HH:mm MM/DD/YYYY")} (UTC)</span>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Listing On</span>
                <a href={data.listingLink} target='_blank' rel='noreferrer' className="text-1 color-green">{data.listingOn}</a>
            </div>
            <div className="statis-row">
                <span className="text-1 color-gray">Liquidity Percent</span>
                <span className="text-1 color-white">{data.liquidPercent}%</span>
            </div>
        </Wrap>
    );
}

export default Statistic;

const Wrap = styled.div`
    width: 100%;
    gap: 10px;
    .statis-title {
        display: flex;
        width: 100%;
        gap: 20px;
        border-bottom: 1px solid #55555b;
        padding-bottom: 24px;
        margin-bottom: 10px;
        .st-img {
            > img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
        .st-text {
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 6px;
            .stt-name {
                display: flex;
                width: 100%;
                justify-content: space-between;
                .stt-state {
                    padding: 6px 16px;
                    background: #039f2f41;
                    border-radius: 20px;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    height: fit-content;
                    > div {
                        background: rgb(8, 187, 8);
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                    }
                }
                .state-0 {
                    background: #9f3f0341;
                    > div {
                        background: rgb(187, 136, 8);
                    }
                    > span {
                        color: rgb(187, 136, 8);
                    }
                }
                .state-2 {
                    background: #9f150341;
                    > div {
                        background: rgb(227, 33, 3);
                    }
                    > span {
                        color: rgb(227, 33, 3);
                    }
                }
            }
            .st-socials {
                display: flex;
                gap: 20px;
                .sts-item {
                    width: 32px;
                    height: 32px;
                    border-radius: 6px;
                    display: flex;
                    background: #3B3B3F;
                    align-items: center;
                    justify-content: center;
                    transition: 0.3s ease-in-out;
                    &:hover {
                        background: #46464a;
                    }
                }
            }
        }
    }
    .statis-row {
        border-bottom: 1px solid #55555b;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        &:last-child {
            padding-bottom: 0;
            border-bottom: none;
        }
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }
`
