import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function App() {

  const baseUrl = 'https://api-ecommerce-gamaxp47.herokuapp.com';

  const handleClickLogin = (values) => {
    // console.log(values);
    axios.post(baseUrl + '/login',{
      email: values.email,
      senha: values.senha
    }).then((response) => {
      if(response.status === 200){
        alert('Usuário autenticado com sucesso!');
      }      
    }).catch((error) => {
      alert('Erro no login!');
    });

  };
  const validationLogin = yup.object().shape({
    email: yup.string().email('Formato do e-mailinválido.').required('Campo "E-mail" Obrigatório'),
    senha: yup.string().min(4, 'Senha precisa ser de no mínimo 4 caracteres.').required('Campo "Senha" Obrigatório')
  });  

  const handleClickRegister = (values) => {
    // console.log(values);
    axios.post(baseUrl + '/usuario',{
      nome: values.nome,
      email: values.email,
      senha: values.senha,
      fone: values.fone,
      tipoUser: values.tipoUser,
      logradouro: values.logradouro,
      numero: values.numero,
      bairro: values.bairro,
      cidade: values.cidade,
      estado: values.estado,
      cep: values.cep,
      tipoEnd: values.tipoEnd
    }).then((response) => {
      if(response.status === 201){
        alert('Novo usuário criado com sucesso!');
      }
    }).catch((error) => {
      alert('Erro ao criar o usuário.');
    });
  };
  const validationRegister = yup.object().shape({
    nome: yup.string().required('Campo "Nome" é Obrigatório'),
    email: yup.string().email('E-mail inválido').email("Formato do e-mailinválido.").required('Campo e-mail Obrigatório'),
    senha: yup.string().min(4, 'Senha precisa ser de no mínimo 4 caracteres.').required('Campo password Obrigatório'),
    fone: yup.string().required('O campo "Fone" é obrigatório'),
    tipoUser: yup.string().required('O campo "Tipo Usuário" é obrigatório"'),
    logradouro: yup.string().required('O campo "Logradouro" é obrigatório"'),
    numero: yup.string().required('O campo "Número" é obrigatório"'),
    bairro: yup.string().required('O campo "Bairro" é obrigatório"'),
    cidade: yup.string().required('O campo "Cidade" é obrigatório"'),
    estado: yup.string().required('O campo "Estado" é obrigatório"'),
    cep: yup.string().required('O campo "Cep" é obrigatório"'),
    tipoEnd: yup.string().required('O campo "Tipo End." é obrigatório"')
  });

  return (
    <div className="container">
      <h2> Ecommerce Gama xp47 Desafio Final</h2>
      <h3>Login</h3>
      <Formik initialValues={{}}
        onSubmit={handleClickLogin} 
        validationSchema={validationLogin}
      >
        <Form className='login-form'>         
          <div className='login-form-group'>
            <Field name="email" className="form-field" 
              placeHolder="E-mail"/>
            <ErrorMessage 
              component="span" 
              name='email' 
              className='form-error'
            />  
          </div>
          <div className='login-form-group'>
            <Field name="senha" className="form-field" 
              placeHolder="senha"/>
            <ErrorMessage 
              component="span" 
              name='senha' 
              className='form-error'
            />  
          </div>
          <button className='button' type='submit'>Login</button>
        </Form>
      </Formik>

      <h3>Cadastro</h3>
      <Formik initialValues={{}}
        onSubmit={handleClickRegister} 
        validationSchema={validationRegister}
      >
        <Form className='register-form'> 
        <div className='register-form-group'>
            <Field name="nome" className="form-field" 
              placeHolder="Nome"/>
            <ErrorMessage 
              component="span" 
              name='nome' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="email" className="form-field" 
              placeHolder="E-mail"/>
            <ErrorMessage 
              component="span" 
              name='email' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="senha" className="form-field" 
              placeHolder="Senha"/>
            <ErrorMessage 
              component="span" 
              name='senha' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="fone" className="form-field" 
              placeHolder="Fone"/>
            <ErrorMessage 
              component="span" 
              name='fone' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="tipoUser" className="form-field" 
              placeHolder="Tipo User: 1) Admin, 2) Comun"/>
            <ErrorMessage 
              component="span" 
              name='tipoUser' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="logradouro" className="form-field" 
              placeHolder="Logradouro"/>
            <ErrorMessage 
              component="span" 
              name='logradouro' 
              className='form-error'
            />  
          </div><div className='register-form-group'>
            <Field name="numero" className="form-field" 
              placeHolder="Nº"/>
            <ErrorMessage 
              component="span" 
              name='numero' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="bairro" className="form-field" 
              placeHolder="Bairro"/>
            <ErrorMessage 
              component="span" 
              name='bairro' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="cidade" className="form-field" 
              placeHolder="Cidade"/>
            <ErrorMessage 
              component="span" 
              name='cidade' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="estado" className="form-field" 
              placeHolder="Estado"/>
            <ErrorMessage 
              component="span" 
              name='estado' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="cep" className="form-field" 
              placeHolder="Cep"/>
            <ErrorMessage 
              component="span" 
              name='cep' 
              className='form-error'
            />  
          </div>
          <div className='register-form-group'>
            <Field name="tipoEnd" className="form-field" 
              placeHolder="Tipo End.: 1) Res., 2) Comercial"/>
            <ErrorMessage 
              component="span" 
              name='tipoEnd' 
              className='form-error'
            />  
          </div>
          <button className='button' type='submit'>Cadastrar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;

// https://formik.org/docs/api/field
// https://www.youtube.com/watch?v=F_mXVI8Dalg