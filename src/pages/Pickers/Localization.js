import React, { Fragment, Component, PureComponent } from 'react';
import DatePicker from 'plugins/Picker';
import Button from 'plugins/Button';
import ButtonGroup from 'plugins/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import LocaleProvider, {
  withLocale,
  LocaleConsumer,
} from 'plugins/LocaleProvider';

const radio = true;

class BasicDatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
  }

  handleDateChange = data => {
    this.setState({ selectedDate: data });
  };

  render() {
    const { selectedDate } = this.state.selectedDate;

    return (
      <Fragment>
        <div className="picker">
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>

        <div className="picker">
          <DatePicker
            label="Clearable"
            clearable
            disableFuture
            maxDateMessage="Date must be less than today"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>

        <div className="picker">
          <DatePicker
            label="With today button"
            showTodayButton
            maxDateMessage="Date must be less than today"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>
      </Fragment>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LocaleProvider>
        <Grid
          container
          spacing={16}
          alignItems={'left'}
          direction={'column'}
          justify={'space-around'}
        >
          <Grid item>
            <BasicDatePicker />
          </Grid>
          <Grid item>
            <LocaleConsumer>
              {value => {
                const { locale, changeLocale } = value;
                return (
                  <ButtonGroup>
                    <Button onClick={changeLocale('zh-cn')} variant="raised" color="primary">
                      中文
                    </Button>
                    <Button
                      onClick={changeLocale('en-us')}
                      radio={radio}
                      variant="raised"
                      color="primary"
                    >
                      EN
                    </Button>
                    <Button onClick={changeLocale('zh-tw')} variant="raised" color="primary">
                      繁体中文
                    </Button>
                  </ButtonGroup>
                );
              }}
            </LocaleConsumer>
          </Grid>
        </Grid>
      </LocaleProvider>
    );
  }
}

export default App;
