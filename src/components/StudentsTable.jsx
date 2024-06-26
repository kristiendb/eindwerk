"use client";
import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SubmitButton from "./SubmitButton";
import { Button } from "@/components/ui/button";
import { deleteUserAction } from "@/functions/actions";
import { useFormState } from "react-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentsTable = ({ columns, data }) => {
  const [state, formAction] = useFormState(deleteUserAction, {
    msg: "pending",
  });
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data,
    columns: [
      ...columns,
      {
        id: "delete",
        cell: ({ row }) => {
          return (
            <Dialog>
              <DialogTrigger>Verwijder</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Ben je zeker?</DialogTitle>
                  <DialogDescription>
                    Je staat op het punt een user te verwijderen. Deze actie kan
                    niet ongedaan worden gemaakt.
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <form action={formAction}>
                    <input
                      type="hidden"
                      name="path"
                      value={"/start/studenten"}
                    />
                    <input type="hidden" name="id" value={row.original.id} />
                    <SubmitButton
                      label="Verwijder student"
                      className={
                        "bg-red-custom text-white border-red-custom hover:bg-white hover:text-red-custom  hover:transition-all hover:duration-300"
                      }
                    />
                    {/* <button
                      type="submit"
                      className="bg-red-custom border-0.25 border-red-custom hover:bg-white hover:text-red-custom  hover:transition-all hover:duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      verwijder student
                    </button> */}
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          );
        },
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });
  return (
    <div>
      <div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Geen studenten gevonden
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default StudentsTable;
