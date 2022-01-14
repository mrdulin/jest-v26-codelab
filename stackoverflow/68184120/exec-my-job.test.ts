describe('68184120', () => {
  it('should pass', async () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
      return undefined as never;
    });

    await require('./exec-my-job');

    expect(mockExit).toHaveBeenCalledWith(0);
  });
});
