import CardServices from "../ui/cardServices";
import { empresasServices } from "../utils/empresasServicesJSON";


export default function page() {
  return (
<div className="grid grid-cols-3 gap-2">
      <CardServices data={empresasServices} className="p-3 m-2"/>
    </div>  )
}
