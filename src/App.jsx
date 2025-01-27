import {lazy, Suspense} from 'react';
import Loading from './components/Loading';


const ReactQiuz = lazy (() => import('./components/ReactQuiz'));


export default function App () {
  return (
    <Suspense fallback={<Loading />}>
      <ReactQiuz />
    </Suspense>
  )
}
