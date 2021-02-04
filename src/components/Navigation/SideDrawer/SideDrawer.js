import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import classes from './SideBar.module.css';

const sideDrawer = (props) => {

  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
      <>
        <BackDrop clicked={props.closed} show={props.open} />
        <div className={attachedClasses.join(' ')}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </>
  );
}

export default sideDrawer;
