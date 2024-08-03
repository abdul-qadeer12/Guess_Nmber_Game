import { Text, View, Pressable, StyleSheet } from "react-native";


function PrimaryButton({ children ,onPress}) {
    function pressHandler() {
        onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={styles.buttonInnerContainer} 
                onPress={onPress}  
                android_ripple={{ color: '#640233' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 24, 
        overflow: 'hidden' 
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16, 
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});
