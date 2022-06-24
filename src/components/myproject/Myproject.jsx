import React from 'react'
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import ReactLogo from '../../assets/react.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Javascript from '../../assets/js.png';
import poker from '../../assets/2021poker.png';
import ray_portfolio from '../../assets/ray_portfolio.png';
import project3 from '../../assets/project3.png';
import chipotlepolka from '../../assets/chipotlepolka.png';
import Python from '../../assets/Python.png';
import pandas from '../../assets/pandas.png';
import Jupyter from '../../assets/Jupyter.png';
// import project4 from '../../assets/project4.png';
// import project5 from '../../assets/project5.png';
// import project6 from '../../assets/project6.png';

class Techstack extends React.Component {
    render() {

        const Tag = styled.div`
           
            border: 1px solid #ebecec;
            border-radius: 6px;
            
            margin: .5rem;
            box-sizing: border-box;
            text-align: center;
            width: 20%;
            :hover {
                transform: translateY(-1px);
                
                transition: all 200ms ease;
            }
        `;

        const Logo = styled.img`
            
            max-width: 40px;
            border-radius: 6px;
            height: 40px;
            width: 40px;
            line-height: 1.6;
            margin: 5px;
        `;

        const Title = styled.h3`
            padding-bottom: 7.5px;
            font-size: 12px;
        `;

        return (
            <Tag>
                <Logo src={this.props.src} alt={this.props.alt}/>
                <Title>{this.props.children}</Title>
            </Tag>
        )
    }
}



class MyProject extends React.Component {
    render() {

        const Card = styled.div`
            background-color: #E8E8E8;
            border: 1px solid #ebecec;
            border-radius: 6px;
            box-shadow: 0 1px 2px #5b6171;
            margin: 1.5rem;
            box-sizing: border-box;
            text-align: center;
            width: 30%;
            width: 400px;
            :hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 25px #5b6171;
                transition: all 200ms ease;
            }
        `;

        const Image = styled.img`
            padding: 10px 10px 0px 10px;
            border-radius: 6px;
            height: 230px;
            width: 400px;
            line-height: 1.6;

            @media (max-width: 800px) {
                max-width: 300px;
                min-width: 200px;
                
            }
        `;

        const Title = styled.h3`
            margin: 20px;
            font-size: 20px;
        `;

        return (
            <Card>
                <a href={this.props.href} target="_blank" rel="noopener noreferrer"><Image src={this.props.src} alt={this.props.alt} /></a>
                <Title>{this.props.children}</Title>
            </Card>
        )
    }
}

class Blog extends React.Component {
    render() {

        const Section = styled.div`
            background-color: #f2f2f2;
        `;

        const Container = styled.section`
            padding: 30px;
        `;

        const ProjectsName = styled.h1`
            color: #000000;
            text-align: center;
            padding: 20px;
        `;

        const MyProjectSection = styled.div`
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
        `;

        const ProjectParagraph = styled.p`
            color: #C750C0; 
            text-align: center;
            font-size: 1.5rem;
            margin: 0 auto;
            padding-top: 20px;
            a {
                text-decoration: underline;
                color: #6699ff;
                :hover {
                    color: white;
                    text-decoration: none;
                }
            }
        `;
        
        return (
            <Section id="projects" className="section">
                <ProjectsName>My Projects</ProjectsName>
                <Container>
                    <MyProjectSection>
                        <MyProject src={poker} href = "https://jr198868.github.io/2021_christmas_poker/" alt="poker">
                            2021 Christmas Poker
                            <p style = {{fontSize :'12px'}}>A romantic project for Wency Lee</p>
                                <div className = 'Techstack__container' style = {{display: 'flex'}}>
                                    <Techstack src={ReactLogo} alt="HTML">ReactJS</Techstack>
                                    <Techstack src={Html} alt="HTML">HTML</Techstack>
                                    <Techstack src={Css} alt="HTML">CSS</Techstack>
                                    <Techstack src={Javascript} alt="HTML">Javascript</Techstack>
                                </div>
                        </MyProject>

                        <MyProject src={ray_portfolio} href = "" alt="project2">project2
                                <div className = 'Techstack__container' style = {{display: 'flex'}}>
                                    <Techstack src={ReactLogo} alt="HTML">ReactJS</Techstack>
                                    <Techstack src={Html} alt="HTML">HTML</Techstack>
                                    <Techstack src={Css} alt="HTML">CSS</Techstack>
                                    <Techstack src={Javascript} alt="HTML">Javascript</Techstack>
                                </div>
                        </MyProject>

                        <MyProject src={project3} href = "" alt="project3">project3</MyProject>

                        <MyProject src={chipotlepolka} href = "https://github.com/jr198868/chipotlepolka" alt="chipotlepolka">
                            chipotlepolka
                            <p style = {{fontSize :'12px'}}>A python library for data science</p>
                                <div className = 'Techstack__container' style = {{display: 'flex'}}>
                                    <Techstack src={Python} alt="Python">Python</Techstack>
                                    <Techstack src={pandas} alt="pandas">pandas</Techstack>
                                    <Techstack src={Jupyter} alt="Jupyter">JupyterLab</Techstack>
                                </div>
                            
                        </MyProject>
                        {/* <MyProject src={project5} href="" alt="project5">project5</MyProject>
                        <MyProject src={project6} href="" alt="project6">project6</MyProject> */}
                      
                    </MyProjectSection>
                    <ProjectParagraph>
                        <a href="https://github.com/jr198868" target="_blank" rel="noopener noreferrer">
                            See More Projects
                        </a> 
                    </ProjectParagraph>
                </Container>
            </Section>
        )
    }
}

export default Blog





