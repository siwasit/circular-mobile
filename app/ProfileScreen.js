import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileCard}>
          <View style={styles.top}>
            <View style={styles.picture}>
              <Image source={require('/Home/Pic/Picture.png')} style={styles.pictureImage} />
            </View>
            <View style={styles.info}>
              <View style={styles.name}>
                <Text style={styles.firstName}>PUTTHIPONG</Text>
                <Text style={styles.lastName}>SOONGSUWAN</Text>
              </View>
              <View style={styles.school}>
                <Image source={require('/Profile/Pic/Main-Logo.png')} style={styles.schoolLogo} />
                <View style={styles.schoolInfo}>
                  <Text style={styles.fieldOfStudy}>SOFTWARE ENGINEERING</Text>
                  <Text style={styles.schoolName}>THAMMASAT SCHOOL OF ENGINEERING</Text>
                </View>
              </View>
              <View style={styles.details}>
                <View style={styles.detailTab}>
                  <Text style={styles.detailNum}>6510742460</Text>
                  <Text style={styles.detailLabel}>STUDENT ID</Text>
                </View>
                <View style={styles.detailTab}>
                  <Text style={styles.detailNum}>3.xx</Text>
                  <Text style={styles.detailLabel}>G.P.A.</Text>
                </View>
                <View style={styles.detailTab}>
                  <Text style={styles.detailNum}>57</Text>
                  <Text style={styles.detailLabel}>CREDITS</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <Image source={require('/Home/Pic/men.jpeg')} style={styles.bottomImage} />
            <View style={styles.tab}>
              <Text style={styles.professor}>ASS.PROF.DR. xxxxxxx xxxxxxx</Text>
              <Text style={styles.schoolInfo}>THAMMASAT SCHOOL OF ENGINEERING</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailTab}>
            <Image source={require('/Profile/Pic/Vector1.png')} style={styles.detailIcon} />
            <Text style={styles.detailName}>PAYMENT LIST</Text>
            <Image source={require('/Profile/Pic/Vector.png')} style={styles.detailArrow} />
          </View>
          <View style={styles.detailTab}>
            <Image source={require('/Profile/Pic/Vector2.png')} style={styles.detailIcon} />
            <Text style={styles.detailName}>CALENDAR</Text>
            <Image source={require('/Profile/Pic/Vector.png')} style={styles.detailArrow} />
          </View>
          <View style={styles.detailTab}>
            <Image source={require('/Profile/Pic/Vector3.png')} style={styles.detailIcon} />
            <Text style={styles.detailName}>SETTING</Text>
            <Image source={require('/Profile/Pic/Vector.png')} style={styles.detailArrow} />
          </View>
          <View style={styles.detailTab}>
            <Image source={require('/Profile/Pic/Vector4.png')} style={styles.detailIcon} />
            <Text style={styles.detailName}>SIGN OUT</Text>
            <Image source={require('/Profile/Pic/Vector.png')} style={styles.detailArrow} />
          </View>
        </View>

        <Image source={require('/Profile/Pic/card-id.png')} style={styles.cardImage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileCard: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 32,
    overflow: 'hidden',
    paddingBottom: 7,
  },
  top: {
    flexDirection: 'row',
  },
  picture: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureImage: {
    height: 174,
    width: 174,
  },
  info: {
    marginLeft: 10,
    marginTop: 15,
  },
  name: {
    marginBottom: 5,
  },
  firstName: {
    color: 'black',
    fontSize: 26,
    fontFamily: 'Imprima',
    fontWeight: '600',
  },
  lastName: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Imprima',
    fontWeight: '300',
  },
  school: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  schoolLogo: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  fieldOfStudy: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 9,
  },
  schoolName: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 6,
  },
  details: {
    flexDirection: 'row',
    marginTop: 7,
  },
  detailTab: {
    alignItems: 'center',
    marginRight: 10,
  },
  detailNum: {
    fontSize: 15,
  },
  detailLabel: {
    fontSize: 8,
    fontFamily: 'Kanit',
    fontWeight: '300',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 249, 249, 1)',
    borderRadius: 20,
    marginHorizontal: 19,
    marginTop: 10,
  },
  bottomImage: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  tab: {
    marginVertical: 5,
  },
  professor: {
    fontSize: 10,
    fontFamily: 'Kanit',
    fontWeight: '400',
  },
  schoolInfo: {
    fontSize: 8,
    fontFamily: 'Kanit',
    fontWeight: '300',
  },
  detailsContainer: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    borderRadius: 20,
    height: 128,
    marginTop: 16,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  detailIcon: {
    height: 20,
    width: 20,
  },
  detailName: {
    fontSize: 14,
    fontFamily: 'Kanit',
    fontWeight: '400',
  },
  detailArrow: {
    height: 15,
    width: 15,
  },
  cardImage: {
    marginTop: 16,
    width: 350,
    height: 'auto',
  },
});

export default ProfileScreen;

