/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { shuffleArray } from './utils/shuffleArray';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity

} from 'react-native';


interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

const initialQuestions: Question[] = [
  {
    id: 1,
    question: '1. What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswerIndex:0
},
  {
    id: 2,
    question: '2. Who wrote the novel "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Charles Dickens', 'F. Scott Fitzgerald'],
    correctAnswerIndex:0
  },{
    id: 3,
    question: '3.Mr. Doh _____ clients’ phone calls"?',
    options: ['rarely returns', 'returns rarely', 'has returned rarely', 'rarely had returned'],
    correctAnswerIndex:0
  },{
    id: 4,
    question: '4. Success depends _____ the efforts of the organization.',
    options: ['from', 'in', 'on', 'of'],
    correctAnswerIndex:2
  },{
    id: 5,
    question: '5. The weather report predicts it will rain _______ become colder.',
    options: ['neither', 'nor', 'and', 'either'],
    correctAnswerIndex:2
  },{
    id: 6,
    question: '6.The printer _______ paper.',
    options: ['ran into', 'ran out of', 'ran without', 'ran over'],
    correctAnswerIndex:1
  },{
    id: 7,
    question: '7. The electricity went out _______ we were making coffee.',
    options: ['so', 'because of', 'while', 'for'],
    correctAnswerIndex:2
  },{
    id: 8,
    question: '8. _______ all the negotiators, Ms. Neos seems the most reliable.',
    options: ['From', 'As', 'OF', 'But'],
    correctAnswerIndex:2
  },{
    id: 9,
    question: '9. The sales division reported a 64 percent drop _______ the last sales period.',
    options: ['during', 'with', 'at', 'to'],
    correctAnswerIndex:0
  },{
    id: 10,
    question: '10. The company is financially sound; _______, there is no debt.',
    options: ['in spite of', 'for example', 'on the other hand', 'nevertheless'],
    correctAnswerIndex:1
  },{
    id: 11,
    question: '11. Get the invoice _______ upon receipt.',
    options: ['signature', 'sign', 'signed', 'signing'],
    correctAnswerIndex:2
  },{
    id: 12,
    question: '12. Our future will be _______ on what services we can provide.',
    options: ['basic', 'based', 'basing', 'base'],
    correctAnswerIndex:1
  },{
    id: 13,
    question: '13. If there _______ better communication, I would not resign.',
    options: ['were', 'was', 'is', 'will be'],
    correctAnswerIndex:0
  },{
    id: 14,
    question: '14. _______ the critics and answer their questions.',
    options: ['Stand  in for', 'Stand at', 'Stand with', 'Stand up to'],
    correctAnswerIndex:3
  },{
    id: 15,
    question: '15. By the end of this century, business _______ greatly.',
    options: ['will be change', 'will have changed', 'changes', 'changed'],
    correctAnswerIndex:1
  },{
    id: 16,
    question: '16. The _______ market has declined in many parts of the country.',
    options: ['homing', 'housed', 'homes', 'housing'],
    correctAnswerIndex:3
  },{
    id: 17,
    question: '17. _______ saving money, you will purchase a reliable product.',
    options: ['With', 'So', 'Besides', 'Consequently'],
    correctAnswerIndex:2
  },{
    id: 18,
    question: '18. _______ one partner has resigned, others are quitting too.',
    options: ['Because', 'Although', 'If', 'Before'],
    correctAnswerIndex:0
  },{
    id: 19,
    question: '19. The management makes an assessment _______.',
    options: ['rarely', 'still', 'moonthly', 'already'],
    correctAnswerIndex:2
  },{
    id: 20,
    question: '20. The chairman said his _______ would continue his strategies.',
    options: ['successful', 'successor', 'success', 'successive'],
    correctAnswerIndex:1
  }

  
  // Add more questions here
];



const QuestionList = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const reloadQuestions = () => {
    const shuffledQuestions = initialQuestions.map(question => ({
      ...question,
      options: shuffleArray(question.options),
    }));
    setQuestions(shuffleArray(shuffledQuestions));
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledQuestions = initialQuestions.map(question => ({
      ...question,
      options: shuffleArray(question.options),
    }));
    setQuestions(shuffleArray(shuffledQuestions));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadQuestions} style={styles.reloadButton}>
        <Text style={styles.reloadButtonText}>Reload Questions</Text>
      </TouchableOpacity>
      <FlatList
        data={questions}
        renderItem={({ item }) => <QuestionItem question={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};



const QuestionItem = ({ question }: { question: Question }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question.question}</Text>
      <FlatList
        data={question.options}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText} onPress={() => handleAnswer(index, question.id)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};



const handleAnswer = (selectedAnswerIndex: number, questionid: number) => {
  console.log('selectedAnswerIndex :',selectedAnswerIndex), questionid;
  const currentQuestion = initialQuestions[questionid-1];
  console.log('currentQuestion :',currentQuestion);

  if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
    // Handle correct answer
    console.log('Correct!');
  } else {
    // Handle wrong answer
    console.log('Incorrect!'); 
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  questionContainer: {
    marginBottom: 15,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 16,
  },
  reloadButton: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    marginBottom: 5,
  },
  reloadButtonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default QuestionList;
