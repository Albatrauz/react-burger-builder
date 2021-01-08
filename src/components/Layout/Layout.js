import classes from './Layout.module.css';

const layout = ( props ) => (
  <>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </>
);

export default layout;
