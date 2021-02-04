import classes from './SideDrawerToggle.module.css';
const SideDrawerToggle = (props) => {

  return (
    <div className={classes.toggleWrapper} onClick={props.clicked}>
      <div className={classes.toggle}>
        <span/>
        <span/>
        <span/>
      </div>
    </div>
  );
}

export default SideDrawerToggle;
