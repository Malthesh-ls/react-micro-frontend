
export const userMapper = (users: any[] | null | undefined) => {
  if (users === null || users === undefined) {
    return [];
  }
  if (!users || users.length === 0) {
    return [];
  }
  return users.map((user: any) => ({
    ...user,
    name: user.firstName + ' ' + user.lastName,
  }));
}