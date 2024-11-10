import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Styles for main screen components (similar to previous screen)
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  backText: { fontSize: 18, color: '#007BFF' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  progressContainer: { height: 4, backgroundColor: '#ddd' },
  progressBar: { height: '100%', backgroundColor: '#007BFF' },
  contentContainer: { padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  timeText: { fontSize: 16, color: '#333' },
  selectButton: { padding: 10, backgroundColor: '#ffffff', borderRadius: 5, borderWidth: 1, alignItems: 'center' },
  selectButtonText: { fontSize: 16, color: '#333' },
  durationText: { fontSize: 12, color: '#007BFF', marginTop: 10 },
  infoText: { fontSize: 12, color: '#888', marginTop: 10 },
  nextButton: { padding: 15, backgroundColor: '#007BFF', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%' },
  nextButtonText: { fontSize: 18, color: '#ffffff', fontWeight: 'bold' },

  // Styles for Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    minHeight: 400, // 모달 높이 확보
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeSummaryContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  timeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  timeButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  timeButtonText: {
    fontSize: 14,
    color: '#333',
  },

  // Break settings styles
  breakSettingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15, // 위쪽 여백을 추가하여 적절히 배치
  },
  breakTypeContainer: {
    flexDirection: 'row',
  },
  breakTypeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 5,
  },
  selectedBreakTypeButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  breakTypeText: {
    color: '#333',
    fontSize: 14,
  },
  breakTimePicker: {
    flex: 1,
    height: 200,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;
