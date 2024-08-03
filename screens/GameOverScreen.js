import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native'; // Add Text import
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/end.jpg')} 
                    style={styles.image} 
                    resizeMode="cover" 
                />
            </View>
            <Text style={styles.summaryText}>
                Your Phone needed<Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess the number{' '}
                <Text style={styles.highlight}> {userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 200,
        borderWidth: 5,
        borderColor: '#3b021f',
        overflow: 'hidden',
        margin: 66,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        color: 'white',
    },
    highlight: {
        color: 'yellow',
    }
});
