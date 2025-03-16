import CardServices from "../ui/card";
import { services } from "../utils/servicesJSON";

export default function page() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <CardServices data={services}/>
    </div>
  )
}
