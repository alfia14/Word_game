import React from 'react';

import { QiRoboService } from '../services/QIService'

const handleDialogue = (text) => {
  QiRoboService.onService("ALTextToSpeech", (ALTextToSpeech) => {
    ALTextToSpeech.say(text);
  });
}
const Popup = ({ score }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Task completed!</h2>
        <p>Your score: {score} out of 30 </p>
        <p>Thanks for playing!</p>
        { handleDialogue(" Amazing. Your score is " + {score} + " out of 30. You did a great job. That's all for today. I will see you next time. Touch my head sensor to close the application.")}
      </div>
    </div>
  );
};

export default Popup;