import React from 'react'

type HeaderProps = { text: string }

const Header = ({ text }: HeaderProps) => {
  return <h1>{text}</h1>
}

export default Header
