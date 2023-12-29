import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Logo } from 'components/Icons/Logo';
import { Link } from 'react-router-dom';
import {
  Button,
  HeaderContainer,
  UserLogoContainer,
  UserName,
} from './Header.styled';
import {
  selectIsLoggedIn,
  selectName,
  selectUserLogo,
} from '../../redux/selectors';

// import { LogoModal } from '../LogoModal/LogoModal';
import { UserIcon } from 'components/Icons/UserIcon';
import { ArrowDown } from 'components/Icons/ArrowDown';
import { UserLogo } from 'components/UserLogo/UserLogo';

import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';

export const Header = () => {
  // const toggleModal = useModal();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);
  const userLogo = useSelector(selectUserLogo);
  const [logoModal, setLogoModal] = useState(false);

  // const defaultName = 'V';

  const toggalModal = () => {
    setLogoModal(logoModal => !logoModal);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      {isLoggedIn ? (
        <UserLogoContainer onClick={toggalModal}>
          <UserName>{userName}</UserName>
          {userLogo ? <UserLogo /> : ''}
          <ArrowDown />
          {logoModal && <UserLogoModal onClose={toggalModal} />}
        </UserLogoContainer>
      ) : (
        <Link to="/signin">
          <UserLogoContainer>
            <Button type="botton">Sign in</Button>
            <UserIcon />
          </UserLogoContainer>
        </Link>
      )}
    </HeaderContainer>
  );
};
