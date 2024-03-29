import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ApiService from '../services/ApiService';
import JobDetailsScreen from './JobDetailsScreen';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await ApiService.searchJobs();
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobPress = (item) => {
    navigation.navigate('JobDetails', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job List</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleJobPress(item)}>
            <View style={styles.card}>
              <Text style={styles.title}>{item.job_title}</Text>
              <Text style={styles.employer}>{item.employer_name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.job_id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  employer: {
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;
