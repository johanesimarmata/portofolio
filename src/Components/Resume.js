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
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Now'} 
                        title={'Web Developer'}
                        subTitle={'Setya Homestay'}
                        text={'Developing and maintaining website using React JS and Django. Designing user interface and database for the website’s features. Responsible for the deployment of Front End and Back End'} 
                    />
                    <ResumeItem 
                        year={'2021 - Now'} 
                        title={'Software Engineer Intern'}
                        subTitle={'Payfazz - PT. Payfazz Teknologi Nusantara'}
                        text={'Do End-to-end testing for Front End and create the setup with Jest and Puppeteer. Fix and improve the performance of Front End features to an existing project with Ant Design and React JS'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Vice Person in Charge of E-Vote'}
                        subTitle={'PEMILIHAN RAYA (PEMIRA) – University of Indonesia'}
                        text={'Had a responsibility to create and maintain website during vote period. Implemented Single Sign On (SSO) - Central Authentication Service (CAS) with Django. Entered data into database to fulfill the voting mechanism and to fill in the candidate information for voting.'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Vice Person in Charge of Business Development'}
                        subTitle={'Pesta Rakyat Komputer, Fakultas Ilmu Komputer Universitas Indonesia'}
                        text={'Took full responsibility of Business Development with my person in charge and had a direct responsibility to the Manager of Finance and the Vice Project Officer of Pesta Rakyat Komputer. Worked in the Finance Division and had a responsibility to make and run work programs to earn money. Worked together with my Person in Charge to manage our staff and to collaborate with other divisions to run our work programs.'} 
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
                        text={'Last GPA: 3.53 out of 4.00'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2019'} 
                        title={'Senior High School'}
                        subTitle={'Senior High School 81 Jakarta'}
                        text={'Science with National Exam Score: 35.4 out of 40'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={file} title={'Licenses & Certifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021'} 
                        title={'Finalist of Innovative Technology Competition (INTENTION)'}
                        subTitle={'Informatics Festival 2021 by Padjadjaran University'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Fundamentals of Front-End Web Development'}
                        subTitle={'Dicoding'}
                        text={'Learn ES6 syntax, Web Components, and Build Tools in building websites with simple, reusable, and optimized techniques.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Cloud Practitioner Essentials'}
                        subTitle={'Dicoding'}
                        text={'Learn the basics of Cloud using AWS, from cloud computing concepts, to how to build a good architecture.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Creating a Front-End Web for beginners'}
                        subTitle={'Dicoding'}
                        text={'Learn more about JavaScript, DOM manipulation, and web storage to improve the functionality and interactivity of our website.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Foundations of Web Programming'}
                        subTitle={'Dicoding'}
                        text={'Learn of HTML, CSS, and JavaScript componenets as the main foundation of being a webstite developer.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'React Native Mobile App Development'}
                        subTitle={'Sanbercode'}
                        text={'Learn to make a mobile application. Using axios, context, hooks, and navigation for final project.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Vue JS - Web Front End Development'}
                        subTitle={'Sanbercode'}
                        text={'Learn to make website interface easier becuase of the advantages of Vue JS which are light, simple and flexible. The modules are HTML, CSS, Javascript, Axios to consume API, Vue Router, State Management using Vuex, Single Page App, Build and Deployment. Chosen as participant with the best final project.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'Data Analytics Competition'}
                        subTitle={'Find IT Gadjah Mada University'}
                        text={'Analyze and Predict Book Prices based on the features of the books and based on provided data.'} 
                    />
                    <ResumeItem 
                        year={'2021'} 
                        title={'React JS - Web Front End Development'}
                        subTitle={'Sanbercode'}
                        text={'Learn to build website more friendly which the modules are HTML, CSS, Javascript, EcmaScript 2015 (ES6), Single Page Application, Build and Deployment.'} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Python - Data Science'}
                        subTitle={'Sanbercode'}
                        text={'Learn to manipulate data and analyze data with Python, Basic Mathematical Logic, Real Data Manipulation, Data Visualization, Machine Learning Competition.'} 
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
                        year={'2014 - 2018'} 
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
