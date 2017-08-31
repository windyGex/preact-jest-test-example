import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Button from './index';

test('should render', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.hasClass('ui-btn')).toBe(true);
});
test('should render type', () => {
    const wrapper = mount(<Button type="primary"/>);
    expect(wrapper.hasClass('ui-btn-primary')).toBe(true);
});
test('should support event', () => {
    let test = false;
    const wrapper = mount(<Button onClick={() => test = true}/>);
    wrapper.simulate('click');
    expect(test).toBe(true);
})