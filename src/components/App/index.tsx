import React, { FC, useState } from 'react';

import { Modal } from '../../features/Modal';
import { TagsList } from '../../features/TagsList';
import { useAppSelector } from '../../hooks/redux';
import { AddNote } from '../AddNote';
import { Note } from '../Note';

import s from './style.module.css';

const App: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [noteId, setNoteId] = useState('');

  const { notes } = useAppSelector(state => state.notesReducer);

  return (
    <div className="App">
      <AddNote />
      <TagsList />
      <div className={s.notesBlock}>
        {notes.map(n => (
          <Note
            id={n.id}
            text={n.text}
            key={n.id}
            setNoteId={setNoteId}
            setModalActive={setModalActive}
          />
        ))}
      </div>
      <Modal setActive={setModalActive} active={modalActive} id={noteId} />
    </div>
  );
};

export default App;
