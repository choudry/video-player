import { useState } from 'react'
import Video from './components/Video';
import Menu from './components/Menu';
import './App.css'

function App() {
  enum keys {
    fast,
    slow,
    cute,
    eek
  }
  const VIDEOS = {
    "fast": 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
    "slow": 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
    "cute": 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
    "eek": 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
  };

  const [src, setSrc] = useState(VIDEOS["fast"]);

  const onSelectVideoHandler = (newSrc: string) => {
      setSrc(VIDEOS[`${newSrc}`])
  }

  return (
    <>
      <h1>Video Player</h1>
      <Video src={`${src}`} />
      <Menu onSelectVideo={onSelectVideoHandler}/>
        
    </>
  )
}

export default App
