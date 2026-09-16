import React, { useEffect, useState } from 'react';

type ChecklistProps = {
  /** Unique key so ticks persist per checklist in the browser. */
  id: string;
  items: React.ReactNode[];
};

/**
 * Clickable checklist. Nextra renders `- [ ]` task lists as disabled
 * checkboxes, so this component exists for checklists readers actually tick.
 * State lives in localStorage; nothing is sent anywhere.
 */
const Checklist = ({ id, items }: ChecklistProps) => {
  const storageKey = `checklist:${id}`;
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as boolean[];
        setChecked(items.map((_, i) => Boolean(parsed[i])));
      }
    } catch {
      // localStorage unavailable; fall back to unpersisted state.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const toggle = (i: number) => {
    const next = checked.map((c, j) => (j === i ? !c : c));
    setChecked(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  return (
    <ul className="mt-4 list-none pl-0">
      {items.map((item, i) => (
        <li key={i} className="my-1.5">
          <label className="flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-current"
              checked={checked[i]}
              onChange={() => toggle(i)}
            />
            <span className={checked[i] ? 'line-through opacity-60' : ''}>{item}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Checklist;
