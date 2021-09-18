import styled from 'styled-components';

export const LeftSide = styled.div`
    width: 40%;
    min-width: 28rem;
    height: 100%;
    min-height: 41vh;
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: none;
    @media screen and (min-width: 1070px){
            border-right: .1rem solid #f1f1f1;
        }
`;

export const RightSide = styled.div`
    position: relative;
    width: 60%;
    min-width: 28rem;
    height: 100%;
    min-height: 41vh;
    padding: 3rem 0 3rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
`;

export const Form = styled.form`
    width: 100%;
    margin-top: 5rem;
    display: flex;
`;

export const ContactP = styled.p`
    font-size: 1.2rem;
    letter-spacing: .3rem;
    color: rgba(200,200,200,1);
    text-transform: capitalize;
    font-family: 'cabinet-xlight';
`;
export const CheckP = styled.p`
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: capitalize;
    margin-left: 1rem;
`;

export const Input = styled.input`
    font-size: 1.4rem;
    margin-bottom: 3rem;
    letter-spacing: .1rem;
    outline: none;
    border: none;
    border-bottom: .1rem solid #f1f1f1;
    background: transparent;
    color: #f1f1f1;
    padding: 1rem 0 .5rem .5rem;
    width: 100%;
`;

export const Checkbox = styled.div`
    margin-top: .5rem;
    display: flex;
`;

export const TextArea = styled.textarea`
    height: 100%;
    width: 100%;
    margin-top: 2rem;
    min-height: 20rem;
    background: transparent;
    color: #f1f1f1;
    letter-spacing: .2rem;
    font-family: 'cabinet-l';
    border: none;
    outline: none;
`;

export const SendButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: #9ef9ff;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #000;
    letter-spacing: .3rem;
    padding: 1.4rem 0;
    transition: .3s ease-out;
    cursor: pointer;
    &:hover{
        background: #ffffff;
        letter-spacing: .5rem;
    }
`;