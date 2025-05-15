import { Text } from "react-native"

const CustomText = ({ color, fontSize, fontWeight, children }) => {
    return (
        <Text style={{ fontSize: fontSize ? fontSize : 16, color: color && color, fontWeight: fontWeight ? fontWeight: 600 }}>{children}</Text>
    )
}

export default CustomText