import React from 'react'
import styled from 'styled-components'

const Buttons = () => {
    const ButtonStyle = styled.button`
        font-size: 0.8em;
        text-align: center;
        color: grey;
        margin-right: 0.3em;
        padding: 0.25em 0.8em;
        cursor: pointer;
        border-radius: 5%;
    `;

    const Wrapper = styled.section`
        display: grid;
        margin: 0 auto;
        width: 70%;
        grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
    `;

    const SuccessButton = styled(ButtonStyle)`
        color: green;
        border-color: green;
    `;

    const WarningButton = styled(ButtonStyle)`
        color: orange;
        border-color: orange;
    `;

    const ErrorButton = styled(ButtonStyle)`
        color: red;
        border-color: red;
    `;

    const InfoButton = styled(ButtonStyle)`
        color: blue;
        border-color: blue;
    `;

    return(
        <>
        <Wrapper>
            <ButtonStyle>Default</ButtonStyle>
            <SuccessButton>Success</SuccessButton>
            <WarningButton>Warning</WarningButton>
            <ErrorButton>Error</ErrorButton>
            <InfoButton>Info</InfoButton>
        </Wrapper>
        </>
    )
}

export default Buttons