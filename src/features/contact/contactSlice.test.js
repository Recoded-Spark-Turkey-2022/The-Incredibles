import contactSliceReducer, { writeContact } from './contactSlice';

describe('contactSlice', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      const initialState = {
        uploading: false,
        contact: [],
        error: null,
      };
      expect(contactSliceReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle writeContact.pending', () => {
      const initialState = {
        uploading: false,
        contact: [],
        error: null,
      };
      const state = contactSliceReducer(initialState, {
        type: writeContact.pending.toString(),
      });
      expect(state).toEqual({
        uploading: true,
        contact: [],
        error: null,
      });
    });

    it('should handle writeContact.fulfilled', () => {
      const initialState = {
        uploading: false,
        contact: [],
        error: null,
      };
      const state = contactSliceReducer(initialState, {
        type: writeContact.fulfilled.toString(),
      });
      expect(state).toEqual({
        uploading: false,
        contact: [],
        error: null,
      });
    });

    it('should handle writeContact.rejected', () => {
      const initialState = {
        uploading: false,
        contact: [],
        error: null,
      };
      const state = contactSliceReducer(initialState, {
        type: writeContact.rejected.toString(),
      });
      expect(state).toEqual({
        uploading: false,
        contact: [],
        error: null,
      });
    });
  });
})
