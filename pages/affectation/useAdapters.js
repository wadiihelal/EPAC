export const useAdapter = () => {
  const zonesAdapter = (zoneByPallet) => {
    if (zoneByPallet && zoneByPallet.length > 0) {
      const list = [];
      zoneByPallet.map((e) => {
        list.push({ value: e.zone, label: e.zone });
      });
      return list;
    }
  };

  const palletsAdapter = (zoneByPallet) => {
    if (zoneByPallet && zoneByPallet.length > 0) {
      const list1 = [];
      zoneByPallet.map((e) => {
        const list = [];
        e.pallet.map((i) => list.push({ value: i, label: i.toString() }));
        list1.push({ name: e.zone, value: list });
      });
      return list1;
    }
  };

  return { zonesAdapter, palletsAdapter };
};
