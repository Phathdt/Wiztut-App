import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 52,
    backgroundColor: "#FF8548",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  logoAuthentica: {
    width: 350,
    height: 200
  }
}));
