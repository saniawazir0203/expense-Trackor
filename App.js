import React from "react";
import SplashScreen from "./src/screens/splashScreen";
import GetStarted from "./src/screens/getStarted";
import BillDetails from "./src/screens/billDetails";
import BottomTabs from "./src/components/bottomTabs";
import WalletPayment from "./src/screens/walletPayment";
import BillPayment from "./src/screens/billPayment";
import TransactionDetail from "./src/components/transactionDetail";
import EditExpenseScreen from "./src/screens/editScreen";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import {store, persistor} from "./src/store";
import CardPayment from "./src/components/cardsPayment"

export default function App(){

  const Stack = createNativeStackNavigator();

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Splash">
        <Stack.Screen name="Splash" component={SplashScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Get Started" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="Home Page" component={BottomTabs} options={{headerShown:false}} />
        <Stack.Screen name="WalletPayment" component={WalletPayment} options={{headerShown:false}} />
        <Stack.Screen name="BillDetails" component={BillDetails} options={{headerShown:false}} />
        <Stack.Screen name="BillPayment" component={BillPayment} options={{headerShown:false}} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{headerShown:false}} />
        <Stack.Screen name="TransactionHistory" component={TransactionDetail} options={{headerShown:false}} />
        <Stack.Screen name="EditExpenseScreen" component={EditExpenseScreen} options={{headerShown:false}} />
        <Stack.Screen name="CardPayment" component={CardPayment} options={{headerShown:false}} />



        {/* <Stack.Screen name="Bottom Tabs" component={BottomTabs} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Transaction History" component={TransactionHistory} options={{headerShown:false}} />
        <Stack.Screen name="List of Users" component={ListOfUsers} options={{headerShown:false}} />
        <Stack.Screen name="Statistics" component={Statistics} options={{headerShown:false}} /> */}


      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

