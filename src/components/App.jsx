import { useState } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOption/FeedbackOption";
import { Notification } from "./Notification/Notification";
import { Container } from './App.styled';

export const App =() => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackTypes = ['good', 'bad', 'neutral'];

  let totalFeedback = 0;

  const handleFeedback = (event) => {  
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert('Wrong type of feedback');
  };
   
};

const countTotalFeedback = () => good + bad + neutral;
const countPositiveFeedbackPercentage = () => Math.round(good/countTotalFeedback() *100);
;

 totalFeedback = countTotalFeedback();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions 
        options={feedbackTypes}
        onLeaveFeedback={handleFeedback}
        />
      </Section>
  
      <Section title="Statistics">
      {totalFeedback
      ?  <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}      
          />   
      :  <Notification message="There is no feedback"/>}
      </Section> 
    </Container>
  );
  
};

