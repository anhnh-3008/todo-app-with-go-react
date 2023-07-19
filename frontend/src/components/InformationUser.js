import Avatar from '@mui/material/Avatar';
import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function InformationUser({name, total, progressAmount, doneAmount}) {
  return (
    <Stack spacing={1}>
      <Avatar alt="avatar" src="https://pbs.twimg.com/media/Ef41ydAUMAE_Djy?format=jpg&name=4096x4096"
        sx={{ width: 150, height: 150 }} />
      <Stack>
        <Typography variant="body2" color="text.primary">{name}</Typography>
        <Typography variant="body2" color="text.primary">{`Total events in week: ${total}`}</Typography>
        <Typography variant="body2" color="text.primary">{`Total progress events in week: ${progressAmount}`}</Typography>
        <Typography variant="body2" color="text.primary">{`Total done events in week: ${doneAmount}`}</Typography>
      </Stack>
    </Stack>

  )
}
