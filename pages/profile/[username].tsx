import { useRouter } from "next/router";

const Username = () => {
  let router = useRouter();
  let { username } = router.query;
  console.log(username);
  return <div>Hello {username}</div>;
};

export default Username;
