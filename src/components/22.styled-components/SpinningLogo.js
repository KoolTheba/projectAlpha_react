import React from 'react'
import styled, {keyframes} from 'styled-components'
import logo from '../../images/logo.jpg'

const SpinningLogo = () => {

    const StyledLogo = styled.img`
        width: 100px;
        heigth: 250px;
        border-radius: 10%;
    `;

    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;

    const Rotate = styled.div`
        display: inline-block;
        animation: ${rotate} 12s linear infinite;
        padding: 2rem 1rem;
        font-size: 1.2rem;
    `;

    return(
        <>
        <Rotate>
            <div>
                <StyledLogo src={logo} alt='logo' />
            </div>
        </Rotate>
        </>
    )
}

export default SpinningLogo
