import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
    backText: { fontSize: 18, color: '#000' },
    headerTitle: { flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
    progressContainer: { height: 4, backgroundColor: '#ddd' },
    progressBar: { height: '100%', backgroundColor: '#007BFF' },
    label: { fontSize: 16, fontWeight: 'bold', color: '#333', margin: 20 },
    paymentOptions: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
    paymentOptionButton: { padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center', width: '45%' },
    selectedPaymentOptionButton: { backgroundColor: '#d0e7ff' },
    paymentOptionText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    paymentOptionAmount: { fontSize: 16, color: '#007bff', marginTop: 10 },
    detailsContainer: { paddingHorizontal: 20, marginBottom: 20 },
    detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    detailLabel: { fontSize: 14, color: '#333', fontWeight: 'bold' },
    detailDescription: { fontSize: 14, color: '#888' },
    estimateContainer: { backgroundColor: '#ffffff', padding: 20, marginHorizontal: 20, borderRadius: 10, borderColor: '#ddd', borderWidth: 1, marginBottom: 20 },
    estimateTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
    estimateRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
    estimateLabel: { fontSize: 14, color: '#333' },
    estimateAmount: { fontSize: 14, color: '#333' },
    estimateTotalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    estimateTotalLabel: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    estimateTotalAmount: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    note: { fontSize: 12, color: '#888', marginTop: 5 },
    registerButton: { padding: 15, backgroundColor: '#007BFF', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%' },
    registerButtonText: { fontSize: 18, color: '#ffffff', fontWeight: 'bold' },
    modalBackground: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
    modalContainer: { width: '80%', padding: 20, backgroundColor: '#ffffff', borderRadius: 10, elevation: 10 },
    modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    closeButton: { fontSize: 18, color: '#888' },
    modalDescription: { fontSize: 14, color: '#555', marginBottom: 20 },
    infoSection: { marginBottom: 20 },
    infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    infoLabel: { fontSize: 14, fontWeight: 'bold', color: '#333' },
    infoValue: { fontSize: 14, color: '#555' },
    modifyText: { fontSize: 12, color: '#007BFF', textDecorationLine: 'underline' },
    confirmButton: { backgroundColor: '#007BFF', padding: 10, alignItems: 'center', borderRadius: 5 },
    confirmButtonText: { fontSize: 16, color: '#ffffff', fontWeight: 'bold' },
  });

  export default styles