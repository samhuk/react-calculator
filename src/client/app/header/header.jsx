import React from 'react'
import { string } from 'prop-types'

export const Header = ({ title }) => (
  <div className="header"><i>{title}</i></div>
)

Header.propTypes = { title: string }

Header.defaultProps = { title: '' }

export default Header
