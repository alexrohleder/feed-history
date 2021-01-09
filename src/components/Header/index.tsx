import { Suspense } from "react";
import Header from "./Header";
import HeaderSuspended from "./HeaderSuspended";
import "./index.scss";

function HeaderContainer() {
  return (
    <Suspense fallback={<HeaderSuspended />}>
      <Header />
    </Suspense>
  );
}

export default HeaderContainer;
