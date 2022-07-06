import React from "react";
import { View, FlatList, StyleSheet, Text, Modal } from "react-native";
import CustomRow from "./CustomRow";
import ExpenseImageView from "./ExpenseImageView";

const ImagesPage = ({ itemList }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "#FFB756",
    },
    imageList: {
      flex: 1,
      justifyContent: "space-evenly",
      width: "100%",
    },
  });

  const DATA = [
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Garabedyan",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
    {
      picture: require("../assets/images/expense.jpg"),
      lastName: "Nenchev",
    },
  ];

  const modalVisible = true;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={4}
        renderItem={({ item }) => <ExpenseImageView data={item} />}
        columnWrapperStyle={styles.imageList}
      />
    </View>
  );
};

export default ImagesPage;
