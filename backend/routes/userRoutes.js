import { Router } from 'express';
import { 
  authUser, 
  registerUser, 
  logoutUser, 
  getUserProfile, 
  updateUserProfile, 
  getAllUsers, 
  deleteUser, 
  forgotPassword, 
  resetPassword 
} from '../controllers/userController.js';

const router = Router();

// Routes
router.post('/login', authUser); // Ensure this is the login route for user authentication
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
router.get('/all', getAllUsers);
router.delete('/:id', deleteUser);
router.post('/auth', authUser); 

// Forgot password functionality
router.post('/forgot-password', forgotPassword);  // Add this route
router.put('/reset-password/:token', resetPassword); // Add this route

export default router;
