import { TypeAnimation } from 'react-type-animation';


function TypingComponent(){
    return (
        <TypeAnimation
            sequence={[
                'Welcome to Jeremiah\'s portfolio',
                1000,
                () => {
                console.log("Sequence completed")
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
            style={{display: 'block', fontFamily:''}}
            className="typingAnimation"
        /> 
    )
}


export default TypingComponent