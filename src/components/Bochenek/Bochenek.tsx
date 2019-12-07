import React, { FC } from 'react';
import { connect } from 'react-redux';
import State from 'types/store';
import { login, registerUser } from 'store/user/actions';
import { Wrapper } from './Bochenek.style';

interface BochenekProps {
  login: typeof login;
  registerUser: typeof registerUser;
}

const Bochenek: FC<BochenekProps> = ({ login, registerUser }) => {
  const handleClick = () => registerUser('bochcio88', 'kochamfugcia');
  return (
    <Wrapper>
      This is your Bochenek component!
      <button onClick={handleClick}>eluwa</button>
    </Wrapper>
  );
};

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = {
  login,
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bochenek);
