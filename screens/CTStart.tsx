import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CTStart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cTStartView}>
      <View style={styles.groupView5}>
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
        <Text style={styles.researchNews}>{`Research & News`}</Text>
        <Pressable
          style={styles.reactionsPressable}
          onPress={() => navigation.navigate("CT2")}
        >
          <Text style={styles.reactionsText}>Reactions</Text>
        </Pressable>
        <Pressable
          style={styles.relatedPressable}
          onPress={() => navigation.navigate("CT3")}
        >
          <Text style={styles.relatedText}>Related</Text>
        </Pressable>
        <View style={styles.statisticsView}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-8.png")}
          />
          <Text style={styles.text5}>12%</Text>
          <View style={styles.groupView2}>
            <Text style={styles.text6}>12% Buy Yes</Text>
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
          </View>
          <View style={styles.groupView3}>
            <Text style={styles.text7}>88% Buy No</Text>
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
          </View>
          <View style={styles.groupView4}>
            <Text style={styles.text8}>1% No Resolve</Text>
            <View style={styles.rectangleView6} />
            <View style={styles.rectangleView7} />
          </View>
          <Text style={styles.text9}>215 Expert Opinion</Text>
        </View>
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
      <View style={styles.rectangleView8} />
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
      <View style={styles.frameView3}>
        <View style={styles.frameView2}>
          <View style={styles.frameView1}>
            <View style={styles.frameView}>
              <View style={styles.raggruppa23View}>
                <View style={styles.rettangolo93View} />
                <Image
                  style={styles.gruppoDiMaschere13ClippedIcon}
                  resizeMode="cover"
                  source={require("../assets/gruppo-di-maschere-13-clipped.png")}
                />
                <View style={styles.illumVelitNamVoluptatumEniView}>
                  <Text style={styles.illumVelitNamVoluptatumEni}>
                    Last week, the dire warnings that appeared in the Wall
                    Street Journal, The Economist and Foreign Affairs about
                    China's imminent war with or...
                  </Text>
                </View>
                <View style={styles.sept2020View}>
                  <Text style={styles.sept2020Text}>1 Sept</Text>
                </View>
                <Text style={styles.aPPLEText}>Thehill</Text>
              </View>
              <View style={styles.raggruppa23View1}>
                <View style={styles.rettangolo93View1} />
                <Image
                  style={styles.gruppoDiMaschere13ClippedIcon1}
                  resizeMode="cover"
                  source={require("../assets/gruppo-di-maschere-13-clipped1.png")}
                />
                <View style={styles.illumVelitNamVoluptatumEniView1}>
                  <Text style={styles.illumVelitNamVoluptatumEni1}>
                    Most people the BBC spoke to do not believe China is about
                    to attack Taiwan. "They're a bunch of gangsters," said one
                    man fishing on the...
                  </Text>
                </View>
                <View style={styles.sept2020View1}>
                  <Text style={styles.sept2020Text1}>1 Sept 2020</Text>
                </View>
                <Text style={styles.aPPLEText1}>BBC</Text>
              </View>
              <View style={styles.raggruppa23View2}>
                <View style={styles.rettangolo93View2} />
                <Image
                  style={styles.gruppoDiMaschere13ClippedIcon2}
                  resizeMode="cover"
                  source={require("../assets/gruppo-di-maschere-13-clipped1.png")}
                />
                <View style={styles.illumVelitNamVoluptatumEniView2}>
                  <Text style={styles.illumVelitNamVoluptatumEni2}>
                    Most people the BBC spoke to do not believe China is about
                    to attack Taiwan. "They're a bunch of gangsters," said one
                    man fishing on the...
                  </Text>
                </View>
                <View style={styles.sept2020View2}>
                  <Text style={styles.sept2020Text2}>1 Sept 2020</Text>
                </View>
                <Text style={styles.aPPLEText2}>BBC</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: "19.25%",
    top: "50%",
    right: "52.81%",
    left: "27.94%",
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
    left: 91.83,
    backgroundColor: "#e432c1",
    width: 120,
    height: 2,
  },
  researchNews: {
    position: "absolute",
    top: 573.67,
    left: 91.83,
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#e432c1",
    textAlign: "center",
    width: 120,
    height: 24,
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
  ellipseIcon: {
    position: "absolute",
    top: 33,
    left: 4,
    width: 77,
    height: 77,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 40,
    left: 11,
    width: 64,
    height: 64,
  },
  text5: {
    position: "absolute",
    transform: [
      {
        translateY: 7,
      },
    ],
    width: "8.7%",
    top: "50%",
    right: "83.17%",
    left: "8.12%",
    fontSize: 15,
    fontWeight: "900",
    fontFamily: "Lato",
    color: "#e432c1",
    textAlign: "center",
  },
  text6: {
    position: "absolute",
    transform: [
      {
        translateY: -6.5,
      },
    ],
    width: "42.06%",
    top: "50%",
    right: "0%",
    left: "57.94%",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#e432c1",
    textAlign: "center",
  },
  rectangleView2: {
    position: "absolute",
    top: 4,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#d9d9d9",
    width: 142,
    height: 6,
  },
  rectangleView3: {
    position: "absolute",
    top: 4,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#e432c1",
    width: 15,
    height: 6,
  },
  groupView2: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "68.09%",
    top: "50%",
    right: "2.9%",
    left: "29.01%",
    height: 13,
  },
  text7: {
    position: "absolute",
    transform: [
      {
        translateY: -6.5,
      },
    ],
    width: "42.24%",
    top: "50%",
    right: "0%",
    left: "57.76%",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "center",
  },
  rectangleView4: {
    position: "absolute",
    top: 5,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#d9d9d9",
    width: 142,
    height: 6,
  },
  rectangleView5: {
    position: "absolute",
    top: 5,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#687684",
    width: 125,
    height: 6,
  },
  groupView3: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
    ],
    width: "67.8%",
    top: "50%",
    right: "3.19%",
    left: "29.01%",
    height: 13,
  },
  text8: {
    position: "absolute",
    transform: [
      {
        translateY: -6.5,
      },
    ],
    width: "40.34%",
    top: "50%",
    right: "0%",
    left: "59.66%",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "center",
  },
  rectangleView6: {
    position: "absolute",
    top: 5,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#d9d9d9",
    width: 142,
    height: 6,
  },
  rectangleView7: {
    position: "absolute",
    top: 5,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#687684",
    width: 5,
    height: 6,
  },
  groupView4: {
    position: "absolute",
    transform: [
      {
        translateY: 30,
      },
    ],
    width: "70.99%",
    top: "50%",
    right: "0%",
    left: "29.01%",
    height: 13,
  },
  text9: {
    position: "absolute",
    transform: [
      {
        translateY: -55,
      },
    ],
    width: "54.83%",
    top: "50%",
    right: "45.17%",
    left: "0%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "left",
    height: 24,
  },
  statisticsView: {
    position: "absolute",
    top: 612.67,
    left: 82.83,
    width: 344.72,
    height: 110,
  },
  vectorIcon: {
    position: "absolute",
    top: 179.67,
    left: 64.83,
    width: 376,
    height: 303,
  },
  groupView5: {
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
  rectangleView8: {
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
  rettangolo93View: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 199,
    height: 89,
  },
  gruppoDiMaschere13ClippedIcon: {
    position: "absolute",
    top: 70,
    left: 179,
    width: 20,
    height: 19.23,
  },
  illumVelitNamVoluptatumEni: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    width: "101.99%",
    top: "50%",
    right: "-1.99%",
    left: "0%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    height: 12,
  },
  illumVelitNamVoluptatumEniView: {
    position: "absolute",
    top: 26,
    left: 12,
    width: 171,
    height: 59,
    overflow: "hidden",
  },
  sept2020Text: {
    position: "absolute",
    transform: [
      {
        translateY: -6,
      },
    ],
    width: "82.93%",
    top: "50%",
    right: "17.07%",
    left: "0%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Lato",
    color: "#080808",
    textAlign: "left",
    height: 12,
  },
  sept2020View: {
    position: "absolute",
    top: 5,
    left: 162,
    width: 41,
    height: 14,
    overflow: "hidden",
    opacity: 0.76,
  },
  aPPLEText: {
    position: "absolute",
    transform: [
      {
        translateY: -38.62,
      },
    ],
    width: "35.96%",
    top: "50%",
    right: "58.13%",
    left: "5.91%",
    fontSize: 11,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#2e2e2e",
    textAlign: "left",
    height: 16,
  },
  raggruppa23View: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 203,
    height: 89.23,
  },
  rettangolo93View1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 199,
    height: 89,
  },
  gruppoDiMaschere13ClippedIcon1: {
    position: "absolute",
    top: 71,
    left: 392,
    width: 20,
    height: 19.23,
  },
  illumVelitNamVoluptatumEni1: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    width: "101.99%",
    top: "50%",
    right: "-1.99%",
    left: "0%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    height: 12,
  },
  illumVelitNamVoluptatumEniView1: {
    position: "absolute",
    top: 26,
    left: 12,
    width: 171,
    height: 59,
    overflow: "hidden",
  },
  sept2020Text1: {
    position: "absolute",
    transform: [
      {
        translateY: -5.62,
      },
    ],
    width: "101.89%",
    top: "50%",
    right: "-1.89%",
    left: "0%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Lato",
    color: "#080808",
    textAlign: "left",
    height: 12,
  },
  sept2020View1: {
    position: "absolute",
    top: 8,
    left: 161,
    width: 40.77,
    height: 9.23,
    overflow: "hidden",
    opacity: 0.76,
  },
  aPPLEText1: {
    position: "absolute",
    transform: [
      {
        translateY: -38.62,
      },
    ],
    width: "36.18%",
    top: "50%",
    right: "57.87%",
    left: "5.95%",
    fontSize: 11,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#2e2e2e",
    textAlign: "left",
    height: 16,
  },
  raggruppa23View1: {
    position: "absolute",
    top: 1,
    left: 213,
    width: 201.77,
    height: 89.23,
  },
  rettangolo93View2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 199,
    height: 89,
  },
  gruppoDiMaschere13ClippedIcon2: {
    position: "absolute",
    top: 70,
    left: 179,
    width: 20,
    height: 19.23,
  },
  illumVelitNamVoluptatumEni2: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    width: "101.99%",
    top: "50%",
    right: "-1.99%",
    left: "0%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    height: 12,
  },
  illumVelitNamVoluptatumEniView2: {
    position: "absolute",
    top: 26,
    left: 12,
    width: 171,
    height: 59,
    overflow: "hidden",
  },
  sept2020Text2: {
    position: "absolute",
    transform: [
      {
        translateY: -5.62,
      },
    ],
    width: "101.89%",
    top: "50%",
    right: "-1.89%",
    left: "0%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Lato",
    color: "#080808",
    textAlign: "left",
    height: 12,
  },
  sept2020View2: {
    position: "absolute",
    top: 8,
    left: 161,
    width: 40.77,
    height: 9.23,
    overflow: "hidden",
    opacity: 0.76,
  },
  aPPLEText2: {
    position: "absolute",
    transform: [
      {
        translateY: -38.62,
      },
    ],
    width: "36.18%",
    top: "50%",
    right: "57.87%",
    left: "5.95%",
    fontSize: 11,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#2e2e2e",
    textAlign: "left",
    height: 16,
  },
  raggruppa23View2: {
    position: "absolute",
    top: 0,
    left: 431,
    width: 201.77,
    height: 89.23,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 632.77,
    height: 90.23,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 357,
    height: 90,
  },
  frameView2: {
    position: "absolute",
    top: 7,
    left: 18,
    width: 354,
    height: 96,
    overflow: "hidden",
  },
  frameView3: {
    position: "absolute",
    top: 549,
    left: 0,
    width: 688,
    height: 106,
    overflow: "hidden",
  },
  cTStartView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 731,
    overflow: "hidden",
  },
});

export default CTStart;
