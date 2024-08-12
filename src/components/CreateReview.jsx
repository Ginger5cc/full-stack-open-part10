import Text from './Text';
import { useFormik } from 'formik';
import { TextInput, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff',
    paddingVertical: 50
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
  fieldLarge: {
    width: 300,
    height: 100,
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

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: '',
};

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .min(3, 'Repository Owner Name must be greater than 3 characters')
    .required('Repository Owner Name is required'),
  repositoryName: yup
    .string()
    .min(3, 'Repository Name  must be greater 3 characters')
    .required('Repository Name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required')
    .typeError('Rating must be a number'),
  review: yup
    .string()
    .min(3, 'Review must be greater 3 characters'),

});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repositoryOwnerName, repositoryName, rating, review } = values;
    
    try {
      const {data} = await createReview({ repositoryOwnerName, repositoryName, rating, review });
      navigate(`/${data.createReview.repositoryId}`)
      
    } catch (e) {
      console.log(e);
    }
  };


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      
        <TextInput
          placeholder="Repository owner name"
          value={formik.values.repositoryOwnerName}
          onChangeText={formik.handleChange('repositoryOwnerName')}
          autoCapitalize='none'
          style={[styles.field, { borderColor: formik.errors.repositoryOwnerName ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.repositoryOwnerName && formik.errors.repositoryOwnerName && (
          <Text color='error'>{formik.errors.repositoryOwnerName}</Text>
        )}
      </View>
     
        <TextInput
          placeholder="Repository Name"
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange('repositoryName')}
          autoCapitalize='none'
          style={[styles.field, { borderColor: formik.errors.repositoryName ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text color='error'>{formik.errors.repositoryName}</Text>
        )}
      </View>
      <TextInput
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={formik.handleChange('rating')}
          autoCapitalize='none'
          style={[styles.field, { borderColor: formik.errors.rating ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.rating && formik.errors.rating && (
          <Text color='error'>{formik.errors.rating}</Text>
        )}
      </View>
      <TextInput
          placeholder="Review"
          value={formik.values.review}
          onChangeText={formik.handleChange('review')}
          autoCapitalize='none'
          multiline={true}
          style={[styles.fieldLarge, { borderColor: formik.errors.review ? '#d73a4a' : "#d6d6d6" }]}
        />
      <View style={styles.input}>
        {formik.touched.review && formik.errors.review && (
          <Text color='error'>{formik.errors.review}</Text>
        )}
      </View>
      
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="tab" fontWeight="bold">Create a review</Text>
      </Pressable>
    </View>
  )
}

export default CreateReview