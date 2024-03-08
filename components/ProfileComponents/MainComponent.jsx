"use client";
import React, { useEffect, useState } from "react";
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
  Tooltip,
  Spinner,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import "../../app/globals.css";
import { Input } from "@/components/ui/input";
import { MdEdit } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import EditQR from "./EditQR";
import { useRouter } from "next/navigation";
import { GetProfile } from "@/Utility/Api/Users";
import { DeleteProfileQr } from "@/Utility/QrType/DeleteQr";
import { Spin } from "antd";

const statusColorMap = {
  Dynamic: "success",
  Static: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["QrName", "Qrtype", "Url", "Actions"];

const columns = [
  { name: "QR CODE NAME", uid: "QrName", sortable: true },
  { name: "CATEGORY", uid: "Qrtype", sortable: true },
  { name: "DATA", uid: "Url", sortable: true },
  { name: "ACTIONS", uid: "Actions" },
];

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function MainComponent() {
  const router = useRouter();
  const [ID, Setid] = useState("");
  const [type, setType] = useState("");
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = useState([]);
  const [profile, setProile] = useState("");
  const [isloading, setIsloading] = useState(false);

  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "Qrtype",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen2, onOpen2, onClose2 } = useDisclosure();

  const GetQr = () => {
    setIsloading(true);
    GetProfile().then((res) => {
      setData(res?.data?.Qr?.reverse());
      setProile(res?.data);
      setIsloading(false);
    });
  };

  useEffect(() => {
    GetQr();
  }, []);

  // const GetQr = () => {
  //   GetProfile().then((res) => {
  //     setData(res?.data?.Qr?.reverse());
  //     setProile(res?.data);
  //   });
  // };

  // useEffect(() => {
  //   GetQr();
  // }, []);

  const handleDownload = (imageUrl, fileName) => {
    console.log("alok", imageUrl, fileName);
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CloseLoading = () => {
    setIsloading(false);
  };

  const DeleteQr = (id, type) => {
    setIsloading(true);
    let res = DeleteProfileQr(id, type, GetQr, CloseLoading);
  };

  const openQrInNewWindow = (imageUrl) => {
    const newWindow = window.open("", "_blank");

    if (newWindow) {
      newWindow.document.write(`
      <html>
        <head>
          <title>QR Image</title>
        </head>
        <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
          <img src="${imageUrl}" alt="QR Image" style="max-width: 100%; max-height: 100%;">
        </body>
      </html>
    `);

      newWindow.document.close();
    }
  };

  const Redirectanalytics = (ID) => {
    router.push(`/Analytics/${ID}`);
  };

  const pages = Math.ceil(data?.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }
    let filteredUsers = [...data];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        (user.QrName?.toLowerCase() || "").includes(filterValue.toLowerCase())
      );
    }
    filteredUsers = filteredUsers.filter(
      (user) => user.QrName !== "use client"
    );
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [data, filterValue, statusFilter]);

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
            <p className="">{user?.QrName}</p>
          </div>
        );
      case "Category":
        return (
          <div className="flex flex-col justify-start items-start">
            <p className="text-bold text-small capitalize">{user?.Qrtype}</p>
          </div>
        );

      case "Actions":
        return (
          <div className="relative flex justify-start  items-start gap-6 w-full">
            <Tooltip content="Edit">
              <div
                onClick={onOpen}
                className="text-lg p-1 rounded-md ring-1 ring-buttoncolor text-default-400 cursor-pointer active:opacity-50"
              >
                <MdEdit className="text-buttoncolor" />
              </div>
            </Tooltip>
            <Tooltip content="Download">
              <div
                onClick={() => handleDownload(user?.QrImage, user?.QrName)}
                className="text-lg ring-1 p-1 rounded-md ring-buttoncolor text-default-400 cursor-pointer active:opacity-50"
              >
                <MdDownloadForOffline className="text-buttoncolor" />
              </div>
            </Tooltip>
            <Tooltip content="Insights">
              <div
                onClick={() => Redirectanalytics(user?._id)}
                className="text-lg p-1 rounded-md ring-1 ring-buttoncolor text-default-400 cursor-pointer active:opacity-50"
              >
                <BsFillBarChartFill className="text-buttoncolor" />
              </div>
            </Tooltip>
            <Tooltip content="View">
              <div
                onClick={() => openQrInNewWindow(user?.QrImage)}
                className="text-lg p-1 rounded-md ring-1 ring-buttoncolor text-default-400 cursor-pointer active:opacity-50"
              >
                <FaEye className="text-buttoncolor" />
              </div>
            </Tooltip>
            <Tooltip content="Delete">
              <div
                onClick={() => DeleteQr(user?._id, user?.Qrtype)}
                className="text-lg ring-1 p-1 rounded-md ring-buttoncolor text-default-400 cursor-pointer active:opacity-50"
              >
                <MdDelete className="text-buttoncolor" />
              </div>
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
  }, [page]);

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
      outline: "1px solid white",
    }),
  };
  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 flex-row  items-center px-4 mt-4">
          <input
            isClearable
            className="focus:border-0 border-0 md:w-60 bg-buttonopacitycolor h-12 rounded-sm p-2"
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-0 focus:border-none ",
              mainWrapper: "border-none",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<IoIosSearch className="text-default-300" />}
            value={filterValue}
            variant="light"
            onClear={() => setFilterValue("")}
            onChange={(e) => onSearchChange(e.target.value)}
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
                    {capitalize(column?.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="ring-1 ring-buttoncolor text-buttoncolor"
              size="sm"
              variant="light"
              onClick={() => router.push("/QRcodesolution")}
            >
              + Create QR Code
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {data?.length} Qr
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              style={{ border: 0, borderRadius: 2 }}
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
    data?.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys?.size} of ${items?.length} selected`}
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
          <Button
            className="ring-buttoncolor ring-1 text-buttoncolor"
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            className="bg-buttoncolor text-white"
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[362px]", "md:max-w-3xl", "overflow-scroll"],
      th: [
        "bg-[#FF714333]",
        "text-default-500",
        "border-b",
        "border-divider",
        "text-start",
      ],
      td: [
        // changing the rows border radius
        // first
        "bg-[#FF71431A]",
        "h-12",
        "",
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
      tr: ["mx-auto"],
    }),
    []
  );

  return (
    <>
      {/* <div className="flex flex-col justify-start items-start gap-1 w-full mb-2 px-2">
      <h6 className="font-semibold text-lg">My QR Codes</h6>
      <p className="text-sm font-medium">You can Create, Customize, View, Edit, Share & Download your QR Codes.</p>
    </div> */}
      <div className="flex w-full overflow-scroll mt-12 ">
        {isloading ? (
          <Spin size="large" spinning={isloading} fullscreen />
        ) : null}

        <Table
          isCompact
          // isStriped
          removeWrapper
          aria-label="Example table with custom cells, pagination and sorting"
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          checkboxesProps={{
            classNames: {
              wrapper:
                "after:bg-buttoncolor after:text-background text-background p-2 flex justify-center items-center",
            },
          }}
          classNames={classNames}
          selectedKeys={selectedKeys}
          selectionMode="single"
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "Actions" ? "center" : "start"}
                allowsSorting={column?.sortable}
              >
                {column?.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent={"No Qr found"}
            items={sortedItems}
            //  isLoading={isloading}
            //  loadingContent={<Spinner label="Loading..." />}
          >
            {(item) => (
              <TableRow
                key={item.UniqueId}
                onClick={() => (Setid(item.UniqueId), setType(item.Qrtype))}
              >
                {(columnKey) => (
                  <TableCell key={columnKey}>
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* modal for Edit */}
      <Modal
        size="5xl"
        isOpen={isOpen}
        closeButton={
          <p>
            <IoCloseCircle
              size={24}
              className="bg-buttoncolor text-white rounded-full text-xl "
            />
          </p>
        }
        onOpenChange={onOpenChange}
        isKeyboardDismissDisabled={true}
        placement="center"
        isDismissable={false}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="h-auto   w-full">
          {(onClose1) => (
            <>
              <ModalBody className="w-full flex justify-center items-center mx-auto">
                <EditQR
                  id={ID}
                  type={type}
                  profie={GetQr}
                  close={onOpenChange}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
