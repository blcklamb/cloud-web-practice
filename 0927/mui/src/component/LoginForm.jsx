import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const logObj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(`%c${JSON.stringify(logObj)}`, `color: green`);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="이메일"
            id="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="암호 저장하기"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                암호를 잊어버리셨나요?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                계정이 없으신가요? 회원가입!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
