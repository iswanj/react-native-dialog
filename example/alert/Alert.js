import React from "react";
import { Text, View } from "react-native";
import Dialog from "archisoft-react-native-dialog";

const Alert = ({ open, closeAlert, title, subtitle, description, actions }) => {
  const handleAction = action => {
    action();
    closeAlert();
  };

  const renderButtons = (action, index) => (
    <Dialog.Button
      key={index}
      label={action.text}
      color="#000000"
      onPress={() => handleAction(action.onPress)}
    />
  );
  return (
    <View>
      <Dialog.Container visible={open}>
        <View>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Subtitle>{subtitle}</Dialog.Subtitle>
          <Dialog.Description>{description}</Dialog.Description>
        </View>
        {actions.map(renderButtons)}
      </Dialog.Container>
    </View>
  );
};

Alert.defaultProps = {
  actions: [],
  title: "",
  subtitle: "",
  description: "",
  open: false
};

export default Alert;