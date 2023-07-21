import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { requestUserPermission, NotificationListner } from "./src/utils/pushnotification_helper.js";

const App = () => {

  useEffect(()=>{
    requestUserPermission();
    NotificationListner();
  },[])

  return (
    <View>
      <Text>Push Notification Tester</Text>
    </View>
  )
}
export default App;
