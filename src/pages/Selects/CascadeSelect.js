import React, {Component} from 'react';
import CascadeSelect from 'plugins/CascadeSelect';
import FilterSelect from "./FilterSelect";
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from "../../components/Usage/Usage";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cdata: [
                {
                    value: '1',
                    label: '河北',
                    subItems: [
                        {
                            value: '12',
                            label: '石家庄',
                            subItems: [
                                {
                                    value: '13',
                                    label: '平山县',
                                },
                                {
                                    value: '112',
                                    label: '赵县',
                                },
                                {
                                    value: '113',
                                    label: 'test111',
                                },
                            ],
                        },
                        {
                            value: '111',
                            label: 'test22',
                        },
                    ],
                },
                {
                    value: '2',
                    label: '江苏',
                    subItems: [
                        {
                            value: '12',
                            label: 'test11a',
                            subItems: [
                                {
                                    value: '13a',
                                    label: 'test111a',
                                },
                                {
                                    value: '112',
                                    label: 'test111a',
                                },
                                {
                                    value: '113',
                                    label: 'test111a',
                                },
                            ],
                        },
                        {
                            value: '111a',
                            label: 'test22a',
                        },
                    ],
                },
                {
                    value: '3',
                    label: '福建',
                },

                {
                    value: '4',
                    label: '陕西',
                    subItems: [
                        {
                            value: '12',
                            label: 'test11',
                            subItems: [
                                {
                                    value: '13',
                                    label: 'test111',
                                },
                                {
                                    value: '112',
                                    label: 'test111',
                                },
                                {
                                    value: '113',
                                    label: 'test111',
                                },
                            ],
                        },
                        {
                            value: '111',
                            label: 'test22',
                        },
                    ],
                },
                {
                    value: '云南',
                    label: '云南',
                    subItems: [
                        {
                            value: '12',
                            label: 'test11a',
                            subItems: [
                                {
                                    value: '13a',
                                    label: 'test111a',
                                },
                                {
                                    value: '112',
                                    label: 'test111a',
                                },
                                {
                                    value: '113',
                                    label: 'test111a',
                                },
                            ],
                        },
                        {
                            value: '111a',
                            label: 'test22a',
                        },
                    ],
                },
                {
                    value: '3c',
                    label: 'test3c',
                },
            ],
        };
    }

    handleChange = e => {
        console.log('change log', e);
    };

    render() {
        let mapper = {
            label: item => '@ ' + item.label,
        };
        return (
            [<div>
                <Usage>
                    {
`//first: installation
npm install formsy-react --save
npm install recompose --save
//second: 点击代码地址,查看demo示例
`}
                </Usage>
                <CodeAddr addr="Selects/CascadeSelect.js"/>
                <CascadeSelect
                    onChange={this.handleChange}
                    label={'地域'}
                    options={this.state.cdata}
                    separator=">"
                    width={400}
                    mapper={mapper}
                />
            </div>,
                <div style={{marginTop: "100px"}}>
                    <CodeAddr addr="Selects/FilterSelect.js"/>
                    <FilterSelect />
                </div>
            ]
        );
    }
}

export default App;
