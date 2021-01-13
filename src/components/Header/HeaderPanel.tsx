import { ReactNode, useRef } from "react";

type Props = {
  onClose: () => void;
  children: ReactNode;
};

function HeaderPanel(props: Props) {
  const ref = useRef(null);

  return (
    <div className="HeaderPanel" ref={ref}>
      {props.children}
    </div>
  );
}

export default HeaderPanel;
