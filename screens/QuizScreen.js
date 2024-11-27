import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "../redux/quizSlice";
import { globalStyle } from "../assets/styles";

const QuizScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (currentQuestionIndex === questions.length - 1) {
      navigation.navigate("Result");
    } else {
      dispatch(nextQuestion({ isCorrect }));
    }
  };

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={globalStyle.option}
          onPress={() => handleAnswer(option)}
        >
          <Text style={globalStyle.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizScreen;
