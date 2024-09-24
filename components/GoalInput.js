import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput({
  onAddGoal,
  placeholderText,
  visible,
  onCancel,
}) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder={placeholderText}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    // borderBottomWidth: 1,
    // borderColor: "#cccccc",
    // marginBottom: 20,
    padding: 20,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 30,
  },
  button: {
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
