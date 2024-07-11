import { links as group } from "../../src/components/shared/navbar/data/mobilelinks";
import { useDispatch } from "react-redux";
import { setNavbar } from "../../slice";

const links = group[1].list;

const dispatch = useDispatch();

export const changeSelection = (select: any) => {
  // console.log("changed");
  links?.map((link) => {
    // console.log("changed inside");
    if (link.title == select) {
      // console.log(link.title);
      dispatch(setNavbar(select));
    }
  });
};
