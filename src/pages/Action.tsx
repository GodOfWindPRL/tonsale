import styled from 'styled-components';
import imgProject from 'assets/images/x.jpg';
import { listContact } from 'components/Footer';
import numeral from 'numeral';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import Button from 'components/core/Button';

const Action = () => {
    const amount = 324234.353
    const [value, setValue] = useState("0")

    return (
        <Wrap className='frame'>
            <span className="action-label text-2">Amount</span>
            <div className="action-input">
                <div className="ai-input">
                    <NumericFormat
                        value={value}
                        onValueChange={(val) => {
                            setValue(val.value)
                        }}
                        className='color-gray text-2'
                    />
                </div>
                <span className="text-2 color-green">Max</span>
            </div>
            <div className="action-bt">
                <TonConnectButton />
                <Button text='Confirm' typeBt='cyan' />
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
`
