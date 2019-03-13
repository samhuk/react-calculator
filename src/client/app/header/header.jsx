import React from 'react'
import { string } from 'prop-types'

export const Header = ({ title }) => (
  <div>{title}</div>
)

Header.propTypes = { title: string }

Header.defaultProps = { title: '' }

export default Header
