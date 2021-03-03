import Ph from './Ph.model';

export const fAP = (req, res, next) => {
  const pN = req.body.pN;

  if (pN != null) {
    Ph.aggregate([
      { $match: { polNum: { $eq: pN } } },
      {
        $match: {
          $expr: {
            $and: [{ $eq: ['$pCS', 'A'] }],
          },
        },
      },
    ]).exec((err, data) => {
      if (data.length > 0) {
        req.p = data[0];
        req.body.pN = data[0].pN;
        return next();
      } else {
        return res.json({ message: 'Not found' });
      }
    });
  } else {
    return res.json({ message: 'Cannot be null.' });
  }
};
