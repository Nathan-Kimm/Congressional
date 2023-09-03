import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      title: 'Push-ups',
      description: 'Build upper body strength with push-ups.',
      image: 'https://blog.nasm.org/hubfs/power-pushups.jpg',
    },
    {
      id: 2,
      title: 'Squats',
      description: 'Strengthen your lower body with squats.',
      image: 'https://www.themanual.com/wp-content/uploads/sites/9/2022/03/squats.jpg?resize=1200%2C630&p=1',
    },
    // Add more exercise objects here
  ];

  const renderExerciseCards = () => {
    return exercises.map((exercise) => (
      <TouchableOpacity
        key={exercise.id}
        style={styles.card}
        onPress={() => {
          setSelectedExercise(exercise);
          setModalVisible(true);
        }}
      >
        <Image source={{ uri: exercise.image }} style={styles.cardImage} resizeMode="cover" />
        <Text style={styles.cardTitle}>{exercise.title}</Text>
        <Text style={styles.cardDescription}>{exercise.description}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Fitness App</Text>
        <Text style={styles.subtitle}>Let's have a productive day today!</Text>
        <View style={styles.cardContainer}>
          {renderExerciseCards()}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedExercise?.title}</Text>
              <Text style={styles.modalDescription}>{selectedExercise?.description}</Text>
              <Pressable
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12, // Reduced padding for smaller cards
    marginBottom: 16,
    width: '48%', // Adjust the width to control the overall card size and spacing
    aspectRatio: 1, // Added to make the card square-shaped
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    flex: 1, // Added to make the image fill the card container
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16, // Reduced font size for smaller cards
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14, // Reduced font size for smaller cards
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    width: '90%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
});
