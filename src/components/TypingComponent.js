import { TypeAnimation } from 'react-type-animation';


function TypingComponent(){
    return (
        
        <div>
        <TypeAnimation
            sequence={[
                'Jeremiah Soe',
                1000,
                () => {
                console.log("Sequence completed")
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{color: 'black', fontSize:'2em'}}
        /> 
        </div>
        
        
    )
}


export default TypingComponent