import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

type FrameComponent1Type = {
  onClose?: () => void;
};

const FrameComponent1 = ({ onClose }: FrameComponent1Type) => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameView3}>
      <Pressable
        style={styles.icons8Cancel5Pressable}
        onPress={() => navigation.navigate("CT2")}
      >
        <View style={styles.rectangleView} />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image3.png")}
        />
      </Pressable>
      <Text style={styles.reactionsText}>Reactions</Text>
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
        style={styles.linea4Icon1}
        resizeMode="cover"
        source={require("../assets/linea-4.png")}
      />
      <Image
        style={styles.linea4Icon2}
        resizeMode="cover"
        source={require("../assets/linea-4.png")}
      />
      <View style={styles.groupView2}>
        <View style={styles.nextAvatarView}>
          <Text style={styles.addCommentText}>Add comment...</Text>
        </View>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
        <Image
          style={styles.roundIcon}
          resizeMode="cover"
          source={require("../assets/round.png")}
        />
      </View>
      <View style={styles.rectangleView4} />
      <Text style={styles.rememberToKeepCommentsResp}>
        <Text
          style={styles.rememberToKeep}
        >{`Remember to keep comments respectful and to follow our `}</Text>
        <Text style={styles.communityGuidelinesText}>Community Guidelines</Text>
      </Text>
      <View style={styles.frameView} />
      <View style={styles.frameView2}>
        <View style={styles.frameView1}>
          <View style={styles.groupView4}>
            <Image
              style={styles.avatarIcon}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
            <Image
              style={styles.avatarIcon1}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
            <View style={styles.groupView3}>
              <Text style={styles.ifChinaDoesIndeedAttackTa}>
                <Text style={styles.ifChinaDoes}>
                  If China does indeed attack Taiwan soon, October is
                </Text>
                <Text style={styles.theLikelyTime}>
                  the likely time since the Taiwan Strait waters will be
                </Text>
                <Text style={styles.calmFacilitatingAmphibious}>
                  calm, facilitating amphibious operations.
                </Text>
                <Text style={styles.theDrillsAround}>
                  The drills around Taiwan allowed China to build up
                </Text>
                <Text style={styles.forcesInFujian}>
                  forces in Fujian, which is part of what's needed
                </Text>
                <Text style={styles.beforeAnInvasion}>before an invasion.</Text>
              </Text>
              <Text style={styles.profalison1hAgo}>Prof.alison 1h ago</Text>
            </View>
            <Text style={styles.rEPLIESText}>5 REPLIES</Text>
            <Image
              style={styles.hiconOutlineLike}
              resizeMode="cover"
              source={require("../assets/hicon--outline--like.png")}
            />
            <Image
              style={styles.hiconOutlineDislike}
              resizeMode="cover"
              source={require("../assets/hicon--outline--dislike.png")}
            />
            <Image
              style={styles.hiconOutlineLike3}
              resizeMode="cover"
              source={require("../assets/hicon--outline--like-3.png")}
            />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-13.png")}
            />
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-14.png")}
            />
          </View>
          <View style={styles.groupView7}>
            <Image
              style={styles.roundIcon1}
              resizeMode="cover"
              source={require("../assets/round1.png")}
            />
            <View style={styles.groupView6}>
              <View style={styles.groupView5}>
                <Text style={styles.iWillBeSurprisedIfChina}>
                  <Text style={styles.iWillBe}>
                    I will be surprised if #China will in fact attack Taiwan.
                  </Text>
                  <Text style={styles.doingSoRequires}>
                    Doing so requires lots of courage, which China lacks.
                  </Text>
                </Text>
                <Text style={styles.tomBN3hAgo}>TomBN 3h ago</Text>
              </View>
              <Text style={styles.rEPLIESText1}>1 REPLIES</Text>
              <Image
                style={styles.hiconOutlineLike1}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like1.png")}
              />
              <Image
                style={styles.hiconOutlineDislike1}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like1.png")}
              />
              <Image
                style={styles.hiconOutlineLike4}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like1.png")}
              />
              <Image
                style={styles.ellipseIcon2}
                resizeMode="cover"
                source={require("../assets/ellipse-13.png")}
              />
              <Image
                style={styles.avatar1Icon}
                resizeMode="cover"
                source={require("../assets/avatar-1.png")}
              />
            </View>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-142.png")}
            />
          </View>
          <View style={styles.groupView10}>
            <View style={styles.groupView9}>
              <View style={styles.groupView8}>
                <Text style={styles.scaryThingsGoingOnInTheW}>
                  scary things going on in the world
                </Text>
                <Text style={styles.david1dAgo}>David 1d ago</Text>
              </View>
              <Image
                style={styles.roundIcon2}
                resizeMode="cover"
                source={require("../assets/round2.png")}
              />
              <Image
                style={styles.hiconOutlineLike2}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.hiconOutlineDislike2}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.hiconOutlineLike41}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
            </View>
            <Image
              style={styles.ellipseIcon4}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
            <Image
              style={styles.ellipseIcon5}
              resizeMode="cover"
              source={require("../assets/ellipse-143.png")}
            />
          </View>
          <View style={styles.groupView13}>
            <View style={styles.groupView12}>
              <View style={styles.groupView11}>
                <Text style={styles.moreAustraliansThinkThatCh}>
                  <Text style={styles.moreAustraliansThink}>
                    More Australians think that China will attack Australia
                  </Text>
                  <Text style={styles.thanTaiwaneseBelieve}>
                    than Taiwanese believe China will attack Taiwan
                  </Text>
                </Text>
                <Text style={styles.pik9hAgo}>Pik 9h ago</Text>
              </View>
              <Text style={styles.rEPLIESText2}>1 REPLIES</Text>
              <Image
                style={styles.hiconOutlineLike5}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.hiconOutlineDislike3}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.hiconOutlineLike42}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.roundIcon3}
                resizeMode="cover"
                source={require("../assets/round2.png")}
              />
            </View>
            <Image
              style={styles.ellipseIcon6}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
            <Image
              style={styles.ellipseIcon7}
              resizeMode="cover"
              source={require("../assets/ellipse-143.png")}
            />
          </View>
          <View style={styles.groupView16}>
            <View style={styles.groupView15}>
              <View style={styles.avatarView} />
              <View style={styles.groupView14}>
                <Text style={styles.thePentagonHasNotChangedI}>
                  <Text style={styles.thePentagonHas}>
                    The Pentagon has not changed its assessment that
                  </Text>
                  <Text style={styles.chinaIsNot}>
                    China is not planning to invade Taiwan in the next two
                  </Text>
                  <Text style={styles.yearsTheDefense}>
                    years, the Defense Department’s top policy office said
                    Monday, despite Beijing’s launching unprecedented
                  </Text>
                  <Text style={styles.militaryDrillsAround}>
                    military drills around the island last week.
                  </Text>
                  <Text style={styles.inAnswerTo}>
                    In answer to a question about whether the military has
                  </Text>
                  <Text style={styles.aNewAssessment}>
                    a new assessment as to whether China will take Taiwan
                  </Text>
                  <Text style={styles.byForceIn}>
                    by force in the next two years given the events of the
                  </Text>
                  <Text style={styles.lastWeekColin}>
                    last week, Colin Kahl, the undersecretary of defense for
                    policy, said succinctly: “No.”
                  </Text>
                </Text>
                <Text style={styles.profalison9hAgo}>Prof.alison 9h ago</Text>
              </View>
              <Text style={styles.rEPLIESText3}>23 REPLIES</Text>
              <Image
                style={styles.hiconOutlineLike6}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.hiconOutlineDislike4}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
              <Image
                style={styles.hiconOutlineLike43}
                resizeMode="cover"
                source={require("../assets/hicon--outline--like2.png")}
              />
            </View>
            <Image
              style={styles.roundIcon4}
              resizeMode="cover"
              source={require("../assets/round4.png")}
            />
            <Image
              style={styles.roundIcon5}
              resizeMode="cover"
              source={require("../assets/round4.png")}
            />
            <Image
              style={styles.ellipseIcon8}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
            <Image
              style={styles.ellipseIcon9}
              resizeMode="cover"
              source={require("../assets/ellipse-145.png")}
            />
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
  icons8Cancel5Pressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 348,
  },
  reactionsText: {
    position: "absolute",
    top: 20,
    left: 9,
    fontSize: 20,
    letterSpacing: -0.3,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#687684",
    textAlign: "center",
    width: 98,
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
  linea4Icon1: {
    position: "absolute",
    top: 182.5,
    left: 0,
    width: 375,
    height: 2,
    opacity: 0.08,
  },
  linea4Icon2: {
    position: "absolute",
    top: 125.5,
    left: 0,
    width: 375,
    height: 2,
    opacity: 0.08,
  },
  addCommentText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontFamily: "Lato",
    color: "#999",
    textAlign: "left",
    width: 94,
    height: 16,
  },
  nextAvatarView: {
    position: "absolute",
    top: 7,
    left: 58,
    width: 94,
    height: 16,
  },
  icon: {
    position: "absolute",
    top: 12.75,
    left: 329.75,
    width: 10.23,
    height: 10.5,
  },
  roundIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  groupView2: {
    position: "absolute",
    top: 137,
    left: 19,
    width: 339.73,
    height: 40,
  },
  rectangleView4: {
    position: "absolute",
    top: 96,
    left: 0,
    backgroundColor: "#f8f8f8",
    width: 375,
    height: 32,
  },
  rememberToKeep: {
    color: "#000",
  },
  communityGuidelinesText: {
    color: "#1a73fd",
  },
  rememberToKeepCommentsResp: {
    position: "absolute",
    top: 98.13,
    left: 15,
    fontSize: 11,
    lineHeight: 13,
    fontFamily: "Lato",
    textAlign: "left",
    width: 346,
    height: 27.73,
  },
  frameView: {
    position: "absolute",
    top: 190,
    left: 6,
    width: 365,
    height: 754,
  },
  avatarIcon: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 22.45,
    height: 22.45,
  },
  avatarIcon1: {
    position: "absolute",
    top: 381,
    left: 10,
    width: 22.45,
    height: 22.45,
  },
  ifChinaDoes: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theLikelyTime: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  calmFacilitatingAmphibious: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theDrillsAround: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  forcesInFujian: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  beforeAnInvasion: {
    margin: 0,
  },
  ifChinaDoesIndeedAttackTa: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    width: 346,
  },
  profalison1hAgo: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 35,
    width: 346,
    height: 112,
  },
  rEPLIESText: {
    position: "absolute",
    top: 139,
    left: 36,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: "Lato",
    color: "#1a73fd",
    textAlign: "left",
    width: 52,
  },
  hiconOutlineLike: {
    position: "absolute",
    top: 120,
    left: 35,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineDislike: {
    position: "absolute",
    top: 120,
    left: 58,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineLike3: {
    position: "absolute",
    top: 120,
    left: 81,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  ellipseIcon: {
    position: "absolute",
    top: 12,
    left: 99,
    width: 2,
    height: 2,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 28,
    height: 28,
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 6,
    width: 381,
    height: 403.45,
  },
  roundIcon1: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 23,
    height: 23,
  },
  iWillBe: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  doingSoRequires: {
    margin: 0,
  },
  iWillBeSurprisedIfChina: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    width: 346,
  },
  tomBN3hAgo: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 32,
    width: 346,
    height: 52,
  },
  rEPLIESText1: {
    position: "absolute",
    top: 77,
    left: 33,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: "Lato",
    color: "#1a73fd",
    textAlign: "left",
    width: 52,
  },
  hiconOutlineLike1: {
    position: "absolute",
    top: 58,
    left: 32,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineDislike1: {
    position: "absolute",
    top: 58,
    left: 55,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineLike4: {
    position: "absolute",
    top: 58,
    left: 78,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 11,
    left: 79,
    width: 2,
    height: 2,
  },
  avatar1Icon: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 23,
    height: 23,
  },
  groupView6: {
    position: "absolute",
    top: 0,
    left: 3,
    width: 378,
    height: 90,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 29,
    height: 29,
  },
  groupView7: {
    position: "absolute",
    top: 167,
    left: 6,
    width: 381,
    height: 90,
  },
  scaryThingsGoingOnInTheW: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    width: 346,
  },
  david1dAgo: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 32,
    width: 346,
    height: 37,
  },
  roundIcon2: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 23,
    height: 23,
  },
  hiconOutlineLike2: {
    position: "absolute",
    top: 46,
    left: 32,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineDislike2: {
    position: "absolute",
    top: 46,
    left: 55,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineLike41: {
    position: "absolute",
    top: 46,
    left: 78,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  groupView9: {
    position: "absolute",
    top: 0,
    left: 3,
    width: 378,
    height: 59,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 11,
    left: 72,
    width: 2,
    height: 2,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 29,
    height: 29,
  },
  groupView10: {
    position: "absolute",
    top: 604,
    left: 6,
    width: 381,
    height: 59,
  },
  moreAustraliansThink: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  thanTaiwaneseBelieve: {
    margin: 0,
  },
  moreAustraliansThinkThatCh: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    width: 346,
  },
  pik9hAgo: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView11: {
    position: "absolute",
    top: 0,
    left: 33,
    width: 346,
    height: 52,
  },
  rEPLIESText2: {
    position: "absolute",
    top: 77,
    left: 34,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: "Lato",
    color: "#1a73fd",
    textAlign: "left",
    width: 52,
  },
  hiconOutlineLike5: {
    position: "absolute",
    top: 58,
    left: 33,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineDislike3: {
    position: "absolute",
    top: 58,
    left: 56,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineLike42: {
    position: "absolute",
    top: 58,
    left: 79,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  roundIcon3: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 23,
    height: 23,
  },
  groupView12: {
    position: "absolute",
    top: 1,
    left: 3,
    width: 379,
    height: 90,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 12,
    left: 59,
    width: 2,
    height: 2,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 29,
    height: 29,
  },
  groupView13: {
    position: "absolute",
    top: 272,
    left: 5,
    width: 382,
    height: 91,
  },
  avatarView: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 22.45,
    height: 22.45,
  },
  thePentagonHas: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  chinaIsNot: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yearsTheDefense: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  militaryDrillsAround: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  inAnswerTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  aNewAssessment: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  byForceIn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lastWeekColin: {
    margin: 0,
  },
  thePentagonHasNotChangedI: {
    position: "absolute",
    top: 22,
    left: 0,
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
    width: 346,
  },
  profalison9hAgo: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 32,
    width: 346,
    height: 172,
  },
  rEPLIESText3: {
    position: "absolute",
    top: 198,
    left: 33,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: "Lato",
    color: "#1a73fd",
    textAlign: "left",
    width: 60,
  },
  hiconOutlineLike6: {
    position: "absolute",
    top: 179,
    left: 32,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineDislike4: {
    position: "absolute",
    top: 179,
    left: 55,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  hiconOutlineLike43: {
    position: "absolute",
    top: 179,
    left: 78,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  groupView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 378,
    height: 211,
  },
  roundIcon4: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 22,
    height: 22,
  },
  roundIcon5: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 22,
    height: 22,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 11,
    left: 98,
    width: 2,
    height: 2,
  },
  ellipseIcon9: {
    position: "absolute",
    top: 0,
    left: -3,
    width: 28,
    height: 28,
    display: "none",
  },
  groupView16: {
    position: "absolute",
    top: 378,
    left: 9,
    width: 378,
    height: 211,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 361,
    height: 548,
  },
  frameView2: {
    position: "absolute",
    top: 190,
    left: 6,
    width: 361,
    height: 225,
  },
  frameView3: {
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

export default FrameComponent1;
