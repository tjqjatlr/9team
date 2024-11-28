import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#555555',
        marginBottom: 8,
    },
    currentContact: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginRight: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0', 
        marginBottom: 30,
    },
    verifyButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    verifyButtonText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#66ABBA', 
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default styles;
