const formatSearchData = (datas: any[], key?: string) => {
  if (!key) return;
  return datas.map((item) => {
    return {
      id: item.id as number,
      name: item[key] as string,
    };
  });
};

export default formatSearchData;
