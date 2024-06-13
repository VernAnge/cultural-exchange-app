// app/(blog)/CreateBlog.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Formik, FormikValues } from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';


const CreateBlogScreen = () => {

  const router = useRouter();


  const [imagePath, setImagePath] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleAddImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagePath(result.uri);
    }

  };

  const handleTagPress = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSubmit = (values: FormikValues) => {
    router.replace('../(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog Creation</Text>
      <Text style={styles.subtitle}>Write Your Blog Post</Text>

      <Formik
        initialValues={{ title: '', content: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Enter your blog title here"
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.previewButton}>
                <Text style={styles.buttonText}>Preview</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={[styles.input, styles.textArea]}
              onChangeText={handleChange('content')}
              onBlur={handleBlur('content')}
              value={values.content}
              placeholder="Write your content here..."
              multiline
            />
            <View style={styles.tagRow}>
              {['Tech', 'Lifestyle', 'Education', 'Health'].map((tag, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.tagButton,
                    selectedTags.includes(tag) && styles.selectedTagButton,
                  ]}
                  onPress={() => handleTagPress(tag)}
                >
                  <Text
                    style={[
                      styles.tagText,
                      selectedTags.includes(tag) && styles.selectedTagText,
                    ]}
                  >
                    {tag}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionButton} onPress={handleAddImage}>
                <Icon name="image" size={24} color="black" />
                <Text style={styles.buttonText}>Add Image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="link" size={24} color="black" />
                <Text style={styles.buttonText}>Insert Link</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="format-bold" size={24} color="black" />
                <Text style={styles.buttonText}>Format Text</Text>
              </TouchableOpacity>
            </View>
            {imagePath && (
              <Image source={{ uri: imagePath }} style={styles.imagePreview} />
            )}
            <Button onPress={() => handleSubmit()} title="Publish" color="#1E40AF" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  editButton: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  previewButton: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginLeft: 8,
    alignItems: 'center',
  },
  actionButton: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginTop: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tagButton: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedTagButton: {
    backgroundColor: '#1E40AF',
  },
  tagText: {
    fontSize: 14,
    color: 'black',
  },
  selectedTagText: {
    color: 'white',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default CreateBlogScreen;
