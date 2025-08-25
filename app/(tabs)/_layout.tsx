import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
