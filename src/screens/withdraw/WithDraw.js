import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {withdraw} from '../../redux/withdraw/action';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './styles';
import Loading from '../../components/Loading';

const WithDraw = () => {
  const dispatch = useDispatch();
  const homeState = useSelector(state => state?.homeReducer);
  const profileState = homeState?.profileReducer?.data;
  const loading = homeState?.profileReducer?.loading
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (profileState) {
    }
  }, [profileState]);

  const handleSubmit = async () => {
    const withDraw = await dispatch(withdraw(amount));
  };

  const handleInputChange = text => {
    const parsedNumber = parseFloat(text.replace(/[^0-9.]/g, ''))
    setAmount(parsedNumber);
  };

  const formatCurrency = num => {
    return `$ ${num}`
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.withdrawStyles.container}>
        <View style={styles.withdrawStyles.withdrawHeader}>
          <Text>WITHDRAWAL</Text>
        </View>
        <View style={styles.withdrawStyles.withdrawAmountContainer}>
          <Text style={styles.withdrawStyles.withdrawAmountText}>
            AMOUNT FOR WITHDRAWAL
          </Text>
          <View style={styles.withdrawStyles.withdrawAmountInput}>
            <CustomTextInput
              width={'100%'}
              height={'100%'}
              placeholder="Enter your amount"
              keyboardType="numeric"
              onChangeText={text => handleInputChange(text)}
              style={{fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}
              maxLength={10}
              value={formatCurrency(parseFloat(amount) || 0)}
            />
          </View>
        </View>
        <View style={{flex: 5, alignItems: 'center'}}>
          <Text style={styles.withdrawStyles.transferToText}>TRANFER TO</Text>

          <View style={styles.withdrawStyles.transferDetails}>
            <View style={styles.withdrawStyles.transferDetailItem}>
              <View style={styles.withdrawStyles.transferDetailLabel}>
                <Text>NAME</Text>
              </View>
              <View style={styles.withdrawStyles.transferDetailValue}>
                <Text>
                  {profileState?.firstname} {profileState?.lastname}
                </Text>
              </View>
            </View>
            <View style={styles.withdrawStyles.transferDetailItem}>
              <View style={styles.withdrawStyles.transferDetailLabel}>
                <Text>COMPANY</Text>
              </View>
              <View style={styles.withdrawStyles.transferDetailValue}>
                <Text>{profileState?.firstname}</Text>
              </View>
            </View>
            <View style={styles.withdrawStyles.transferDetailItem}>
              <View style={styles.withdrawStyles.transferDetailLabel}>
                <Text>BANK</Text>
              </View>
              <View style={styles.withdrawStyles.transferDetailValue}>
                <Text>{profileState?.firstname}</Text>
              </View>
            </View>
            <View style={styles.withdrawStyles.transferDetailItem}>
              <View style={styles.withdrawStyles.transferDetailLabel}>
                <Text>BANK ACCOUNT</Text>
              </View>
              <View style={styles.withdrawStyles.transferDetailValue}>
                <Text>{profileState?.firstname}</Text>
              </View>
            </View>
          </View>
          <View style={styles.withdrawStyles.withdrawComplete}>
            <View style={styles.withdrawStyles.transferDetailLabel}>
              <Text>BANK ACCOUNT</Text>
            </View>
            <View style={styles.withdrawStyles.transferDetailValue}>
              <Text>123456678</Text>
            </View>
          </View>
          <PrimaryButton
            texts={'WITHDRAW'}
            height={60}
            textColor={'red'}
            styles={styles.withdrawStyles.withdrawButtonContainer}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </View>
      {loading && (<Loading/>)}
    </SafeAreaView>
  );
};
export default WithDraw;
