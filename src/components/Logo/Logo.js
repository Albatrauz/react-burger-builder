import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="Logo of my own burger store"/>
    </div>
);

export default Logo;
