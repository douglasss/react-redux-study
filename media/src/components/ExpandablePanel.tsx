import { PropsWithChildren, useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

interface Props extends PropsWithChildren {
  header: any;
}
export default function ExpandablePanel({ header, children }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}
