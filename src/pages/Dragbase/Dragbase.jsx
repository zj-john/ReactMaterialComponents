import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DragSource, DropTarget } from 'plugins/DragBase';
import ManuallyDragSource from './ManuallyDragSource';
import ManuallyDropTarget from './ManuallyDropTarget';
const styles = theme => ({
  root: {
    position: 'relative',
    width: '600px',
    height: '400px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  dropTarget: {
    position: 'absolute',
    top: '100px',
  },
});
class DragManually extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapToGridAfterDrop: false,
    };
  }
  render() {
    const { classes } = this.props;
    const { snapToGridAfterDrop } = this.state;
    return (
      <div className={classes.root}>
        <div>
          <DragSource>
            <ManuallyDragSource type="OUTITEM">
              <div>boxA</div>
            </ManuallyDragSource>
          </DragSource>
          <DragSource>
            <ManuallyDragSource type="OUTITEM">
              <div>boxB</div>
            </ManuallyDragSource>
          </DragSource>
        </div>

        <DropTarget>
          <ManuallyDropTarget acceptItem={['BoxB', 'BoxC']} snapToGrid={snapToGridAfterDrop} />
        </DropTarget>
        <p>
          <label htmlFor="snapToGridAfterDrop">
            <input
              id="snapToGridAfterDrop"
              type="checkbox"
              checked={snapToGridAfterDrop}
              onChange={this.handleSnapToGridAfterDropChange.bind(this)}
            />
            <small>Snap to grid after drop</small>
          </label>
        </p>
      </div>
    );
  }
  handleSnapToGridAfterDropChange() {
    this.setState({
      snapToGridAfterDrop: !this.state.snapToGridAfterDrop,
    });
  }
}
export default withStyles(styles)(DragManually);
