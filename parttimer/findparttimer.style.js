import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        padding: 16,
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    tab: {
        paddingVertical: 8,
    },
    tabText: {
        fontSize: 16,
        color: '#777',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    activeTabText: {
        color: '#000',
        fontWeight: 'bold',
    },
    dateSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    dateContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
    },
    selectedDateContainer: {
        backgroundColor: '#007AFF',
    },
    dateText: {
        fontSize: 14,
        color: '#333',
    },
    selectedDateText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    jobItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    jobImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    bookmarkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D3D3D3', 
        backgroundColor: '#FFFFFF', 
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        position: 'absolute',
        left: -62.5, 
        top: 69, 
    },
    bookmarkContainerSelected: {
        backgroundColor: '#FF5722', 
        borderColor: '#FF5722', 
    },
    bookmarkText: {
        color: '#FFFFFF',
        fontSize: 12,
        marginLeft: 4,
    },
    bookmarkContainerSelected: {
        backgroundColor: '#FF5722',
    },
    bookmarkText: {
        color: '#D3D3D3',
        marginLeft: 4,
        fontSize: 14,
    },
    bookmarkTextSelected: {
        color: '#FFFFFF',
    },
    jobDetails: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    jobLocation: {
        fontSize: 14,
        color: '#777',
        marginBottom: 4,
    },
    jobTimeWage: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    jobTime: {
        fontSize: 14,
        color: '#333',
    },
    jobWage: {
        fontSize: 14,
        color: '#FF5722',
    },
    jobTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E90FF', 
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        color: '#FFFFFF',
    },
});
