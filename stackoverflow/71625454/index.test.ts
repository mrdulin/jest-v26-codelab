type FuncProps = {
  type: 'a' | 'b';
  isSelected: boolean;
  isDataIncluded: boolean;
};

type Props = {
  onDoSomething: ({ type, isSelected, isDataIncluded }: FuncProps) => Promise<void>;
};

describe('71625454', () => {
  test('should pass', async () => {
    const onDoSomethingMock: Props['onDoSomething'] = jest.fn(({ type, isSelected, isDataIncluded }: FuncProps) =>
      Promise.resolve()
    );
    await onDoSomethingMock({ type: 'a', isSelected: true, isDataIncluded: false });
    expect(onDoSomethingMock).toBeCalled();
  });
});
