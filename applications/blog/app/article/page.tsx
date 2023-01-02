'use client';

import {Alert, Button, Paper, Typography} from '@mui/material';
import {ArticleBlock, ArticlePaper} from './_styled';
import {mockArticle} from '@model/article';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function () {
  return (
    <Grid2 container>
      <Grid2 xs sx={{maxWidth: '105ch', margin: '0 auto', padding: '0 24px'}}>
        <ArticlePaper component={'article'}>
          <Typography variant='h3'>{mockArticle.title}</Typography>
          {mockArticle.blocks.map(b => (
            <ArticleBlock key={b.id}>
              <Typography variant='body1'>{b.content}</Typography>
            </ArticleBlock>
          ))}
          <ArticleBlock>
            <Alert severity="info" icon={false}>
              <Typography>Paragraph 4</Typography>
            </Alert>
          </ArticleBlock>
        </ArticlePaper>
      </Grid2>
      <Grid2 xs='auto'>
        <Paper sx={{width: 200, minHeight: '250px'}}>
          <Button>Test</Button>
        </Paper>
      </Grid2>
    </Grid2>
  )
}