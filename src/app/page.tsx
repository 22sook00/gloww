"use client";
import MobileComplete from "@/components/complete/MobileComplete";
import React from "react";
import RecoilProvider from "@/components/provider/RecoilProvider";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
const Home = () => {
  return (
    <RecoilProvider>
      <div id="dialog-root" />
      <MantineProvider>
        <MobileComplete />
      </MantineProvider>
    </RecoilProvider>
  );
};

export default Home;
