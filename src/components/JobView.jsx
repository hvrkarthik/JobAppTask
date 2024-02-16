import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const JobView = ({job}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.description}>{job.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 18,
    color: 'gray',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default JobView;
