import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addNewNote, changeText, deleteNote } from './NotesSlice';

export type TagsStateType = {
  list: string[];
  tags: {
    [key: string]: Array<string>;
  };
};

const initialState: TagsStateType = {
  list: ['test', 'note'],
  tags: {
    '1': ['test'],
    '2': ['note'],
  },
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addNewTag(state, action: PayloadAction<string>) {
      state.list.push(action.payload);
    },
    deleteTagFromList(state, action: PayloadAction<string>) {
      state.list = state.list.filter(t => t !== action.payload);

      const removedTagsArray = Object.entries(state.tags).map(el => {
        const idx = el[0].indexOf(action.payload);

        if (idx > -1) {
          return el[1].splice(idx, 1);
        }

        return el;
      });

      state.tags = Object.fromEntries(removedTagsArray);
    },
    deleteTagFromNote(state, action: PayloadAction<{ noteId: string; tag: string }>) {
      const noteTags = state.tags[action.payload.noteId];
      const idx = noteTags.indexOf(action.payload.tag);

      if (idx > -1) {
        noteTags.splice(idx, 1);
      }
      state.tags[action.payload.noteId] = noteTags;
    },
  },
  extraReducers: builder => {
    builder.addCase(addNewNote, (state, action) => {
      const wordsArr = action.payload.text.split(' ');
      const tags = wordsArr.filter(el => el[0] === '#').map(el => el.slice(1));

      state.list.push(...tags);
      state.list = Array.from(new Set(state.list));
      state.tags[action.payload.id] = tags;
      state.tags[action.payload.id] = Array.from(new Set(state.tags[action.payload.id]));
    });
    builder.addCase(deleteNote, (state, action) => {
      delete state.tags[action.payload];
    });
    builder.addCase(changeText, (state, action) => {
      const wordsArr = action.payload.newText.split(' ');
      const tags = wordsArr.filter(el => el[0] === '#').map(el => el.slice(1));

      state.list.push(...tags);
      state.list = Array.from(new Set(state.list));
      state.tags[action.payload.id].push(...tags);
      state.tags[action.payload.id] = Array.from(new Set(state.tags[action.payload.id]));
    });
  },
});

export default tagsSlice.reducer;

export const { addNewTag, deleteTagFromList, deleteTagFromNote } = tagsSlice.actions;
