import { useQuery } from "react-query";
import { getTestByUid, getTestStatusesByUid } from "./api";

export const useTest = (uid) => {
  const { data: test } = useQuery("test", () => getTestByUid(uid));
  const { data: testStatuses } = useQuery("statuses", () => getTestStatusesByUid(uid));

  return {
    test,
    testStatuses
  }
}