import styled from 'styled-components';
import imgProject from 'assets/images/x.jpg';
import { listContact } from 'components/Footer';
import numeral from 'numeral';

const CashBack = () => {
    const amount = 324234.353

    return (
        <Wrap className='frame'>
            <span className="text-2 color-gray">Your Cashback</span>
            <span className="text-2">{numeral(amount).format("0,0.[00]")} TON</span>
        </Wrap>
    );
}

export default CashBack;

const Wrap = styled.div`
    width: 100%;
    gap: 10px;
    background: linear-gradient(89.09deg,rgba(89,33,186,.3) 1.56%,rgba(24,121,254,.3) 99.22%);
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
`
