import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./ActivePasiveData.module.css";

const initialColumns = [
  { id: "date1", label: "Date 1", date: "" },
  { id: "date2", label: "Date 2", date: "" },
  { id: "date3", label: "Date 3", date: "" },
  { id: "var", label: "Var %" }
];

const tableStructure = [
  "Capital propriu",
  "  Capital Social",
  "  Rezerve",
  "  Rezultatul curent",
  "  Rezultatul reportat",
  "  Rezerve din reevaluare",
  "  Repartizarea porofitului",
  "  Alte elemente de capital propriu",
  "Capital Permanent",
  "Provizioane",
  "Venituri in avans si subventii pentru investitii",
  "Datorii",
  "  Imprumuturi",
  "  Credite pe termen scurt",
  "  Credite si leasinguri termen mediu si lung",
  "    < 1 an",
  "    > 1 an",
  "  Datorii < 1 an",
  "    Furnizori",
  "    Clienti - Creditori",
  "    Sume datorare entitati grup",
  "    Datorii Buget",
  "    Alte Datorii",
  "  Datorii > 1 an",
  "    Furnizori",
  "    Clienti - Creditori",
  "    Sume datorare entitati grup",
  "    Datorii Buget",
  "    Alte Datorii",
  "Total Pasiv",
  "Fond de rulment"
];

function SortableColumn({ id, column, onDateChange }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <th
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.tableCell}
    >
      <div>{column.label}</div>
      {column.label.includes("Date") && (
        <input
          type="date"
          value={column.date}
          onChange={(e) => onDateChange(id, e.target.value)}
          className={styles.dateInput}
        />
      )}
    </th>
  );
}

const PasiveData = () => {
  const [columns, setColumns] = useState(initialColumns);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDateChange = (id, value) => {
    setColumns((prev) =>
      prev.map((col) => (col.id === id ? { ...col, date: value } : col))
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = columns.findIndex((col) => col.id === active.id);
      const newIndex = columns.findIndex((col) => col.id === over.id);
      setColumns((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th className={styles.tableCell}>Pasiv</th>
            <th className={styles.tableCell}>Perioada</th>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={columns.map((col) => col.id)}
                strategy={verticalListSortingStrategy}
              >
                {columns.map((col) => (
                  <SortableColumn
                    key={col.id}
                    id={col.id}
                    column={col}
                    onDateChange={handleDateChange}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </tr>
        </thead>
        <tbody>
          {tableStructure.map((row, idx) => (
            <tr key={idx}>
              <td className={styles.tableCell} colSpan={2}>
                <span style={{ paddingLeft: `${row.search(/\S|$/) * 8}px` }}>
                  {row.trim()}
                </span>
              </td>
              {columns.map((col) => (
                <td key={col.id} className={styles.tableCell}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PasiveData;
