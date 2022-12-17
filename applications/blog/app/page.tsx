'use client'

import _ from 'lodash';

export default function Home() {

  console.log(_.get({a: {b: '1'}}, 'a.b'));

  return (
    <div>Home</div>
  )
}
