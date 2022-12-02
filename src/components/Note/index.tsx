import { FC } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { deleteNote, NoteType } from '../../store/reducers/NotesSlice';
import { Tag } from '../Tag';

import s from './style.module.scss';

type NoteProps = NoteType & {
  setNoteId: (noteId: string) => void;
  setModalActive: (active: boolean) => void;
};

export const Note: FC<NoteProps> = ({ id, text, tags, setNoteId, setModalActive }) => {
  const dispatch = useAppDispatch();
  const removeNote: () => void = () => {
    dispatch(deleteNote(id));
  };

  const changeText: () => void = () => {
    setNoteId(id);
    setModalActive(true);
  };

  return (
    <div className={s.container}>
      <button type="button" onClick={removeNote}>
        X
      </button>
      <button type="button" onClick={changeText}>
        ✎
      </button>
      {tags.map(t => (
        <Tag tag={t} key={t} />
      ))}
      <div>{text}</div>
    </div>
  );
};
