import styled from 'styled-components';

export const FooterSection = styled.footer`
    height: 14rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InnerFooter = styled.div`
    width: 100%;
    height: 100%;
    max-width: 116rem;
    padding: 0rem 3rem 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-top: .1rem solid #f1f1f1;
`;

export const FooterP = styled.p`
    font-size: 1.4rem;
    letter-spacing: .1rem;
    font-family: 'cabinet-xlight';  
`;

export const SocialContainer = styled.div`
    height: 3rem;
    width: 22vh;
    display: flex;
    justify-content: space-around;
    align-items: center;    
`;

export const IconHolder = styled.div`
    height: 3rem;
    width: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    transition: .25s ease-out;
    &:hover {
        color:#9ef9ff;
    }
`;