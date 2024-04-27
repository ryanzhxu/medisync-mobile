import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import DrawerHeader from "../../../components/DrawerHeader";
import Header from "../../../components/Header";
import Categories from "../../../components/Categories";
import dateCategories from "../../../constants/dateCategories";

import { LineChart } from "react-native-gifted-charts";
const data = [
  { value: 50 },
  { value: 80, label: "11AM", showXAxisIndex: true },
  { value: 90, label: "12PM", showXAxisIndex: true },
  { value: 70, label: "1PM", showXAxisIndex: true },
  { value: 100, label: "2PM", showXAxisIndex: true },
  { value: 90, label: "3PM", showXAxisIndex: true },
  { value: 90, label: "4PM", showXAxisIndex: true },
];

const data2 = [
  { value: 110 },
  { value: 115, label: "11AM", showXAxisIndex: true },
  { value: 135, label: "12PM", showXAxisIndex: true },
  { value: 138, label: "1PM", showXAxisIndex: true },
  { value: 124, label: "2PM", showXAxisIndex: true },
  { value: 142, label: "3PM", showXAxisIndex: true },
  { value: 128, label: "4PM", showXAxisIndex: true },
];

const Metrics = ({ navigation }) => {
  const [dateRange, setDateRange] = useState("today");

  const onPress = () => {
    console.log("Clicked press");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DrawerHeader />
        <View style={styles.content}>
          <View style={styles.topContainer}>
            <Header>Welcome, $name!</Header>
            <Pressable onPress={onPress}>
              <Image
                source={require("../../../assets/upload.png")}
                resizeMode="contain"
                style={styles.upload}
              />
            </Pressable>
          </View>

          <Categories
            categories={dateCategories}
            selectedCategory={dateRange}
            onCategoryPress={setDateRange}
          />
          <View style={{ height: 20 }} />
          <Text style={styles.graphTitle}>Blood Glucose</Text>
          <Text style={styles.graphSubTitle}>From Dexcom G6</Text>
          <LineChart
            isAnimated
            areaChart
            data={data}
            height={250}
            initialSpacing={0}
            color="#73DAE5"
            dataPointsColor="#73DAE5"
            startFillColor="#73DAE5"
            startOpacity={0.4}
            endOpacity={0}
            yAxisTextStyle={{ color: "#B9BDC1" }}
            xAxisLabelTextStyle={{ color: "#B9BDC1" }}
            yAxisColor={"#B9BDC1"}
            xAxisColor={"#B9BDC1"}
            xAxisLabelTexts={{ color: "#B9BDC1" }}
            xAxisIndicesColor={"#B9BDC1"}
            hideRules
            rotateLabel
          />
          <View style={{ height: 60 }} />
          <Text style={styles.graphTitle}>Blood Pressure</Text>
          <Text style={styles.graphSubTitle}>From Omron BP8000-M</Text>
          <LineChart
            isAnimated
            areaChart
            data={data2}
            height={250}
            initialSpacing={0}
            color="skyblue"
            dataPointsColor="skyblue"
            startFillColor="skyblue"
            startOpacity={0.4}
            endOpacity={0}
            yAxisTextStyle={{ color: "#B9BDC1" }}
            xAxisLabelTextStyle={{ color: "#B9BDC1" }}
            yAxisColor={"#B9BDC1"}
            xAxisColor={"#B9BDC1"}
            xAxisLabelTexts={{ color: "#B9BDC1" }}
            xAxisIndicesColor={"#B9BDC1"}
            hideRules
            rotateLabel
          />
          <View style={{ height: 60 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Metrics);
