import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: 3,
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Dickens", "Tolkien"],
      correctAnswer: "Shakespeare",
    },
  ],
  currentQuestionIndex: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion(state, action) {
      state.currentQuestionIndex += 1;
      if (action.payload.isCorrect) {
        state.score += 1;
      }
    },
    resetQuiz(state) { 
      state.currentQuestionIndex = 0;
      state.score = 0;
    }
  }
});

export const { nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;  // export the reducer