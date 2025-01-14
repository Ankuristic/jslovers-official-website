import { cn } from "@/lib/utils";
type DropdownProps = {
  filterName: string;
  filterOptions: string[];
  filterBackground?: string;
  className?: string;
};
const Dropdown = ({
  filterName,
  filterOptions,
  filterBackground,
  className,
}: DropdownProps) => {
  return (
    <div className={cn("group relative inline-block", className)}>
      <button
        style={{
          backgroundColor: `${filterBackground ? filterBackground : null}`,
        }}
        className="inline-flex items-center rounded-[56px] border-2 border-solid border-border bg-gray-300 px-6 py-3 text-xl font-medium"
      >
        <span className="mr-1">{filterName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="15"
          viewBox="0 0 28 15"
          fill="none"
        >
          <path
            d="M2 1.5L14 13.5L26 1.5"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="absolute hidden pt-1 text-gray-700 group-hover:block">
        {filterOptions?.length > 0 &&
          filterOptions.map((opt: string, i: number) => (
            <li className="" key={i}>
              <a
                className=" whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400"
                href="#"
              >
                {opt}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
