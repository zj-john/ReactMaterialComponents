import React, { Fragment, PureComponent } from 'react';
import DatePicker from 'plugins/Picker';
import LocaleProvider from 'plugins/LocaleProvider';
import TimePickerBasic from "./TimePickerBasic";
import BasicDateTimePicker from "./BasicDateTimePicker";
import KeyboardDatePicker from "./KeyboardDatePicker";
import KeyboardTimePicker from "./KeyboardTimePicker";
import Localization from "./Localization";
import CodeAddr from "../../components/CodeAddr/CodeAddr";
import Usage from "../../components/Usage/Usage";

class BasicDatePicker extends PureComponent {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
        [
         <div>
            <CodeAddr addr="Pickers/BasicDatePicker.js"/>
            <Usage>
                {
`//first: installation
npm install recompose --save
npm install material-ui-pickers --save
//second: 点击代码地址,查看demo示例
`}
            </Usage>
        </div>,
            <LocaleProvider>
        <div style={{ background: '#2196F3', display: 'flex', padding: 20 }}>
          <div className="picker">
            <DatePicker
              label="Basic example"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
              isDark
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
        </div>
      </LocaleProvider>,
          <div style={{marginTop:"50px"}}>
               <CodeAddr addr="Pickers/TimePickerBasic.js"/>
              <TimePickerBasic />
          </div>,
          <div style={{marginTop:"50px"}}>
               <CodeAddr addr="Pickers/BasicDateTimePicker.js"/>
              <BasicDateTimePicker />
          </div>,
          <div style={{marginTop:"50px"}}>
              <CodeAddr addr="Pickers/KeyboardDatePicker.js"/>
              <KeyboardDatePicker />
          </div>,
          <div style={{marginTop:"50px"}}>
              <CodeAddr addr="Pickers/KeyboardTimePicker.js"/>
              <KeyboardTimePicker />
          </div>,
          <div style={{marginTop:"50px"}}>
              <CodeAddr addr="Pickers/Localization.js"/>
              <Localization />
          </div>
        ]
    );
  }
}

export default BasicDatePicker;
