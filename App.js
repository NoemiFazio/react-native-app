import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(enteredGoalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== enteredGoalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
        placeholderText="Your course goal!"
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, i) => {
            return item.id;
          }}
          alwaysBounceVertical="false"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    gap: 10,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
