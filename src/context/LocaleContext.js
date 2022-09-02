import { createContext } from "react";

const LocaleContext = createContext();

export const LocaleContextProvider = LocaleContext.Provider;
export const LocaleContextConsumer = LocaleContext.Consumer;

export default LocaleContext;