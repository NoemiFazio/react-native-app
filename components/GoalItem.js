import { Text, View, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
