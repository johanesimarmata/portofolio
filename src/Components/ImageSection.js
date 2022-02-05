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
                <h4>I am <span>Johanes</span></h4>
                <p className="paragraph">
                 Currently, I'm a Penultimate Computer Science Student at University of Indonesia. Besides of being a Computer Science Student, I am currently doing an internship as Software Engineer at PT. Payfazz Teknologi Nusantara. I have a big interest in Information and Technology sector especially in the field of Website/Mobile developer. As a student, I actively participated in several organizations to improve my skill to work as a team. I took full responsibility for those organizations with also staying focus on college. Therefore, I'm looking for an opportunity to be able to contribute further in Information and Technology Industry to apply my knowledge and interest in this sector.


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
                        <p>: 20</p>
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
            text-align: justify;
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
