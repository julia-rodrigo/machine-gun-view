import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InfoTable } from "./InfoTable"

import { Info, columns } from "./table/Column"

async function getData(): Promise<Info[]> {
    // Fetch data from your API here.
    return [
      {
        id: "1",
        amount: 100,
        status: "Magic",
      },
      {
        id: "1",
        amount: 1200,
        status: "Base",
      },
      {
        id: "1",
        amount: 1400,
        status: "Hit",
      },
      {
        id: "1",
        amount: 700,
        status: "Phy",
      },
      {
        id: "1",
        amount: 0,
        status: "Spe",
      },
      {
        id: "1",
        amount: 6,
        status: "MatType",
      },
      // ...
    ]
  }

const GunInfo = async () => {
    const data = await getData()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          GunInfo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <InfoTable columns={columns} data={data} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default GunInfo