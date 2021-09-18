import { useState, useRef } from 'react';
import { Section, MainHeader, InsideContainer } from "../sharedStyling";
import {
    TextA,
    ContentContainer,
    ListContainer,
    TextContainer,
    Box,
    ImageWrapper,
    ImageContainer,
    RightSide,
    Img
} from './Projects.styling';
import { projectsData } from "./projectsData";
import gsap from 'gsap';
import zero from '../../assets/images/zero.jpg';

const Projects = () => {
    const [pictures, setPictures] = useState("");
    let imageWrapper = useRef(null);

    let tl = gsap.timeline();
    let tl2 = gsap.timeline();

    const onHover = (link) => {
        setPictures(link);
        tl.fromTo(imageWrapper, { x: "-100%" }, { x: "0", duration: 1 });
        tl2.to(".default", { x: "100%", display: "none", duration: .35 });

    }

    const noHover = (item) => {
        //  tl2.to(".overlay", { x: "0", duration: .1 })
    }

    return (
        <Section id="projects">
            <InsideContainer className="projectsContainer">
                <MainHeader>projects</MainHeader>
                <ContentContainer>
                    <ListContainer>
                        <TextContainer>
                            {projectsData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Box onMouseEnter={() => onHover(item)} onMouseLeave={() => noHover(item)}>
                                            <TextA href={item.path} target="_blank">{item.title}</TextA>
                                        </Box>
                                    </div>
                                )
                            })}
                        </TextContainer>
                    </ListContainer>
                    <RightSide>
                        <ImageWrapper>
                            <Img src={zero} className="default" />
                            <ImageContainer ref={el => (imageWrapper = el)}>
                                <Img src={pictures.image} />
                            </ImageContainer>
                        </ImageWrapper>
                    </RightSide>
                </ContentContainer>
            </InsideContainer>
        </Section>
    )
}

export default Projects