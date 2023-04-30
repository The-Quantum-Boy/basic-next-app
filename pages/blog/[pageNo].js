import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return <div>my blog {pageNumber}</div>;
};

export default pageNo;
