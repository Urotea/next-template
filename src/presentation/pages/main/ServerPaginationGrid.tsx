import * as React from 'react';
import {
  GridRowsProp,
  DataGrid,
  GridColumns,
  GridPageChangeParams,
  GridCellParams,
  GridRowParams,
} from '@material-ui/data-grid';
import useSWR from 'swr';
import { User } from '../../../models/user';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Box } from '@material-ui/core';

const columns: GridColumns = [
  { field: 'id', headerName: 'ID', width: 90, type: 'number' },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

interface Props {
  onRowClick?: (id: string) => void;
}

const ServerPaginationGrid: React.FC<Props> = ({ onRowClick: onCellClick }) => {
  const [page, setPage] = React.useState(0);

  const { data, error, isValidating } = useSWR<GridRowsProp, AxiosError<Error>>(
    `/api/users?page=${page}`,
    (url) => axios.get(url).then((res: AxiosResponse<User[]>) => res.data)
  );

  const handlePageChange = (params: GridPageChangeParams) => {
    setPage(params.page);
  };

  const handleRowClick = (
    params: GridRowParams,
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    if (onCellClick == null) {
      console.log(params);
      return;
    }

    if (typeof params.id === 'number') {
      onCellClick(params.id.toString());
    } else {
      onCellClick(params.id);
    }
  };

  return (
    <Box height={400} width="100%">
      <DataGrid
        rows={data == null ? [] : data}
        columns={columns}
        pagination
        pageSize={5}
        rowCount={100}
        paginationMode="server"
        onPageChange={handlePageChange}
        onRowClick={handleRowClick}
        loading={isValidating}
        error={error}
      />
    </Box>
  );
};

export default ServerPaginationGrid;
