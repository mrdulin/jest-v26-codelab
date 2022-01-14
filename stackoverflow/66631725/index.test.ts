describe('66631725', () => {
  const mNotification = jest.fn();
  Object.defineProperty(global, 'Notification', {
    value: mNotification,
  });

  const staticMembers = {
    requestPermission: jest.fn().mockImplementation(() => {
      console.log('reached here');
      return 'denied';
    }),
    permission: 'denied',
  };

  Object.assign(global.Notification, staticMembers);

  test('should ask for permission from Notifications API ', () => {
    new Notification('Test');
    expect(Notification).toBeCalledTimes(1);
    expect(Notification.permission).toEqual('denied');
  });

  test('should request permission', () => {
    Notification.requestPermission();
    expect(Notification.requestPermission).toBeCalledTimes(1);
  });
});
