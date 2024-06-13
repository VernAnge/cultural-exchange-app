// components/PostCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width / 2) - 24; // Adjust the number for desired spacing
const IMAGE_HEIGHT = 150; // Set a fixed height for the image
const CARD_HEIGHT = 350; // Set a fixed height for the card

interface PostCardProps {
  title: string;
  content: string;
  imagePath: string | number | null; // Allow both local (require) and remote (URL) images
  tags: string[];
  onPress: () => void; // Event handler for card click
}

const PostCard: React.FC<PostCardProps> = ({ title, content, imagePath, tags, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}>
        {imagePath && (
          <Image source={typeof imagePath === 'string' ? { uri: imagePath } : imagePath} style={styles.image} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.contentSnippet}>{content.substring(0, 100)}...</Text> */}
          <View style={styles.tagRow}>
            {tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    flexShrink: 1,
  },
  contentSnippet: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
    flexGrow: 1,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#1E40AF',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: 'white',
  },
});

export default PostCard;
