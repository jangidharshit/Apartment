import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <Outlet /> : null;
};

export default ProtectedRoute;

