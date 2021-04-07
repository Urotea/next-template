import axios, { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';
import Router from 'next/router';

// TODO: この設計はあまり良くない。ログインが必要なページをラップする高級componentsを考えるべき
export const UserAuthController: React.FC = () => {
  const { data, error, isValidating } = useSWR<
    AxiosResponse,
    AxiosError<Error>
  >('/api/auth', (url) => axios.get(url).then((res) => res));

  if (isValidating) {
    console.log('isvalidating');
  } else if (error != null) {
    console.log(error);
    if (Router.pathname != '/') {
      Router.replace('/');
    }
  }

  return null;
};
