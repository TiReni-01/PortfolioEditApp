import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: 'Agboola Tireni',
    slackUsername: 'TiReni',
    githubHandle: 'TiReni_01',
    bio: 'Software developer passionate about coding and building',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const saveProfile = () => {
    // Implement logic to save the edited profile data here
    // You can send this formData to an API or store it locally as needed
    // For now, we'll simply navigate back to the ProfileScreen

     navigation.navigate('Profile', { updatedProfile: formData });
  };

  return (
    <View>
      <Text>Edit Profile</Text>
      <TextInput
        placeholder="Full Name"
        value={formData.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      <TextInput
        placeholder="Slack Username"
        value={formData.slackUsername}
        onChangeText={(text) => handleInputChange('slackUsername', text)}
      />
      <TextInput
        placeholder="GitHub Handle"
        value={formData.githubHandle}
        onChangeText={(text) => handleInputChange('githubHandle', text)}
      />
      <TextInput
        placeholder="Bio"
        value={formData.bio}
        onChangeText={(text) => handleInputChange('bio', text)}
      />
      <Button title="Save" onPress={saveProfile} />
    </View>
  );
};

export default EditProfileScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const EditProfileScreen = ({ navigation }) => {
//   // Sample initial user data (you can replace this with your actual data)
//   const initialUserData = {
//     fullName: 'John Doe',
//     slackUsername: 'john_doe',
//     githubHandle: 'johndoe123',
//     bio: 'Software developer passionate about coding and building awesome apps.',
//   };

//   // State variables to store edited user data
//   const [editedData, setEditedData] = useState(initialUserData);

//   // Function to update user data when input fields change
//   const handleInputChange = (field, value) => {
//     setEditedData({
//       ...editedData,
//       [field]: value,
//     });
//   };

//   // Function to save the edited data and navigate back to the profile screen
//   const saveChanges = () => {
//     // You can implement logic to save the data to your backend or storage here
//     // For simplicity, we'll just navigate back to the profile screen with the updated data
//     navigation.navigate('Profile', { updatedUserData: editedData });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Full Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={editedData.fullName}
//         onChangeText={(text) => handleInputChange('fullName', text)}
//       />

//       <Text style={styles.title}>Slack Username:</Text>
//       <TextInput
//         style={styles.input}
//         value={editedData.slackUsername}
//         onChangeText={(text) => handleInputChange('slackUsername', text)}
//       />

//       <Text style={styles.title}>GitHub Handle:</Text>
//       <TextInput
//         style={styles.input}
//         value={editedData.githubHandle}
//         onChangeText={(text) => handleInputChange('githubHandle', text)}
//       />

//       <Text style={styles.title}>A Brief Personal Bio:</Text>
//       <TextInput
//         style={[styles.input, { height: 100 }]}
//         multiline
//         value={editedData.bio}
//         onChangeText={(text) => handleInputChange('bio', text)}
//       />

//       <Button title="Save Changes" onPress={saveChanges} />
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
//   input: {
//     fontSize: 16,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     borderRadius: 4,
//   },
// });

// export default EditProfileScreen;


// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// // const EditProfileScreen = ({ navigation }) => {
// //   const [editedData, setEditedData] = useState(/* Initial data or data fetched for editing */);

// //   const saveChanges = () => {
// //     // Perform data saving logic here (e.g., API request, AsyncStorage)
// //     // After saving, navigate back to ProfileScreen with updated data
// //     navigation.navigate('Profile', { updatedUserData: editedData });
// //   };

// //   return (
// //       <View style={styles.container}>
// //         <Text style={styles.title}>Full Name:</Text>
// //         <TextInput
// //           style={styles.input}
// //           value={userData.fullName}
// //           onChangeText={(text) => handleInputChange('fullName', text)}
// //         />
  
// //         <Text style={styles.title}>Slack Username:</Text>
// //         <TextInput
// //           style={styles.input}
// //           value={userData.slackUsername}
// //           onChangeText={(text) => handleInputChange('slackUsername', text)}
// //         />

// //       <Text style={styles.title}>GitHub Handle:</Text>
// //       <TextInput
// //         style={styles.input}
// //         value={userData.githubHandle}
// //         onChangeText={(text) => handleInputChange('githubHandle', text)}
// //       />

// //       <Text style={styles.title}>A Brief Personal Bio:</Text>
// //       <TextInput
// //         style={[styles.input, { height: 100 }]}
// //         multiline
// //         value={userData.bio}
// //         onChangeText={(text) => handleInputChange('bio', text)}
// //       />

  
// //       <Button title="Save Changes" onPress={saveChanges} />
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
// //   input: {
// //     fontSize: 16,
// //     marginBottom: 16,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 8,
// //     borderRadius: 4,
// //   },
// // });


// // export default EditProfileScreen;

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// // const EditProfileScreen = ({ route, navigation }) => {
// //   // Get the initial user data from the route params or set default values
// //   const { initialUserData } = route.params;
  
// //   // State variables to store edited user data
// //   const [userData, setUserData] = useState(initialUserData);

// //   // Function to update user data when input fields change
// //   const handleInputChange = (field, value) => {
// //     setUserData({
// //       ...userData,
// //       [field]: value,
// //     });
// //   };

// //   // Function to save the edited data and navigate back to the profile screen
// //   const saveChanges = () => {
// //     // You can implement logic to save the data to your backend or storage here
// //     // For simplicity, we'll just navigate back to the profile screen with the updated data
// //     navigation.navigate('Profile', { updatedUserData: userData });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Full Name:</Text>
// //       <TextInput
// //         style={styles.input}
// //         value={userData.fullName}
// //         onChangeText={(text) => handleInputChange('fullName', text)}
// //       />

// //       <Text style={styles.title}>Slack Username:</Text>
// //       <TextInput
// //         style={styles.input}
// //         value={userData.slackUsername}
// //         onChangeText={(text) => handleInputChange('slackUsername', text)}
// //       />

// //       <Text style={styles.title}>GitHub Handle:</Text>
// //       <TextInput
// //         style={styles.input}
// //         value={userData.githubHandle}
// //         onChangeText={(text) => handleInputChange('githubHandle', text)}
// //       />

// //       <Text style={styles.title}>A Brief Personal Bio:</Text>
// //       <TextInput
// //         style={[styles.input, { height: 100 }]}
// //         multiline
// //         value={userData.bio}
// //         onChangeText={(text) => handleInputChange('bio', text)}
// //       />

// //       <Button title="Save Changes" onPress={saveChanges} />
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
// //   input: {
// //     fontSize: 16,
// //     marginBottom: 16,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 8,
// //     borderRadius: 4,
// //   },
// // });

// // export default EditProfileScreen;
