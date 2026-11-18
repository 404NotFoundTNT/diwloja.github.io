import React from 'react'
import tecnologias from '@/app/data/tecnologias.json';
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <h2>Tecnologias Exploradas</h2>
        <Image
        src={`/vercel.svg`}
        alt={`Logótipo de React`}
        width={100}
        height={100}
        />
    </div>
  )
}
