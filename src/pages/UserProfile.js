import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseButton from '../components/base/BaseButton';
import './UserProfile.scss';
import BaseInputFloatingLabel from '../components/base/BaseInputFloatingLabel';
import { useState } from 'react';

const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [IBAN, setIBAN] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState('');

  return (
    <div className="container--compressed">
      <div className="h-grid gap-huge">
        <section className="h-grid hv-centered">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-user"
            style={{ fontSize: '10rem', margin: '0 auto' }}
          />
          <BaseButton mode="text">
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" /> Add profile image
          </BaseButton>
        </section>
        <section className="h-grid gap-huge">
          <form className="user-profile__form h-grid gap-huge">
            <section className="h-grid">
              <header className="section__form-header">
                <div className="section__form-header-title">
                  Persönliche Angaben
                </div>
              </header>
              <div className="h-grid">
                <BaseInputFloatingLabel
                  labelHtmlFor="firstname"
                  labelTitle="Firstname"
                  inputType="text"
                  inputName="firstname"
                  inputId="firstname"
                  inputValue={firstName}
                  onChange={setFirstName}
                />

                <BaseInputFloatingLabel
                  labelHtmlFor="lastname"
                  labelTitle="Lastname"
                  inputType="text"
                  inputName="lastname"
                  inputId="lastname"
                  inputValue={lastName}
                  onChange={setLastName}
                />

                <BaseInputFloatingLabel
                  labelHtmlFor="email"
                  labelTitle="Email"
                  inputType="email"
                  inputName="email"
                  inputId="email"
                  inputValue={email}
                  onChange={setEmail}
                />

                <BaseInputFloatingLabel
                  labelHtmlFor="password"
                  labelTitle="Password"
                  inputType="password"
                  inputName="password"
                  inputId="password"
                  inputValue={password}
                  onChange={setPassword}
                />
                <BaseButton mode="text">Change password</BaseButton>
              </div>
            </section>
            <section className="h-grid">
              <header className="section__form-header">
                <div className="section__form-header-title">
                  Account settings
                </div>
              </header>
              <div className="h-grid">
                <div className="h-grid gap-small">
                  <BaseInputFloatingLabel
                    labelHtmlFor="IBAN"
                    labelTitle="IBAN"
                    inputType="text"
                    inputName="IBAN"
                    inputId="IBAN"
                    inputValue={IBAN}
                    onChange={setIBAN}
                  />
                  <BaseButton mode="text">More information</BaseButton>
                </div>
                <div className="h-grid gap-small">
                  <BaseInputFloatingLabel
                    labelHtmlFor="monthlyBudget"
                    labelTitle="Monthly Budget"
                    inputType="text"
                    inputName="monthlyBudget"
                    inputId="monthlyBudget"
                    inputValue={monthlyBudget}
                    onChange={setMonthlyBudget}
                  />
                  <BaseButton mode="text">More information</BaseButton>
                </div>
              </div>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
