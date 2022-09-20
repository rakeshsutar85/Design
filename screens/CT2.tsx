import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";

const CT2 = () => {
  const navigation = useNavigation();
  const [commentsContainerVisible, setCommentsContainerVisible] =
    useState(false);

  const openCommentsContainer = useCallback(() => {
    setCommentsContainerVisible(true);
  }, []);

  const closeCommentsContainer = useCallback(() => {
    setCommentsContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.cT2View}>
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
              source={require("../assets/flying-coins1.png")}
            />
            <View style={styles.rectangleView1} />
          </View>
          <View style={styles.tabsBarView}>
            <View style={styles.backgroundView} />
            <View style={styles.activeTabLine} />
          </View>
          <Pressable
            style={styles.researchNews1}
            onPress={() => navigation.navigate("CTStart")}
          >
            <Text style={styles.researchNews}>{`Research & News`}</Text>
          </Pressable>
          <Text style={styles.reactionsText}>Reactions</Text>
          <Pressable
            style={styles.relatedPressable}
            onPress={() => navigation.navigate("CT3")}
          >
            <Text style={styles.relatedText}>Related</Text>
          </Pressable>
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
        <Pressable
          style={styles.commentsPressable}
          onPress={openCommentsContainer}
        >
          <Text style={styles.text5}>95K</Text>
          <Text style={styles.text6}>215</Text>
          <View style={styles.nextAvatarView}>
            <Text style={styles.addCommentText}>Add comment...</Text>
            <Text style={styles.text7}>😍</Text>
            <Text style={styles.text8}>😭</Text>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/1.png")}
            />
          </View>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-146.png")}
          />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-152.png")}
          />
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require("../assets/avatar2.png")}
          />
          <Image style={styles.avatarIcon1} resizeMode="cover" />
          <View style={styles.groupView3}>
            <Text style={styles.ifChinaDoesIndeedAttackTa3}>
              <Text style={styles.ifChinaDoesIndeedAttackTa2}>
                <Text style={styles.ifChinaDoesIndeedAttackTa1}>
                  <Text style={styles.text9}>{`            `}</Text>
                  <Text style={styles.ifChinaDoesIndeedAttackTa}>
                    <Text style={styles.ifChinaDoes}>
                      If China does indeed attack Taiwan soon,
                    </Text>
                  </Text>
                </Text>
              </Text>
              <Text style={styles.octoberIsTheLikelyTimeSin2}>
                <Text style={styles.octoberIsTheLikelyTimeSin1}>
                  <Text style={styles.octoberIsTheLikelyTimeSin}>
                    <Text
                      style={styles.octoberIsThe}
                    >{`October is the likely time since the... `}</Text>
                  </Text>
                </Text>
                <Text style={styles.moreText2}>
                  <Text style={styles.moreText1}>
                    <Text style={styles.moreText}>more</Text>
                  </Text>
                  <Text style={styles.text11}>
                    <Text style={styles.text10}>{` `}</Text>
                  </Text>
                </Text>
              </Text>
            </Text>
            <Text style={styles.lindaText}>{`Linda `}</Text>
          </View>
          <View style={styles.groupView4}>
            <Text style={styles.iWillBeSurprisedIfChina3}>
              <Text style={styles.iWillBeSurprisedIfChina2}>
                <Text style={styles.iWillBeSurprisedIfChina1}>
                  <Text style={styles.text12}>{`               `}</Text>
                  <Text style={styles.iWillBeSurprisedIfChina}>
                    <Text style={styles.iWillBe}>
                      {" "}
                      I will be surprised if #China will in fact
                    </Text>
                  </Text>
                </Text>
              </Text>
              <Text style={styles.attackTaiwanDoingSoRequir2}>
                <Text style={styles.attackTaiwanDoingSoRequir1}>
                  <Text style={styles.attackTaiwanDoingSoRequir}>
                    <Text
                      style={styles.attackTaiwanDoing}
                    >{`attack Taiwan. Doing so requires lots of... `}</Text>
                  </Text>
                </Text>
                <Text style={styles.moreText5}>
                  <Text style={styles.moreText4}>
                    <Text style={styles.moreText3}>more</Text>
                  </Text>
                  <Text style={styles.text14}>
                    <Text style={styles.text13}>{` `}</Text>
                  </Text>
                </Text>
              </Text>
            </Text>
            <Text style={styles.tomBNText}>TomBN</Text>
          </View>
          <Image
            style={styles.commentStrokeIcon}
            resizeMode="cover"
            source={require("../assets/comment-stroke-icon.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-39.png")}
          />
        </Pressable>
        <Image
          style={styles.iconmentions}
          resizeMode="cover"
          source={require("../assets/iconmentions.png")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={commentsContainerVisible}
      >
        <View style={styles.commentsContainerOverlay}>
          <Pressable
            style={styles.commentsContainerBg}
            onPress={closeCommentsContainer}
          />
          <FrameComponent1 onClose={closeCommentsContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  commentsContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  commentsContainerBg: {
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
    width: "14.62%",
    top: "50%",
    right: "53%",
    left: "32.38%",
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
  activeTabLine: {
    position: "absolute",
    top: 43,
    left: 192,
    backgroundColor: "#e432c1",
    width: 68,
    height: 2,
  },
  tabsBarView: {
    position: "absolute",
    top: 560.67,
    left: 61.83,
    width: 414,
    height: 45,
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
    position: "absolute",
    top: 573.67,
    left: 253.83,
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#e432c1",
    textAlign: "center",
    width: 68,
    height: 24,
  },
  relatedText: {
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "center",
    width: 52,
    height: 24,
  },
  relatedPressable: {
    position: "absolute",
    left: 363.83,
    top: 573.67,
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
  text5: {
    position: "absolute",
    transform: [
      {
        translateY: -80.5,
      },
    ],
    width: "25.06%",
    top: "50%",
    right: "45.76%",
    left: "29.19%",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat Alternates",
    color: "#687684",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    transform: [
      {
        translateY: -80.5,
      },
    ],
    width: "8.38%",
    top: "50%",
    right: "82.49%",
    left: "9.14%",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "left",
  },
  addCommentText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12.5,
    lineHeight: 22,
    fontFamily: "SF UI Display",
    color: "#999",
    textAlign: "left",
    width: 103,
    height: 16,
  },
  text7: {
    position: "absolute",
    top: 6,
    left: 220,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "SF UI Display",
    color: "#999",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 26,
    height: 8,
  },
  text8: {
    position: "absolute",
    top: 6,
    left: 247,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "SF UI Display",
    color: "#999",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 26,
    height: 8,
  },
  icon: {
    position: "absolute",
    top: 4.75,
    left: 282.75,
    width: 10.5,
    height: 10.5,
  },
  nextAvatarView: {
    position: "absolute",
    top: 145,
    left: 47,
    width: 293,
    height: 16,
  },
  ellipseIcon: {
    position: "absolute",
    top: 42,
    left: 0,
    width: 38,
    height: 38,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 89,
    left: 0,
    width: 38,
    height: 38,
  },
  avatarIcon: {
    position: "absolute",
    top: 44,
    left: 2,
    width: 34,
    height: 34,
  },
  avatarIcon1: {
    position: "absolute",
    top: 91,
    left: 2,
    width: 34,
    height: 34,
  },
  text9: {
    fontSize: 11.5,
    lineHeight: 22,
  },
  ifChinaDoes: {
    fontSize: 13,
  },
  ifChinaDoesIndeedAttackTa: {
    lineHeight: 15,
  },
  ifChinaDoesIndeedAttackTa1: {
    color: "#000",
  },
  ifChinaDoesIndeedAttackTa2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  octoberIsThe: {
    fontSize: 13,
  },
  octoberIsTheLikelyTimeSin: {
    lineHeight: 15,
  },
  octoberIsTheLikelyTimeSin1: {
    color: "#000",
  },
  moreText: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  moreText1: {
    fontSize: 13,
  },
  text10: {
    fontSize: 11.5,
  },
  text11: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  moreText2: {
    lineHeight: 15,
  },
  octoberIsTheLikelyTimeSin2: {
    margin: 0,
  },
  ifChinaDoesIndeedAttackTa3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontFamily: "Lato",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 346,
  },
  lindaText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 42,
    left: 48,
    width: 346,
    height: 34,
  },
  text12: {
    fontSize: 11.5,
    lineHeight: 22,
  },
  iWillBe: {
    fontSize: 13,
  },
  iWillBeSurprisedIfChina: {
    lineHeight: 15,
  },
  iWillBeSurprisedIfChina1: {
    color: "#000",
  },
  iWillBeSurprisedIfChina2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  attackTaiwanDoing: {
    fontSize: 13,
  },
  attackTaiwanDoingSoRequir: {
    lineHeight: 15,
  },
  attackTaiwanDoingSoRequir1: {
    color: "#000",
  },
  moreText3: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  moreText4: {
    fontSize: 13,
  },
  text13: {
    fontSize: 11.5,
  },
  text14: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  moreText5: {
    lineHeight: 15,
  },
  attackTaiwanDoingSoRequir2: {
    margin: 0,
  },
  iWillBeSurprisedIfChina3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontFamily: "Lato",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 346,
  },
  tomBNText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    top: 89,
    left: 48,
    width: 346,
    height: 34,
  },
  commentStrokeIcon: {
    position: "absolute",
    bottom: 141,
    left: 90,
    width: 18,
    height: 18,
  },
  groupIcon: {
    position: "absolute",
    top: 2,
    left: 328,
    width: 12,
    height: 20,
  },
  commentsPressable: {
    position: "absolute",
    transform: [
      {
        translateY: 67.5,
      },
    ],
    width: "105.07%",
    top: "50%",
    right: "-9.33%",
    left: "4.27%",
    height: 161,
  },
  iconmentions: {
    position: "absolute",
    top: 434,
    left: 25,
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  cT2View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 731,
    overflow: "hidden",
  },
});

export default CT2;
