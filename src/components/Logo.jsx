import logo from '../assets/img/logo.png';

export const Logo = ({text}) => {
    return (
        <div className='auth-from-logo-container'>
            <img src={logo} alt='Escudo Kinal'/>
            <span>{text}</span>
        </div>
    )
}