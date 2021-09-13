import React from 'react'
import styled from 'styled-components';

function ResumeItem({year, title, subTitle, text}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    &:not(:last-child){
        padding-bottom: 3rem;
    }

    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }

    .left-content{
        width:25%;
        &::before{
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }

    .right-content{
        width: 75%;

        p{
            text-align: justify;
        }

        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .3rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`
export default ResumeItem;
