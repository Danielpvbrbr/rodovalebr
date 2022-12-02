import React, { useContext, useState } from 'react';
import { Container, AreaForm, AreaButton } from './styles';
import { BsX } from "react-icons/bs";
import InputLabel from '../../components/InputLabel';
import RecoverPassword from './RecoverPassword';
import { BsFillTelephoneFill, BsLockFill } from "react-icons/bs";

export default function SignIn({ setIsForm, width, widthMax, setIsSignUp, AuthContext }) {
  const { signIn } = useContext(AuthContext);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isRecovery, setisRecovery] = useState(false);

  const handleSubmit = () => {
    if (phone.length && password.length) {
      signIn({
        phone: phone,
        password: password,
      })
    } else {
      alert('Ops! Campo vázio!');
    };
  };

  const isAlter = () => {
    setIsSignUp(true);
    setIsForm(false);
  };

  return (
    <>
      {
        isRecovery ?
          <RecoverPassword
            setIsForm={setIsForm}
            width={width}
            AuthContext={AuthContext}
            setisRecovery={setisRecovery}
          />
          :
          <Container>
            <AreaForm width={width < widthMax ? '62vw' : '400px'}>
              <header>
                <h4>Login</h4>
                <BsX
                  size={30}
                  color='#779FE5'
                  cursor='pointer'
                  onClick={() => setIsForm(false)}
                />
              </header>
              <section>
                <InputLabel
                  type='number'
                  label='Telefone:'
                  value={phone}
                  maxLength={11}
                  Icon={BsFillTelephoneFill}
                  width={width < widthMax ? '56vw' : '370px'}
                  width2={width < widthMax ? '50vw' : '330px'}//Modifica o tamanho do input
                  placeholder='Ex: 999999999'
                  onChange={e => setPhone(e.target.value)}
                  background='#fff'
                  isIcon={true}
                />
                <InputLabel
                  type='password'
                  label='Senha:'
                  value={password}
                  maxLength={8}
                  Icon={BsLockFill}
                  width={width < widthMax ? '56vw' : '370px'}
                  width2={width < widthMax ? '50vw' : '330px'}//Modifica o tamanho do input
                  widthMax={widthMax}
                  placeholder='Digite sua senha'
                  onChange={e => setPassword(e.target.value)}
                  background='#fff'
                  isIcon={true}
                />
              </section>

              <p onClick={() => setisRecovery(true)}>Esqueci a senha!</p>

              <AreaButton width={width < widthMax ? '56vw' : '370px'}>
                <button onClick={handleSubmit}>Continuar</button>
                <h3 onClick={isAlter}>Criar conta</h3>
              </AreaButton>
            </AreaForm>
          </Container>
      }
    </>

  )
};