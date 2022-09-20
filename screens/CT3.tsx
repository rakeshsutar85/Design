import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";

const CT3 = () => {
  const navigation = useNavigation();
  const [moreTextVisible, setMoreTextVisible] = useState(false);
  const [groupContainer3Visible, setGroupContainer3Visible] = useState(false);

  const openMoreText = useCallback(() => {
    setMoreTextVisible(true);
  }, []);

  const closeMoreText = useCallback(() => {
    setMoreTextVisible(false);
  }, []);

  const openGroupContainer3 = useCallback(() => {
    setGroupContainer3Visible(true);
  }, []);

  const closeGroupContainer3 = useCallback(() => {
    setGroupContainer3Visible(false);
  }, []);
  return (
    <>
      <View style={styles.cT3View}>
        <View style={styles.groupView2}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.componente61Icon}
            resizeMode="cover"
            source={require("../assets/componente-6-1.png")}
          />
          <Image
            style={styles.articlesClippedIcon}
            resizeMode="cover"
            source={require("../assets/articles-clipped.png")}
          />
          <View style={styles.menuView}>
            <View style={styles.rettangolo11View} />
            <View style={styles.editorialView}>
              <Text style={styles.eDITORIALText}>POLITICS</Text>
            </View>
            <View style={styles.cRYPTONEWSView}>
              <Text style={styles.cRYPTONEWSText}>FINANCE</Text>
            </View>
            <View style={styles.rAWMATERIALView}>
              <Text style={styles.rAWMATERIALText}>SPORTS</Text>
            </View>
            <View style={styles.eCONOMICSView} />
            <Text style={styles.eCONOMICSText}>ENTERTAINMENT</Text>
          </View>
          <Text style={styles.rAWMATERIALText1}>NEWS</Text>
          <View style={styles.portfolioView}>
            <View style={styles.rettangolo138View} />
            <Image
              style={styles.rettangolo642Icon}
              resizeMode="cover"
              source={require("../assets/rettangolo-642.png")}
            />
            <Text style={styles.text}>11%</Text>
            <View style={styles.groupView}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle-1.png")}
              />
              <Text style={styles.text1}>Yes</Text>
            </View>
            <View style={styles.groupView1}>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle-2.png")}
              />
              <Text style={styles.text2}>No</Text>
            </View>
            <Text style={styles.text3}>$89</Text>
            <Text style={styles.text4}>$09</Text>
            <Text style={styles.sUMMARYText}>CHANCE</Text>
            <Text style={styles.uSDText}>+25495$</Text>
            <Text style={styles.hText}>24H</Text>
            <Image
              style={styles.image2Icon}
              resizeMode="cover"
              source={require("../assets/image2.png")}
            />
            <Image
              style={styles.flyingCoinsIcon}
              resizeMode="cover"
              source={require("../assets/flying-coins.png")}
            />
            <View style={styles.rectangleView1} />
          </View>
          <View style={styles.tabsBarView}>
            <View style={styles.backgroundView} />
          </View>
          <View style={styles.activeTabLine} />
          <Pressable
            style={styles.researchNews1}
            onPress={() => navigation.navigate("CTStart")}
          >
            <Text style={styles.researchNews}>{`Research & News`}</Text>
          </Pressable>
          <Pressable
            style={styles.reactionsPressable}
            onPress={() => navigation.navigate("CT2")}
          >
            <Text style={styles.reactionsText}>Reactions</Text>
          </Pressable>
          <Text style={styles.relatedText}>Related</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.mainBottomBar}>
          <Image
            style={styles.rettangolo12Icon}
            resizeMode="cover"
            source={require("../assets/rettangolo-12.png")}
          />
          <Image
            style={styles.marketsIcon}
            resizeMode="cover"
            source={require("../assets/markets.png")}
          />
          <Image
            style={styles.portfolioIcon}
            resizeMode="cover"
            source={require("../assets/portfolio.png")}
          />
          <View style={styles.feedView}>
            <View style={styles.selectedView} />
            <Image
              style={styles.icons8News}
              resizeMode="cover"
              source={require("../assets/icons8news.png")}
            />
          </View>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile.png")}
          />
        </View>
        <View style={styles.rectangleView2} />
        <Text style={styles.whatIsTheFutureOf}>
          <Text style={styles.willChinaInvade}>Will China invade Taiwan</Text>
          <Text
            style={styles.beforeEndSeptember}
          >{`before end september? `}</Text>
        </Text>
        <Image
          style={styles.hiconBoldFilter1}
          resizeMode="cover"
          source={require("../assets/hicon--bold--filter-1.png")}
        />
        <Image
          style={styles.arrowRedoIcon}
          resizeMode="cover"
          source={require("../assets/arrowredo.png")}
        />
        <Pressable style={styles.groupPressable} onPress={openGroupContainer3}>
          <View style={styles.mediaView}>
            <View style={styles.backgroundView1} />
            <Image
              style={styles.rectangleIcon2}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <Image
              style={styles.x11Icon}
              resizeMode="cover"
              source={require("../assets/1200x1-1.png")}
            />
            <View style={styles.rectangleView3} />
            <Text style={styles.lizTrussWillBeUKsNextPr}>
              <Text style={styles.lizTrussWill}>
                Liz Truss will be UK’s next
              </Text>
              <Text style={styles.primeMinisterText}>Prime Minister?</Text>
            </Text>
          </View>
          <View style={styles.mediaView1}>
            <View style={styles.backgroundView2} />
            <Image
              style={styles.rectangleIcon3}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <Image
              style={styles.x11Icon1}
              resizeMode="cover"
              source={require("../assets/1200x1-1.png")}
            />
            <View style={styles.rectangleView4} />
            <Image
              style={styles.image1Icon}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={styles.britishPoundWillFallAfter}>
              <Text style={styles.britishPoundWill}>
                British Pound will fall after
              </Text>
              <Text style={styles.primeMinisterElections}>
                Prime Minister elections?
              </Text>
            </Text>
          </View>
          <Pressable style={styles.morePressable} onPress={openMoreText}>
            <Text style={styles.moreText}>more...</Text>
          </Pressable>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={moreTextVisible}>
        <View style={styles.moreTextOverlay}>
          <Pressable style={styles.moreTextBg} onPress={closeMoreText} />
          <FrameComponent onClose={closeMoreText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer3Visible}>
        <View style={styles.groupContainer3Overlay}>
          <Pressable
            style={styles.groupContainer3Bg}
            onPress={closeGroupContainer3}
          />
          <FrameComponent onClose={closeGroupContainer3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  moreTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  moreTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 179.67,
    left: 64.83,
    backgroundColor: "#fff",
    width: 375,
    height: 731,
  },
  componente61Icon: {
    position: "absolute",
    top: 179.67,
    left: 64.83,
    width: 504.81,
    height: 326.5,
  },
  articlesClippedIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -275.66,
      },
    ],
    top: "50%",
    left: 65.83,
    width: 375,
    height: 733,
    opacity: 0.45,
  },
  rettangolo11View: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#00ffba",
    width: 77,
    height: 24,
  },
  eDITORIALText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    width: "83.87%",
    top: "50%",
    right: "8.06%",
    left: "8.06%",
    fontSize: 12,
    fontFamily: "Lato",
    color: "#222",
    textAlign: "left",
  },
  editorialView: {
    position: "absolute",
    top: 4,
    left: 8,
    width: 62,
    height: 15,
    overflow: "hidden",
  },
  cRYPTONEWSText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    width: "61.9%",
    top: "50%",
    right: "38.1%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Lato",
    color: "#222",
    textAlign: "left",
  },
  cRYPTONEWSView: {
    position: "absolute",
    top: 4,
    left: 94,
    width: 84,
    height: 15,
    overflow: "hidden",
  },
  rAWMATERIALText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    width: "50.56%",
    top: "50%",
    right: "24.72%",
    left: "24.72%",
    fontSize: 12,
    fontFamily: "Lato",
    color: "#222",
    textAlign: "left",
  },
  rAWMATERIALView: {
    position: "absolute",
    top: 4,
    left: 190,
    width: 89,
    height: 15,
    overflow: "hidden",
  },
  eCONOMICSView: {
    position: "absolute",
    top: 4,
    left: 271,
    width: 73,
    height: 15,
    overflow: "hidden",
    opacity: 0.44,
  },
  eCONOMICSText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "26.76%",
    top: "50%",
    right: "0%",
    left: "73.24%",
    fontSize: 12,
    fontFamily: "Lato",
    color: "#656565",
    textAlign: "left",
  },
  menuView: {
    position: "absolute",
    top: 200.67,
    left: 82.83,
    width: 370,
    height: 24,
  },
  rAWMATERIALText1: {
    position: "absolute",
    transform: [
      {
        translateY: -250.66,
      },
    ],
    width: "6.93%",
    top: "50%",
    right: "44.17%",
    left: "48.9%",
    fontSize: 12,
    fontFamily: "Lato",
    color: "#222",
    textAlign: "left",
  },
  rettangolo138View: {
    position: "absolute",
    height: "100%",
    width: "110.87%",
    top: "0%",
    right: "-10.87%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
    display: "none",
  },
  rettangolo642Icon: {
    position: "absolute",
    height: "58.39%",
    width: "111.75%",
    top: "18.12%",
    right: "-12.27%",
    bottom: "23.49%",
    left: "0.52%",
    borderRadius: 20,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -5.5,
      },
    ],
    width: "25.78%",
    top: "50%",
    right: "66.65%",
    left: "7.57%",
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Montserrat Alternates",
    color: "#fff",
    textAlign: "left",
  },
  rectangleIcon: {
    position: "absolute",
    top: 2,
    left: 1,
    borderRadius: 5,
    width: 59,
    height: 29,
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: -11.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#292929",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 76,
    left: 216,
    width: 60,
    height: 23,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 1,
    left: 0,
    borderRadius: 5,
    width: 59,
    height: 29,
  },
  text2: {
    position: "absolute",
    transform: [
      {
        translateY: -11,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    top: 77,
    left: 288,
    width: 60,
    height: 22,
  },
  text3: {
    position: "absolute",
    transform: [
      {
        translateY: -24.5,
      },
    ],
    width: "15.67%",
    top: "50%",
    right: "9.92%",
    left: "74.41%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    transform: [
      {
        translateY: -24.5,
      },
    ],
    width: "15.67%",
    top: "50%",
    right: "28.2%",
    left: "56.14%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "center",
  },
  sUMMARYText: {
    position: "absolute",
    transform: [
      {
        translateY: -22.5,
      },
    ],
    width: "32.3%",
    top: "50%",
    right: "60.13%",
    left: "7.57%",
    fontSize: 12,
    fontWeight: "900",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "left",
  },
  uSDText: {
    position: "absolute",
    transform: [
      {
        translateY: 11.5,
      },
    ],
    width: "13.84%",
    top: "50%",
    right: "52.48%",
    left: "33.68%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "right",
  },
  hText: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    width: "7.45%",
    top: "50%",
    right: "51.55%",
    left: "40.99%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "left",
  },
  image2Icon: {
    position: "absolute",
    height: "17.45%",
    width: "5.22%",
    top: "47.65%",
    right: "68.67%",
    bottom: "34.9%",
    left: "26.11%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  flyingCoinsIcon: {
    position: "absolute",
    height: "78.29%",
    width: "16.48%",
    top: "9.34%",
    right: "39.79%",
    bottom: "12.37%",
    left: "43.74%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleView1: {
    position: "absolute",
    top: 177,
    left: 32,
    backgroundColor: "#fff",
    width: 297,
    height: 113,
  },
  portfolioView: {
    position: "absolute",
    top: 448.67,
    left: 62.83,
    width: 383,
    height: 149,
    overflow: "hidden",
  },
  backgroundView: {
    position: "absolute",
    top: 4,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "#bdc5cd",
    shadowOffset: {
      width: 0,
      height: 0.33000001311302185,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 414,
    height: 40,
  },
  tabsBarView: {
    position: "absolute",
    top: 560.67,
    left: 61.83,
    width: 414,
    height: 45,
  },
  activeTabLine: {
    position: "absolute",
    top: 603.67,
    left: 363.83,
    backgroundColor: "#e432c1",
    width: 52,
    height: 2,
  },
  researchNews: {
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "center",
    width: 120,
    height: 24,
  },
  researchNews1: {
    position: "absolute",
    left: 91.83,
    top: 573.67,
  },
  reactionsText: {
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "center",
    width: 68,
    height: 24,
  },
  reactionsPressable: {
    position: "absolute",
    left: 253.83,
    top: 573.67,
  },
  relatedText: {
    position: "absolute",
    top: 573.67,
    left: 363.83,
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#e432c1",
    textAlign: "center",
    width: 52,
    height: 24,
  },
  vectorIcon: {
    position: "absolute",
    top: 179.67,
    left: 64.83,
    width: 376,
    height: 303,
  },
  groupView2: {
    position: "absolute",
    top: -179.67,
    left: -64.83,
    width: 504.81,
    height: 910.67,
  },
  rettangolo12Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 70,
  },
  marketsIcon: {
    position: "absolute",
    top: 20,
    left: 138,
    width: 24,
    height: 24,
    opacity: 0.8,
  },
  portfolioIcon: {
    position: "absolute",
    top: 20,
    left: 218,
    width: 24,
    height: 24,
    opacity: 0.8,
  },
  selectedView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 14,
    width: 43,
    height: 28,
  },
  icons8News: {
    position: "absolute",
    top: 1.39,
    left: 10,
    width: 24,
    height: 24,
  },
  feedView: {
    position: "absolute",
    top: 21,
    left: 45,
    width: 43,
    height: 28,
  },
  profileIcon: {
    position: "absolute",
    top: 20,
    left: 296,
    width: 24,
    height: 24,
    opacity: 0.8,
  },
  mainBottomBar: {
    position: "absolute",
    top: 661,
    left: 1,
    width: 375,
    height: 70,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 376,
    height: 303,
  },
  willChinaInvade: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  beforeEndSeptember: {
    margin: 0,
  },
  whatIsTheFutureOf: {
    position: "absolute",
    transform: [
      {
        translateY: -128.5,
      },
    ],
    width: "98.4%",
    top: "50%",
    right: "-3.2%",
    left: "4.8%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "left",
    height: 57,
  },
  hiconBoldFilter1: {
    position: "absolute",
    top: 254,
    left: 338,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  arrowRedoIcon: {
    position: "absolute",
    top: 11,
    left: 346,
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  backgroundView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 347,
    height: 69,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74.22,
    height: 69,
  },
  x11Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74,
    height: 80.09,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#ced5dc",
    borderWidth: 0.3,
    width: 347,
    height: 69,
  },
  lizTrussWill: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  primeMinisterText: {
    margin: 0,
  },
  lizTrussWillBeUKsNextPr: {
    position: "absolute",
    top: 10.93,
    left: 87,
    fontSize: 18,
    letterSpacing: -0.3,
    fontFamily: "Lato",
    color: "#141619",
    textAlign: "left",
    width: 258,
    height: 59.14,
  },
  mediaView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 347,
    height: 69,
  },
  backgroundView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 347,
    height: 69,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74.22,
    height: 69,
  },
  x11Icon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74,
    height: 80.09,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#ced5dc",
    borderWidth: 0.3,
    width: 347,
    height: 69,
  },
  image1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 123,
    height: 69,
  },
  britishPoundWill: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  primeMinisterElections: {
    margin: 0,
  },
  britishPoundWillFallAfter: {
    position: "absolute",
    top: 10.93,
    left: 87,
    fontSize: 18,
    letterSpacing: -0.3,
    fontFamily: "Lato",
    color: "#141619",
    textAlign: "left",
    width: 258,
    height: 59.14,
  },
  mediaView1: {
    position: "absolute",
    top: 81,
    left: 0,
    width: 347,
    height: 69,
  },
  moreText: {
    fontSize: 12.5,
    lineHeight: 22,
    fontFamily: "Lato",
    color: "#999",
    textAlign: "center",
    width: 58,
    height: 21,
  },
  morePressable: {
    position: "absolute",
    left: 291,
    top: 150,
  },
  groupPressable: {
    position: "absolute",
    top: 438,
    left: 13,
    width: 349,
    height: 171,
  },
  cT3View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 731,
    overflow: "hidden",
  },
});

export default CT3;
