'use client';

import {Button, Chip, Typography} from '@mui/material';
import {Add, MoreVert} from '@mui/icons-material';

const Node = () => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start'}}>
      <Add fontSize={'small'}/>
      <MoreVert />
      <Typography>一大段文本测试</Typography>
    </div>
  )
}

export default function () {
  return (
    <div>
      <Node/>
      <Node/>
      <Node/>
    </div>
  )
}