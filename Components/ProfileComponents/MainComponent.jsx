'use client'
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Tooltip
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import '../../app/globals.css'
import { Input } from "@/components/ui/input"
import { MdEdit } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";







const statusColorMap = {
  Dynamic: "success",
  Static: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["QRCodeName", "Category", "Type", "LastModified",'Actions'];

const columns = [
  {name: "QR CODE NAME", uid: "QRCodeName", sortable: true},
  {name: "CATEGORY", uid: "Category", sortable: true},
  {name: "TYPE", uid: "Type",},
  {name: "LAST MODIFIED", uid: "LastModified"},
  {name: "ACTIONS", uid:"Actions"},
];



const users = [
  {
    id: 0,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 1,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 2,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 3,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 4,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 5,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 6,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 7,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 8,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 9,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
  {
    id: 10,
    QRCodeName: "Tony Reichert",
   Category: "CEO",
   Type: "Management",
   "LastModified": "active",
   Type: "Dynamic",
  },
 ]

  const  capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export default function MainComponent() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.QRCodeName.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "QR Code Name":
        return (
          <div className="flex justify-center  items-center ">
            <p className="">{user.QRCodeName}</p>
          </div>
        );
      case "Category":
        return (
          <div className="flex flex-col justify-start items-start">
            <p className="text-bold text-small capitalize">{user.Category}</p>
          </div>
        );
      case "Type":
        return (
          <div className="flex flex-col justify-start items-start">

          <Chip
            className="capitalize border-none gap-1 text-default-600 ring-1 ring-buttoncolor flex justify-center items-center"
            color={statusColorMap[user.Type]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
          </div>
        );
      case "LastModified":
        return (
        <div className="flex flex-col justify-start items-start">
          <p>{user.LastModified}</p>
        </div>
        );
      case "Actions":
        return (
          <div className="relative flex justify-start  items-start gap-6 w-full">
          <Tooltip content="Edit">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <MdEdit />
            </span>
          </Tooltip>
          <Tooltip content="Download">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <MdDownloadForOffline />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Insights">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <BsFillBarChartFill />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="View">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <FaEye />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <MdDelete  />
            </span>
          </Tooltip>
        </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page])

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);


  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const style = {
    control: (provided) => ({
      ...provided,
      border: 0,
      outline: '1px solid white',
  })
  };
  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 flex-row  items-center px-4">
          <Input
            isClearable
            className='focus:border-0 border-0 md:w-60 bg-buttonopacitycolor'
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-0 focus:border-none ",
              mainWrapper:"border-none"
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<IoIosSearch className="text-default-300" />}
            value={filterValue}
            variant="light"
            onClear={() => setFilterValue("")}
            onSearchChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<FaAngleDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<FaAngleDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="ring-1 ring-buttoncolor text-buttoncolor"
              size="sm"
              variant="light"
            >
             + Create QR Code
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
            style={{border:0, borderRadius:2}}
              className="bg-transparent border-one outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
        <Pagination
          showControls
          classNames={{
            cursor: "bg-buttoncolor text-white",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
         <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button className="ring-buttoncolor ring-1 text-buttoncolor" isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button  className="bg-buttoncolor text-white" isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[362px]", "md:max-w-3xl",'overflow-scroll'] ,
      th: ["bg-[#FF714333]", "text-default-500", "border-b", "border-divider",'text-start'],
      td: [
        // changing the rows border radius
        // first
        'bg-[#FF71431A]',
        'h-12',
        '',
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
      tr:['mx-auto']
    }),
    [],
  );

  return (
    <>
    <div className="flex flex-col justify-start items-start gap-1 w-full pb-2 px-2">
      <h6 className="font-semibold text-lg">My QR Codes</h6>
      <p className="text-sm font-medium">You can Create, Customize, View, Edit, Share & Download your QR Codes.</p>
    </div>
<div className="flex w-full overflow-x-auto	 ">
    <Table
      isCompact
      // isStriped 
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-buttoncolor after:text-background text-background p-2 flex justify-center items-center",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader  columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "Actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

</div>
    </>
  );
}
