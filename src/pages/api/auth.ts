import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.setHeader('content-type', 'application/json');
  if (req.method != 'GET') {
    res.status(404).end;
    return;
  }

  res.status(200).end;
};
