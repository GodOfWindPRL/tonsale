import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import { useState } from 'react';
import { breakpointsMedias } from '../configs/breakpoints';
import { useTranslation } from 'react-i18next';
import { TonConnectButton } from "@tonconnect/ui-react";
import { Link } from 'react-router-dom';

function Header() {
    const { t } = useTranslation()

    const menu = [{
        href: "/launch",
        text: "launch"
    }, {
        href: "/sale",
        text: "sale"
    }]

    return (
        <Wrap >
            <div className="container">
                <div className="header-wrap">
                    <a href='#banner' className="logo" >
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </a>
                    <div className="menu-list">
                        {menu.map((item, index) => <Link key={index} to={item.href} className="menu-item ">
                            <span className="text-2 color-white">{t(item.text)}</span>
                        </Link>)}
                    </div>
                    <TonConnectButton />
                </div>
            </div>
        </Wrap>
    );
}

export default Header;

const Wrap = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 2;
    height: 86px;
    transition: 1s ease-in-out;
    background-color: #2E2E33;
    box-shadow: 2px 5px 5px #00000046;
    .container {
        max-width: unset;
        .header-wrap {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .menu-list {
                display: flex;
                align-items: center;
                .menu-item {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    justify-content: center;
                    position: relative;
                    padding: 0 40px;
                    > span {
                        text-transform: uppercase;
                    }
                    &::before {
                        content: "";
                        position: absolute;
                        bottom: -10px;
                        width: 0;
                        left: 50%;
                        height: 3px;
                        transition: 0.5s ease-in-out;
                        transform: translateX(-50%);
                        background-color: white;
                    }
                    &:hover {
                        &::before {
                            color: #5EB5F7;
                            width: calc(100% - 80px);
                        }
                    }
                }
            }
            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                > div {
                    width: 155px;
                    display: flex;
                    height: fit-content;
                    > img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }
    }
    ${breakpointsMedias.max1199} {
        padding: 20px 0;
        height: 70px;
        .container {
            .header-wrap {
                .menu-list {
                    .menu-item {
                        padding: 0 20px;
                    }
                }
                .logo {
                    gap: 12px;
                    > div {
                        width: 100px;
                    }
                    > span {
                        font-size: 24px;
                        ${breakpointsMedias.max991} {
                            display: none;
                        }
                    }
                }
            }
        }
    }
    ${breakpointsMedias.max767} {
        .container {
            .header-wrap {
                .logo {
                    margin-right: auto;
                }
                .menu-bt {
                    display: flex;
                    margin-left: 20px;
                    width: 50px;
                    height: 50px;
                    border: 1px solid #FFF;
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 3px;
                    cursor: pointer;
                    > div {
                        background-color: #FFF;
                        border-radius: 5px;
                        width: 18px;
                        height: 2px;
                    }
                }
            }
        }
    }
`
