import { ImageResponse } from 'next/og'

export const size = {
  width: 128,
  height: 128,
}
export const contentType = 'image/ico'

export default function Icon() {
  const firstLetter = 'AJL';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: '#3b82f6', 
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        {firstLetter}
      </div>
    ),
    {
      ...size,
    }
  )
}
