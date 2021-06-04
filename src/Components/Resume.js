import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    const file = <InsertDriveFileIcon />
    const additional = <AddToQueueIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Organization Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - Now'} 
                        title={'Vice Person in Charge of Business Development'}
                        subTitle={'Pesta Rakyat Komputer, Fakultas Ilmu Komputer Universitas Indonesia'}
                        text={'Had a responsible to run work programs to earn money during pandemics and assist Pesta Rakyat Computer in Finance Division. Work as a group with my PIC to manage our staffs and collaborate with other divisions to run our work programs.'} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Staff of Food and Beverages'}
                        subTitle={'COMPFEST'}
                        text={'Because some unpredicted conditions, I helped to find lots of interesting speakers for COMPFEST Talks who have many experiences to build a sustainable start-up.'} 
                    />
                    <ResumeItem 
                        year={'2019 - 2020'} 
                        title={'Staff of Equipment'}
                        subTitle={'Computer Science Faculty Graduation Ceremony at University of Indonesia'}
                        text={'Helped the leader to produce ID card for all the committees, assist for some technical issues and collaborate with visual design division.'} 
                    />
                    <ResumeItem 
                        year={'2019'} 
                        title={'Staff of Production'}
                        subTitle={'Olympics at University of Indonesia'}
                        text={'Had a responsible to produce medals for winners and support leaders in carrying out their obligations. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - Now'} 
                        title={'Computer Science'}
                        subTitle={'University of Indonesia'}
                        text={'Last GPA: 3.43 out of 4.00'} 
                    />
                    <ResumeItem 
                        year={'2016-2019'} 
                        title={'Senior High School'}
                        subTitle={'Senior High School 81 Jakarta'}
                        text={'Majoring in Natural Science with National Exam Score: 35.4 out of 40'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={file} title={'Licenses & Certifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021'} 
                        title={'React JS - Web Front End Development'}
                        subTitle={'Sanbercode'}
                        text={'Learn to build website more friendly which the modules are html, css, javascript programming, ecmascript 2015 (ES6), single page application, build and deployment'} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Python - Data Science'}
                        subTitle={'Sanbercode'}
                        text={'Learn to manipulate data and analyze data with python programming, basic mathematical logic, real data manipulation, data visualization, machine learning competition.'} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Problem Solving (Basic)'}
                        subTitle={'HackerRank'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Java (Basic)'}
                        subTitle={'HackerRank'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Python (Basic)'}
                        subTitle={'HackerRank'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2014-2018'} 
                        title={'English for Intermediate'}
                        subTitle={'Lembaga Indonesia Amerika (LBPP LIA)'}
                        text={''} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={additional} title={'Additional Courses'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - Now'} 
                        title={'Full-Stack JavaScript Developer'}
                        subTitle={'Build With Angga'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2020 - Now'} 
                        title={'English Course'}
                        subTitle={'Wall Street English'}
                        text={''} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
