import React from "react";
import { I18nManager } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/locales/I18n";

const App = () => {
  I18nManager.allowRTL(false);
  const q_Client = new QueryClient();
  return (
    <>
      {/* <Provider store={store}> */}
      <QueryClientProvider client={q_Client}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </I18nextProvider>
      </QueryClientProvider>
      {/* </Provider> */}
    </>
  );
};

export default App;
