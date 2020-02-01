import React, { FC, useState, useEffect } from 'react';
import { Wrapper, ListWrapper, PlayerWrapper } from './ExcercisesGallery.style';
import { connect } from 'react-redux';
import State from 'types/store';
import { fetchAllExcercises } from 'store/excercises/actions';
import { getExcercisesList } from 'store/excercises/selectors';
import ExcercisesList from './ExcercisesList';
import ExcercisesPlayer from './ExcercisesPlayer';

interface ExcercisesGalleryProps {
  fetchAllExcercises: typeof fetchAllExcercises;
  excercises: {
    title: string;
    url: string;
  }[];
}

const ExcercisesGallery: FC<ExcercisesGalleryProps> = ({ fetchAllExcercises, excercises }) => {
  useEffect(() => {
    fetchAllExcercises();
  }, []);
  const [videoId, setVideoId] = useState<string>('');
  return (
    <Wrapper>
      <ListWrapper>
        <ExcercisesList data={excercises} onClick={setVideoId} activeVideoId={videoId} />
      </ListWrapper>
      <PlayerWrapper>
        <ExcercisesPlayer videoId={videoId} />
      </PlayerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state: State) => ({
  excercises: getExcercisesList(state),
});

const mapDispatchToProps = {
  fetchAllExcercises,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExcercisesGallery);
