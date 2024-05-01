import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSessionData = () => {
    const [sessionId, setSessionId] = useState(null);
    const [user, setUser] = useState({ citizenId: '', studentId: '', userName: '', faculty: '' });

    useEffect(() => {
        // Retrieve session ID from AsyncStorage when component mounts
        AsyncStorage.multiGet(['sessionId', 'userData'])
            .then((values) => {
                if (values !== null) {
                    // Session ID and user data exist in storage

                    const sessionId = values[0][1];
                    const userData = JSON.parse(values[1][1]);

                    setSessionId(sessionId); // Set session ID state

                    // Set user state after retrieving user data
                    setUser({
                        citizenId: userData['citizen_id'],
                        studentId: userData['Student_id'],
                        userName: userData['eng_name'],
                        faculty: userData['faculty']
                    });

                    // console.log('User data:', user); // Log the retrieved session ID
                } else {
                    // Session ID or user data doesn't exist in storage
                    console.log('Session ID or user data not found in storage');
                }
            })
            .catch((error) => {
                console.error('Error retrieving session ID or user data:', error);
            });

    }, []);

    useEffect(() => {
        console.log('User data:', user);
    }, [user]);

    return { sessionId, user };
};

export default useSessionData;
