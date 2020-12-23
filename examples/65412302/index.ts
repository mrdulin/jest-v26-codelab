import Analytics from 'analytics-node';

export interface Request {
  userId: string | number;
}

const logger = (req: Request) => {
  const analytics = new Analytics(<string>process.env.WRITE_KEY);
  return analytics.track({
    userId: req.userId,
    anonymousId: 1,
    event: '',
  });
};

export default logger;
