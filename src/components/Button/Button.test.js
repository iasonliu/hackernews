import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Button from '.';

Enzyme.configure({ adapter: new Adapter() });
describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Give Me More</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('has a valid snapshot', () => {
    const component = renderer.create(<Button>Give Me More</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const element = shallow(<Button onClick={onButtonClick} />);
    element.find('button').simulate('click');
    // expect(onButtonClick).to.have.property('callCount', 1);
  });
});
