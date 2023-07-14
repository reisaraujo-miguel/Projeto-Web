import React from 'react'
import styled from 'styled-components'
import { BiSolidCheckCircle } from 'react-icons/bi'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 8% 8%;
  background-color: #ffffff;
  border-radius: 1rem;
`

const Text = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: green;
`

const PurchaseCompleted = () => {
    return (
        <MainContainer>
            <BiSolidCheckCircle size='14em' color='green' />
            <Text>FINISHED!</Text>
        </MainContainer>
    );
}

export default PurchaseCompleted;
