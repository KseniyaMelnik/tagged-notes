import { FC } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { deleteTagFromNote } from '../../store/reducers/TagsSlice';

import s from './style.module.scss';

export type TagProps = {
  noteId: string;
  tag: string;
};

export const Tag: FC<TagProps> = ({ noteId, tag }) => {
  const dispatch = useAppDispatch();
  const removeTag: () => void = () => {
    dispatch(deleteTagFromNote({ noteId, tag }));
  };

  return (
    <span className={s.container}>
      {tag}
      <button type="button" onClick={removeTag} className={s.removeBtn}>
        x
      </button>
    </span>
  );
};
