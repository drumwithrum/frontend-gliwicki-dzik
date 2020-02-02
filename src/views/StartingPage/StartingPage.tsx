import React, { FC } from 'react';
import { View } from 'components';
import {Title, Wrapper, Logo, Txt} from './StartingPage.styles';

import logo from './images/dzik.png';

interface StartingPageProps {
}

const StartingPage: FC = (props: StartingPageProps) => {
  return (
    <View>
      <Wrapper>
        <Title>
          Gliwicki Dzik
        </Title>
        <Logo src={logo} />
        <Txt>
          Witamy na stronie Gliwickiego dzika!
        </Txt>
        <Txt>
          Zapraszamy do korzystania z serwisu! Możesz tutaj stworzyć swój plan treningowy oraz zobaczyć listę ćwiczeń oraz film z instruktażem jak poprawnie je wykonac!
          Możesz również zobaczyć, który z naszych użytkowników ma największy obwód w bicepsie, a także sprawdzić profil innego użytkownika!
          Możesz się skontaktować z innymi dzikami i umówić na wspólny trening.
        </Txt>
        <Txt>
          Projekt został stworzony przez studentow Politechniki Śląskiej.
        </Txt>
      </Wrapper>
    </View>
  );
};

export default StartingPage;
