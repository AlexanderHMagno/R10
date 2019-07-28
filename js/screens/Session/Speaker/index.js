import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Image,
  Linking,
  ScrollView
} from "react-native";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";

let Modalito = props => {
  const { toggle, visible, speaker } = props;
  const { name, bio, image, url } = speaker;
  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={visible}>
        <View
          style={{
            flex: 1,
            backgroundColor: "black"
          }}
        >
          <View style={styles.titleContainer}>
            <TouchableHighlight
              onPress={() => {
                toggle();
              }}
              style={{ flex: 1 }}
            >
              <Text style={[styles.modalTitle]}>X</Text>
            </TouchableHighlight>
            <Text style={[styles.modalTitle, { flex: 3 }]}>
              About the speaker
            </Text>
          </View>
          <View style={{ flex: 9 }}>
            <ScrollView>
              <View style={styles.speakerContainer}>
                <Image style={styles.imageSpeaker} source={{ uri: image }} />
                <Text style={styles.nameSpeaker}>{name}</Text>
                <Text style={styles.bio}>{bio}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(url)}>
                  <LinearGradient
                    colors={["#9963ea", "#3b5998", "#192f6a"]}
                    // start={{ x: 1.0, y: 0.0 }}
                    // end={{ x: 0.0, y: 1.0 }}
                    style={[styles.button]}
                  >
                    <Text style={styles.buttonText}>
                      Read more on Wikipedia
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modalito;
