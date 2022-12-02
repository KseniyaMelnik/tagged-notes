import { FC } from 'react';

import s from './style.module.scss';

export type TagProps = {
  tag: string;
};

export const Tag: FC<TagProps> = ({ tag }) => {
  return <span className={s.container}>{tag}</span>;
};
