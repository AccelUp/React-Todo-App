import "../Input/input.css";
const ListHeader = ({ listName }) => {
  return (
    <>
      <div>
        <ul role="list" className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5 mx-12 bg-blue-500 hover:bg-blue-400">
            <div className="flex min-w-0 gap-x-4 ml-10">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {listName}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  leslie.alexander@example.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end mr-10">
              <p className="text-sm leading-6 text-gray-900">
                Co-Founder / CEO
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListHeader;
