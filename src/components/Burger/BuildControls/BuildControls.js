import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p><strong>Current price: {props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
        <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
    ))}
    <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.ordered}>Order now!
    </button>
  </div>
);

export default buildControls;
