import { DangerButton, SuccessButton } from '@/components/StyledMui/Button';
import { MagicPaper } from '@/components/StyledMui/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const CustomComponents = () => {
  const paperArr = Array.from({ length: 10 }, (_, index) => index + 1);

  const gridArr = Array.from({ length: 2 }, (_, index) => index + 1);
  return (
    <Container>
      <Typography variant="h1">Custom Components</Typography>
      <Stack alignContent="center" direction="row" spacing={2} mb={10}>
        <DangerButton disableRipple disableElevation>
          Danger Button
        </DangerButton>
        <SuccessButton>Success Button</SuccessButton>
      </Stack>

      <Typography variant="h2" gutterBottom>
        Paper
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        mb={10}
        sx={{
          gap: { xs: 1, sm: 2, md: 3 }, // Different gap sizes for different screen sizes
        }}
      >
        {paperArr.map((paper) => (
          <MagicPaper key={paper} sx={{ margin: '1px' }}>
            <Typography>Hello world</Typography>
          </MagicPaper>
        ))}
      </Stack>

      <Typography variant="h2" gutterBottom>
        Grid
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start" // Align items to the start horizontally
        alignItems="flex-start"
      >
        {gridArr.map((grid) => (
          <Grid item key={grid} xs={12} sm={6}>
            <Paper>
              <Typography component="p">Hello World</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomComponents;
