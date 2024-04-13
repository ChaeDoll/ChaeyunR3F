import { Box, Text } from "@react-three/drei";
import { createPortal, useThree } from "@react-three/fiber";
import { toggleSession, useInteraction, useXR } from "@react-three/xr";
import { useRef, useState } from "react";

const ExitButton = (props) => {
    const {session} = useXR();
    const [buttonText, setButtonText] = useState("Enter ARAR");
    const boxRef = useRef();
    const handleClick = async () => {
        const session = await toggleSession('immersive-ar');
        if (session) {
            setButtonText("Exit ARAR");
        } else {
            setButtonText("Enter ARAR");
        }
    }
    useInteraction(boxRef, 'onSelect', handleClick)
    return (<>
        <Box ref={boxRef} {...props} args={[0.4,0.1,0.01]}>
            <meshStandardMaterial color={0xffffff}/>
            <Text position={[0, 0, 0.01]} fontSize={0.03} color="#000" anchorX="center" anchorY="middle">
                {buttonText}
            </Text>
            {/* <button onClick={handleClick}>{buttonText}</button> */}

        </Box>
    </>)
}

const XRToggleButton = () => {
    const camera = useThree((state) => state.camera);
    return createPortal(<ExitButton position={[-0.2, 0.8, -1]}/>, camera);
}
export default XRToggleButton;