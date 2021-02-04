import {useState} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = ( props ) => {

  const [sideDrawerState, showSideDrawer] = useState(true);

  const sideDrawerClosedHandler = () => {

    showSideDrawer(!sideDrawerState);
  }

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerClosedHandler} />
      <SideDrawer open={sideDrawerState} closed={sideDrawerClosedHandler} />
      <main className={classes.content}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
