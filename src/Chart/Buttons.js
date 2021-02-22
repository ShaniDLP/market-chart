import React from 'react';
import './Chart.css';

const Buttons = props => (
<div>
  <button onClick={() => {props.onClick(1)}}>1 Min</button>
  <button onClick={() => {props.onClick(5)}}>5 Min</button>
  <button onClick={() => {props.onClick(60)}}>1 Hour</button>
  <button onClick={() => {props.onClick(10080)}}>1 Week</button>
</div>
)

export default Buttons;

