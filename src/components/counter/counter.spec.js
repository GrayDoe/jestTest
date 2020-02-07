import React from 'react'
import Counter from './index'
import {create} from "react-test-renderer"
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


it("Counter work", () => {
    let x = 0
    const wrapper = render(<Counter />);
    let value = wrapper.find('.baba').text();
    expect(value).toBe("0");
  })