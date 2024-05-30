import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const PinKeyboardFunc = ({ onKeyPress }) => {
    const keys = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["0", "C"]
    ];

    return (
        <View style={styles.container}>
            {keys.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((key, keyIndex) => (
                        <TouchableOpacity
                            key={keyIndex}
                            style={styles.key}
                            onPress={() => onKeyPress(key)}
                        >
                            <Text style={styles.keyText}>{key}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

PinKeyboardFunc.propTypes = {
    onKeyPress: PropTypes.func.isRequired,
};

export default PinKeyboardFunc;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    row: {
        flexDirection: "row",
    },
    key: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "#ccc",
        borderRadius: 40,
    },
    keyText: {
        fontSize: 24,
    },
});
