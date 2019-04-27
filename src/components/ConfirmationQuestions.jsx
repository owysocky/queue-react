import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
    <style>{`
      div{
        background-color: #9fbff2;
        padding: 10px;
      }
      h3{
        color: #6d5cf2;
      }
      .btn{
        background-color: #6d5cf2;
        color: white;
        padding: 20px;
      }
    `}</style>
      <h3>Have you gone through all the steps on the Learn How to Program debugging lesson?</h3>
      <button className="btn" onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes={
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;