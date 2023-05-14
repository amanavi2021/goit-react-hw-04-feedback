import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOption/FeedbackOption";
import { Notification } from "./Notification/Notification";
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTolalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, value) => (total + value),0);
  };

  countPositiveFeedbackPercentage =() => {
    const { good } = this.state;
    const total = this.countTolalFeedback();
    return Math.round(good/total* 100);
  };

  handleFeedback = event => {
    const { name } = event.target;
    this.setState(prevState =>({
    [name]:prevState[name] + 1,
    }))
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTolalFeedback();
    return (
     <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions 
        options={options}
        onLeaveFeedback={this.handleFeedback}
        />
      </Section>
  
      <Section title="Statistics">
      {totalFeedback 
      ?  <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage()}      
          />   
      :  <Notification message="There is no feedback"/>}
      </Section> 
    </Container>
    )
  }
}
