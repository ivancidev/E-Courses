import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function SlotPropsSignIn() {
  const theme = useTheme();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-screen">
      <AppProvider theme={theme}>
        <SignInPage
          signIn={() => {
            login();
            navigate('/app');
          }}
          providers={providers}
        />
      </AppProvider>
    </div>
  );
}
