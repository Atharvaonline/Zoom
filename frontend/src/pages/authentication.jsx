import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { useNavigate } from "react-router-dom";




const deepTealTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#7B8FA1' },
        secondary: { main: '#2A2E35' },
        background: {
            default: '#2A2E35',
            paper: 'rgba(42,46,53,0.92)'
        },
        text: {
            primary: '#E4E9EC',
            secondary: 'rgba(228, 233, 236, 0.72)'
        }
    },
    shape: { borderRadius: 16 },
    typography: {
        fontFamily: '"Inter","Segoe UI","Space Grotesk",sans-serif',
        button: { textTransform: 'none', fontWeight: 600 }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'linear-gradient(145deg, rgba(42,46,53,0.95), rgba(123,143,161,0.85))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 35px 70px rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(14px)'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    paddingInline: 20,
                    boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
                    transition: 'transform 220ms ease, box-shadow 220ms ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 25px 55px rgba(0,0,0,0.45)'
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': { color: 'rgba(228,233,236,0.6)' },
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.16)' },
                        '&:hover fieldset': { borderColor: '#7B8FA1' }
                    }
                }
            }
        }
    }
});

export default function Authentication() {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);


                console.log(result);

                setMessage(result);
                setOpen(true);
                setUsername("");
                setPassword("");
                setError("");
                setFormState(0);

                setTimeout(() => navigate("/home"), 500);
            }

            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setMessage(result);
                setOpen(true);
                setUsername("");
                setPassword("");
                setError("");
                setFormState(0);
            }
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || "Something wrong");
        }
    }



    return (
        <ThemeProvider theme={deepTealTheme}>
            <Grid container component="main" sx={{ height: '100vh', background: 'linear-gradient(135deg, #2A2E35 0%, #7B8FA1 70%)' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'linear-gradient(160deg, rgba(42,46,53,0.95), rgba(123,143,161,0.85)), url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRight: '1px solid rgba(255,255,255,0.08)'
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <div>
                            <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
                                Sign In
                            </Button>
                            <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
                                Sign Up
                            </Button>
                        </div>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 ? <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            /> : <></>}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                            />

                            <p style={{ color: "red" }}>{error}</p>

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login" : "Register"}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                message={message}
            />

        </ThemeProvider>
    );
}