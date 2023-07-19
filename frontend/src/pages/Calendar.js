import CalendarComponent from "../components/FullCalendar"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from "@mui/material";
import DatePickerComponent from '../components/DatePicker'
import ProgressComponent from '../components/Progress'
import InformationUserComponent from "../components/InformationUser";

export default function Calendar() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
              direction="row"
              justifyContent="left">
          <Grid xs={3}>
            <Stack spacing={5}>
              <InformationUserComponent name={"Hoang Anh"} total={100} progressAmount={22} doneProgress={87} />
              <DatePickerComponent />
              <Stack spacing={2}>
                <ProgressComponent currentAmount={5} totalAmount={10} colorLight={'#1a90ff'} colorDark={'#308fe8'} title={"Progress tracking:"} />
                <ProgressComponent currentAmount={5} totalAmount={24} colorLight={'#e9f505'} colorDark={'#d0db65'} title={"Hours in day:"} />
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <CalendarComponent />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
