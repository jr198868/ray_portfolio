import React from 'react';
import './Languagesframeworks.css';
import styled from "styled-components";
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Mongodb from '../../assets/Mongodb.png';
import Anaconda from '../../assets/Anaconda.png';
import Bash from '../../assets/Bash.png';
import Flask from '../../assets/Flask.png';
import Javascript from '../../assets/js.png';
import Django from '../../assets/Django.png';
import NodeLogo from '../../assets/Node.png';
import Jupyter from '../../assets/Jupyter.png';
import Postgre from '../../assets/Postgre.png';
import ReactLogo from '../../assets/react.png';
import Rstudio from '../../assets/R.png';
import Python from '../../assets/Python.png';
import CherryPy from '../../assets/CherryPy.png';
import Github from '../../assets/Github.png';

class Language extends React.Component {
    render() {

        const Tag = styled.div`
           background-color: #fff;
            border: 1px solid #ebecec;
            border-radius: 6px;
            box-shadow: 0 1px 2px rgba(0,0,0,.1);
            margin: .5rem;
            box-sizing: border-box;
            text-align: center;
            width: 20%;
            min-width: 200px;
            :hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 25px rgba(0,0,0,.1);
                transition: all 200ms ease;
            }
        `;

        const Logo = styled.img`
            
            max-width: 80px;
            border-radius: 6px;
            height: 90px;
            width: autoo;
            line-height: 1.6;
            margin: 5px;
        `;

        const Title = styled.h3`
            padding-bottom: 7.5px;
            font-size: 22px;
        `;

        return (
            <Tag>
                <Logo src={this.props.src} alt={this.props.alt}/>
                <Title>{this.props.children}</Title>
            </Tag>
        )
    }
}



class Languagesframeworks extends React.Component {
    render() {

        const Section = styled.div`
            height: 100%;
            background-color: #F2F2F2;
        `;
            //background-color: rgb(178, 34, 34)

        const Container = styled.section`
            padding: 30px;
        `;

        const Title = styled.h1`
            color: #000000;
            background-color: #F2F2F2;
            text-align: center;
            padding: 20px;
            font-family: var(--font-family);
            font-weight: 800;
            font-size: 34px;
            line-height: 45px;
            margin: 0 0;
        `;
        //rgb(0, 34, 65)

        const LanguageSection = styled.div`
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
        `;

        
        return (
            <Section id="languagesframeworks" className="section">
                <Title>Languages & Frameworks</Title>
                <Container>
                    <LanguageSection>
                        <Language src={Html} alt="HTML">HTML</Language>
                        <Language src={Css} alt="CSS">CSS</Language>
                        <Language src={Javascript} alt="Javascript">Javascript</Language>
                        <Language src={Python} alt="Python">Python</Language>
                        <Language src={Bash} alt="Bash">Bash</Language>
                        <Language src={Rstudio} alt="R studio">R studio</Language>
                        <Language src={ReactLogo} alt="React">React</Language>
                        <Language src={CherryPy} alt="CherryPy">CherryPy</Language>
                        <Language src={Flask} alt="Flask">Flask</Language>
                        <Language src={NodeLogo} alt="Node">Node</Language>
                        <Language src={Jupyter} alt="Jupyter">JupyterLab</Language>
                        <Language src={Django} alt="Django">Django</Language>
                        <Language src={Mongodb} alt="Mongodb">Mongodb</Language>
                        <Language src={Github} alt="Github">Github</Language>
                        <Language src={Anaconda} alt="Anaconda">Anaconda</Language>
                        <Language src={Postgre} alt="Postgre">PostgreSQL</Language>
                    </LanguageSection>
                </Container>
            </Section>
        )
    }
}

export default Languagesframeworks