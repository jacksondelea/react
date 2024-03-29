import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: 0.5px dashed black;
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
`
const Left = styled.div`
    width: 75%;
    text-align: left;
`

const Right = styled.div`
    width: 25%;
    text-align: right;
`
const TextDiv = styled.div`
    color: black;
`

const HomeCarousel = () => {
  return (
    <Container>
        <Left>
            <TextDiv>Contact:</TextDiv>       
            <TextDiv>jacksondelea@icloud.com</TextDiv>         
        </Left>
        <Right>
            <TextDiv></TextDiv>       
            <TextDiv></TextDiv>
        </Right>
    </Container>
  )
}

export default HomeCarousel