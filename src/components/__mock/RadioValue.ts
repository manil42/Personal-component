import { RadioProps } from "components/radio";

export const Radiolabel1: RadioProps = { label: "one" };

export const Radiolabel2: RadioProps = {
  label: "one",
  isError: true,
  emsg: "error message",
};

export const RadioDisable: RadioProps = {
  label: "one",
  Disable: true,
};
