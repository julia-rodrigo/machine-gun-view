"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Info = {
  id: string
  amount: number
  status: string
}

export const columns: ColumnDef<Info>[] = [
  {
    accessorKey: "status",
    header: "Stat",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
