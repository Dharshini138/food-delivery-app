import Toolbar from "@/components/Toolbar";

<Toolbar
  title="Restaurants"
  onAdd={() => console.log("Add new restaurant")}
  onFilter={() => console.log("Open filter")}
  onExport={() => console.log("Export data")}
/>
