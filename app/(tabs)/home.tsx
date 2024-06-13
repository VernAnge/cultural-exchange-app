import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import PostCard from '@/components/PostCard';
import { useRouter } from 'expo-router';


const { width } = Dimensions.get('window');
const CARD_WIDTH = (width / 2) - 24;
const router = useRouter();

const handlePress = (title: string) => {
  router.replace('../posts');
};

const renderItem = ({ item }) => (
  <ScrollView style={styles.cardContainer}>
    <PostCard
      title={item.title}
      content={item.content}
      imagePath={item.imagePath}
      tags={item.tags}
      onPress={() => handlePress(item.title)}
    />
  </ScrollView>
);

const posts = [
  {
    title: 'Music festival event',
    content: 'Explore the transformative journey that each season brings to our environment and lives, from the blooming flowers of spring to the serene snow of winter. This text can be really long to demonstrate scrolling. This text can be really long to demonstrate scrolling. This text can be really long to demonstrate scrolling. This text can be really long to demonstrate scrolling.',
    imagePath: require('../../assets/images/musical_festival.png'),
    tags: ['Music'],
  },
  {
    title: 'Traditional South African Cuisine',
    content: 'Explore the rich and diverse flavors of South African cuisine, from Bobotie to Biltong...',
    imagePath: require('../../assets/images/cuisine.jpg'),
    tags: ['Cuisine', 'South Africa'],
  },
  {
    title: 'Xhosa Culture and Traditions',
    content: 'Learn about the Xhosa people, their traditions, language, and cultural significance...',
    imagePath: require('../../assets/images/xhosa.jpg'),
    tags: ['Culture', 'Xhosa'],
  },
  {
    title: 'Afrikaans Language Basics',
    content: 'Get started with Afrikaans, a language spoken by many in Stellenbosch and across South Africa...',
    imagePath: require('../../assets/images/afrikaans.jpg'),
    tags: ['Language', 'Afrikaans'],
  },
  {
    title: 'Festivals and Celebrations in South Africa',
    content: 'Discover the vibrant festivals and celebrations that take place throughout the year in South Africa...',
    imagePath: require('../../assets/images/festival.jpg'),
    tags: ['Festivals', 'Celebrations'],
  },
  {
    title: 'Student Life in Stellenbosch',
    content: 'A guide to student life in Stellenbosch, including tips on accommodation, socializing, and local hotspots...',
    imagePath: require('../../assets/images/stellies.jpg'),
    tags: ['Student Life', 'Stellenbosch'],
  },
  {
    title: 'CulturaCross launches',
    content: 'Hello World',
    imagePath: require('../../assets/images/logo.png'),
    tags: ['Social Media'],
  },
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>CulturaCross</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Latest from our Blog</Text>
          <View style={styles.blogContainer}>
            <View style={styles.blogItem}>
              <Image source={require('@/assets/images/international_study.png')} style={styles.blogImage} />
              <Text style={styles.blogText}>Studying Abroad</Text>
              <Text style={styles.blogSubText}>Tips for international students</Text>
            </View>
            <View style={styles.blogItem}>
              <Image source={require('@/assets/images/cultural.png')} style={styles.blogImage} />
              <Text style={styles.blogText}>Cultural Events</Text>
              <Text style={styles.blogSubText}>What's happening this month</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Upcoming Events</Text>
          <View style={styles.eventsContainer}>
            <TouchableOpacity style={styles.eventItem}>
              <Text style={styles.eventText}>International Food Fair</Text>
              <Text style={styles.eventDate}>Oct 15, 2024</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventItem}>
              <Text style={styles.eventText}>Global Music Night</Text>
              <Text style={styles.eventDate}>Nov 12, 2024</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventItem}>
              <Text style={styles.eventText}>Art & Culture Exhibit</Text>
              <Text style={styles.eventDate}>Dec 09, 2024</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    marginTop: 20,
    marginLeft: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  blogContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blogItem: {
    width: '48%',
  },
  blogImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  blogText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  blogSubText: {
    fontSize: 14,
    color: '#555',
  },
  eventsContainer: {
    marginTop: 10,
  },
  eventItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  eventText: {
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#555',
  },
  cardContainer: {
    width: CARD_WIDTH,
    margin: 8,
  },
});

export default HomePage;
