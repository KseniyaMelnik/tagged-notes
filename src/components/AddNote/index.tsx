import { FC, useState } from 'react';

import { v4 } from 'uuid';

import { useAppDispatch } from '../../hooks/redux';
import { addNewNote } from '../../store/reducers/NotesSlice';

import s from './style.module.scss';

export const AddNote: FC = () => {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [text, setText] = useState('');

  const onClick: () => void = () => {
    if (collapsed) setCollapsed(false);
  };
  const saveNote: () => void = () => {
    const id = v4();

    dispatch(addNewNote({ id, text }));
    setText('');
  };
  const closeNote: () => void = () => {
    setText('');
    setCollapsed(true);
  };

  return (
    <div className={s.container}>
      <button type="button" className={s.button} onClick={onClick}>
        ✎Write Your Note
      </button>

      {!collapsed && (
        <div className={s.newNote}>
          <textarea
            value={text}
            onChange={e => {
              setText(e.currentTarget.value);
            }}
          />
          <div className={s.buttonsBlock}>
            <button type="button" onClick={saveNote}>
              Save
            </button>
            <button type="button" onClick={closeNote}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
