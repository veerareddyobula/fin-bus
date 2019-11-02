import React from 'react';
import styled from 'styled-components';

const MastHead = styled.header`
    position: relative;
    overflow: hidden;
    padding-top: calc(4rem + 72px);
    padding-bottom: 7rem;
    background-image: url(/img/bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export default () => {
    return (
        <MastHead>
            <div className="container text-light">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h1>Want To Be Better With Your Travels Business?</h1>
                        <p className="lead">
                        Simplify your money system with Fin-Bus. Fin-Bus makes Your Money Work For You
                        </p>
                        <div className="cta">
                            <a href="#/signIn" className="btn btn-lg btn-warning btn-icon icon-right">Travel In Fin-Bus For Free!</a>
                        </div>
                    </div>
                </div>
            </div>
        </MastHead>
    )
}