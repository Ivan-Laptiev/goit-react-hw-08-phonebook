import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from '../Page.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }

    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h2>Sign up</h2>
      <label className={css.label}>
        <input
          onChange={handleChange}
          type="name"
          name="name"
          value={name}
          placeholder="Name"
          required
        />
      </label>
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
          Sign up
        </button>
      </div>
    </form>
  );
}