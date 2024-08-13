
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import SignInSuccess from './Sign-In-success';
import SignOut from './SignOut';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import SignUp from './Signup';
import MyReviews from './MyReviews'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <>
    <AppBar />
    <View style={styles.container}>
      
    
    <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/log-in" element={<SignInSuccess />} />
        <Route path="/createReview" element={<CreateReview />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </View>
    </>
  );
};

export default Main;