import React, {FC} from 'react';
import { UserInfo, UserInfoTxt, Avatar, UserAdditionalInfo, Title, Wrapper, SubTitle, LabeledValue, Label} from './SingleUserProfile.styles';
import {format} from 'date-fns';

import biceps from '../images/biceps.jpg';
import {SingleUser} from 'types/store/SingleUserStore';

interface SingleUserProfileProps {
  user: SingleUser | null;
}

const SingleUserProfile: FC<SingleUserProfileProps> = ({user}: SingleUserProfileProps) => {
  return user && (
    <>
      <Title>Profil uzytkownika</Title>
      <Wrapper>
        <UserInfo>
          <Avatar src={biceps} />
          <UserInfoTxt>
            {user.username}
          </UserInfoTxt>
          <UserInfoTxt>
            {user.email}
          </UserInfoTxt>
        </UserInfo>
        <UserAdditionalInfo>
          <SubTitle>
            Informacje ogólne
          </SubTitle>
          <LabeledValue>
            <Label>
              Miasto:
            </Label>
            <UserInfoTxt>
              {user.city}
            </UserInfoTxt>
          </LabeledValue>
          <LabeledValue>
            <Label>
              Państwo:
            </Label>
            <UserInfoTxt>
              {user.country}
            </UserInfoTxt>
          </LabeledValue>
          <LabeledValue>
            <Label>
              Data dołączenia:
            </Label>
            <UserInfoTxt>
              {format(user.dateOfCreated, 'YYYY-MM-DD')}
            </UserInfoTxt>
          </LabeledValue>
          <LabeledValue>
            <Label>
              Ostatnia Aktywność:
            </Label>
            <UserInfoTxt>
              {format(user.lastActive, 'YYYY-MM-DD')}
            </UserInfoTxt>
          </LabeledValue>
          <SubTitle>
            Info Siłowniane!
          </SubTitle>
          <LabeledValue>
            <Label>
              W Bicepsie
            </Label>
            <UserInfoTxt>
              {user.bicepsSize} cm
            </UserInfoTxt>
          </LabeledValue>
          <LabeledValue>
            <Label>
              Waga
            </Label>
            <UserInfoTxt>
              {user.weight} kg
            </UserInfoTxt>
          </LabeledValue>
          <LabeledValue>
            <Label>
              Wzrost
            </Label>
            <UserInfoTxt>
              {user.growth} cm
            </UserInfoTxt>
          </LabeledValue>
          <SubTitle>
            Opis
          </SubTitle>
          <UserInfoTxt>
            {user.description}
          </UserInfoTxt>
        </UserAdditionalInfo>
      </Wrapper>
    </>
  );
};

export default SingleUserProfile;
