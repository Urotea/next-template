import { NextApiRequest, NextApiResponse } from 'next';
import { JWT } from '../../models/jwt';

type RequestBody = {
  name?: string;
  password?: string;
};

export default (req: NextApiRequest, res: NextApiResponse<JWT>): void => {
  res.setHeader('content-type', 'application/json');
  if (req.method != 'POST') {
    res.status(404).end;
    return;
  }
  const reqBody: RequestBody = req.body;

  if (reqBody.name == null || reqBody.password == null) {
    res.status(400).end;
    return;
  }

  const jwt: JWT = {
    header: {
      typ: '',
      alg: '',
    },
    claim: {
      uid: '',
      displayName: '',
      photoURL: '',
    },
    signature: '',
  };

  res.status(200).json(jwt);
};
