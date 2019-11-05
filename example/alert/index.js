import React from "react";

import Alert from "./Alert";

const options = {
  title: "",
  subtitle: "",
  description: "",
  actions: [
    {
      text: "Cancel",
      onPress: () => {}
    },
    {
      text: "Done",
      onPress: () => {}
    }
  ]
};

const AlertServiceContext = React.createContext();
export const useAlert = () =>
  React.useContext(AlertServiceContext);

export const AlertServiceProvider = ({ children }) => {
  const [alertState, setAlertState] = React.useState(false);
  const [alertOptions, setALertOptions] = React.useState(options);

  const openAlert = options => {
    setAlertState(true);
    setALertOptions(options);
  };

  const closeAlert = () => {
    setAlertState(false);
    setALertOptions({});
  }

  return (
    <>
      <AlertServiceContext.Provider value={openAlert} children={children} />
      <Alert open={alertState} closeAlert={closeAlert} {...alertOptions} />
    </>
  );
};
