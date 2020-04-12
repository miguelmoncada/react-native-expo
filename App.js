import React, { useState } from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseapp } from "./app/utils/Firebase";
import CustomTheme from "./app/styles/ExportThemes";
import { ThemeContext } from "./app/context/ThemeContext";
import I18n from "./app/utils/I18n";
import { LanguageContext } from "./app/context/LanguageContext";

export default function App() {
  const [theme, setTheme] = useState(CustomTheme.THEME_SUCCESS);
  const [lang, setLang] = useState(I18n.currentLocale());
  
  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Navigation />
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}
