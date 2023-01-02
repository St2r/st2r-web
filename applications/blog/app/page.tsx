'use client'

import { redirect } from 'next/navigation';
import _ from 'lodash';

export default function Home() {

  redirect('/article');

  console.log(_.get({a: {b: '1'}}, 'a.b'));

  return (
    <div>Home</div>
  )
}
