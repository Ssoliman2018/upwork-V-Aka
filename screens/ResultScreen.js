import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";
import { globalStyle } from "../assets/styles";

const ResultScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { score, questions } = useSelector((state) => state.quiz);

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>Quiz Completed!</Text>
      <Text style={globalStyle.score}>
        Score: {score} / {questions.length}
      </Text>
      <Button
        title="Play Again"
        onPress={() => {
          dispatch(resetQuiz());
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default ResultScreen;
