import styled from 'styled-components';
import imgProject from 'assets/images/x.jpg';
import { listContact } from 'components/Footer';

const Statistic = () => {
    const time = 324234

    return (
        <Wrap className='frame'>
            <div className="statis-title">
                <div className="st-img">
                    <img src={imgProject} alt="" />
                </div>
                <div className="st-text">
                    <div className="stt-name">
                        <span className="text-3 color-white">QuYeN kEc Kec</span>
                        <div className="">
                            <div></div>
                            <span className="text-1 color-green">Sale Live</span>
                        </div>
                    </div>

                    <div className="st-socials">
                        {listContact.map((item, index) => <a key={index} href={item.link} target='_blank' rel='noreferrer' className='sts-item' style={{ backgroundColor: item.bg }}>
                            {item.icon}
                        </a>)}
                    </div>
                </div>
            </div>
            <span className="text-2 color-gray">$TIGER is a first meme token with real utility from Pixel God. Its main use is in a game where you can loot crypto. Made by Pixel God - founder of the hit NFT collections TON Sharks, Funny Snails, VIP Viking Club and Pixel Genesis.</span>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
            </div>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
            </div>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
            </div>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
            </div>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
            </div>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
            </div>
            <div className="statis-row">
                <span className="text-2 color-gray">Presale Address</span>
                <span className="text-2 color-green">EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8</span>
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
        .st-img {
            > img {
                width: 100px;
                height: 100px;
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
                > div {
                    padding: 10px 16px;
                    background: #039f2f41;
                    border-radius: 20px;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    > div {
                        background: #05e44441;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                    }
                }
            }
            .st-socials {
                display: flex;
                gap: 20px;
                .sts-item {
                    width: 40px;
                    height: 40px;
                    border-radius: 6px;
                    display: flex;
                    background: #2E2E33;
                    align-items: center;
                    justify-content: center;
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
    }
`
