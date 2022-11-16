import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserName } from '../../../redux/auth/authSelectors';
import { logOut } from '../../../redux/auth/authOperations';
import userAvatar from '../../../img/user.png';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    toast.success('LogOut!');
    dispatch(logOut());
  };

  return (
    <div className={css.container}>
      <img className={css.avatar} src={userAvatar} alt="user" width="63" />
      <span className={css.text}>Welcome {name}</span>
      <div>
        <button className={css.userBtn} type="button" onClick={handleLogOut}>
          logout
        </button>
      </div>
    </div>
  );
}