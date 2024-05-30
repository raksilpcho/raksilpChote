import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { View, Animated, StyleSheet, Vibration } from "react-native";
import PropTypes from "prop-types";

const PinInputFunc = forwardRef((props, ref) => {
    const [shake] = useState(new Animated.Value(0));

    useImperativeHandle(ref, () => (
        {
        shake: () => {
            if (props.vibration) {
                Vibration.vibrate(500);
            }

            shake.setValue(0);

            Animated.spring(shake, { toValue: 1 }).start(() => {
                if (props.animationShakeCallback) {
                    props.animationShakeCallback();
                }
            });
        }
    }));

    useEffect(() => {
        props.onRef(ref);

        return () => {
            props.onRef(undefined);
        };
    }, [ref]);


    const {
        containerDefaultStyle,
        pinDefaultStyle,
        pinActiveDefaultStyle
    } = styles;

    const {
        numberOfPinsActive,
        numberOfPins,
        containerStyle,
        pinStyle,
        pinActiveStyle
    } = props;


    const pins = [];

    for (let p = 0; p < numberOfPins; p++) {
        pins.push(
            <View
                key={p}
                style={[
                    pinDefaultStyle,
                    pinStyle,
                    p < numberOfPinsActive
                        ? { ...pinActiveDefaultStyle, ...pinActiveStyle }
                        : {}
                ]}
            />
        );
    }

    const shakeAnimation = shake.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [0, -20, 20, -20, 20, 0]
    });

    return (
        <Animated.View
            style={[
                containerDefaultStyle,
                containerStyle,
                { left: shakeAnimation }
            ]}
        >
            {pins}
        </Animated.View>
    );
});

PinInputFunc.propTypes = {
    onRef: PropTypes.any.isRequired,
    numberOfPins: PropTypes.number,
    numberOfPinsActive: PropTypes.number,
    vibration: PropTypes.bool,
    animationShakeCallback: PropTypes.func,
    containerStyle: PropTypes.object,
    pinStyle: PropTypes.object,
    pinActiveStyle: PropTypes.object
};

PinInputFunc.defaultProps = {
    numberOfPins: 5,
    numberOfPinsActive: 0,
    vibration: true
};

export default PinInputFunc;


const styles = StyleSheet.create({
    containerDefaultStyle: {
        flex: null,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 25 
    },
    pinDefaultStyle: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 9,
        opacity: 0.45,
        backgroundColor: "#ffffff",
        borderColor: "#3887C8",
        borderStyle: "solid",
        borderWidth: 1
    },
    pinActiveDefaultStyle: {
        opacity: 1.0,
        backgroundColor: "#3887C8"
    }
});
