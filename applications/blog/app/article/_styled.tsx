'use client';

import {Box, Paper, styled } from '@mui/material';

export const ArticleBlock = styled(Box)(({theme}) => ({
  marginRight: 0,
}))

export const ArticlePaper: typeof Paper = styled(Paper)(
  ({theme}) => (theme as any)?.unstable_sx({
    p: 2,
  }),
  ({theme}) => ({
    [String(ArticleBlock)]: theme.unstable_sx({
      mb: 2,
    })
  })
);