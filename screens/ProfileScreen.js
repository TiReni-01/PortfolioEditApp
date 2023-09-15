import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; 

const ProfileScreen = ({ navigation, route }) => {
  // Define a state variable to hold the profile data
  const [profileData, setProfileData] = useState({
    fullName: 'Agboola Tireni',
    slackUsername: 'TiReni',
    githubHandle: 'TiReni_01',
    bio: 'Software developer passionate about coding and building',
  });

  // Use useFocusEffect to update the profile data when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // Check if updatedProfile parameter exists in the route
      if (route.params && route.params.updatedProfile) {
        // Update the profileData state with the updated values
        setProfileData(route.params.updatedProfile);
      }
    }, [route.params])
  );

  return (
    <View>
      <Text>Full Name: {profileData.fullName}</Text>
      <Text>Slack Username: {profileData.slackUsername}</Text>
      <Text>GitHub Handle: {profileData.githubHandle}</Text>
      <Text>Bio: {profileData.bio}</Text>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
    </View>
  );
};

export default ProfileScreen;


// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const ProfileScreen = ({ route, navigation }) => {
//   // Extract the updated user data from the navigation route
//   const { updatedUserData ={} } = route.params;

//   // Function to navigate to the EditProfileScreen
//   const goToEditProfile = () => {
//     navigation.navigate('EditProfile');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Full Name:</Text>
//       <Text style={styles.value}>{updatedUserData.fullName}</Text>

//       <Text style={styles.title}>Slack Username:</Text>
//       <Text style={styles.value}>{updatedUserData.slackUsername}</Text>

//       <Text style={styles.title}>GitHub Handle:</Text>
//       <Text style={styles.value}>{updatedUserData.githubHandle}</Text>

//       <Text style={styles.title}>A Brief Personal Bio:</Text>
//       <Text style={styles.value}>{updatedUserData.bio}</Text>

//       {/* Button to navigate to EditProfileScreen */}
//       <Button title="Edit Profile" onPress={goToEditProfile} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
// });

// export default ProfileScreen;

// // import React from 'react';
// // import { View, Text, Button, StyleSheet } from 'react-native';

// // const ProfileScreen = ({ navigation }) => {

// //   const { updatedUserData } = route.params;

// //   return (
// //     <View style={styles.container}>
// //       {/* Display user information here */}
 
// //       <Text style={styles.title}>Full Name:</Text>
// //       <Text style={styles.value}>{updatedUserData.fullName}</Text>

// //       <Text style={styles.title}>Slack Username:</Text>
// //       <Text style={styles.value}>{updatedUserData.slackUsername}</Text>

// //       <Text style={styles.title}>GitHub Handle:</Text>
// //       <Text style={styles.value}>{updatedUserData.githubHandle}</Text>

// //       <Text style={styles.title}>A Brief Personal Bio:</Text>
// //       <Text style={styles.value}>{updatedUserData.bio}</Text>
   
// //       {/* Button to navigate to EditProfileScreen */}
// //       <Button
// //         title="Edit Profile"
// //         onPress={() => navigation.navigate('EditProfile')}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //   },
// //   value: {
// //     fontSize: 16,
// //     marginBottom: 16,
// //   },
// // });

// // export default ProfileScreen;

// // import React from 'react';
// // import { View, Text, StyleSheet, Button } from 'react-native';

// // const ProfileScreen = ({navigation}) => {
// //   // Sample data for the user's information
// //   const userData = {
// //     fullName: 'John Doe',
// //     slackUsername: 'john_doe',
// //     githubHandle: 'johndoe123',
// //     bio: 'Software developer passionate about coding and building awesome apps.',
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Full Name:</Text>
// //       <Text style={styles.value}>{userData.fullName}</Text>

// //       <Text style={styles.title}>Slack Username:</Text>
// //       <Text style={styles.value}>{userData.slackUsername}</Text>

// //       <Text style={styles.title}>GitHub Handle:</Text>
// //       <Text style={styles.value}>{userData.githubHandle}</Text>

// //       <Text style={styles.title}>A Brief Personal Bio:</Text>
// //       <Text style={styles.value}>{userData.bio}</Text>

// //       <Button
// //           title='Edit'
// //           onPress={() => navigation.navigate('Edit')}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //   },
// //   value: {
// //     fontSize: 16,
// //     marginBottom: 16,
// //   },
// // });

// // export default ProfileScreen;
