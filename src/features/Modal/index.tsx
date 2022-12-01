import { FC, useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { changeText } from '../../store/reducers/NotesSlice';

import s from './style.module.scss';

type ModalProps = {
  active: boolean;
  setActive: (active: boolean) => void;
  id: string;
};
export const Modal: FC<ModalProps> = ({ active, setActive, id }) => {
  const [newText, setNewText] = useState('');
  const dispatch = useAppDispatch();
  const canselModal: () => void = () => {
    setActive(false);
  };
  const saveNewText: () => void = () => {
    dispatch(changeText({ newText, id }));
    setNewText('');
    setActive(false);
  };

  return (
    <div
      className={s.container}
      style={active ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={s.content}>
        <textarea
          value={newText}
          onChange={e => {
            setNewText(e.currentTarget.value);
          }}
        />
        <button type="button" onClick={canselModal}>
          Cansel
        </button>
        <button type="button" onClick={saveNewText}>
          Save
        </button>
      </div>
    </div>
  );
};
