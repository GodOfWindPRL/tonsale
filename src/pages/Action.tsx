import styled from 'styled-components';
import imgProject from 'assets/images/x.jpg';
import { listContact } from 'components/Footer';
import numeral from 'numeral';
import { NumericFormat } from 'react-number-format';
import { useEffect, useMemo, useState } from 'react';
import { SendTransactionRequest, TonConnectButton, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import Button from 'components/core/Button';
import { notifyToastify } from 'configs/notifyToastify';
import Countdown from 'react-countdown'
import BigNumber from 'bignumber.js';
import whitelist from 'list.json';

const defaultTx: SendTransactionRequest = {
    // The transaction is valid for 10 minutes from now, in unix epoch seconds.
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [

        {
            // The receiver's address.
            address: '0:8a5a9c7b70d329be670de4e6cce652d464765114aa98038c66c3d8ceaf2d19b0',
            // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
            amount: '5000000',
            // (optional) State initialization in boc base64 format.
            // stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
            // (optional) Payload in boc base64 format.
            // payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
        },
    ],
};

const Action = () => {
    const wallet = useTonWallet();
    const [tonConnectUi] = useTonConnectUI();
    const [tx, setTx] = useState(defaultTx);
    const [val, setVal] = useState("0")

    const endTime = Date.now() + 1231241241;
    const totalPool = 21312313.523

    const onChangeValue = (e: string) => {
        let newMess = tx.messages
        newMess[0].amount = e

        setTx({
            ...tx,
            messages: newMess
        })
    }

    useEffect(() => {
        onChangeValue(BigNumber(val).multipliedBy(1e9).toString())
    }, [val, wallet])

    const renderer = ({ days, hours, minutes, seconds }: any) => {
        // console.log({ hours, minutes, seconds, completed })
        return <>
            <div>
                <span className="color-white text-1">{days}</span>
                <span className="color-gray text-0">days</span>
            </div>
            <div>
                <span className="color-white text-1">{hours}</span>
                <span className="color-gray text-0">hours</span>
            </div>
            <div>
                <span className="color-white text-1">{minutes}</span>
                <span className="color-gray text-0">mins</span>
            </div>
            <div>
                <span className="color-white text-1">{seconds}</span>
                <span className="color-gray text-0">secs</span>
            </div>
        </>

    };

    const isWhitelist = useMemo(() => {
        if (wallet?.account.address) {
            return whitelist.list.includes(wallet.account.address)
        }
        return false
    }, [whitelist, wallet])

    return (
        <Wrap className='frame'>
            <span className="text-1 color-gray">Presale Ends In:</span>
            <div className="action-countdown">
                <Countdown
                    date={endTime}
                    renderer={renderer}
                    // autoStart
                    className="color-green"
                    key={Math.random() * 1000}
                />
            </div>
            <div className="action-pool">
                <div className="ap-road" ></div>
                <div className="ap-value">
                    <span className="color-gray text-12">{numeral(totalPool).format("0,0.[00]")}</span>
                    <span className="color-gray text-12">∞ TON</span>
                </div>
            </div>
            <span className="action-label text-1">Amount</span>
            <div className="action-input">
                <div className="ai-input">
                    <NumericFormat
                        value={val}
                        onValueChange={(val) => {
                            setVal(val.value)
                        }}
                        className='color-gray text-1'
                    />
                </div>
                <span className="text-1 color-green">Max</span>
            </div>
            <div className="action-bt">
                <Button text={wallet ? 'Confirm' : "Connect wallet"} typeBt='cyan' onClick={() => {
                    if (wallet) {
                        tonConnectUi.sendTransaction(tx).catch((err) => {
                            notifyToastify("error", "error")
                        })


                    } else {
                        try {
                            tonConnectUi.openModal()
                        } catch (error) {
                            notifyToastify("error", "error")
                        }

                    }
                }} />
            </div>
        </Wrap>
    );
}

export default Action;

const Wrap = styled.div`
    width: 100%;
    gap: 20px;
    .action-input {
        width: 100%;
        background: #000;
        border-radius: 6px;
        padding: 6px 12px;
        display: flex;
        align-items: center;
        gap: 16px;
        justify-content: space-between;
        .ai-input {
            flex: 1;
            display: flex;
            padding: 6px;
            > input {
                background: transparent;
                border: none;
                outline: none;
                width: 100%;
            }
        }
    }
    .action-bt {
        display: flex;
        width: 100%;
        > * {
            width: 100%;
        }
    }
    .action-countdown {
        width: 100%;
        display: flex;
        gap: 8px;
        > div {
            border: 1px solid #55555b;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            padding: 8px 0;
        }
    }
    .action-pool {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;
        .ap-road {
            width: 100%;
            border: 1px solid #000;
            border-radius: 10px;
            height: 10px;
            background: rgb(8, 187, 8);
        }
        .ap-value {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }
    }
`
