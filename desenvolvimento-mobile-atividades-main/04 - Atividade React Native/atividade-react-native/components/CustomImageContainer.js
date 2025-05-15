import { Image } from 'react-native'

const CustomImageContainer = (url, dimension) => {
    return (
        <Image
      source={require('../assets/Turing-3.jpg')}
      style={{
        width: dimension ? dimension : 250,
        height: dimension ? dimension : 250
      }}
      />
    )
}

export default CustomImageContainer