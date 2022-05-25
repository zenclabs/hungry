import React from "react";
import { AppState, AppStateContext } from "../AppState";
import { RESTAURANT_LIST } from "../pages/api/hardcoded-data";
import { ScreenContainer } from "../screens/ScreenContainer";
import "../styles/globals.css";

const state = new AppState(RESTAURANT_LIST);

export const Wrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ScreenContainer>
      <AppStateContext.Provider value={state}>
        <div>{children}</div>
      </AppStateContext.Provider>
    </ScreenContainer>
  );
};
