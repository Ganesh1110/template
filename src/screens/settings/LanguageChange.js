import React from "react";
import { View, Text, Button } from "react-native";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{t("welcome")}</Text>
      <Text>{t("greeting", { name: "John" })}</Text>
      <Button title="Switch to Arabic" onPress={() => switchLanguage("ar")} />
      <Button title="Switch to English" onPress={() => switchLanguage("en")} />
    </View>
  );
};

export default LanguageChange;
