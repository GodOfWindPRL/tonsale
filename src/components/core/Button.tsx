import { breakpointsMedias } from 'configs/breakpoints'
import configColor from 'configs/configColor'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

interface IB extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    typeBt?: "blue" | "cyan",
    className?: string,
    disabled?: boolean,
}

const Button = ({ text, typeBt = "blue", className, disabled = false, ...props }: IB) => {
    const { t } = useTranslation()
    return (
        <Wrap className={`bt-${typeBt} ${className}`} disabled={disabled} {...props}>
                <span className={`text-2 text-center color-white`}>
                    {t(text)}
                </span>
        </Wrap>
    )
}
export default Button

const Wrap = styled.button`
    /* max-width: 100%; */
    width: 100%;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    border-radius: 10px;
    padding: 0 20px;
    transition: 0.3s ease-in-out;
    &.bt-blue {
        background-color: #262262;
        span {
            font-family: "Kanit-Semibold";
        }
    }
    &.bt-cyan {
        background-color: #0197EC;
    }
    &:hover {
        &.bt-blue {
            background-color: #1423af;
        }
        &.bt-cyan {
            background-color: #0556ac;
        }
    }
    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
    }
    &.bt-loading {
        opacity: 0.4;
        cursor: not-allowed;
        :hover {

        }
    }
    ${breakpointsMedias.max1199} {
       
    }
`