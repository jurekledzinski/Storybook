import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { UseAlertStoryProps } from './types';

export const useAlertStory = ({ exampleData }: UseAlertStoryProps) => {
  const [data, setData] = useState(exampleData);
  const [key, setKey] = useState(0);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [deleteIds, setDeleteIds] = useState<string[]>([]);

  useEffect(() => setData(exampleData), [key, exampleData]);

  const selectAccordion = (prev: string[], id: string) => {
    if (prev.includes(id)) return [...prev].filter((i) => i !== id);
    return [...prev, id];
  };

  const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
    const id = (e.currentTarget as HTMLDivElement).id;
    setOpenIds((prev) => selectAccordion(prev, id));
  };

  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = (e.currentTarget as HTMLInputElement).dataset.id;
    setData((prev) => [...prev].filter((item) => item.id.toString() !== id));
  };

  const onDeleteMany = () => {
    setData((prev) => [...prev].filter((i) => !deleteIds.includes(i.id.toString())));
  };

  const onSelectMany = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).dataset.id;
    if (!id) return;
    setDeleteIds((prev) => selectAccordion(prev, id));
  };

  const onToggle = (e: MouseEvent<HTMLDivElement>) => {
    const id = (e.currentTarget as HTMLDivElement).id;
    setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
  };

  const onRefresh = () => {
    setKey((prev) => prev + 1);
    setOpenIds([]);
  };

  const onRefreshMany = () => {
    setKey((prev) => prev + 1);
    setDeleteIds([]);
    setOpenIds([]);
  };

  return {
    data,
    openIds,
    handleOpen,
    onDelete,
    onDeleteMany,
    onSelectMany,
    onRefresh,
    onRefreshMany,
    onToggle,
  };
};
