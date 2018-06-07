import React from "react";
import { Text } from 'spectacle';

const AzureLogo = props => (
  // <svg height={props.size ? props.size : "90%"} viewBox="0 0 161.67 129" width={props.size ? props.size : "90%"} {...props}>
  //   <path
  //     d="M88.33 0L40.67 41.33 0 114.33h36.67zm6.34 9.67L74.33 67l39 49-75.66 13h124z"
  //     fill="#0072c6"
  //   />
  // </svg>
  <Text bgColor="#0072c6" bold textColor="#FFF" lineHeight={props.lineHeight ? props.lineHeight: 1}> Microsoft Azure Functions </Text>
);

export default AzureLogo;
