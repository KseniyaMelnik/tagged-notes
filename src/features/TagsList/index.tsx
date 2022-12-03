import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteTagFromList } from '../../store/reducers/TagsSlice';

export const TagsList: FC = () => {
  const { list } = useAppSelector(state => state.tagsReducer);

  return (
    <div>
      {list.map(el => (
        <TagForList key={el} tag={el} />
      ))}
    </div>
  );
};

const TagForList: FC<{ tag: string }> = ({ tag }) => {
  const dispatch = useAppDispatch();
  const removeTag: () => void = () => {
    dispatch(deleteTagFromList(tag));
  };

  return (
    <span>
      {tag}
      <button type="button" onClick={removeTag}>
        x
      </button>
    </span>
  );
};
