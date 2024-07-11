import * as React from "react";

export type DropDownData = {
  name?: string;
  image?: string;
  link?: string;
};
export interface IDropDown {
  name: string;
  data: DropDownData[];
  link: string,
  changeSelection: function,
  width:any
  lang:any
}
