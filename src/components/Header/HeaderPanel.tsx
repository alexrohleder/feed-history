import { ReactNode, useRef } from "react";
import useClickOutside from "use-click-outside";

type Props = {
  onClose: () => void;
  children: ReactNode;
};

function HeaderPanel(props: Props) {
  const ref = useRef(null);
  useClickOutside(ref, props.onClose);

  return (
    <div className="HeaderPanel" ref={ref}>
      {props.children}
    </div>
  );
}

export default HeaderPanel;
