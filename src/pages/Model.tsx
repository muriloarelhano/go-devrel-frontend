/* eslint-disable jsx-a11y/iframe-has-title */
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";
import { modelPageItems } from "../docs/model";

function Model() {
  return (
    <>
      <HeaderMenu />
      <Wiki items={modelPageItems}></Wiki>
      <Footer />
    </>
  );
}

export default Model;
