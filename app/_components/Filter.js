"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

// import { useSearchParams } from "next/navigation";

function Filter() {
  // const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleSubmit(filter) {
    const params = new URLSearchParams();
    params.set("capacity", filter);
    router.replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ">
      <Button filter="all" handleFilter={handleSubmit} activeFilter={activeFilter}>
        All cabins
      </Button>
      <Button filter="small" handleFilter={handleSubmit} activeFilter={activeFilter}>
        {" "}
        1 ~ 3 cabins
      </Button>
      <Button filter="medium" handleFilter={handleSubmit} activeFilter={activeFilter}>
        4 ~ 7 cabins
      </Button>
      <Button filter="large" handleFilter={handleSubmit} activeFilter={activeFilter}>
        8 ~ 12 cabins
      </Button>
      {/* <button onClick={() => handleSubmit("all")} className="px-5 py-2 hover:bg-primary-700">
        All cabins
      </button>
      <button onClick={() => handleSubmit("small")} className="px-5 py-2 hover:bg-primary-700">
        1 ~ 3 cabins
      </button>
      <button onClick={() => handleSubmit("medium")} className="px-5 py-2 hover:bg-primary-700">
        4 ~ 7 cabins
      </button>
      <button onClick={() => handleSubmit("large")} className="px-5 py-2 hover:bg-primary-700">
        8 ~ 12 cabins
      </button> */}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        filter === activeFilter ? "bg-primary-700" : ""
      } px-5 py-2 hover:bg-primary-700`}
    >
      {children}
    </button>
  );
}

export default Filter;
