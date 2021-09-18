import { useRef } from 'react';
import { gsap } from 'gsap';
import { Section, MainHeader, InsideContainer } from "../sharedStyling";
import {
    QuoteContainer,
    Quote,
    TextContainer,
    SmallP,
    TextP,
    Tech,
    ImageContainer,
    ImageHolder,
    Image,
    ImageText,
    IconHolderStart,
    IconHolderEnd
} from './About.styling';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { aboutData } from "./aboutData";

const About = () => {
    const imgRefs = useRef(null);

    const onHover = (index) => {
        let targets = index.target;
        gsap.to(targets, { y: -100 });
    }

    const noHover = (index) => {
        let isHovering = index.target;
        console.log(isHovering)
        let targets = index.target;
        gsap.to(targets, { y: 0, delay: .75 });
    }

    return (
        <Section id="about">
            <InsideContainer className="aboutContainer">
                <MainHeader>About me</MainHeader>
                <TextContainer>
                    <TextP>
                        My name is Joakim Wretlind, and I’m a devoted father and a front-end developer. In my life, I’ve done a whole lot of things, but since 2018 I’ve been hooked on coding and making things look good on the screen. I really enjoy the challenge of putting the visuals I come up with, to clean, reusable and fast code.
                    </TextP>
                    <QuoteContainer>
                        <IconHolderStart>
                            <FaQuoteLeft />
                        </IconHolderStart>
                        <Quote className="about">Work accordingly</Quote>
                        <SmallP>Use your main resources to reach your goals.</SmallP>
                        <SmallP className="aboutQuote">Joakim Wretlind</SmallP>
                        <IconHolderEnd className="endQuote">
                            <FaQuoteRight />
                        </IconHolderEnd>
                    </QuoteContainer>
                    <TextP>
                        I’ve always been the creative kind, and even if I like coding and designing, I also like building on my motorcycle and in my younger years, I also worked a lot as a DJ, where I really liked to make my own remixes and versions of songs.
                        Currently, I’m baking with React, Styled-Components, Typescript, and Jest as the bottom and the glace. Then I sprinkle some animations on top of it with Gsap, Framer motion, and SVG’s.
                    </TextP>
                </TextContainer>
                <Tech>Current Tech-Stack</Tech>
                <ImageContainer>
                    {aboutData.map((item, index) => (
                        <div key={index}>
                            <ImageHolder key={index}>
                                <Image src={item.image2} style={{ position: "absolute", zIndex: -1 }} ref={imgRefs} />
                                <Image src={item.image} onMouseOver={(index) => { onHover(index) }} onMouseLeave={(index) => { noHover(index) }} />
                                <ImageText>{item.title}</ImageText>
                            </ImageHolder>
                        </div>
                    ))}
                </ImageContainer>
            </InsideContainer>
        </Section>
    )
}

export default About