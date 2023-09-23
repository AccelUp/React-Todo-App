import "../Input/input.css";

interface Item {
  name: string;
  email: string;
}

interface ListGroupProps {
  items: Item[];
}

function ListGroup({ items }: ListGroupProps) {
  return (
    <>
      <h1 className="flex justify-center text-3xl">List</h1>
      {items.length === 0 && <p>No List Found</p>}
      <ul className="divide-y divide-gray-100">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => console.log(item, index)}
            className="flex justify-between gap-x-6 py-5 px-4 hover:bg-slate-200"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {item.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                Co-Founder / CEO
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
