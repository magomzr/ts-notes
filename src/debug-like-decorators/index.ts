interface IDateFormatter {
  (date: Date): string;
  toShort: (date: Date) => string;
  toTime: (date: Date) => string;
  customFormat: (date: Date, options: Intl.DateTimeFormatOptions) => string;
}

const formatDate: IDateFormatter = (date: Date) => {
  return date.toISOString();
};

formatDate.toShort = (date: Date) => {
  return date.toLocaleDateString();
};

formatDate.toTime = (date: Date) => {
  return date.toLocaleTimeString();
};

formatDate.customFormat = (
  date: Date,
  options: Intl.DateTimeFormatOptions
): string => {
  return date.toLocaleString(undefined, options);
};

export function anotherWayOfFormatDate(): IDateFormatter {
  function formatter(date: Date): string {
    return date.toISOString();
  }

  formatter.toShort = (date: Date) => {
    return date.toLocaleDateString();
  };

  formatter.toTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  formatter.customFormat = (
    date: Date,
    options: Intl.DateTimeFormatOptions
  ): string => {
    return date.toLocaleString(undefined, options);
  };

  return formatter;
}

export default formatDate;
