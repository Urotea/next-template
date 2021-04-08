import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../models/user';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.setHeader('content-type', 'application/json');
  if (req.method != 'GET') {
    res.status(404).end;
    return;
  }

  const users: User[] = [
    {
      id: 0,
      firstName: 'first0',
      lastName: 'last0',
      age: 20,
    },
    {
      id: 1,
      firstName: 'first1',
      lastName: 'last1',
      age: 21,
    },
  ];
  res.status(200).json(users);
};
