import {
  AllDayPattern,
  ComplexDetailsDate,
  ConcatDates,
  DefaultDatePattern,
  DefaultHourPattern,
  FileDateFormat,
  FileNameDatePattern,
  FormatTimeToAmerican,
  FormatToAmerican,
  FormatToSystem,
  LongDateTimePattern,
  LongDayPattern,
  RemoveMutationTimeZone,
  RemoveTimeZone,
  ReturnIfIsValid,
  SimpleDatePattern,
  TimeRangePattern,
  WeekDayPattern
} from './date.formats'

const Map = {
  'dd nn yyyy': DefaultDatePattern,
  'dd/MM/YYYY': SimpleDatePattern,
  'hh:mm': DefaultHourPattern,
  'dd-MM-yyyy': FileNameDatePattern,
  'dd/MM/yyyy - hh:mm': LongDateTimePattern,
  'nn dd, yyyy': FileDateFormat,
  'dd nn de yyyy': ComplexDetailsDate,
  'yyyy-MM-dd': FormatToSystem,
  'dd de nn de yyyy': LongDayPattern,
  'w-feira, dd de nn de yyyy': WeekDayPattern,
  'w-feira, dd de nn de yyyy - hh:mm até hh:mm': AllDayPattern,
  americanDate: FormatToAmerican,
  'date+time': ConcatDates,
  americanTime: FormatTimeToAmerican,
  '-3hours': RemoveMutationTimeZone,
  '+3hours': RemoveTimeZone,
  isValid: ReturnIfIsValid,
  'hh:mm às hh:mm': TimeRangePattern
}

type MapType = typeof Map

export const DateParser = <T extends keyof MapType & string>(
  pattern: T,
  ...args: Parameters<MapType[T]>
): ReturnType<MapType[T]> => {
  const exec: (...args: any) => any = Map[pattern]

  if (!exec || typeof exec !== 'function') {
    throw new Error('Pattern not found')
  }

  return exec(...args) as ReturnType<MapType[T]>
}
