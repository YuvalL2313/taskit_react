import React from "react";

import { TransitionGroup } from "react-transition-group";

import Label from "../Label";
import Separator from "../../../common/Separator";
import SideBarItem from "../../../common/SideBarItem";

import styles from "./index.module.scss";

function LabelsMain({
  labels,
  searchQuery,
  selectedLabelId,
  onSelect,
  onDeselect,
}) {
  function getFilteredLabels() {
    const filteredLabels = searchQuery
      ? labels.filter((l) => l.name.match(new RegExp(`${searchQuery}`, "i")))
      : labels;
    return filteredLabels;
  }

  function checkSelected(labelId) {
    return selectedLabelId === labelId;
  }

  return (
    <div className={styles.container}>
      <TransitionGroup>
        {getFilteredLabels().map((label) => (
          <SideBarItem
            key={label._id}
            timeout={400}
            classNames="sidebar-item-transition"
            onClick={
              checkSelected(label._id) ? onDeselect : () => onSelect(label._id)
            }
            selected={checkSelected(label._id)}
          >
            <Label label={label} />
          </SideBarItem>
        ))}
      </TransitionGroup>
      <Separator className={styles.separator} />
    </div>
  );
}

export default LabelsMain;
