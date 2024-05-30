import {StyleSheet} from 'react-native';

const withdrawStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
      },
      withdrawHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      withdrawAmountContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      withdrawAmountText: {
        width: '100%',
        textAlign: 'left',
      },
      withdrawAmountInput: {
        width: '90%',
        height: 100,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
      },
      transferToText: {
        textAlign: 'left',
        width: '100%',
      },
      transferDetails: {
        backgroundColor: 'grey',
        height: 200,
        width: '90%',
        marginTop: 15,
      },
      transferDetailItem: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row',
      },
      transferDetailLabel: {
        justifyContent: 'space-around',
        flex: 1,
      },
      transferDetailValue: {
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'flex-end',
      },
      withdrawComplete: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginVertical: 15,
      },
      withdrawButtonContainer: {
        width: '50%',
        marginVertical: 15,
      },
})

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  profileContainer: {
    width: '100%',
    height: 60,
    zIndex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profileInfo: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  balanceContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  balanceText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  transactionHistory: {
    flex: 3,
  },
  transactionHeader: {
    marginVertical: 10,
  },
  transactionList: {
    height: 300,
    backgroundColor: 'grey',
  },
  transactionItem: {
    flex: 1,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
  },
  transactionDetails: {
    justifyContent: 'space-around',
    flex: 1,
  },
  transactionAmount: {
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'flex-end',
  },

});

const settingsStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 15,
      alignItems: 'center',
    },
    buttonContainer: {
      marginVertical: 10,
    },
    buttonStyle: {
      backgroundColor: 'grey',
      borderRadius: 1,
      marginVertical:10
    },
  });
  
  export default {commonStyles,settingsStyles, withdrawStyles};
