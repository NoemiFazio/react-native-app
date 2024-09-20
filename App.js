import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText

  )
};
function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals, 
    enteredGoalText
  ])
};


  return (
    <View style={styles.appContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
        <Button title="Add Goals" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((course, i) => <Text key={i}>{course}</Text>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    gap:10,
    flex:1
  },
  inputContainer: {
    flex: 1,
   flexDirection: 'row',
   alignItems:'center',
    justifyContent: 'space-between',
    gap:8,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom:20
  },
  textInput:{
    borderWidth: 1, borderColor: '#cccccc', width: '70%', padding:8
  },
  goalsContainer: {
    flex: 5
  }
});
