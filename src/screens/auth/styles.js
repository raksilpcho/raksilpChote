import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  passcodeScreenContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  otpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#d9d9d9',
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  signIntext: {
    textAlign: 'left',
    width: '90%',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  passcodeScreenTextContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  passcodeScreenText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  otpTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpText: {
    marginTop: 20,
    fontSize: 18,
  },
  buttonContainer: {
    marginVertical: 30,
    borderRadius: 5,
  },
  pinContainer: {
    marginBottom: 20,
  },
  pin: {},
  pinActive: {},
});

export default commonStyles;
