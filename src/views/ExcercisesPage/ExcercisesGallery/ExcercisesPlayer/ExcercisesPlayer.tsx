import React, { FC } from 'react';
import { Wrapper } from './ExcercisesPlayer.style';
import YouTube from 'react-youtube';

interface ExcercisesPlayerProps {
  videoId: string;
}

const opts: any = {
  height: '600',
  width: '800',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const ExcercisesPlayer: FC<ExcercisesPlayerProps> = ({
  videoId,
}) => {
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
    />
  );
};

export default ExcercisesPlayer;
