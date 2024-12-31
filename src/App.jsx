import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Destination from './pages/Destination/Destination';
import Tour from './pages/Tour/Tour';
import Tours from './pages/Tours/Tours';
import { DestinationProvider } from './providers/DestinationProvider';
import Login from './pages/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './pages/Profile/Profile';
import CreateTour from './pages/CreateTour/CreateTour';
import CreateDestination from './pages/CreateDestination/CreateDestination';
import UpdateDestination from './pages/UpdateDestination/UpdateDestination';
import UpdateTour from './pages/UpdateTour/UpdateTour';
import Register from './pages/Register/Register';
import VerifyEmail from './components/userFormComponents/verifyEmail/verifyEmail';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import NotFound from './pages/NotFound/NotFound';
import { Box } from '@chakra-ui/react';
import Coaching from './pages/Coaching/Coaching';
import ArticleDetail from './pages/ArticleDetails/ArticleDetails';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import UpdateArticle from './pages/UpdateArticle/UpdateArticle';
import Articles from './pages/Articles/Articles';

function App() {
  return (
    <div className='App'>
      <Header />
      <Box as='main' flex={1}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/email_verification' element={<VerifyEmail />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/resetPassword/:email' element={<ResetPassword />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/destinations' element={<Destinations />} />
          <Route
            path='/destinations/:destination_id'
            element={
              <DestinationProvider>
                <Destination />
              </DestinationProvider>
            }
          />
          <Route
            path='/destinations/:destination_id/tours/:tour_id'
            element={
              <DestinationProvider>
                <Tour />
              </DestinationProvider>
            }
          />

          <Route path='/tours' element={<Tours />} />

          <Route path='/create-tour' element={<CreateTour />} />
          <Route path='/create-destination' element={<CreateDestination />} />
          <Route path='/update-destination/:destination_id' element={<UpdateDestination />} />
          <Route path='/update-tour/:tour_id' element={<UpdateTour />} />

          <Route path='/coaching' element={<Coaching />} />

          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:article_id' element={<ArticleDetail />} />
          <Route path='/create-article' element={<CreateArticle />} />
          <Route path='/update-article/:article_id' element={<UpdateArticle />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
