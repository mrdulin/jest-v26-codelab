const mockFirestore = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn(),
};

const MockFirestore = jest.fn(() => mockFirestore);
MockFirestore.FieldValue = {
  serverTimestamp: jest.fn(),
};

module.exports = {
  Firestore: MockFirestore,
};
