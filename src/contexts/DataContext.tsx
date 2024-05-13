import { ReactNode, createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgProject from 'assets/images/x.jpg';
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

interface IProps {
    children: ReactNode;
}

export type ContactItem = {
    icon: any, link: string
}

const listContact = [{
    icon: <FaTelegramPlane color='#fff' size={20} />,
    link: "LINK_TELE",
}, {
    icon: <BsTwitterX color="#fff" size={16} />,
    link: "LINK_TWITTER",
}] as ContactItem[]

export type DataStatis = {
    name: string,
    startTime: number,
    endTime: number,
    claimTime: number,
    listContact: ContactItem[],
    img: string,
    desc: string,
    presaleAddress: string,
    tokenName: string,
    tokenSymbol: string,
    tokenDecimal: 9,
    tokenAddress: string,
    totalSupply: number,
    tokenForPresale: number,
    tokenForLiqquid: number,
    initMarketCap: number,
    softCap: number,
    limitPerUser: null | number,
    listingOn: string,
    listingLink: string,
    liquidPercent: number
}

const initData = {
    name: "QuYeN kEc Kec Fairy",
    startTime: Date.now() - 123124,
    endTime: Date.now() + 546688,
    claimTime: Date.now() + 5346688,
    listContact: listContact,
    img: imgProject,
    desc: "$TIGER is a first meme token with real utility from Pixel God. Its main use is in a game where you can loot crypto. Made by Pixel God - founder of the hit NFT collections TON Sharks, Funny Snails, VIP Viking Club and Pixel Genesis.",
    presaleAddress: "EQAoe-73cbZIUzZMNq3ELs_e2ct6PMEzy3t_YN6-vtP1IDT8",
    tokenName: "QuYeN kEc Kec",
    tokenSymbol: "QKK",
    tokenDecimal: 9,
    tokenAddress: "EQCktEmAsvYBn8DPS6lu4QfatjEJJRLwD94aDqb8Ss6etuaA",
    totalSupply: 5000000000,
    tokenForPresale: 2000000000,
    tokenForLiqquid: 1600000000,
    initMarketCap: 134600.4553,
    softCap: 1000,
    limitPerUser: null,
    listingOn: "STON.fi",
    listingLink: "STON.fi",
    liquidPercent: 51
} as DataStatis

const DataContext = createContext({
    data: initData as DataStatis
})

const DataContextWrap = ({ children }: IProps) => {
    let { id } = useParams();
    const [data, setData] = useState<DataStatis>(initData)

    useEffect(() => {
        if (id) {
            getData(id)
        }
    }, [id])

    const getData = (e: string) => {

    }

    return (<DataContext.Provider value={{ data: data }}>
        {children}
    </DataContext.Provider>)
}

export default DataContextWrap;

export { DataContext };