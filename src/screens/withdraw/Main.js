import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {profile, transaction} from '../../redux/withdraw/action';
import styles from './styles';
import Loading from '../../components/Loading';

const Main = () => {
  const dispatch = useDispatch();
  const homeState = useSelector(state => state?.homeReducer);
  const profileState = homeState?.profileReducer?.data;
  const transactionState = homeState?.transactionsReducer?.data;
  const loading = homeState?.profileReducer?.loading && homeState?.transactionsReducer?.loading;
  const loading2 = homeState?.profileReducer?.loading

  useEffect(() => {
    getFirstTime();
  }, []);

  const getFirstTime = async () => {
    await dispatch(profile());
    await dispatch(transaction());
  };

  return (
    <SafeAreaView style={styles.commonStyles.container}>
      <View style={styles.commonStyles.container}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <View
            style={styles.commonStyles.profileContainer}>
            <View style={styles.commonStyles.profileInfo}>
              <Text>{profileState?.firstname}</Text>
              <Text>{profileState?.lastname}</Text>
            </View>
            {profileState?.firstname ? <View
              style={styles.commonStyles.profileImage}>
              <Image
                source={require('../../assets/user.jpg')}
                style={{width: '100%', height: '100%'}}
              />
            </View> : null}
          </View>
          <Text style={{fontSize: 18}}>Available Balance</Text>
          <View
            style={styles.commonStyles.balanceContainer}>
            <Text style={styles.commonStyles.balanceText}>
              ${transactionState?.available}
            </Text>
          </View>
        </View>
        <View style={styles.commonStyles.transactionHistory}>
          <View style={styles.commonStyles.transactionHeader}>
            <Text>TRANSACTION HISTORY</Text>
          </View>
          <View style={styles.commonStyles.transactionList}>
            <FlatList
              data={transactionState?.transactions}
              renderItem={({item}) => {
                return (
                  <View
                    style={styles.commonStyles.transactionItem}>
                    <View
                      style={styles.commonStyles.transactionDetails}>
                      <Text>{item.date}</Text>
                      <Text>COMPLETE</Text>
                    </View>
                    <View
                      style={styles.commonStyles.transactionAmount}>
                      <Text>${item.amount}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
      {loading2 && (<Loading/>)}
    </SafeAreaView>
  );
};
export default Main;
