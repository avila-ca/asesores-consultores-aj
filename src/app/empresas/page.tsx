import CardServices from "../ui/card";
import { empresasServices } from "../utils/empresasServicesJSON";


export default function page() {
  return (
<div className="grid grid-cols-3 gap-2">
      <CardServices data={empresasServices}/>
    </div>  )
}
