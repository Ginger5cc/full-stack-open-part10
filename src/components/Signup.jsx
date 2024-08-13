
import Text from './Text';
import { useFormik } from 'formik';
import { TextInput, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp'
import { useNavigate } from "react-router-native";
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff',
    height: 400,
  },
  field: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius:10,
    borderColor: '#d6d6d6',
    borderStyle: "solid",
    borderWidth: 1,
  },
  button:{
    backgroundColor: '#0366d6',
    width: 300,
    height: 40,
    borderRadius:10,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 30,
  },
  
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be between 5 to 30 characters')
    .max(30, 'Username must be between 5 to 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be between 5 to 50 characters')
    .max(50, 'Username must be between 5 to 50 characters')
    .required('Password is required'),
  passwordConfirm: yup
  .string()
  .oneOf([yup.ref('password'), null], 'Password does not match')
  .min(5, 'Password must be between 5 to 50 characters')
  .max(50, 'Username must be between 5 to 50 characters')
  .required('Password Confirmation is required'),
});

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

export const SignUpContainer = ({onSubmit}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  return (
    <View style={styles.container}>
      
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          autoCapitalize='none'
          style={[styles.field, { borderColor: formik.errors.username ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.username && formik.errors.username && (
          <Text color='error'>{formik.errors.username}</Text>
        )}
      </View>
     
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          autoCapitalize='none'
          style={[styles.field, { borderColor: formik.errors.password ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.password && formik.errors.password && (
          <Text color='error'>{formik.errors.password}</Text>
        )}
      </View>
      <TextInput
          placeholder="Password confirmation"
          secureTextEntry={true}
          value={formik.values.passwordConfirm}
          onChangeText={formik.handleChange('passwordConfirm')}
          autoCapitalize='none'
          style={[styles.field, { borderColor: formik.errors.passwordConfirm ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <Text color='error'>{formik.errors.passwordConfirm}</Text>
        )}
      </View>
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="tab" fontWeight="bold">Sign Up</Text>
      </Pressable>
    </View>
  );
}

const SignUp = () => {

  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/")
      
    } catch (e) {
      console.log(e);
    }
  };
  
  return <SignUpContainer onSubmit={onSubmit} />
    
};





export default SignUp