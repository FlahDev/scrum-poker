import {
  format,
  isValid,
  set,
  addHours,
  getHours,
  getMinutes,
  subHours
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const ReturnIfIsValid = (value: Date, exec: () => string): string => {
  if (isValid(value)) return exec()
  return 'Data inválida'
}

// 20 out 2021
export const DefaultDatePattern = (date: Date) =>
  format(date, 'dd LLL yyyy', {
    locale: ptBR
  })

// 20/10/2021
export const SimpleDatePattern = (date: Date) => {
  if (!isValid(date)) {
    return 'Data inválida'
  }

  return format(date, 'dd/MM/yyyy', { locale: ptBR })
}

// 18:16
export const DefaultHourPattern = (date: Date) =>
  ReturnIfIsValid(date, () =>
    format(date, "kk':'mm", {
      locale: ptBR
    })
  )

// 20-10-2021
export const FileNameDatePattern = (date: Date) => {
  if (!isValid(date)) {
    return 'Data inválida'
  }

  return format(date, 'dd-MM-yyyy', { locale: ptBR })
}

// remove a timezone de uma data (poe 3 horas, timezone de brasilia = -3)
export const RemoveTimeZone = (date: Date): Date => {
  const dateCopy = new Date(date)

  return addHours(dateCopy, 3)
}

// fazem a mesma coisa, mas um esta sendo muito usado, para nao quebrar adicionei outro inves de por 6
export const RemoveMutationTimeZone = (date: Date): Date => {
  const dateCopy = new Date(date)

  return subHours(dateCopy, 3)
}

// 19/10/2021 - 18:16
export const LongDateTimePattern = (date: Date) =>
  ReturnIfIsValid(date, () =>
    format(date, "dd'/'MM'/'yyyy' - 'kk':'mm", {
      locale: ptBR
    })
  )

// transforma uma data (30/09/2021) em um objeto Date
export const FormatToAmerican = (value: string) => {
  const array = String(value).split('/')
  return set(new Date(), {
    month: +array[1] - 1,
    date: +array[0],
    year: +array[2],
    hours: 0
  })
}

// transforma um tempo (09:20) em um objeto Date
export const FormatTimeToAmerican = (value: string) => {
  const array = String(value).split(':')
  return subHours(
    set(new Date(), {
      hours: +array[0],
      minutes: +array[1]
    }),
    3
  )
}

// Jan 20, 2021
export const FileDateFormat = (date: Date): string =>
  ReturnIfIsValid(date, () =>
    format(date, "MMM' 'dd', 'yyyy", {
      locale: ptBR
    })
  )

// 18 jan de 2022 - 17:54
export const ComplexDetailsDate = (date: Date): string =>
  ReturnIfIsValid(date, () =>
    format(date, "d LLL 'de' y '-' k':'mm", { locale: ptBR })
  )

// 2021-01-25
export const FormatToSystem = (date: Date) => {
  if (!isValid(date)) {
    return 'Data inválida'
  }

  return format(date, 'yyyy-MM-dd')
}

// receive two date objetcts, 1 to date (d/m/y) and 1 to time
export const ConcatDates = (date: Date, time: Date): Date => {
  const hours = getHours(time)
  const minutes = getMinutes(time)

  return set(date, {
    hours,
    minutes
  })
}

// 9 de março de 2022
export const LongDayPattern = (date: Date) =>
  format(date, "d LLLL 'de' y", { locale: ptBR })

// quarta-feira, 9 de março de 2022
export const WeekDayPattern = (date: Date) =>
  format(date, "EEEE', 'd LLLL 'de' y", { locale: ptBR })

const parseTime = (hour: number) => `0${hour}`.slice(-2)

export const TimeRangePattern = (date: Date, increment = 1) => {
  const incremented = addHours(date, increment)

  const hours = getHours(date)
  const minutes = getMinutes(date)
  const until = getHours(incremented)

  return `${parseTime(hours)}:${parseTime(minutes)} às ${parseTime(
    until
  )}:${parseTime(minutes)}`
}

// quarta-feira, 9 de março de 2022 - 9:00 até 10:00
export const AllDayPattern = (date: Date) =>
  format(date, "EEEE', 'd LLLL 'de' y '-' k':'mm", { locale: ptBR })
