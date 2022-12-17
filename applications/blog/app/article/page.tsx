'use client';
import './test.scss';

import {Alert, Paper, Typography} from '@mui/material';
import {useService} from '@model/context';

export default function () {
  return (
    <Paper sx={{p: 4}} elevation={1} className='article-container' >
      <Typography variant='h3'>Title</Typography>
      <Typography variant='body1' >Paragraph1</Typography>
      <Typography variant='body1' >Paragraph2</Typography>
      <Typography variant='body1' >Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 </Typography>
      <Alert severity="info" icon={false}>
        <Typography>Paragraph 4</Typography>
      </Alert>
    </Paper>
  )
}