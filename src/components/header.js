import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button c={showAdd ? 'red':'green'} OnClick={onAdd} word={showAdd ? "Collapse": "Add"}/>
        </header>
    )
}
export default Header
