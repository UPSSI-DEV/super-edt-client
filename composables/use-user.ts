type User = {
  id: string;
  name: string;
  class: string;
  student_id: string;
  provider: {
    name: string;
    tag: string;
  };
};

export type { User };

export const useUser = () => {
  return useLocalStorage<User | null>("user", null);
  // const { data, err } = await to_res(usePocketbase().users.refresh());
  // console.log(data, err);
  // if (data == null) return undefined;

  // const p = data.user.profile;
  // const user: User = {
  //   id: p.id,
  //   name: p.name,
  //   class: p.class,
  //   student_id: p.student_id,
  //   provider: {
  //     name: p.provider_name,
  //     tag: p.provider_tag,
  //   },
  // };

  // return user;
};
