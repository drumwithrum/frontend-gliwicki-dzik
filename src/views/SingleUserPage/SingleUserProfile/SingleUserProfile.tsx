import React, {FC} from 'react';
import {Wrapper, UserInfo, UserInfoTxt, Avatar, UserAdditionalInfo, Title} from './SingleUserProfile.styles';

import biceps from '../images/biceps.jpg';

const user = {
  name: 'Dzikus',
  email: 'dzikus@dziki.pl',
  bicepsSize: '36',
};

const SingleUserProfile: FC<{}> = () => {
  return (
    <Wrapper align={'flex-start'}>
      <Title>Profil uzytkownika</Title>
      <UserInfo>
        <Avatar src={biceps} />
        <UserInfoTxt>
          {user.name}
        </UserInfoTxt>
        <UserInfoTxt>
          {user.email}
        </UserInfoTxt>
      </UserInfo>
      <UserAdditionalInfo>
        {user.bicepsSize}
      </UserAdditionalInfo>
    </Wrapper>
  );
};

export default SingleUserProfile;
