/* eslint-disable jsx-a11y/iframe-has-title */
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";
import { wikiPageItems } from "../docs/wiki";

export function WikiPage() {
  return (
    <>
      <HeaderMenu />
      <Wiki items={wikiPageItems}></Wiki>
      <Footer />
    </>
  );
}
