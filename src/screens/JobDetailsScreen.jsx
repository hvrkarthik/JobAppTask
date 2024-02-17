import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About the Job</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Job Title:</Text>
        <Text style={styles.value}>{item.job_title}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Job Location:</Text>
        <Text style={styles.value}>{`${item.job_city}, ${item.job_state}, ${item.job_country}`}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Position Type:</Text>
        <Text style={styles.value}>{item.job_employment_type}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Job Description:</Text>
        <Text style={styles.description}>{item.job_description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  value: {
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default JobDetailsScreen;
