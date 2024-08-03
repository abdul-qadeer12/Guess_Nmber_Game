import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#ddb52f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 24,
        padding: 24,
    },
    numberText: {
        color: '#ddb52f',
        fontSize: 36,
    },
});
