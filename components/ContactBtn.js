import React, { useRef } from 'react'
import { Button } from './pages/sharedStyling';

const ContactBtn = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log("click from contactBtn")
        window.scrollTo({
            top: inputRef.current.offsetTop * 100
        })
    }

    return (
        <>
            <Button ref={inputRef} onClick={handleClick}>
                contact
            </Button>
        </>
    )
}

export default ContactBtn
