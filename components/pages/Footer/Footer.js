import { FaLinkedin, FaGithubSquare, FaCodepen } from "react-icons/fa";
import { FooterSection, InnerFooter, FooterP, SocialContainer, IconHolder } from './Footer.styling';

const Footer = () => {
    return (
        <FooterSection>
            <InnerFooter>
                <FooterP>Joakim Wretlind</FooterP>
                <SocialContainer>
                    <IconHolder><FaGithubSquare /></IconHolder>
                    <IconHolder><FaCodepen /></IconHolder>
                    <IconHolder><FaLinkedin /></IconHolder>
                </SocialContainer>
                <FooterP>2021</FooterP>
            </InnerFooter>
        </FooterSection>
    )
}

export default Footer
