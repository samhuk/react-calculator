import { withProps } from 'recompose'
import Header from './header'

const HeaderContainer = withProps({ title: 'Calculator' })(Header)

export default HeaderContainer
