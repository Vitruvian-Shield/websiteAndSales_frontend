import React, { useState } from 'react';
import {
    Box, Typography, Fade, Snackbar, Alert, Button
} from '@mui/material';
import logo from '../../assets/redvslogo.svg';
import google from '../../assets/Google.png';
import apple from '../../assets/Apple.png';
import LoginForm from './LoginForm';

const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#fff',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none'
}
const LoginDialog = ({ email, onForgotPassword, onClose, onLoginSuccess, onSendResetLink, }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    return (
        <Fade
            in={true}
            timeout={1000}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                sx={{
                    pt: '45px'
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={2}
                >
                    <Box
                        sx={{
                            width: { xs: '53px' },
                            height: { xs: '59.19px' }
                        }}
                    >
                        <img
                            src={logo}
                            alt="Site Logo"
                            style={{ marginBottom: 13, width: '100%', height: '100%' }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            ...navItemStyle,
                            fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '23px' },
                            fontWeight: 600,
                            mt: '8px'
                        }}
                    >
                        Get Started
                    </Typography>
                    <Typography
                        sx={{
                            ...navItemStyle,
                            color: 'rgba(255, 255, 255, 0.65)',
                            lineHeight: 'normal',
                            mt: '12px',
                        }}>
                        Welcome to Vitruvian Shield
                    </Typography>
                </Box>
                <LoginForm email={email} onForgotPassword={onForgotPassword} onLoginSuccess={onLoginSuccess} onSendResetLink={onSendResetLink} />
                <Box mb='16px'></Box>


                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Box>
        </Fade>
    );
};

export default LoginDialog;
