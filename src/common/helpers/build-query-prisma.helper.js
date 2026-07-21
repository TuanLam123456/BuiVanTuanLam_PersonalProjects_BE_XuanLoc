export const buildQueryPrismaHelper = (req) => {
  let { page, pageSize, filters } = req.query;

  const pageDefault = 1;
  const pageSizeDefault = 10;

  page = Number(page) || pageDefault;
  pageSize = Number(pageSize) || pageSizeDefault;

  if (page < 1) page = pageDefault;

  if (pageSize < 1) pageSize = pageSizeDefault;

  const index = (page - 1) * pageSize;

  try {
    filters = JSON.parse(filters);
  } catch (error) {
    filters = {};
  }

  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === "string") {
      filters[key] = {
        contains: value,
      };
    }
  });

  const where = {
    ...filters,
  };

  return {
    page,
    pageSize,
    index,
    filters,
    where,
  };
};
