import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    width: 100%;
    padding: 7rem 0 14rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &#projects{
        margin-top: -7rem;
        @media screen and (min-width: 1000px){
            margin-top: 0;
        }
    }
`;

export const InsideContainer = styled.div`
    position: relative;
    height: 100%;
    min-height: 14vh;
    width: 100%;
    max-width: 116rem;
    padding: 0 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    align-items: center;
   &.projectsContainer {
        display: flex;
        flex-direction: column;
    }
`;

export const MainHeader = styled.h1`
    text-align: center;
    color: #f1f1f1;
    font-size: clamp(3rem, 9vw, 8rem);
    letter-spacing: 1rem;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: 'nomark';
    &.about{
        margin: 2rem 0 0 5rem;
    }
    &.contactHeader{
        margin-bottom: 3rem;
    }
`;

export const Button = styled.button`
    padding: 1rem 1.6rem;
    background: transparent;
    border: .2rem solid #9ef9ff;
    color: #9ef9ff;
    border-radius: .4rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 6rem;
    transition: .2s ease-out;
    &:hover {
        color: #FFF;
        border: .2rem solid #FFF;
    }
`;

export const LeftSide = styled.div`
    width: 40%;
    min-width: 28rem;
    height: 100%;
    min-height: 41vh;
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: .1rem solid #f1f1f1;
    margin-bottom: 7rem;
`;