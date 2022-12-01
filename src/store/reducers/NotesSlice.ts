import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NoteType = {
  id: string;
  text: string;
  tags: string[];
};
const initialState: { notes: NoteType[] } = {
  notes: [
    {
      id: '1',
      text: 'Тесттесттесттсет',
      tags: ['пример'],
    },
    {
      id: '2',
      text: 'Hi, it is testing note',
      tags: ['note'],
    },
  ],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    notesFetchingSuccess(state, action: PayloadAction<NoteType[]>) {
      state.notes = action.payload;
    },
    addNewNote(state, action: PayloadAction<NoteType>) {
      state.notes.push(action.payload);
    },
    deleteNote(state, action: PayloadAction<string>) {
      const idx = state.notes.findIndex(n => n.id === action.payload);

      if (idx > -1) {
        state.notes.splice(idx, 1);
      }
    },
    changeText(state, action: PayloadAction<{ newText: string; id: string }>) {
      const idx = state.notes.findIndex(n => n.id === action.payload.id);

      state.notes[idx].text = action.payload.newText;
    },
  },
});

export default notesSlice.reducer;

export const { addNewNote, deleteNote, changeText } = notesSlice.actions;
