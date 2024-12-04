import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        padding: 16,
        marginBottom: -15,
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
        backgroundColor: '#fff',
        paddingVertical: 8,
    },
    dateContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    monthText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginVertical: 8,
        paddingLeft: 4,
        backgroundColor: '#F1F1F1',
        padding: 4,
        borderRadius: 4,
    },
    monthChangedDateContainer: {
        borderColor: '#FF5151', 
    },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginHorizontal: 4,
        borderRadius: 8, 
        borderWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: '#fff',
    },
    selectedDateContainer: {
        backgroundColor: '#007AFF',
    },
    dateText: {
        fontSize: 12,
        color: '#333333',
    },
    selectedDateText: {
        color: '#ffffff',
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
        top: 3,
    },
    bookmarkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D3D3D3', 
        backgroundColor: '#FFECEC', 
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
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
        color: '#FF6B6B',
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
    jobSubtitle: {
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

export default styles