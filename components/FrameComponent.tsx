import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent = ({ onClose }: FrameComponentType) => {
  return (
    <View style={styles.frameView5}>
      <View style={styles.icons8Cancel5View}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image3.png")}
        />
      </View>
      <Text style={styles.relatedText}>Related</Text>
      <View style={styles.groupView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.topText}>Top</Text>
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView2} />
        <Text style={styles.newestText}>Newest</Text>
      </View>
      <View style={styles.rectangleView3} />
      <Image
        style={styles.linea4Icon}
        resizeMode="cover"
        source={require("../assets/linea-4.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <View style={styles.frameView4}>
        <View style={styles.frameView3}>
          <View style={styles.frameView2}>
            <View style={styles.frameView1}>
              <View style={styles.frameView}>
                <View style={styles.groupView2}>
                  <View style={styles.mediaView}>
                    <View style={styles.backgroundView} />
                    <Image
                      style={styles.rectangleIcon}
                      resizeMode="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Image
                      style={styles.x11Icon}
                      resizeMode="cover"
                      source={require("../assets/1200x1-1.png")}
                    />
                    <View style={styles.rectangleView4} />
                    <Text style={styles.lizTrussWillBeUKsNextPr}>
                      <Text style={styles.lizTrussWill}>
                        Liz Truss will be UK’s next
                      </Text>
                      <Text style={styles.primeMinisterText}>
                        Prime Minister?
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.mediaView1}>
                    <View style={styles.backgroundView1} />
                    <Image
                      style={styles.rectangleIcon1}
                      resizeMode="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Image
                      style={styles.x11Icon1}
                      resizeMode="cover"
                      source={require("../assets/1200x1-1.png")}
                    />
                    <View style={styles.rectangleView5} />
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
                  <View style={styles.mediaView2}>
                    <View style={styles.backgroundView2} />
                    <Image
                      style={styles.rectangleIcon2}
                      resizeMode="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Image
                      style={styles.x11Icon2}
                      resizeMode="cover"
                      source={require("../assets/1200x1-1.png")}
                    />
                    <View style={styles.rectangleView6} />
                    <Image
                      style={styles.image1Icon1}
                      resizeMode="cover"
                      source={require("../assets/image-1.png")}
                    />
                    <Text style={styles.britishRailwayStrikesWillE}>
                      <Text style={styles.britishRailwayStrikes}>
                        British Railway Strikes will
                      </Text>
                      <Text style={styles.endByBefore}>
                        end by before Sept. 2022?
                      </Text>
                    </Text>
                    <Image
                      style={styles.image2Icon}
                      resizeMode="cover"
                      source={require("../assets/image-2.png")}
                    />
                  </View>
                  <View style={styles.mediaView3}>
                    <View style={styles.backgroundView3} />
                    <Image
                      style={styles.rectangleIcon3}
                      resizeMode="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Image
                      style={styles.x11Icon3}
                      resizeMode="cover"
                      source={require("../assets/1200x1-1.png")}
                    />
                    <View style={styles.rectangleView7} />
                    <Text style={styles.lizTrussWillBeUKsNextPr1}>
                      <Text style={styles.lizTrussWill1}>
                        Liz Truss will be UK’s next
                      </Text>
                      <Text style={styles.primeMinisterText1}>
                        Prime Minister?
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.mediaView4}>
                    <View style={styles.backgroundView4} />
                    <Image
                      style={styles.rectangleIcon4}
                      resizeMode="cover"
                      source={require("../assets/rectangle4.png")}
                    />
                    <Image
                      style={styles.x11Icon4}
                      resizeMode="cover"
                      source={require("../assets/1200x1-14.png")}
                    />
                    <View style={styles.rectangleView8} />
                    <Image
                      style={styles.image1Icon2}
                      resizeMode="cover"
                      source={require("../assets/image-12.png")}
                    />
                    <Text style={styles.britishPoundWillFallAfter1}>
                      <Text style={styles.britishPoundWill1}>
                        British Pound will fall after
                      </Text>
                      <Text style={styles.primeMinisterElections1}>
                        Prime Minister elections?
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.mediaView5}>
                    <View style={styles.backgroundView5} />
                    <Image
                      style={styles.rectangleIcon5}
                      resizeMode="cover"
                      source={require("../assets/rectangle4.png")}
                    />
                    <Image
                      style={styles.x11Icon5}
                      resizeMode="cover"
                      source={require("../assets/1200x1-14.png")}
                    />
                    <View style={styles.rectangleView9} />
                    <Image
                      style={styles.image1Icon3}
                      resizeMode="cover"
                      source={require("../assets/image-12.png")}
                    />
                    <Text style={styles.britishRailwayStrikesWillE1}>
                      <Text style={styles.britishRailwayStrikes1}>
                        British Railway Strikes will
                      </Text>
                      <Text style={styles.endByBefore1}>
                        end by before Sept. 2022?
                      </Text>
                    </Text>
                    <Image
                      style={styles.image2Icon1}
                      resizeMode="cover"
                      source={require("../assets/image-21.png")}
                    />
                  </View>
                </View>
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
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 348,
  },
  image3Icon: {
    position: "absolute",
    top: 19,
    left: 341,
    width: 26,
    height: 26,
  },
  icons8Cancel5View: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 348,
  },
  relatedText: {
    position: "absolute",
    top: 20,
    left: 15,
    fontSize: 20,
    letterSpacing: -0.3,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "left",
    width: 70,
    height: 24,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#2b2828",
    width: 51,
    height: 21,
  },
  topText: {
    position: "absolute",
    top: 0,
    left: 8,
    fontSize: 15,
    letterSpacing: -0.3,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "center",
    width: 36,
    height: 21,
  },
  groupView: {
    position: "absolute",
    top: 59,
    left: 15,
    width: 51,
    height: 21,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#7d7d7d",
    width: 69,
    height: 21,
  },
  newestText: {
    position: "absolute",
    top: 0,
    left: 8,
    fontSize: 15,
    letterSpacing: -0.3,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "center",
    width: 53,
    height: 21,
  },
  groupView1: {
    position: "absolute",
    top: 59,
    left: 79,
    width: 69,
    height: 21,
  },
  rectangleView3: {
    position: "absolute",
    top: 7,
    left: 148,
    borderRadius: 6,
    backgroundColor: "#d9d9d9",
    width: 80,
    height: 4,
  },
  linea4Icon: {
    position: "absolute",
    top: 94.5,
    left: 0,
    width: 375,
    height: 2,
    opacity: 0.08,
  },
  ellipseIcon: {
    position: "absolute",
    top: 202,
    left: 105,
    width: 2,
    height: 2,
  },
  backgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 347,
    height: 69,
  },
  rectangleIcon: {
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
    left: 1,
    width: 347,
    height: 69,
  },
  backgroundView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 347,
    height: 69,
  },
  rectangleIcon1: {
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
  rectangleView5: {
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
    left: 1,
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
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74.22,
    height: 69,
  },
  x11Icon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74,
    height: 80.09,
  },
  rectangleView6: {
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
  image1Icon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 123,
    height: 69,
  },
  britishRailwayStrikes: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  endByBefore: {
    margin: 0,
  },
  britishRailwayStrikesWillE: {
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
  image2Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 84,
    height: 71,
  },
  mediaView2: {
    position: "absolute",
    top: 162,
    left: 1,
    width: 347,
    height: 69,
  },
  backgroundView3: {
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
  x11Icon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74,
    height: 80.09,
  },
  rectangleView7: {
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
  lizTrussWill1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  primeMinisterText1: {
    margin: 0,
  },
  lizTrussWillBeUKsNextPr1: {
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
  mediaView3: {
    position: "absolute",
    top: 243,
    left: 0,
    width: 347,
    height: 69,
  },
  backgroundView4: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 347,
    height: 69,
  },
  rectangleIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74.22,
    height: 69,
  },
  x11Icon4: {
    position: "absolute",
    top: -1.23,
    left: 0,
    width: 74,
    height: 80.09,
  },
  rectangleView8: {
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
  image1Icon2: {
    position: "absolute",
    top: 0,
    left: -49,
    width: 123,
    height: 69,
  },
  britishPoundWill1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  primeMinisterElections1: {
    margin: 0,
  },
  britishPoundWillFallAfter1: {
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
  mediaView4: {
    position: "absolute",
    top: 324,
    left: 0,
    width: 347,
    height: 69,
  },
  backgroundView5: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 347,
    height: 69,
  },
  rectangleIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 74.22,
    height: 69,
  },
  x11Icon5: {
    position: "absolute",
    top: -1.23,
    left: 0,
    width: 74,
    height: 80.09,
  },
  rectangleView9: {
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
  image1Icon3: {
    position: "absolute",
    top: 0,
    left: -49,
    width: 123,
    height: 69,
  },
  britishRailwayStrikes1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  endByBefore1: {
    margin: 0,
  },
  britishRailwayStrikesWillE1: {
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
  image2Icon1: {
    position: "absolute",
    top: -1,
    left: -10,
    width: 84,
    height: 71,
  },
  mediaView5: {
    position: "absolute",
    top: 405,
    left: 0,
    width: 347,
    height: 69,
  },
  groupView2: {
    position: "absolute",
    top: 16,
    left: 15,
    width: 348,
    height: 474,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 507,
    overflow: "hidden",
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 341,
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 341,
  },
  frameView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 341,
  },
  frameView4: {
    position: "absolute",
    top: 96,
    left: 0,
    width: 375,
    height: 330,
  },
  frameView5: {
    position: "relative",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "#fff",
    width: 375,
    height: 426,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default FrameComponent;
