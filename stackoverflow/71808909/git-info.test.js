const TICKET_ID_REGEX = /((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)/.source;

describe('[utils/git-info]', () => {
  it('getTicketIdFromBranchName | Function should proper ticket Id when there is one', async () => {
    const { getTicketIdFromBranchName } = await import('./git-info');
    const ticketId = 'CLO-1234';

    jest.mock(
      'simple-git',
      () => {
        const mGit = {
          branchLocal: jest.fn(() => Promise.resolve({ current: `${ticketId} DUMMY TEST` })),
        };

        return jest.fn(() => mGit);
      },
      { virtual: true }
    );

    const result = await getTicketIdFromBranchName(new RegExp(TICKET_ID_REGEX));

    expect(result === ticketId).toEqual(true);
  });
});
