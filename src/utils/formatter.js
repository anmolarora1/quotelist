const reverseAllObjectFields = input =>
  input.map((item, index) =>
    typeof item === "object"
      ? {
          key: index,
          ...Object.keys(item).reduce(
            (acc, key) => ({
              ...acc,
              [key]: item[key]
                .split("")
                .reverse()
                .join("")
            }),
            {}
          )
        }
      : item
  );
export default reverseAllObjectFields;
