import { links as group } from "../../src/components/shared/navbar/data/mobilelinks";
import { useDispatch } from "react-redux";
const links = group[1].list;


export const ChangeSelection = (select: any) => {
  const dispatch = useDispatch();

  // console.log("changed");
  // links?.map((link) => {
  //   // console.log("changed inside");
  //   if (link.title == select) {
  //     // console.log(link.title);
  //     dispatch(setNavbar(select));
  //   }
  // });
};
