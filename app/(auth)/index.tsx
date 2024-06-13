// app/(auth)/index.tsx
import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Formik, FormikValues } from 'formik';
import { useRouter } from 'expo-router';

const AuthScreen = () => {
  const router = useRouter();

  const handleSubmit = (values: FormikValues) => {
    // Handle form submission logic here
    console.log(values);
    // Navigate to the main app screen on successful login/signup
    router.replace('../(tabs)/home');
  };

  return (

    <View style={styles.container}>
    <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  logo: {
    width: 250, // Adjust the width as needed
    height: 250, // Adjust the height as needed
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default AuthScreen;