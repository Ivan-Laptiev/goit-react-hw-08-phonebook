import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from '../Page.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }

    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  return (
    
    <form onSubmit={handleSubmit} className={css.form}>
      <h2>Please login</h2>
      <label className={css.label}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          required
        />
      </label>
      <label className={css.label}>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          placeholder="password"
          minLength={5}
          required
        />
      </label>
      <div>
        <button className={css.pageBtn} type="submit">
          Login
        </button>
      </div>
    </form>
    
  );
}