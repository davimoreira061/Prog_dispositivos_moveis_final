import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

const HomeScreen = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>HomeScreen</Text>

            <Card>
                <Card.Content>
                    <Title>Um Título Qualquer</Title>
                    <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, cumque totam dicta repellendus beatae laborum eaque incidunt atque nesciunt hic! Sit, doloremque ipsum eum error unde repellat ab maiores. Quas?</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri : 'https://picsum.photos/700'}}/>
            </Card>
            <Card>
                <Card.Content>
                    <Title>Um Título Qualquer</Title>
                    <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, cumque totam dicta repellendus beatae laborum eaque incidunt atque nesciunt hic! Sit, doloremque ipsum eum error unde repellat ab maiores. Quas?</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri : 'https://picsum.photos/700'}}/>
            </Card>
            <Card>
                <Card.Content>
                    <Title>Um Título Qualquer</Title>
                    <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, cumque totam dicta repellendus beatae laborum eaque incidunt atque nesciunt hic! Sit, doloremque ipsum eum error unde repellat ab maiores. Quas?</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri : 'https://picsum.photos/700'}}/>
            </Card>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        alignItems: 'center',
        paddingTop: 16
    }
})

export default HomeScreen