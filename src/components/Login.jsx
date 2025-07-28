import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import toast from 'react-hot-toast';

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f2f2f2;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
`;

const StyledError = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Too short').required('Password is required'),
});

const Login = () => {
  const handleSubmit = (values) => {
    console.log('Form data:', values);
    // You can send this data to your backend here
  

   // Dummy login check
   if (values.email === 'test@example.com' && values.password === '1234') {
    toast.success('Login successful!');
    resetForm();
  } else {
    toast.error('Invalid email or password');
  }
};


  return (
    <Container>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Email</label>
          <StyledField type="email" name="email" />
          <ErrorMessage name="email" component={StyledError} />

          <label>Password</label>
          <StyledField type="password" name="password" />
          <ErrorMessage name="password" component={StyledError} />

          <StyledButton type="submit">Login</StyledButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
