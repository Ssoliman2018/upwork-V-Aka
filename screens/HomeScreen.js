import { View } from "react-native"
import { globalStyle } from "../assets/styles"
import Chessboard from "../components/Chessboard"

export default HomeScreen = () => {
    return ( 
        <View style={globalStyle.container}> 
            <Chessboard />
        </View>
    )
}