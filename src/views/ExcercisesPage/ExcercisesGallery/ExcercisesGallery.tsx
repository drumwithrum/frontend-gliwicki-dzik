import React, { FC, useState } from 'react';
import { Wrapper, ListWrapper, PlayerWrapper } from './ExcercisesGallery.style';
import ExcercisesList from './ExcercisesList';
import ExcercisesPlayer from './ExcercisesPlayer';

interface ExcercisesGalleryProps {
}

const ExcercisesGallery: FC = (props: ExcercisesGalleryProps) => {
  const [videoId, setVideoId] = useState('');
  return (
    <Wrapper>
      <ListWrapper>
        <ExcercisesList onClick={setVideoId} />
      </ListWrapper>
      <PlayerWrapper>
        <ExcercisesPlayer videoId={videoId} />
      </PlayerWrapper>
    </Wrapper>
  );
};

export default ExcercisesGallery;
