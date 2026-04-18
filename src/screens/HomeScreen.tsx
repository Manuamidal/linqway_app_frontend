import React, { useState } from "react";
import { ImageSourcePropType, ScrollView, View, StyleSheet } from "react-native";

import TopBar from "../components/home/TopBar";
import HeroCarousel from "../components/home/HeroCarousel";
import QuickActions from "../components/home/QuickActions";
import ConsultBanner from "../components/home/ConsultBanner";
import ClinicBanner from "../components/home/ClinicBanner";
import ConsultForGrid from "../components/home/ConsultForGrid";
import WhatsAppHelpBar from "../components/home/WhatsAppHelpBar";

const HomeScreen = () => {
  // Replace these with your own local images:
  // const consultImage = require("../assets/consult-doctor.png");
  // const clinicImage = require("../assets/nearby-clinic.jpg");
  const consultImage: ImageSourcePropType | undefined = undefined;
  const clinicImage: ImageSourcePropType | undefined = undefined;
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.fixedTopBar}>
        <TopBar scrolled={isScrolled} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          setIsScrolled(offsetY > 4);
        }}
        scrollEventThrottle={16}
      >
        <HeroCarousel />

        <View style={styles.bodyContent}>
          <QuickActions />
          <ConsultForGrid />
          <ConsultBanner imageSource={consultImage} />
          <ClinicBanner imageSource={clinicImage} />
          <WhatsAppHelpBar />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fixedTopBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bodyContent: {
    paddingHorizontal: 15,
    zIndex: 2,
    elevation: 4,
  },
});