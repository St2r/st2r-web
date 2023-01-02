import {observable, action} from 'mobx';

export interface Article {
  title: string;

  blocks: ArticleBlock[];
}

export interface ArticleBlock {
  id: string;
  type: string;
  content: string;
}

export const mockArticle: Article = {
  title: '',
  blocks: [
    {
      id: '1',
      type: 'paragraph',
      content: 'paragraph1',
    },
    {
      id: '2',
      type: 'paragraph',
      content: 'paragraph2 paragraph2',
    },
    {
      id: '3',
      type: 'paragraph',
      content: 'paragraph3 paragraph3 paragraph3',
    },
  ]
}