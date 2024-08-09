
import Text from './Text';
import { useFormik } from 'formik';
import { TextInput, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff',
    height: 300,
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
    .min(3, 'Username must be greater or equal to 3')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be greater or equal to 8')
    .required('Password is required'),
});

const initialValues = {
    username: '',
    password: '',
  };

export const SignInContainer = ({onSubmit}) => {
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
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="tab" fontWeight="bold">Sign In</Text>
      </Pressable>
    </View>
  );
}

const SignIn = () => {

  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      await signIn({ username, password });
      navigate("/")
      //console.log('data is', data);
      
    } catch (e) {
      console.log(e);
    }
  };
  
  return <SignInContainer onSubmit={onSubmit} />
    
};

export default SignIn;