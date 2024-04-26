import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
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

const Metrics = ({ navigation }) => {
  const [dateRange, setDateRange] = useState("today");
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader />
      <View style={styles.content}>
        <Header>Welcome, $name!</Header>
        <Categories
          categories={dateCategories}
          selectedCategory={dateRange}
          onCategoryPress={setDateRange}
        />
        <View style={{ height: 20 }} />
        <Text style={styles.graphTitle}>Blood Glucose</Text>
        {/* <LineChart
          data={data}
          areaChart
          isAnimated
          color="#07BAD1"
          yAxisTextStyle={{ color: "lightgray" }}
          xAxisTextStyle={{ color: "lightgray" }}
          startFillColor={"rgb(84,219,234)"}
          endFillColor={"rgb(84,219,234)"}
          startOpacity={0.4}
          endOpacity={0.1}
          rulesColor="lightgray"
          rulesType="solid"
          initialSpacing={10}
          yAxisColor="lightgray"
          xAxisColor="lightgray"
          hideRules
        /> */}
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
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Metrics);
