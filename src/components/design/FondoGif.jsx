import { Html } from '@react-three/drei'

const Gif = ({ url, width }) => {
  return (
    <>
      <Html fullscreen>
        <img
          src={url}
          style={{ width: width, height: '100%' }}
        />
      </Html>
    </>
  )
}

export default Gif
