import React, { Component } from "react";
import { View, Text, Button } from "react-native";

const CustomButton = (props) => {
  return <Button title="Add Candy" onPress={props.addMyCandy()} />;
};

export default CustomButton;
