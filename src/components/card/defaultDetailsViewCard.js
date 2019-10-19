import React from 'react';
import styled from 'styled-components';

const MastHead = styled.header`
    position: relative;
    overflow: hidden;
    padding-top: calc(4rem + 72px);
    padding-bottom: 7rem;
    background:  ${props => `linear-gradient(0deg,${props.colorOne} 0,${props.colorTwo} 100%)`};
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
`

const WantBetterYourTravelBusiness = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Catamaran&display=swap');
    font-family: 'Roboto Slab', serif;
    font-size: 32px;
    text-align:center;
`

const SimplifyYourMoneySystem = styled.h4`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    text-align:center;
    
`

const FinBusMakesYourMoneyWorkForYou = styled.h4`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    text-align:center;
    
`

const SignInForFree = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

export default () => {
    return (
        <MastHead colorOne="#fdfbfb" colorTwo="#ebedee" >
            <div className="container">
                <WantBetterYourTravelBusiness>Want To Be Better With Your Travels Business?</WantBetterYourTravelBusiness>
                <SimplifyYourMoneySystem>Simplify your money system... with Fin-Bus</SimplifyYourMoneySystem> 
                <FinBusMakesYourMoneyWorkForYou>...Fin-Bus makes Your Money Work For You</FinBusMakesYourMoneyWorkForYou>
                <SignInForFree>
                    <a href="#/signIn" className="btn btn-success col-md-4 col-12">Travel In Fin-Bus For Free!</a>
                </SignInForFree>
            </div>
        </MastHead>
    )
}