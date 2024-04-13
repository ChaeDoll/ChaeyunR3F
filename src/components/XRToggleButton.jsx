import { Box, Text } from "@react-three/drei";
import { createPortal, useFrame, useThree } from "@react-three/fiber";
import { Interactive, toggleSession, useXR } from "@react-three/xr";
import { useRef } from "react";

const ExitButton = (props) => {
    const {session, isPresenting} = useXR();
    const boxRef = useRef();
    const handleClick = async () => {
        toggleSession();
    }
    useFrame((state, delta)=>{
    })
    return (<>
    <Interactive onSelect={handleClick}>
        <Box ref={boxRef} {...props} args={[0.4,0.1,0.01]} visible={isPresenting?true:false}>
            <meshStandardMaterial color={0xffffff}/>
            <Text position={[0, 0, 0.01]} fontSize={0.03} color="#000" anchorX="center" anchorY="middle">
                {session ? "Exit ARAR" : "Enter ARAR"}
            </Text>
        </Box>
    </Interactive>
    </>)
}

const XRToggleButton = () => {
    const camera = useThree((state) => state.camera);
    return createPortal(<ExitButton position={[-0.2, 0.8, -1]}/>, camera);
}
export default XRToggleButton;