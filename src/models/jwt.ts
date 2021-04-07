export type JWTHeader = {
  typ: string;
  alg: string;
};

export type JWTClaim = {
  uid: string;
  displayName: string;
  photoURL: string;
};

export type JWT = {
  header: JWTHeader;
  claim: JWTClaim;
  signature: string;
};
