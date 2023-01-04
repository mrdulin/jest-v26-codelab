import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';

describe('portal', () => {
  test('should pass', () => {
    class MyPortal extends React.Component {
      portalNode: HTMLDivElement;
      constructor(props) {
        super(props);
        this.portalNode = document.createElement('div');
        this.portalNode.dataset.testid = 'my-portal';
      }
      componentDidMount() {
        document.body.appendChild(this.portalNode);
      }
      componentWillUnmount() {
        if (this.portalNode.parentNode) {
          this.portalNode.parentNode.removeChild(this.portalNode);
        }
      }
      render() {
        return ReactDOM.createPortal(<Greet greeting="Hello" subject="World" />, this.portalNode);
      }
    }

    function Greet({ greeting, subject }) {
      return (
        <div>
          <strong>
            {greeting} {subject}
          </strong>
        </div>
      );
    }

    const { unmount, getByText, getByTestId } = render(<MyPortal />);
    expect(getByText('Hello World')).toBeInTheDocument();
    const portalNode = getByTestId('my-portal');
    expect(portalNode).toBeInTheDocument();
    unmount();
    expect(portalNode).not.toBeInTheDocument();
  });
});
