import { render } from './testutil';

function Dummy() {
  return <div>dummy</div>;
}

describe('65404652', () => {
  it('should pass', () => {
    render(<Dummy></Dummy>);
  });
});
