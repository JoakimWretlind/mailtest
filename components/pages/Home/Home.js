import { useEffect, useRef } from 'react';
import {
    HomeSection,
    ContentContainer,
    HomeHeader,
    WorkTitle,
    HomeStatement,
    ImageContainer,
    HomeImage
} from './Home.styling';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import selfie from '../../assets/images/selfie1.png';
import ContactBtn from '../../ContactBtn';

gsap.registerPlugin(TextPlugin);

const Home = () => {
    const imageRef = useRef(null);
    const workRef = useRef(null);
    const statementRef = useRef(null);
    const headOne = useRef(null);
    const headTwo = useRef(null);
    const headThree = useRef(null);
    const headFour = useRef(null);
    const contactRef = useRef(null);

    const tl = gsap.timeline();

    useEffect(() => {
        tl.fromTo(statementRef.current, 2, { scale: 1.4, x: 11, y: "-3rem" },
            { scale: 1, x: 0, y: 0, text: "defying normal since the 70's" }, "+=1.5")
        tl.fromTo(headOne.current, 2, { y: "6rem" }, { y: 0 }, "1.6");
        tl.fromTo(headTwo.current, 1.7, { opacity: 0 }, { opacity: .5 }, "-=.9");
        tl.fromTo(headThree.current, 1.7, { opacity: 0 }, { opacity: .3 }, "-=2.4");
        tl.fromTo(headFour.current, 1.7, { opacity: 0 }, { opacity: .1 }, "-=3");
        tl.fromTo(imageRef.current, 2.5, { opacity: 0 }, { opacity: 1 }, "-=2");
        tl.fromTo(contactRef.current, 2, { rotationX: -90 }, {
            perspective: 800,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            rotationX: 0,
            ease: "power2.out"
        }, "-=2.2");
        tl.fromTo(workRef.current, 2, { rotationX: -90 }, {
            perspective: 800,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            rotationX: 0,
            ease: "power2.out"
        }, "-=2.2");

    }, [tl])



    // defying normal since the 70's

    return (
        <HomeSection id="#home">
            <ImageContainer ref={imageRef}>
                <HomeImage src={selfie} />
            </ImageContainer>
            <ContentContainer>
                <HomeHeader className="headOne" ref={headOne}>
                    joakim wretlind
                </HomeHeader>
                <HomeHeader className="HeaderOutline" ref={headTwo}>
                    joakim wretlind
                </HomeHeader>
                <HomeHeader className="HeaderOutline" ref={headThree}>
                    joakim wretlind
                </HomeHeader>
                <HomeHeader className="HeaderOutline" ref={headFour}>
                    joakim wretlind
                </HomeHeader>
                <WorkTitle ref={workRef}>
                    web-devloper
                </WorkTitle>
                <HomeStatement ref={statementRef}>
                    welcome
                </HomeStatement>
                <ContactBtn>
                    contact
                </ContactBtn>
            </ContentContainer>
        </HomeSection>
    )
}

export default Home