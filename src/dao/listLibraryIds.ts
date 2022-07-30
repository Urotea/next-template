// DBから取る処理をmockしている
const listLibraryIds = async (
  token?: string,
  size?: number
): Promise<string[]> => {
  console.log("listLibraryIds called", token, size);
  return ["1", "2"];
};

export default listLibraryIds;
