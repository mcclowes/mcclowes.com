import React, { useState, useEffect, useId } from 'react';

const camalize = (str) =>
  str.toLowerCase().replace(/^([a-zA-Z0-9])/g, (m, chr) => chr.toUpperCase());

const genStorageKey = (prefix, item) => `${prefix}${camalize(item)}`;

const LocalStorageChecklist = ({ items, prefix = 'list' }) => {
  const uniqueId = useId();
  const [itemKeys] = useState(items.map((item) => [item, genStorageKey(prefix, item)]));
  const [checkedKeys, setCheckedKeys] = useState(
    (typeof window !== 'undefined' && localStorage.getItem(prefix)?.split(',')) || []
  );

  const toggleItem = (key) => {
    if (checkedKeys?.length <= 0) {
      // no array
      setCheckedKeys([key]);
    } else if (checkedKeys.indexOf(key) < 0) {
      // item not present
      setCheckedKeys([...checkedKeys, key]);
    } else {
      // remove item
      setCheckedKeys(checkedKeys.filter((x) => x !== key));
    }
  };

  const saveChecked = () => {
    localStorage.setItem(prefix, checkedKeys.join(','));
  };

  useEffect(saveChecked, [checkedKeys]);

  return (
    <ul
      className="contains-task-list containsTaskList_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Ul-styles-module"
      role="group"
      aria-label="Checklist"
    >
      {itemKeys.map((item, index) => {
        const checkboxId = `${uniqueId}-checkbox-${index}`;
        const isChecked = checkedKeys.indexOf(item[1]) >= 0;
        return (
          <li key={item[1]} className="task-list-item">
            <input
              id={checkboxId}
              className="task-checkbox"
              type="checkbox"
              onChange={() => toggleItem(item[1])}
              checked={isChecked}
              aria-describedby={`${checkboxId}-label`}
            />
            <label id={`${checkboxId}-label`} htmlFor={checkboxId}>
              {item[0]}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default LocalStorageChecklist;
