import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentScheduler = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
        setShowTimePicker(false);
        setShowDatePicker(false);
    };

    const handleDateChange = (event, date) => {
        if (date !== undefined) {
            setSelectedDateTime(date);
            setShowTimePicker(true);
        }
    };

    const handleTimeChange = (event, time) => {
        if (time !== undefined) {
            const selectedDate = selectedDateTime;
            selectedDate.setHours(time.getHours());
            selectedDate.setMinutes(time.getMinutes());
            setSelectedDateTime(selectedDate);
            setShowDatePicker(true);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Appointment Date and Time:</Text>
            <Button title="Pick a date and time" onPress={showDateTimePicker} />
            {isDatePickerVisible && (
                <DateTimePicker
                    value={selectedDateTime}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    style={styles.dateTimePicker}
                />
            )}
            {showTimePicker && (
                <DateTimePicker
                    value={selectedDateTime}
                    mode="time"
                    display="clock"
                    onChange={handleTimeChange}
                    style={styles.dateTimePicker}
                />
            )}
            {showDatePicker && (
                <Text style={styles.selectedDateTime}>
                    Selected Date and Time: {selectedDateTime.toLocaleString()}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: 20,
        fontWeight: 'bold',
    },
    selectedDateTime: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
    },
    dateTimePicker: {
        marginBottom: 8,
        marginTop: 10,
    }
});

export default AppointmentScheduler;
