import { useNavigate } from 'react-router-dom';
import  logo  from '../../assets/img/logo.png';
import { useUserDetails } from '../../shared/hooks';

const NavLogo = () => {
    return (
        <div className='nav-logo-container'>
            <img
                className='nav-logo'
                width='100%'
                height='100%'
                src={logo}
                alt='Escudo Kinal'
            />
        </div>
    )
}
const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className='nav-button' onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {

    const { isLogged, logout } = useUserDetails()

    const navigate = useNavigate()

    const handlerNavigateToAuthPage = () => {
        navigate('/auth')
    }

    const handlerNavigateToSeetingPage = () => {
        navigate('/setting')
    }

    const handlerNavigateToChannelsPage = () => {
        navigate('/channels')
    }

    const handlerLogout = () => {
        logout()
    }

    return (
        <div className='nav-container'>
            <NavLogo/>
            <div className='nav-buttons-container'>
                <NavButton text='Browse' onClickHandler={handlerNavigateToChannelsPage}/>
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handlerNavigateToAuthPage}/>
                ) : (
                    <div>
                        <NavButton text='My account' onClickHandler={handlerNavigateToSeetingPage}/>
                        <NavButton text='logout' onClickHandler={handlerLogout}/>
                    </div>
                )}
            </div>
        </div>
    )
}