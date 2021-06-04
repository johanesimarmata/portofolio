import React from 'react'
import styled from 'styled-components';
import photo from '../img/myphoto.jpg'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={photo} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Johanes Simarmata</span></h4>
                <p className="paragraph">
                    You can call me Johanes. Currently, I'm a Computer Science Sophomore at University of Indonesia.
                    I love to learn in developing a website and I have interest in Mobile Development too. 
                    I'm looking for a new experience from an internship or a group project.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Johanes Marihot Perkasa Simarmata</p>
                        <p>: 19</p>
                        <p>: English & Indonesia </p>
                        <p>: Jakarta, Indonesia</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1JXTpKbRlwbEc8Q512F-1hwvLffIq8AFI/view?usp=sharing"><PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
